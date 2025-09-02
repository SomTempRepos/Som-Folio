import { Button } from "./ui/button";
import {
  Home,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
  scrollToContact: () => void;
}

export default function Navbar({ 
  isDarkMode, 
  toggleTheme, 
  scrollToSection, 
  scrollToContact 
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-lg backdrop-blur-lg bg-white/10 dark:bg-black/20">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-primary">$</span>
            <span className="text-lg">Som.dev</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToContact}
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
  );
}