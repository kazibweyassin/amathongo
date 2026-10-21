import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata = buildMetadata({
  title: "Traditional Spiritual Consultations in Uganda — Proven Guidance",
  description:
    "Proven traditional consultations in Uganda for love, marriage, family, business, protection, healing, and personal decisions. Read the guidance and the result each one is known for.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <PageHero
        eyebrow="Services"
        title="Consultations built around your situation"
        lede="Each consultation is private and shaped to the change you want: a relationship restored, a home at peace, a livelihood steadied, or a spirit at rest. The guidance is proven — clients return and refer others."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap">
          <ServiceGrid services={services} />
        </div>
      </section>
      <CTASection
        id="services-cta"
        title="Not sure which consultation you need?"
        text="Send a short note about the trouble and the change you want. amathongo will say which consultation it needs and when it can begin."
      />
    </>
  );
}