import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Copy, 
  Type, 
  RotateCcw, 
  Hash, 
  AlignLeft,
  Scissors,
  Download,
  Upload
} from 'lucide-react';

const TextUtility = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const updateCounts = (text: string) => {
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    setCharCount(text.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    updateCounts(text);
  };

  const textOperations = {
    uppercase: () => inputText.toUpperCase(),
    lowercase: () => inputText.toLowerCase(),
    capitalize: () => inputText.replace(/\b\w/g, l => l.toUpperCase()),
    reverse: () => inputText.split('').reverse().join(''),
    removeSpaces: () => inputText.replace(/\s+/g, ''),
    removeLineBreaks: () => inputText.replace(/\n/g, ' '),
    sortLines: () => inputText.split('\n').sort().join('\n'),
    removeDuplicateLines: () => [...new Set(inputText.split('\n'))].join('\n'),
    base64Encode: () => btoa(inputText),
    base64Decode: () => {
      try {
        return atob(inputText);
      } catch {
        return 'Invalid Base64 input';
      }
    },
    urlEncode: () => encodeURIComponent(inputText),
    urlDecode: () => {
      try {
        return decodeURIComponent(inputText);
      } catch {
        return 'Invalid URL encoding';
      }
    }
  };

  const performOperation = (operation: keyof typeof textOperations) => {
    const result = textOperations[operation]();
    setOutputText(result);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const downloadAsFile = () => {
    const element = document.createElement('a');
    const file = new Blob([outputText || inputText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'processed-text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result as string;
      setInputText(text);
      updateCounts(text);
    };

    reader.onerror = () => {
      console.error("File reading error:", reader.error);
    };

    reader.readAsText(file);
  };

  return (
    <div className="w-full p-6 space-y-6">
      <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-6">
          <Type className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Text Utility Tool</h2>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <Upload className="h-4 w-4" />
            <span className="text-sm">Upload Text File</span>
            <input
              type="file"
              accept=".txt,.md,.json,.csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Input Text</h3>
              <div className="text-sm text-muted-foreground space-x-4">
                <span>Words: {wordCount}</span>
                <span>Characters: {charCount}</span>
              </div>
            </div>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter or paste your text here..."
              className="w-full h-48 p-3 bg-background/80 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="flex space-x-2">
              <Button 
                onClick={() => setInputText('')}
                variant="outline"
                size="sm"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Clear
              </Button>
              <Button 
                onClick={() => copyToClipboard(inputText)}
                variant="outline"
                size="sm"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Output Text</h3>
            <textarea
              value={outputText}
              readOnly
              placeholder="Processed text will appear here..."
              className="w-full h-48 p-3 bg-muted/80 border border-border rounded-md resize-none focus:outline-none"
            />
            <div className="flex space-x-2">
              <Button 
                onClick={() => copyToClipboard(outputText)}
                variant="outline"
                size="sm"
                disabled={!outputText}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button 
                onClick={downloadAsFile}
                variant="outline"
                size="sm"
                disabled={!outputText && !inputText}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Operations */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Text Operations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <Button 
              onClick={() => performOperation('uppercase')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              UPPERCASE
            </Button>
            <Button 
              onClick={() => performOperation('lowercase')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              lowercase
            </Button>
            <Button 
              onClick={() => performOperation('capitalize')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Capitalize
            </Button>
            <Button 
              onClick={() => performOperation('reverse')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Reverse
            </Button>
            <Button 
              onClick={() => performOperation('removeSpaces')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              No Spaces
            </Button>
            <Button 
              onClick={() => performOperation('removeLineBreaks')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Single Line
            </Button>
            <Button 
              onClick={() => performOperation('sortLines')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Sort Lines
            </Button>
            <Button 
              onClick={() => performOperation('removeDuplicateLines')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Remove Duplicates
            </Button>
            <Button 
              onClick={() => performOperation('base64Encode')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Base64 Encode
            </Button>
            <Button 
              onClick={() => performOperation('base64Decode')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Base64 Decode
            </Button>
            <Button 
              onClick={() => performOperation('urlEncode')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              URL Encode
            </Button>
            <Button 
              onClick={() => performOperation('urlDecode')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              URL Decode
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TextUtility;