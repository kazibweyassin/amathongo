import Link from "next/link";
import { EnquiryLink } from "@/components/EnquiryLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { processSteps } from "@/lib/process";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { hasPhone, phoneDisplay, phoneHref } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
];

const detail = [
  "Use the WhatsApp button on this website, call the number on the contact page, or use the form. A first message only needs your name, where you are, and the trouble.",
  "Write what is happening in a way a stranger could follow. Name the result you want kept: a case won, political power opened, a house cleansed, money that can stay, or a body that can rest. Leave out passwords, bank details, and copies of documents.",
  "House of Amathongo says whether the healing should be in person or remote, how long it needs, and what it will cost. People in Kampala can ask about a visit once a place is confirmed. People elsewhere can ask for the work by phone or WhatsApp. You can decline.",
  "At the agreed time the healing is done. House of Amathongo reads the situation and does the traditional work: divination, a ritual, cleansing, protection, or a remedy. People return when that result has held.",
  "If the healing needs a second sitting, House of Amathongo says so and arranges it. You keep what has already been done.",
];

export const metadata = buildMetadata({
  title: "How the Healing Is Done",
  description:
    "How to ask a traditional African healer in Uganda: contact House of Amathongo, name the trouble, agree a time and fee, then the ritual, cleansing, or remedy is done.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <PageHero
        eyebrow="Process"
        title="How the healing is arranged"
        lede="You always know the next step. The fee is agreed first. Then the healer does the work for the result you named, the kind people come back to keep."
        crumbs={crumbs}
      />
      <article className="section">
        <div className="page-wrap grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="max-w-3xl">
          <ol className="space-y-10">
            {processSteps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-6">
                <p className="text-sm font-semibold text-clay">Step 0{index + 1}</p>
                <h2 className="mt-2 font-display text-3xl text-ink">{step.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-bark">{detail[index]}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 font-display text-3xl text-ink">Phone, WhatsApp, or the form</h2>
          <p className="mt-4 leading-relaxed text-bark">
            All three reach the same practice. WhatsApp is the fastest once a number is confirmed.
            Phone suits people who would rather speak. The form suits a longer note, and it tells
            you clearly if email delivery is not connected yet.
          </p>
          <ul className="mt-4 space-y-2 text-bark">
            <li>
              Phone:{" "}
              {hasPhone() ? (
                <a href={phoneHref()} className="link" data-track="phone_click">
                  {phoneDisplay()}
                </a>
              ) : (
                <span>{phoneDisplay()}</span>
              )}
            </li>
            <li>
              <Link href="/contact" className="link">
                Contact page with WhatsApp, email, and the form
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <EnquiryLink className="btn btn-secondary">Request the Healing</EnquiryLink>
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <Photo photo={photos.divination} ratio="4/5" sizes="(min-width: 1024px) 20rem, 100vw" />
        </div>
        </div>
      </article>
    </>
  );
}
