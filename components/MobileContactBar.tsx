import Link from "next/link";
import { hasPhone, hasWhatsApp, phoneHref, whatsappHref } from "@/lib/site";

export function MobileContactBar() {
  const callHref = hasPhone() ? phoneHref() : "/contact";
  const chatHref = hasWhatsApp() ? whatsappHref() : "/contact";
  const chatExternal = hasWhatsApp();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper md:hidden">
      <div className="grid grid-cols-2">
        {chatExternal ? (
          <a
            href={chatHref}
            className="btn btn-primary rounded-none"
            data-track="whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        ) : (
          <Link href="/contact" className="btn btn-primary rounded-none" data-track="whatsapp_click">
            WhatsApp
          </Link>
        )}
        <a
          href={callHref}
          className="btn btn-secondary rounded-none border-0 border-l border-line"
          data-track={hasPhone() ? "phone_click" : "consultation_cta_click"}
        >
          {hasPhone() ? "Call" : "Contact"}
        </a>
      </div>
    </div>
  );
}
