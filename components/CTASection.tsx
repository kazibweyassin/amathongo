import { EnquiryLink } from "@/components/EnquiryLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CTASection({
  title = "Bring the trouble to the healer",
  text = "Name what you want worked on. House of Amathongo does the traditional healing for it: a case won, political power opened, a house cleansed, or money that can stay.",
  id,
}: {
  title?: string;
  text?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-moss-deep text-paper" aria-labelledby={id ? `${id}-title` : "cta-title"}>
      <div className="page-wrap py-16 md:py-20">
        <h2 id={id ? `${id}-title` : "cta-title"} className="max-w-xl font-display text-4xl leading-tight">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <EnquiryLink className="btn btn-light">Request the Healing</EnquiryLink>
          <WhatsAppButton variant="outline-light" />
        </div>
      </div>
    </section>
  );
}
