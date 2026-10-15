import Link from "next/link";
import {
  emailDisplay,
  emailHref,
  hasEmail,
  hasPhone,
  hasWhatsApp,
  hoursDisplay,
  locationDisplay,
  mapsLink,
  phoneDisplay,
  phoneHref,
  site,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-moss-deep text-cream">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">Contact</p>
          <ul className="mt-4 space-y-3 text-cream">
            <li>
              Phone:{" "}
              {hasPhone() ? (
                <a href={phoneHref()} className="underline decoration-cream/40 underline-offset-4 hover:text-paper" data-track="phone_click">
                  {phoneDisplay()}
                </a>
              ) : (
                phoneDisplay()
              )}
            </li>
            <li>
              WhatsApp:{" "}
              {hasWhatsApp() ? (
                <a
                  href={whatsappHref()}
                  className="underline decoration-cream/40 underline-offset-4 hover:text-paper"
                  data-track="whatsapp_click"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsappDisplay()}
                </a>
              ) : (
                whatsappDisplay()
              )}
            </li>
            <li>
              Email:{" "}
              {hasEmail() ? (
                <a href={emailHref()} className="underline decoration-cream/40 underline-offset-4 hover:text-paper">
                  {emailDisplay()}
                </a>
              ) : (
                emailDisplay()
              )}
            </li>
            <li>
              Location:{" "}
              <a
                href={mapsLink()}
                className="underline decoration-cream/40 underline-offset-4 hover:text-paper"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locationDisplay()}
              </a>
            </li>
            <li>Hours: {hoursDisplay()}</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-3 max-w-xs leading-relaxed text-cream">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">Quick links</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream underline decoration-cream/40 underline-offset-4 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="page-wrap flex flex-col gap-3 py-6 text-sm text-cream/80 md:flex-row md:items-start md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl">{site.disclaimer}</p>
        </div>
        <div className="page-wrap pb-8 text-sm">
          <Link href="/llms.txt" className="text-cream/80 underline decoration-cream/40 underline-offset-4 hover:text-paper">
            Site summary for answer engines
          </Link>
        </div>
      </div>
    </footer>
  );
}
