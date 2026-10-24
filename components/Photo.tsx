import Image from "next/image";
import Link from "next/link";
import type { StockPhoto } from "@/lib/photos";

const ratios = {
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "3/2": "aspect-[3/2]",
} as const;

export function Photo({
  photo,
  ratio = "4/3",
  priority = false,
  sizes = "(min-width: 768px) 40vw, 100vw",
  className = "",
  credit = true,
}: {
  photo: StockPhoto;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
  credit?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-sand ${ratios[ratio]}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      {credit ? (
        <figcaption className="mt-2 text-xs text-muted">
          Photo by{" "}
          <Link
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Unsplash
          </Link>
        </figcaption>
      ) : null}
    </figure>
  );
}