import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "The work is done on your trouble",
    text: "A blocked seat, a court case, money that will not stay, a heavy body, or a house that feels attacked. You name it. House of Amathongo does the healing for that life.",
  },
  {
    title: "It stays private",
    text: "The healing stays between you and House of Amathongo. People speak freely because the ritual has to fit the life they actually have.",
  },
  {
    title: "People keep the result",
    text: "A case won. Political power opened. A house cleansed. A business that can hold. People return when that result has held, and they ask for another sitting when the work needs it.",
  },
  {
    title: "Kampala, and far beyond it",
    text: "The healer is based in Uganda. People elsewhere have the same work done by phone or WhatsApp.",
  },
];

export function TrustSection() {
  return (
    <section className="section bg-paper" aria-labelledby="why-amani">
      <div className="page-wrap">
        <SectionHeading
          id="why-amani"
          eyebrow="Why people enquire"
          title="Why people choose House of Amathongo"
          intro="People choose House of Amathongo when they want a traditional African healer to work on a trouble like theirs, and they return when that healing has held."
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
