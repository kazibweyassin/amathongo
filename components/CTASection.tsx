import { EnquiryLink } from "@/components/EnquiryLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CTASection({
  title = "Talk to Amani",
  text = "Bring the problem you want help with. Amani will listen and give you traditional guidance for the way forward — guidance proven by the outcomes clients keep.",
  id,
}: {
  title?: string;
  text?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-moss-deep text-paper" aria-labelledby={id ? `${id}-title` : "cta-title-"}>
      <div className="page-wrap py-16 md:py-20">
        <h2 id={id ? `${id}-title` : "cta-title"} className="max-w-xl font-display text-4xl leading-tight">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <EnquiryLink className="btn btn-light">Request a Consultation</EnquiryLink>
          <WhatsAppButton variant="outline-light" />
        </div>
        <p className="mt-6 text-sm text-cream/80">
          Confidential · Fee agreed upfront · Follow-up included
        </p>
      </div>
    </section>
  );
}
