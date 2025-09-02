import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Mail,
  Terminal,
  Linkedin,
  Github,
} from "lucide-react";
import { rotatingTexts } from "../data/portfolioData";

interface HeroSectionProps {
  currentTextIndex: number;
  navigateToLab?: () => void;
}

export default function HeroSection({ currentTextIndex, navigateToLab }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl tracking-tight">
            <span className="text-primary">$</span> Somnath
            Jha
            <span className="cursor md:text-6xl tracking-tight"></span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Backend Developer & Systems Engineer
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground">
              Software engineer fluent in embedded sorcery,
              backend alchemy, and Linux whispering.
            </p>
            <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors">
              <p className="text-sm md:text-base text-muted-foreground/80 transition-opacity duration-500 min-h-[3rem] flex items-center justify-center">
                {rotatingTexts[currentTextIndex]}
              </p>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 justify-center items-center">
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-accent hover:text-primary"
              onClick={() =>
                window.open(
                  "mailto:somnath.jha.official@gmail.com",
                  "_blank",
                )
              }
            >
              <Mail className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-accent hover:text-primary"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/somnath-jhaa",
                  "_blank",
                )
              }
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-accent hover:text-primary"
              onClick={() =>
                window.open(
                  "https://github.com/somnathjha007",
                  "_blank",
                )
              }
            >
              <Github className="h-6 w-6" />
            </Button>
          </div>

          {/* LAB Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium border-2 border-primary hover:border-primary/80 transition-all duration-300 hover:scale-105"
              onClick={() => {
                console.log('Lab button clicked!'); // Debug log
                if (navigateToLab) {
                  console.log('Using navigateToLab prop'); // Debug log
                  navigateToLab();
                } else if ((window as any).navigateTo) {
                  console.log('Using global navigateTo'); // Debug log
                  (window as any).navigateTo('lab');
                } else {
                  console.log('No navigation function available'); // Debug log
                }
              }}
            >
              <Terminal className="mr-2 h-5 w-5" />
              LAB
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}