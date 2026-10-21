import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Proven Results",
    text: "Over a decade of guiding Ugandans and the diaspora. Clients return because the guidance works — and they refer their families and friends.",
  },
  {
    title: "Private & Confidential",
    text: "The consultation stays between you and amathongo. You can speak freely about what you want changed. Your story is not shared.",
  },
  {
    title: "A Clear Way Forward",
    text: "You leave with traditional guidance you can use immediately, and a follow-up when the matter needs more than one conversation — included in the agreement.",
  },
  {
    title: "Here in Uganda — Available Worldwide",
    text: "Kampala is the home of the practice. People elsewhere in Uganda or abroad consult by phone or WhatsApp and receive the same attention and proven approach.",
  },
];

export function TrustSection() {
  return (
    <section className="section bg-paper" aria-labelledby="why-amathongo">
      <div className="page-wrap">
        <SectionHeading
          id="why-amathongo"
          eyebrow="Why people choose amathongo"
          title="Why amathongo, and why clients return"
          intro="People choose amathongo when they want traditional help that takes their situation seriously, delivers real outcomes, and shows them a way through it. The guidance works — that is why clients come back and refer others."
        />
        <ul className="mt-12 grid gap-10 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="border-t border-line pt-6">
              <p className="font-display text-sm text-clay">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl text-ink">{reason.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-bark">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
