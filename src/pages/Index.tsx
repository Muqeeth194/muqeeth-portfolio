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
        <title>Muqeeth Mohammad — Web Developer Portfolio</title>
        <meta
          name="description"
          content="Full‑stack web developer portfolio. Explore projects, technologies, timeline, and articles."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muqeeth Mohammad",
            jobTitle: "Web Developer",
            url: "/",
            sameAs: [
              "https://github.com/", // update as needed
            ],
            knowsAbout: [
              "Docker",
              "Express.js",
              "JavaScript",
              "Message Queues",
              "MongoDB",
              "MySQL",
              "NextJS",
              "NodeJS",
              "Python",
              "React",
              "Redux",
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
