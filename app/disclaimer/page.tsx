import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";

const crumbs = [{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }];

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Disclaimer for House of Amathongo traditional healing services.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Disclaimer"
        lede="The information and services on this website are for spiritual guidance and traditional purposes only."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap max-w-3xl space-y-4 text-lg leading-relaxed text-bark">
          <p>
            Results may vary from person to person, and no guarantees are made
            regarding specific outcomes.
          </p>
          <p>
            All services offered by House of Amathongo are based on traditional
            spiritual practices and herbal knowledge. They are not intended to
            replace professional medical, legal, or psychological advice.
            Visitors are encouraged to seek qualified professionals for medical,
            legal, or mental health concerns.
          </p>
          <p>
            Any decisions or actions taken based on the information or services
            provided on this website are done at the individual's own
            responsibility. House of Amathongo shall not be held liable for any
            direct or indirect outcomes resulting from the use of the services.
          </p>
          <p>
            By using this website, you acknowledge and agree to this disclaimer
            and understand that all consultations and services are provided with
            confidentiality and respect.
          </p>
        </div>
      </section>
      <CTASection
        id="disclaimer-cta"
        title="Request the healing"
        text="Use the form or WhatsApp when you are ready."
      />
    </>
  );
}