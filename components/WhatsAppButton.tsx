import Link from "next/link";
import { hasWhatsApp, whatsappHref } from "@/lib/site";

type Variant = "solid" | "secondary" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  solid: "btn btn-primary",
  secondary: "btn btn-secondary",
  light: "btn btn-light",
  "outline-light": "btn btn-outline-light",
};

export function WhatsAppButton({
  variant = "solid",
  label = "Contact Us on WhatsApp",
  message,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  message?: string;
  className?: string;
}) {
  const classNames = `${styles[variant]} ${className}`.trim();
  const href = whatsappHref(message);

  if (hasWhatsApp()) {
    return (
      <a
        href={href}
        className={classNames}
        data-track="whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href="/contact" className={classNames} data-track="whatsapp_click">
      {label}
    </Link>
  );
}
