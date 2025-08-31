import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Mail,
  FileText,
  Code,
  Database,
  Server,
  Terminal,
  Cpu,
  Bot,
  Home,
  GraduationCap,
  Award,
  Phone,
  Linkedin,
  Twitter,
  MapPin,
  Globe,
  Sun,
  Moon,
} from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Brewing AI elixirs with TensorFlow and PyTorch—sometimes it's wizardry, sometimes it's mad science, occasionally it even obeys.",
    "Summoning neural networks like Dumbledore conjures Fawkes, with TensorFlow wands and PyTorch potions at my command.",
    "Cooking up AI models in the lab—Breaking Bad style—but instead of blue meth, it's pure deep learning magic.",
    "Casting spells in Python, chanting TensorFlow, and invoking PyTorch—because even Gandalf would approve of well-trained models.",
    "AI whisperer: teaching GPUs to levitate data, making neural nets obey like Hogwarts first-years in detention.",
  ];

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
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
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: "C", icon: Code },
    { name: "C++", icon: Code },
    { name: "Python", icon: Code },
    { name: "GoLang", icon: Code },
    { name: "Linux & LDD", icon: Terminal },
    { name: "Embedded AI", icon: Bot },
    { name: "ESP32/Arduino", icon: Cpu },
    { name: "FastAPI/Flask", icon: Server },
    { name: "MySQL/MongoDB", icon: Database },
  ];

  const projects = [
    {
      title: "ESP32-S3 Image Classifier with TensorFlow Lite",
      description:
        "Built optimized CNN model for real-time inference on ESP32 microcontroller. Reduced model size by 75% through quantization and integrated MobileNet v1 architecture for efficient edge AI deployment.",
      tech: [
        "ESP32",
        "TensorFlow Lite",
        "CNN",
        "MobileNet V1",
        "Quantization",
        "C",
      ],
      github: "#",
      demo: null,
    },
    {
      title: "Edge-to-Cloud Traffic Violation Detection",
      description:
        "Designed real-time violation detection pipeline using YOLOv8 computer vision. Implemented edge device image capture with cloud-based AI inference via Flask API for scalable traffic monitoring.",
      tech: [
        "YOLOv8",
        "Computer Vision",
        "Flask",
        "Python",
        "REST API",
      ],
      github: "#",
      demo: null,
    },
  ];

  const education = [
    {
      degree:
        "B.Tech",
      description: "Electronics and Communication Engineering",
    },
    {
      degree: "Higher Secondary",
      description: "Non-Medical",
    },
  ];

  const certificates = [
    {
      title: "LINUX for Cloud",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-263a3ce9-5cdd-467c-a960-95bf52e237e0/",
    },
    {
      title: "Git and Github Essentials",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-f48b7341-ed77-45ea-9258-4de66d32b90d/",
    },
  ];

  const contactMethods = [
    {
      label: "Email",
      value: "somnath.jha.official@gmail.com",
      icon: Mail,
      link: "mailto:somnath.jha.official@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      label: "LinkedIn",
      value: "/in/somnath-jhaa",
      icon: Linkedin,
      link: "https://linkedin.com/in/somnath-jhaa",
      description: "Professional network",
    },
    {
      label: "GitHub",
      value: "@somnathjha007",
      icon: Github,
      link: "https://github.com/somnathjha007",
      description: "Check out my code",
    },
    {
      label: "Location",
      value: "Pune, India",
      icon: MapPin,
      link: null,
      description: "Open to opportunities",
    },
  ];

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

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} min-h-screen bg-background text-foreground`}
    >
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
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
                className="border-border hover:bg-accent hover:border-primary/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-accent hover:text-primary"
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

      {/* Subtle code background */}
      <div className="fixed inset-0 code-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl tracking-tight">
                <span className="text-primary">$</span> Somnath
                Jha<span className="cursor"></span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Backend Developer & Systems Engineer
              </h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground">
                  Software engineer fluent in embedded sorcery,
                  backend alchemy, and Linux whispering.
                </p>
                <p className="text-sm md:text-base text-muted-foreground/80 transition-opacity duration-500 min-h-[3rem] flex items-center justify-center">
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>

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
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              <span className="text-primary">//</span> Technical
              Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
                  >
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              <span className="text-primary">/* </span>
              Projects <span className="text-primary">*/</span>
            </h2>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <h3 className="text-xl">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border hover:bg-accent"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border hover:bg-accent"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education and Certifications Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-xl md:text-2xl mb-8">
                  <span className="text-primary">class</span>{" "}
                  Education{" "}
                  <span className="text-primary">{"{"}</span>
                </h2>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card
                      key={index}
                      className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <GraduationCap className="h-5 w-5 text-primary mt-1" />
                          <div className="flex-1">
                            <h3 className="text-lg">
                              {edu.degree}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                          {edu.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <span className="text-primary">{"}"}</span>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xl md:text-2xl mb-8">
                  <span className="text-primary">class</span>{" "}
                  Certifications{" "}
                  <span className="text-primary">{"{"}</span>
                </h2>

                <div className="space-y-6">
                  {certificates.map((cert, index) => (
                    <Card
                      key={index}
                      className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start space-x-3 flex-1">
                            <Award className="h-5 w-5 text-primary mt-1" />
                            <div className="flex-1">
                              <h3 className="text-lg">
                                {cert.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {cert.issuer}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {cert.year}
                              </p>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border hover:bg-accent flex-shrink-0"
                            onClick={() =>
                              window.open(cert.link, "_blank")
                            }
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <span className="text-primary">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-12 text-center">
              <span className="text-primary">void</span>{" "}
              contactMe(){" "}
              <span className="text-primary">{"{"}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <IconComponent className="h-5 w-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg">
                            {contact.label}
                          </h3>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-muted-foreground hover:text-primary transition-colors block"
                              target={
                                contact.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                contact.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                        {contact.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <span className="text-primary">printf(</span>
                  "Let's build something amazing together!"
                  <span className="text-primary">);</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  I'm always interested in discussing new
                  opportunities, collaborations, or just
                  chatting about technology.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="text-primary">{"}"}</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span>{" "}
                  Available for new opportunities
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Based in Pune, India • Open to remote work
                </p>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">
                  #!/bin/bash
                </span>{" "}
                • Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}