import { Card } from "./ui/card";
import { contactMethods } from "../data/portfolioData";

export default function ContactSection() {
  return (
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
  );
}