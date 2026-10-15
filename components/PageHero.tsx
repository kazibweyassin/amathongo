import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/schema";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
}) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="page-wrap py-12 md:py-16">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bark">{lede}</p> : null}
      </div>
    </header>
  );
}
