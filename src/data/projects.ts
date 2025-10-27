import chatImg from "@/assets/projects/chat-app.jpg";
import apiImg from "@/assets/projects/ecommerce-api.jpg";
import cicdImg from "@/assets/projects/cicd-pipeline.jpg";

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
      "Responsive and dynamic front-end using Next.js, delivering a seamless user experience for browsing and booking custom cakes on TheWhiskCorner platform.",
    tags: ["React", "NodeJS", "MongoDB", "WebSockets"],
    image: apiImg,
    // githubUrl: "#",
    // liveUrl: "#",
  },
  {
    slug: "Agentic-React-Code-Generator",
    title: "React Code Agent",
    description:
      "Cursor-style IDE agent utilizing LangChain and LangGraph to create and iteratively optimize React applications through a sophisticated, multi-step agentic workflow.",
    tags: ["IDE", "MongoDB", "Docker"],
    image: cicdImg,
    githubUrl: "https://github.com/Muqeeth194/AI-Agent",
  },
  {
    slug: "RAG",
    title: "RAG Chat Application",
    description:
      "A RAG (Retrieval-Augmented Generation) application that allows users to upload PDFs, then chat with an AI about the document's content.",
    tags: ["Docker", "Message Queues", "NodeJS"],
    image: chatImg,
    githubUrl: "https://github.com/Muqeeth194/RAG-Chat-Application",
  },
];
