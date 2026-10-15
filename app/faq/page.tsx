import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqs } from "@/lib/faqs";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export const metadata = buildMetadata({
  title: "Questions About the Healing",
  description:
    "Answers about asking a traditional African healer in Uganda: privacy, visits, WhatsApp, fees, and the results people keep.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <JsonLd data={faqJson(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Questions people ask before the healing"
        lede="Straight answers about how to ask, what to bring, and the results people keep. If your question is not here, send it with your enquiry."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap max-w-3xl">
          <FAQAccordion items={faqs} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#enquiry" className="btn btn-primary" data-track="consultation_cta_click">
              Request the Healing
            </Link>
            <WhatsAppButton variant="secondary" />
          </div>
          <p className="mt-8 text-bark">
            You can also read{" "}
            <Link href="/how-it-works" className="link">
              how the healing is done
            </Link>{" "}
            or the{" "}
            <Link href="/services" className="link">
              services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
