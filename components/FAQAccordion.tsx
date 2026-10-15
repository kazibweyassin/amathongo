import type { FaqItem } from "@/lib/schema";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-8 border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex items-start justify-between gap-6 py-5 text-left">
            <span className="font-display text-xl text-ink">{item.question}</span>
            <span aria-hidden="true" className="mt-1 text-clay">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </summary>
          <p className="max-w-3xl pb-5 leading-relaxed text-bark">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
