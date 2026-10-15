import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
