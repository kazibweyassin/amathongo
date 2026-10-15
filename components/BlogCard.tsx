import Link from "next/link";
import { Photo } from "@/components/Photo";
import { formatDate, type BlogPost } from "@/lib/blog";
import { blogPhotos } from "@/lib/photos";

export function BlogCard({ post }: { post: BlogPost }) {
  const photo = blogPhotos[post.slug];

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-paper">
      {photo ? (
        <Photo
          photo={photo}
          ratio="16/9"
          sizes="(min-width: 768px) 45vw, 100vw"
          className="transition duration-700 group-hover:scale-[1.03]"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true"> · </span>
          {post.author}
        </p>
        <h2 className="mt-3 font-display text-2xl leading-tight text-ink">
          <Link href={`/blog/${post.slug}`} className="no-underline hover:underline">
            {post.h1}
          </Link>
        </h2>
        <p className="mt-3 flex-1 leading-relaxed text-bark">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="link mt-4 text-sm font-semibold">
          Read article
        </Link>
      </div>
    </article>
  );
}
