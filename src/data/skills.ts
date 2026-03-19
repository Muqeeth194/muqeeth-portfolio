export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    label: "AI / ML",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Agentic Workflows",
      "GenAI",
      "NLP",
    ],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "BullMQ", "Kafka", "Docker"],
  },
  {
    label: "Data & Databases",
    skills: ["MongoDB", "MySQL", "Redis", "Neo4j", "Qdrant", "NoSQL"],
  },
  {
    label: "Cloud & Infra",
    skills: [
      "AWS ECS/EC2/S3",
      "CloudWatch",
      "CodePipeline",
      "ElastiCache",
      "IAM",
      "CI/CD",
      "Microservices",
      "Git",
    ],
  },
];

export const skills = skillCategories.flatMap(
  (c) => c.skills,
) as readonly string[];
