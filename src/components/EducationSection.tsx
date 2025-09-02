import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";
import { education, certificates } from "../data/portfolioData";

export default function EducationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div className="w-full">
            <h2 className="text-xl md:text-2xl mb-8">
              <span className="text-primary">class</span>{" "}
              Education{" "}
              <span className="text-primary">{"{"}</span>
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-colors w-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg break-words">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-8 break-words">
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
          <div className="w-full">
            <h2 className="text-xl md:text-2xl mb-8">
              <span className="text-primary">class</span>{" "}
              Certifications{" "}
              <span className="text-primary">{"{"}</span>
            </h2>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-colors w-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-3 flex-1 min-w-0">
                        <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg break-words">
                            {cert.title}
                          </h3>
                          <p className="text-muted-foreground break-words">
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
  );
}