import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
} from "lucide-react";
import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
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
                      onClick={() =>
                        project.github &&
                        window.open(
                          project.github,
                          "_blank",
                        )
                      }
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

                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  {project.description
                    .split(".")
                    .map(
                      (point, idx) =>
                        point.trim() && (
                          <li key={idx}>{point.trim()}</li>
                        ),
                    )}
                </ul>

                <h4 className="text-lg  mt-4">
                  Tech Stack:
                </h4>
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
  );
}