import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
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
  );
}