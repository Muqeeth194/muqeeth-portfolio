import React from "react";

type ExperienceProps = {
  compact?: boolean;
};

const Experience = ({ compact = false }: ExperienceProps) => {
  const timeline: Array<
    | { year: string; title: string; desc: string }
    | { kind: "summary"; desc: string }
  > = [
    {
      year: "2025",
      title: "Full‑stack Excellence",
      desc: "Delivering reliable, scalable user experiences end‑to‑end.",
    },
    {
      kind: "summary",
      desc: "Evolved into a senior-level Software Development Engineer, delivering end-to-end user experiences. I engineered high-performance APIs (Node.js) and optimized databases (MongoDB), cutting response times by up to 50%. Drove team excellence via Docker, 50+ code reviews, and Agile practices, while also beginning an M.S. in Computer Info Systems (AI Specialization) to deepen expertise.",
    },
    {
      year: "2020",
      title: "Building & Scaling",
      desc: "From fundamentals to complex, high-performance applications.",
    },
    {
      kind: "summary",
      desc: "Grew from foundational skills to architecting complex, practical applications within Accenture. I took on advanced projects using React, Next.js, and modern backend architectures, while exploring database optimization and integrating AI/GenAI features into internal tools.",
    },
    {
      year: "2018",
      title: "Foundations",
      desc: "Started full‑stack journey; core JS, Git, and web fundamentals.",
    },
    {
      kind: "summary",
      desc: "Joined Accenture after graduating with a B.S. in Computer Science. My initial focus was on mastering core JavaScript, version control with Git, and essential web fundamentals, laying the groundwork for my full-stack career within the company.",
    },
  ];
  return (
    <section className={compact ? "" : "container mx-auto px-4 py-12"}>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p className="text-muted-foreground mt-1">
          Accenture — Full‑stack Engineering (2018–2025)
        </p>
      </header>

      <div className="rounded-lg border bg-card text-card-foreground p-6 shadow-glow animate-fade-in">
        <ol className="relative">
          {timeline.map((item: any, idx) => {
            const isSummary = "kind" in item && item.kind === "summary";
            return (
              <li
                key={item.year ?? `summary-${idx}`}
                className="relative pl-8 pb-6 last:pb-0"
              >
                {!isSummary && (
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                )}
                {idx !== timeline.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-1 top-4 bottom-0 w-px bg-border"
                  />
                )}
                {!isSummary ? (
                  <>
                    <time className="text-sm font-mono text-muted-foreground">
                      {item.year}
                    </time>
                    <h3 className="mt-1 font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
