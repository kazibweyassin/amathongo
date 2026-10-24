import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { LocationPanel } from "@/components/LocationPanel";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { breadcrumbJson, localBusinessJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { photos } from "@/lib/photos";
import { contactIsPlaceholder } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata = buildMetadata({
  title: "Contact House of Amathongo",
  description:
    "Ask a traditional African healer in Uganda by WhatsApp, phone, or the contact form. Name the trouble. Fees are agreed before the healing begins.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <JsonLd data={localBusinessJson()} />
      <PageHero
        eyebrow="Contact"
        title="Request the healing"
        lede="Tell House of Amathongo the trouble and the result you want kept. A time and a fee are agreed before the healing begins."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Send a note</h2>
            <p className="mt-3 leading-relaxed text-bark">
              The form checks that your name, email, and message are usable. It does not store a
              copy on this website. If email delivery has not been connected, the form says so
              instead of pretending the message was sent.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <Photo photo={photos.savanna} ratio="16/9" sizes="(min-width: 1024px) 36rem, 100vw" className="mb-8" />
            <h2 className="font-display text-3xl text-ink">Phone, WhatsApp, and place</h2>
            {contactIsPlaceholder() ? (
              <p className="mt-3 leading-relaxed text-bark">
                Confirmed contact details will replace the placeholders below. Please do not treat
                a bracketed line as a working number or address.
              </p>
            ) : null}
            <div className="mt-8">
              <LocationPanel />
            </div>
            <div className="mt-6">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
