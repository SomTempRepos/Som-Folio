import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import TextUtility from "../components/Lab/TextUtils";
import MonacoNotepad from "../components/Lab/MonacoEditor";

import { useState, useEffect } from "react";
import "../styles/globals.css";
import {
  ExternalLink,
  Github,
  Mail,
  Code,
  Database,
  Server,
  Terminal,
  Cpu,
  Bot,
  Home,
  Sun,
  Moon,
} from "lucide-react";

export default function Lab() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Brewing AI elixirs with TensorFlow and PyTorch—sometimes it's wizardry, sometimes it's mad science, occasionally it even obeys.",
    "Summoning neural networks like Dumbledore conjures Fawkes, with TensorFlow wands and PyTorch potions at my command.",
    "Cooking up AI models in the lab—Breaking Bad style—but instead of blue meth, it's pure deep learning magics.",
    "AI whisperer: teaching GPUs to levitate data, making neural nets obey like Hogwarts first-years in detention.",
  ];

  const [activeUtility, setActiveUtility] = useState<'text-utility' | 'notepad' | null>(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + H to go home
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        const homeUrl = `${window.location.origin}${window.location.pathname}`;
        window.open(homeUrl, '_blank');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save theme to localStorage and update when changed
  useEffect(() => {
    localStorage.setItem(
      "theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  // Rotate through AI-themed texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length,
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  //Dark/Light Mode Theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} min-h-screen bg-background text-foreground`}
    >
      {/* Subtle code background */}
      <div className="fixed inset-0 code-bg opacity-30 pointer-events-none z-0" />

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-lg backdrop-blur-lg bg-white/10 dark:bg-black/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-primary">$</span>
              <span className="text-lg">Som.dev</span>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => {
                  const homeUrl = `${window.location.origin}${window.location.pathname}`;
                  window.open(homeUrl, '_blank');
                }}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const homeUrl = `${window.location.origin}${window.location.pathname}#contact`;
                  window.open(homeUrl, '_blank');
                }}
                className="border-white/30 hover:bg-white/20 hover:border-primary/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-white/20 hover:text-primary"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl tracking-tight">
              <span className="text-primary">$</span> Som.LAB
              <span className="cursor"></span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Experimental Digital Playground
            </h2>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground/60">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Standalone Lab Environment</span>
              <span className="text-primary">|</span>
              <span>Bookmark this page</span>
            </div>
            <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors max-w-2xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground/80 transition-opacity duration-500 min-h-[3rem] flex items-center justify-center">
                {rotatingTexts[currentTextIndex]}
              </p>
            </Card>
          </div>
        </section>

        {/* Utilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              <span className="text-primary">def</span>{" "}
              developer_tools
              <span className="text-primary">():</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className="bg-card border-border p-6 hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setActiveUtility("text-utility")}
              >
                <div className="space-y-3">
                  <Code className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg text-center">
                    Text Utility
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Transform text with encoding, formatting,
                    and manipulation tools
                  </p>
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline">
                      Open Tool
                    </Button>
                  </div>
                </div>
              </Card>

              <Card
                className="bg-card border-border p-6 hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setActiveUtility("notepad")}
              >
                <div className="space-y-3">
                  <Terminal className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg text-center">
                    Monaco Notepad
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Code editor with syntax highlighting and
                    auto-save
                  </p>
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline">
                      Open Tool
                    </Button>
                  </div>
                </div>
              </Card>
          </div>

          {/* Utility Modal/Overlay */}
          {activeUtility && (
              <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="w-full max-w-7xl h-full max-h-[85vh] bg-background rounded-lg border border-border overflow-hidden shadow-2xl flex flex-col">
                  <div className="flex justify-between items-center p-4 border-b border-border bg-card/50 backdrop-blur-sm shrink-0">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      {activeUtility === "text-utility" && (
                        <>
                          <Code className="h-5 w-5 text-primary" />
                          <span>Text Utility Tool</span>
                        </>
                      )}
                      {activeUtility === "notepad" && (
                        <>
                          <Terminal className="h-5 w-5 text-primary" />
                          <span>Monaco Code Editor</span>
                        </>
                      )}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveUtility(null)}
                        className="hover:bg-accent"
                      >
                        Minimize
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveUtility(null)}
                        className="hover:bg-destructive hover:text-destructive-foreground"
                      >
                        ✕
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {activeUtility === "text-utility" && (
                      <div className="h-full overflow-auto">
                        <TextUtility />
                      </div>
                    )}
                    {activeUtility === "notepad" && (
                      <div className="h-full">
                        <MonacoNotepad />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              <span className="text-primary">def</span>{" "}
              future_tools
              <span className="text-primary">():</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <Code className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg text-center">
                    Code Formatter
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Multi-language code formatter with custom
                    styling rules
                  </p>
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <Database className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg text-center">
                    SQL Query Builder
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Visual query builder with real-time preview
                    and optimization
                  </p>
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <Server className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg text-center">
                    API Tester
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Comprehensive API testing suite with
                    automated reporting
                  </p>
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-colors">
              <div className="text-center space-y-4">
                <Terminal className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-2xl">
                  <span className="text-primary">while</span>{" "}
                  (coding){" "}
                  <span className="text-primary">{"{"}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This lab is constantly evolving. New
                  experiments, tools, and AI projects are being
                  added regularly. Check back soon for more
                  interactive demos and utilities!
                </p>
                <div className="pt-4">
                  <span className="text-primary">{"}"}</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Lab Footer with keyboard shortcuts */}
        <section className="py-8 px-4 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                <span className="text-primary">$</span> Som.LAB v1.0 - Independent Environment
              </div>
              <div className="text-xs text-muted-foreground/60 flex items-center space-x-4">
                <span>Keyboard shortcuts:</span>
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+H</kbd>
                <span>→ Home</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}