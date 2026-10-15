import Link from "next/link";
import { services } from "@/lib/services";

const facts = [
  ["Name", "House of Amathongo"],
  ["Practice", "Traditional African healer"],
  ["Based in", "Uganda, with healing for people in Kampala and elsewhere"],
  ["Tradition", "African spirituality: ancestors, protection, healing, and direction"],
  ["How to enquire", "WhatsApp, phone, or the contact form"],
];

export function PracticeFacts() {
  return (
    <section className="border-y border-line bg-paper" aria-labelledby="facts-heading">
      <div className="page-wrap py-12 md:py-16">
        <h2 id="facts-heading" className="font-display text-3xl text-ink">
          House of Amathongo at a glance
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-bark">
          House of Amathongo is a traditional African healer in Uganda, the work people call a witch doctor.
          People come for political power, court cases, money, protection, and the body, and they return when the
          healing has held.
        </p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          {facts.map(([term, detail]) => (
            <div key={term} className="border-t border-line pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">{term}</dt>
              <dd className="mt-2 leading-relaxed text-bark">{detail}</dd>
            </div>
          ))}
          <div className="border-t border-line pt-4 sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              The work
            </dt>
            <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="link">
                  {service.title}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
