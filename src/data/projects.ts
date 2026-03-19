import twcImg from "@/assets/projects/twc.jpg";
import agentImg from "@/assets/projects/agent.jpg";
import studymateImg from "@/assets/projects/studymate.jpg";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "TheWhiskCorner",
    title: "TheWhiskCorner",
    description:
      "Mobile-first e-commerce platform built with Next.js and Tailwind CSS featuring infinite-scroll product galleries, a multi-step custom quote system, and full-stack auth with role-based access control and dynamic admin dashboards.",
    tags: ["Next.js", "React Query", "Node.js", "MongoDB", "Tailwind CSS"],
    image: twcImg,
    githubUrl: "https://github.com/Muqeeth194/thewhiskcorner",
    liveUrl: "https://www.thewhiskcorner.com/",
  },
  {
    slug: "StudyMate-AI",
    title: "StudyMate AI",
    description:
      "Agentic learning platform powered by LangGraph and GPT-4o that generates real-time, personalized weekly curriculums from live web data, with context-aware quiz generation, structured JSON validation via Zod, and a React/Recharts progress dashboard.",
    tags: ["LangGraph", "GPT-4o", "Next.js", "MongoDB", "Zod", "Recharts"],
    image: studymateImg,
    githubUrl: "https://github.com/Muqeeth194/studymate",
    liveUrl: "https://studymate-sigma-six.vercel.app",
  },
  {
    slug: "Agentic-React-Code-Generator",
    title: "React Code Agent",
    description:
      "Cursor-style IDE agent utilizing LangChain and LangGraph to create and iteratively optimize React applications through a sophisticated, multi-step agentic workflow.",
    tags: ["IDE", "MongoDB", "Docker"],
    image: agentImg,
    githubUrl: "https://github.com/Muqeeth194/AI-Agent",
  },
];
