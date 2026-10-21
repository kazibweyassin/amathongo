import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Photo } from "@/components/Photo";
import { getPost } from "@/lib/blog";
import { servicePhotos } from "@/lib/photos";
import { breadcrumbJson, faqJson, serviceJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/process";
import { getService, relatedServices, services } from "@/lib/services";

const articleFor: Record<string, string> = {
  "spiritual-consultation": "traditional-spiritual-consultation-uganda",
  "love-relationships": "spiritual-guidance-uganda",
  "marriage-family": "traditional-spiritual-consultation-uganda",
  "business-financial": "spiritual-guidance-uganda",
  "traditional-healing": "traditional-healing-uganda",
  "spiritual-protection": "spiritual-guidance-uganda",
  "personal-family-guidance": "spiritual-consultation-kampala",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReturnType<typeof buildMetadata>> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];
  const related = relatedServices(service);
  const article = getPost(articleFor[service.slug] ?? "");

  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <JsonLd data={faqJson(service.faqs)} />
      <JsonLd data={serviceJson(service)} />
      <PageHero
        eyebrow="Consultation"
        title={service.h1}
        lede={service.description}
        crumbs={crumbs}
      />

      <article className="section">
        <div className="page-wrap grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-3xl">
            {servicePhotos[service.slug] ? (
              <Photo
                photo={servicePhotos[service.slug]}
                ratio="16/9"
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="mb-8"
              />
            ) : null}
            <div className="space-y-4 text-lg leading-relaxed text-bark">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-3xl text-ink">
              Who this may be relevant for
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-bark">
              {service.relevantFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl text-ink">
              What the consultation involves
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-bark">
              {service.involves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl text-ink">
              What you can expect
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed text-bark">
              {service.expect.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-3xl text-ink">
              How the work is done
            </h2>
            <p className="mt-4 leading-relaxed text-bark">
              The same five steps apply here. You agree the time and the fee, then the
              guidance begins.
            </p>
            <ol className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border-t border-line pt-4">
                  <p className="text-sm text-clay">0{index + 1}</p>
                  <h3 className="mt-1 font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-bark">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4">
              <Link href="/how-it-works" className="link">
                How a consultation is arranged
              </Link>
            </p>

            <h2 className="mt-12 font-display text-3xl text-ink">Questions</h2>
            <FAQAccordion items={service.faqs} />

            {article ? (
              <p className="mt-10 leading-relaxed text-bark">
                Further reading:{" "}
                <Link href={`/blog/${article.slug}`} className="link">
                  {article.h1}
                </Link>
              </p>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#enquiry"
                className="btn btn-primary"
                data-track="consultation_cta_click"
              >
                Request a Consultation
              </Link>
              <WhatsAppButton />
            </div>
          </div>

          <aside className="h-fit border border-line bg-cream p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Related
            </p>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="link">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="link">
                  Frequently asked questions
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </article>

      <CTASection
        id={`${service.slug}-cta`}
        title="Request this consultation"
      />
    </>
  );
}