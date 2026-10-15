import Link from "next/link";
import type { ReactNode } from "react";

export function EnquiryLink({
  children = "Request the Healing",
  className = "btn btn-primary",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link href="/contact#enquiry" className={className} data-track="consultation_cta_click">
      {children}
    </Link>
  );
}
