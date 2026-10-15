import { EnquiryLink } from "@/components/EnquiryLink";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">404</p>
        <h1 className="mt-3 font-display text-4xl text-ink">This page is not on the site</h1>
        <p className="mt-4 max-w-xl text-lg text-bark">
          The address may be mistyped, or the page may have moved. You can return home, read the
          services, or send an enquiry.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
          <EnquiryLink />
        </div>
      </div>
    </section>
  );
}
