import { Helmet } from "react-helmet-async";
import PostCard from "@/components/Blog/PostCard";
import { posts } from "@/data/posts";

const Blog = () => {
  const articleLd = posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
    url: `/blog/${p.slug}`,
  }));

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Blog — Muqeeth Mohammad</title>
        <meta name="description" content="Articles on web development, React, Node.js, and architecture." />
        <link rel="canonical" href="/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          blogPost: articleLd,
        })}</script>
      </Helmet>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
