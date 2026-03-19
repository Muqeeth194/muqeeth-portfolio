import { skillCategories } from "@/data/skills";

type SkillsProps = {
  compact?: boolean;
};

const Skills = ({ compact = false }: SkillsProps) => {
  return (
    <section className={compact ? "" : "container mx-auto px-4 py-8"}>
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
      </header>

      <div className="rounded-xl border bg-card text-card-foreground shadow-glow animate-fade-in divide-y divide-border">
        {skillCategories.map((category, i) => (
          <div
            key={category.label}
            className="flex flex-wrap items-start gap-3 px-5 py-3.5"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="w-44 shrink-0 text-[16px] font-mono font-medium text-muted-foreground uppercase tracking-wider pt-0.5">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[16px] font-mono text-foreground/80 transition-colors hover:bg-primary/8 hover:border-primary/30 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
