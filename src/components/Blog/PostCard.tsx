import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import type { Post } from "@/data/posts";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="border rounded-lg p-5 hover-scale animate-enter">
      <header className="mb-2">
        <h3 className="text-xl font-semibold">
          <Link
            className="story-link"
            to={`${post.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </Link>
        </h3>
      </header>
      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
      <div className="flex items-center text-xs text-muted-foreground">
        <CalendarDays className="mr-2 h-4 w-4" />{" "}
        {new Date(post.date).toLocaleDateString()}
      </div>
    </article>
  );
};

export default PostCard;
