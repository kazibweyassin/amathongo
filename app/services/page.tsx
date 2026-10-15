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
  title: "Traditional African Healing in Uganda",
  description:
    "Healing by a traditional African healer in Uganda: political power, court cases, money, cleansing, protection, and remedies. Read the work and the result each one is known for.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <PageHero
        eyebrow="Services"
        title="The healing, named plainly"
        lede="Each working is private and built around the change you want kept: a case won, political power opened, a house cleansed, or money that can stay."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap">
          <ServiceGrid services={services} />
        </div>
      </section>
      <CTASection
        id="services-cta"
        title="Not sure which healing you need?"
        text="Send a short note about the trouble and the result you want kept. House of Amathongo will say which healing it needs and when the work can begin."
      />
    </>
  );
}
