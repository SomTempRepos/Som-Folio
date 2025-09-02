import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Save, 
  Download, 
  Upload, 
  FileText, 
  Code2, 
  Trash2, 
  Copy,
  RotateCcw,
  Settings,
  Moon,
  Sun
} from 'lucide-react';

const MonacoNotepad = () => {
  const [code, setCode] = useState('// Welcome to Code Notepad\n// Start typing your code here...\n\nconsole.log("Hello, World!");');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dark');
  const [fileName, setFileName] = useState('untitled');
  const [savedFiles, setSavedFiles] = useState([]);
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState(null);
  const fileInputRef = useRef(null);

  // Load saved files from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('monaco-saved-files');
    if (saved) {
      setSavedFiles(JSON.parse(saved));
    }
    
    // Load last session
    const lastSession = localStorage.getItem('monaco-last-session');
    if (lastSession) {
      const session = JSON.parse(lastSession);
      setCode(session.code || code);
      setLanguage(session.language || language);
      setFileName(session.fileName || fileName);
    }
  }, []);

  // Auto-save functionality
  useEffect(() => {
    if (autoSave) {
      const saveTimer = setTimeout(() => {
        saveToLocalStorage();
      }, 2000); // Auto-save every 2 seconds

      return () => clearTimeout(saveTimer);
    }
  }, [code, language, fileName, autoSave]);

  // Save current session
  const saveToLocalStorage = () => {
    const session = {
      code,
      language,
      fileName,
      timestamp: Date.now()
    };
    localStorage.setItem('monaco-last-session', JSON.stringify(session));
    setLastSaved(new Date().toLocaleTimeString());
  };

  // Save file to saved files list
  const saveFile = () => {
    const newFile = {
      id: Date.now().toString(),
      name: fileName || 'untitled',
      language,
      code,
      timestamp: Date.now()
    };

    const updatedFiles = [...savedFiles.filter(f => f.name !== newFile.name), newFile];
    setSavedFiles(updatedFiles);
    localStorage.setItem('monaco-saved-files', JSON.stringify(updatedFiles));
    setLastSaved(new Date().toLocaleTimeString());
  };

  // Load file from saved files
  const loadFile = (file: any) => {
    setCode(file.code);
    setLanguage(file.language);
    setFileName(file.name);
  };

  // Delete saved file
  const deleteFile = (fileId) => {
    const updatedFiles = savedFiles.filter(f => f.id !== fileId);
    setSavedFiles(updatedFiles);
    localStorage.setItem('monaco-saved-files', JSON.stringify(updatedFiles));
  };

  // Download file to filesystem
  const downloadFile = () => {
    const fileExtensions = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      csharp: 'cs',
      php: 'php',
      go: 'go',
      rust: 'rs',
      html: 'html',
      css: 'css',
      json: 'json',
      xml: 'xml',
      markdown: 'md',
      yaml: 'yml',
      sql: 'sql'
    };

    const extension = fileExtensions[language] || 'txt';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName || 'untitled'}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Upload file from filesystem
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCode(content);
        setFileName(file.name.split('.')[0]);
        
        // Auto-detect language based on file extension
        const extension = file.name.split('.').pop().toLowerCase();
        const languageMap = {
          'js': 'javascript',
          'ts': 'typescript',
          'py': 'python',
          'java': 'java',
          'cpp': 'cpp',
          'cs': 'csharp',
          'php': 'php',
          'go': 'go',
          'rs': 'rust',
          'html': 'html',
          'css': 'css',
          'json': 'json',
          'xml': 'xml',
          'md': 'markdown',
          'yml': 'yaml',
          'yaml': 'yaml',
          'sql': 'sql'
        };
        
        if (languageMap[extension]) {
          setLanguage(languageMap[extension]);
        }
      };
      reader.readAsText(file);
    }
  };

  // Copy code to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Clear editor
  const clearEditor = () => {
    if (confirm('Are you sure you want to clear the editor?')) {
      setCode('');
      setFileName('untitled');
    }
  };

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'csharp', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' },
    { value: 'markdown', label: 'Markdown' },
    { value: 'yaml', label: 'YAML' },
    { value: 'sql', label: 'SQL' }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-background border border-border rounded px-2 py-1 text-sm w-32"
              placeholder="File name"
            />
          </div>

          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={saveFile}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          
          <Button variant="outline" size="sm" onClick={downloadFile}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>

          <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".txt,.js,.ts,.py,.java,.cpp,.cs,.php,.go,.rs,.html,.css,.json,.xml,.md,.yml,.yaml,.sql"
          />

          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>

          <Button variant="outline" size="sm" onClick={clearEditor}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`w-full h-full p-4 resize-none border-none outline-none font-mono text-sm leading-relaxed ${
              theme === 'dark' 
                ? 'bg-slate-900 text-green-400' 
                : 'bg-white text-slate-800'
            }`}
            style={{
              fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace',
              lineHeight: '1.5',
              tabSize: 2
            }}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
          
          {/* Status Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 text-xs text-muted-foreground flex justify-between">
            <div className="flex items-center space-x-4">
              <span>Lines: {code.split('\n').length}</span>
              <span>Characters: {code.length}</span>
              <span>Language: {language}</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                  className="rounded"
                />
                <span>Auto-save</span>
              </label>
              {lastSaved && <span>Last saved: {lastSaved}</span>}
            </div>
          </div>
        </div>

        {/* Saved Files Sidebar */}
        <div className="w-64 border-l border-border bg-card overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-4 flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Saved Files
            </h3>
            
            {savedFiles.length === 0 ? (
              <p className="text-sm text-muted-foreground">No saved files</p>
            ) : (
              <div className="space-y-2">
                {savedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="p-2 border border-border rounded hover:bg-accent cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div onClick={() => loadFile(file)} className="flex-1">
                        <div className="font-medium text-sm truncate">{file.name}</div>
                        <div className="text-xs text-muted-foreground">{file.language}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(file.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFile(file.id);
                        }}
                        className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonacoNotepad;