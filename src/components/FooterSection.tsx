export default function FooterSection() {
  return (
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
  );
}