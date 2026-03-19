import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import PostCard from "@/components/Blog/PostCard";
import { posts } from "@/data/posts";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Muqeeth Mohammad — Software Development Engineer</title>
        <meta
          name="description"
          content="Software Development Engineer with 6+ years of experience building scalable full-stack applications, distributed systems, and AI-powered backends. Specialized in LLM integration, RAG pipelines, and agentic workflows."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "#",
            "@type": "Person",
            name: "Muqeeth Mohammad",
            jobTitle: "Software Development Engineer",
            url: "/",
            email: "muqeeth44@gmail.com",
            sameAs: [
              "https://github.com/muqeeth194",
              "https://linkedin.com/in/muqeethahmed",
              "https://muqeeth194.github.io/muqeeth-portfolio/",
            ],
            knowsAbout: [
              "JavaScript",
              "TypeScript",
              "Python",
              "React",
              "Next.js",
              "Redux",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "BullMQ",
              "Kafka",
              "Docker",
              "MongoDB",
              "MySQL",
              "Redis",
              "Neo4j",
              "Qdrant",
              "LangChain",
              "LangGraph",
              "RAG",
              "Agentic Workflows",
              "AWS",
              "Microservices",
              "CI/CD",
            ],
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Indiana Wesleyan University",
                description:
                  "Master of Science in Computer Information Systems - AI Specialization",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Osmania University",
                description: "Bachelor of Science in Computer Science",
              },
            ],
          })}
        </script>
      </Helmet>
      <Hero />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <section className="container mx-auto px-4 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.slice(0, 2).map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
