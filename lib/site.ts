export const site = {
  name: "House of Amathongo",
  tagline: "Traditional African Healer in Uganda",
  description:
    "House of Amathongo is a traditional African healer in Kampala — the work people call a witch doctor. Political power, court cases, cleansing, protection, ancestral divination, and traditional remedies. WhatsApp worldwide.",
  disclaimer:
    "House of Amathongo does traditional African healing: rituals, cleansing, divination, and remedies. For a medical emergency, go to a hospital.",
  disclaimerLong:
    "House of Amathongo does traditional African healing: rituals, cleansing, divination, and remedies for political power, court cases, the home, work, and the body. People return when that work has held. It is not a medical cure. For a medical emergency, go to a hospital.",
  whatsappMessage:
    "Hello House of Amathongo, I would like to schedule a traditional consultation. I am seeking spiritual guidance ,  holistic clarity and solution for my current situation.",
  locale: "en_UG",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const enquiryTopics = [
  "Ancestral divination",
  "Political power",
  "Court cases",
  "Money and business rituals",
  "Traditional healing and remedies",
  "Cleansing and protection",
  "Family troubles",
  "General enquiry",
] as const;

const PLACEHOLDERS = {
  location: "[LOCATION]",
  hours: "[OPENING HOURS]",
} as const;

const confirmedLocation = "Busabala Close, Kampala";
const confirmedCity = "Kampala";
const confirmedPhoneDisplay = "+256 791 462554";
const confirmedPhoneTel = "+256791462554";
const confirmedWhatsappNumber = "256791462554";
const confirmedEmail = "info@amathongo.com";
const confirmedHours = "24 hours";
const confirmedSiteUrl = "https://amathongo.com";
const mapsCid = "16033604122515299932";

function readPublic(name: string): string {
  return process.env[name]?.trim() ?? "";
}

export function siteUrl(): string {
  const raw = readPublic("NEXT_PUBLIC_SITE_URL") || confirmedSiteUrl;
  return raw.replace(/\/+$/, "");
}

export function phoneDisplay(): string {
  return readPublic("NEXT_PUBLIC_PHONE_DISPLAY") || confirmedPhoneDisplay;
}

export function phoneHref(): string {
  const tel = (readPublic("NEXT_PUBLIC_PHONE_TEL") || confirmedPhoneTel).replace(/[^\d+]/g, "");
  if (!/^\+?\d{8,15}$/.test(tel)) return "/contact";
  return `tel:${tel}`;
}

export function hasPhone(): boolean {
  return phoneHref().startsWith("tel:");
}

export function whatsappDisplay(): string {
  return readPublic("NEXT_PUBLIC_WHATSAPP_DISPLAY") || confirmedPhoneDisplay;
}

export function whatsappHref(message: string = site.whatsappMessage): string {
  const digits = (readPublic("NEXT_PUBLIC_WHATSAPP_NUMBER") || confirmedWhatsappNumber).replace(/\D/g, "");
  if (!/^\d{8,15}$/.test(digits)) return "/contact";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function hasWhatsApp(): boolean {
  return whatsappHref().startsWith("https://");
}

export function emailAddress(): string | null {
  const email = readPublic("NEXT_PUBLIC_EMAIL") || confirmedEmail;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}

export function emailDisplay(): string {
  return emailAddress() || confirmedEmail;
}

export function emailHref(): string {
  const email = emailAddress();
  return email ? `mailto:${email}` : "/contact";
}

export function hasEmail(): boolean {
  return emailHref().startsWith("mailto:");
}

export function locationDisplay(): string {
  return readPublic("NEXT_PUBLIC_LOCATION") || confirmedLocation;
}

export function hasLocation(): boolean {
  const value = locationDisplay();
  return value.length > 0 && value !== PLACEHOLDERS.location;
}

export function cityDisplay(): string | null {
  return readPublic("NEXT_PUBLIC_CITY") || confirmedCity;
}

export function mapsLink(): string {
  return `https://www.google.com/maps?cid=${mapsCid}`;
}

export function hoursDisplay(): string {
  return readPublic("NEXT_PUBLIC_HOURS") || confirmedHours;
}

export function hasHours(): boolean {
  const value = hoursDisplay();
  return value.length > 0 && value !== PLACEHOLDERS.hours;
}

function allowedMapsEmbed(raw: string): string | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (url.hostname !== "www.google.com" && url.hostname !== "maps.google.com") return null;
    const embedPath = url.pathname.startsWith("/maps/embed");
    const embedQuery = url.searchParams.get("output") === "embed";
    if (!embedPath && !embedQuery) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function mapsEmbedUrl(): string | null {
  const raw = readPublic("NEXT_PUBLIC_MAPS_EMBED_URL");
  if (raw) return allowedMapsEmbed(raw);
  if (!hasLocation()) return null;
  return `https://www.google.com/maps?cid=${mapsCid}&output=embed`;
}

export function contactIsPlaceholder(): boolean {
  return !hasPhone() || !hasWhatsApp() || !hasEmail() || !hasLocation();
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl()).toString();
}
