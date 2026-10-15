import Link from "next/link";
import { Photo } from "@/components/Photo";
import { servicePhotos } from "@/lib/photos";

export function ServiceCard({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description?: string;
}) {
  const photo = servicePhotos[slug];

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors hover:border-moss">
      {photo ? (
        <Photo
          photo={photo}
          ratio="16/9"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="transition duration-700 group-hover:scale-[1.03]"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-ink">
          <Link href={`/services/${slug}`} className="no-underline hover:underline">
            {title}
          </Link>
        </h3>
        {description ? <p className="mt-3 flex-1 leading-relaxed text-bark">{description}</p> : null}
        <Link href={`/services/${slug}`} className="link mt-auto pt-5 text-sm font-semibold">
          Learn more
        </Link>
      </div>
    </article>
  );
}
