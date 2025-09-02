import { useState, useEffect } from "react";
import "./styles/globals.css";
import { rotatingTexts } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Lab from "./pages/lab";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState<'home' | 'lab'>('home');

  // Initialize page from URL and theme from localStorage
  useEffect(() => {
    // Check URL for page parameter
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    if (pageParam === 'lab') {
      setCurrentPage('lab');
    } else if (window.location.pathname === '/lab') {
      setCurrentPage('lab');
    }

    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
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
  }, []);

  // Make navigation available globally and handle URL updates
  useEffect(() => {
    (window as any).navigateTo = (page: 'home' | 'lab') => {
      console.log('Global navigation called with:', page); // Debug log
      setCurrentPage(page);
      
      // Update URL without page refresh
      if (page === 'lab') {
        window.history.pushState(null, '', '?page=lab');
      } else {
        window.history.pushState(null, '', window.location.pathname);
      }
    };
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
      if (pageParam === 'lab') {
        setCurrentPage('lab');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  //Dark/Light Mode Theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation function - opens LAB in new tab
  const navigateToLab = () => {
    const labUrl = `${window.location.origin}${window.location.pathname}?page=lab`;
    window.open(labUrl, '_blank');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', window.location.pathname);
  };

  // Update document title and favicon based on current page
  useEffect(() => {
    if (currentPage === 'lab') {
      document.title = 'Som.LAB - Experimental Digital Playground';
      // Update favicon for lab page
      let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      // Use a terminal icon for lab (you can replace with actual favicon)
      favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300ff41"><path d="M2 3h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h20V5H2zm2 2h2v2H4V7zm4 0h2v2H8V7zm-4 4h2v2H4v-2zm4 0h8v2H8v-2z"/></svg>';
    } else {
      document.title = 'Som.dev - Backend Developer Portfolio';
      // Reset to default favicon
      let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (favicon) {
        favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300ff41"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>';
      }
    }
  }, [currentPage]);

  // Render Portfolio page
  return (
    <div
      className={`${isDarkMode ? "dark" : ""} min-h-screen bg-background text-foreground`}
    >
      {/* Subtle code background */}
      <div className="fixed inset-0 code-bg opacity-30 pointer-events-none z-0" />

      <Navbar 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        scrollToContact={scrollToContact}
      />

      <div className="relative z-10 pt-20">
        <HeroSection 
          currentTextIndex={currentTextIndex} 
          navigateToLab={navigateToLab}
        />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}