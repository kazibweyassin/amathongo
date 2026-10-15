import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LocationPanel } from "@/components/LocationPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { homeFaqs } from "@/lib/faqs";
import { processSteps } from "@/lib/process";
import { faqJson, localBusinessJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata = buildMetadata({
  title: `${site.tagline} · ${site.name}`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const keptResults = [
  {
    title: "A case won",
    text: "People with a case already before the court have had the work done, and come back when the judgment has gone their way.",
  },
  {
    title: "Political power opened",
    text: "People whose seat or office was blocked have had the ritual done, and kept the position once it opened.",
  },
  {
    title: "Money that can stay",
    text: "Shops that had gone quiet have had the blockage worked on, and kept a livelihood that can hold.",
  },
  {
    title: "A house cleansed",
    text: "Families whose peace had left the compound have had the cleansing and protection done, and felt the home covered again.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJson()} />
      <JsonLd data={faqJson(homeFaqs)} />
      <Hero />
      <section className="bg-moss text-paper" aria-labelledby="results-heading">
        <div className="page-wrap py-14 md:py-16">
          <h2 id="results-heading" className="max-w-xl font-display text-3xl leading-tight md:text-4xl">
            What people keep
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {keptResults.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" aria-labelledby="process-heading">
        <div className="page-wrap">
          <SectionHeading
            id="process-heading"
            eyebrow="The work"
            title="How the healing is done"
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-sm text-clay">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="link mt-8 inline-block font-semibold">
            Read the full process
          </Link>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="testimonials-heading">
        <div className="page-wrap">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="Words from people who have sat with House of Amathongo"
          />
          {testimonials.length > 0 ? (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={`${item.attribution}-${item.quote}`} {...item} />
              ))}
            </div>
          ) : (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bark">
              None are published yet.
            </p>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="page-wrap">
          <SectionHeading
            id="faq-heading"
            eyebrow="Questions"
            title="Before you enquire"
            intro="The full list is on the FAQ page."
          />
          <FAQAccordion items={homeFaqs} />
          <Link href="/faq" className="link mt-6 inline-block font-semibold">
            Read all questions
          </Link>
        </div>
      </section>

      <CTASection
        id="book"
        title="Request the healing"
        text="Use the form or WhatsApp when you are ready."
      />

      <section className="section bg-cream" aria-labelledby="location-heading">
        <div className="page-wrap">
          <SectionHeading
            id="location-heading"
            eyebrow="Place"
            title="Where the healing is done"
            intro="The meeting place is confirmed before you travel."
          />
          <div className="mt-10">
            <LocationPanel />
          </div>
          <p className="mt-6 text-sm text-muted">
            <Link href="/contact" className="link">
              Contact page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
