import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ quote, attribution, context }: Testimonial) {
  return (
    <figure className="border border-line bg-paper p-6">
      <blockquote>
        <p className="font-display text-xl leading-snug text-ink">{quote}</p>
      </blockquote>
      <figcaption className="mt-5 text-sm text-muted">
        <span className="font-semibold text-bark">{attribution}</span>
        {context ? ` · ${context}` : null}
      </figcaption>
    </figure>
  );
}
