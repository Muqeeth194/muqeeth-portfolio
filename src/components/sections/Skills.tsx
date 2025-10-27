import { skills } from "@/data/skills";

type SkillsProps = {
  compact?: boolean;
};

const Skills = ({ compact = false }: SkillsProps) => {
  return (
    <section className={compact ? "" : "container mx-auto px-4 py-12"}>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Technologies</h2>
      </header>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((s, i) => (
          <div
            key={s}
            className="group relative overflow-hidden rounded-xl border bg-card/60 supports-[backdrop-filter]:bg-card/40 backdrop-blur-sm p-4 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40 animate-enter"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="font-mono text-sm">{s}</span>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
