export type Post = {
  link: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    link: "https://first-steps-into-the-world-of-ai-magic.hashnode.dev/understanding-retrieval-augmented-generation-your-ai-assistants-secret-superpower",
    title: "Understanding Retrieval Augmented Generation",
    excerpt:
      "Dive into the world of Retrieval-Augmented Generation (RAG) to uncover the powerful technique that allows your AI assistants to move beyond their training data and provide grounded, up-to-date answers.",
    date: "2025-08-20",
    tags: ["RAG", "Message Queues", "Architecture"],
    content: `Queues are fantastic for buffering work...\n\nWe explore RabbitMQ vs. Redis Streams, idempotency keys, and dead-letter strategies.`,
  },
  {
    link: "https://first-steps-into-the-world-of-ai-magic.hashnode.dev/introduction-to-gen-ai-for-developers-your-first-steps-into-the-world-of-ai-magic",
    title: "Introduction to Gen AI for Developers",
    excerpt:
      "Start your journey into the future of development with this essential guide, covering the fundamentals of Generative AI and how to integrate its magic into your own projects.",
    date: "2025-06-02",
    tags: ["React", "Performance"],
    content: `From memoization to Suspense, here are the techniques I use daily...`,
  },
];
