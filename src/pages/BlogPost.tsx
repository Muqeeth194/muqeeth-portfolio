import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>{post.title} — Muqeeth Mohammad</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          articleBody: post.content,
          author: { "@type": "Person", name: "Muqeeth Mohammad" },
        })}</script>
      </Helmet>
      <article className="prose prose-neutral max-w-none">
        <h1>{post.title}</h1>
        <p className="text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
        <hr />
        <div>
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
