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
      year: "02/2023 - 12/2024",
      title: "Senior Software Development Engineer",
      desc: "Led AI/ML integrations, distributed systems, and cross-functional delivery.",
    },
    {
      kind: "summary",
      desc: "Engineered RAG pipelines with LangChain/LangGraph and step-back prompting, reducing data retrieval time by 40%. Deployed distributed microservices across 8+ AWS ECS services with ALB/VPC, improving scalability by 60%. Built LLM evaluation frameworks in CI/CD on AWS CodePipeline, cutting validation time by 50% and enabling continuous delivery. Reduced MTTR by 45% and achieved 99.95% uptime via CloudWatch observability and structured incident response. Architected end-to-end API security with OAuth 2.0, JWT, IAM scoping, and AWS Secrets Manager. Mentored 4 engineers and led design reviews, establishing PR and architectural standards org-wide.",
    },
    {
      year: "09/2018 - 02/2023",
      title: "Software Development Engineer",
      desc: "Built scalable full-stack systems handling thousands of concurrent users.",
    },
    {
      kind: "summary",
      desc: "Deployed full-stack apps using Next.js (SSR/SSG), Node.js microservices, and Docker on AWS EC2/S3, sustaining 2,000+ concurrent users at 99.9% uptime. Designed event-driven architecture with Kafka and BullMQ handling 5,000+ messages/hour, cutting latency by 30%. Achieved 50% reduction in API response time through ElastiCache, MongoDB sharding/indexing, and API contract design. Improved Lighthouse scores by 40% and reduced time-to-interactive by 2.5s via code splitting, lazy loading, and SSG. Established Jest/Supertest testing practices achieving 80%+ coverage and reducing production bug rate by 35%.",
    },
  ];

  return (
    <section className={compact ? "" : "container mx-auto px-4 py-12"}>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p className="text-muted-foreground mt-1">
          Accenture — Full‑stack Engineering (2018–2024)
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
