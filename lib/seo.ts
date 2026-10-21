import type { Metadata } from "next";
import { absoluteUrl, site, siteUrl } from "@/lib/site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
}: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": "/feed.xml",
        "text/markdown": "/llms.txt",
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function rootMetadata(): Metadata {
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: `${site.tagline} · ${site.name}`,
      template: `%s · ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: siteUrl() }],
    creator: site.name,
    category: "Traditional African healer",
    keywords: [
      // --- Bazungu / Western Target Audience (Wellness & Cultural Tourism) ---
      "authentic cultural experiences Kampala",
      "traditional African rituals tour Uganda",
      "learn about African spirituality Uganda",
      "cultural heritage tours Kampala",
      "African plant medicine retreat",
      "holistic healing Uganda",
      "traditional herbal medicine workshops East Africa",
      "African shamanism and energy healing",
      "spiritual cleansing retreat Uganda",
      "ancestral healing ceremony Africa",
      "holistic wellness",

      // --- Core / Search Volume Terminology ---
      "traditional African healer Uganda",
      "traditional healer Kampala",
      "spiritual cleansing Uganda",
      "ancestral divination Kampala",
      "traditional healing and wellness Uganda",
      "african traditional healer",
      "African traditional healer near me",
      "omusawo omuganda",

      // --- High-Stakes Intent (Used carefully for context grounding) ---
      "Remove bad luck spiritual healer",
      "political power and court cases Uganda",
      "Spiritual solutions for court cases",
      "Powerful traditional healers in Africa",
      "Real native doctor Kampala",
      "Spiritual spell caster Uganda",
      "witch doctor Uganda",
      "top witch doctor in africa"
    ],
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": "/feed.xml",
        "text/markdown": "/llms.txt",
      },
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: `${site.tagline} · ${site.name}`,
      description: site.description,
      url: siteUrl(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.tagline} · ${site.name}`,
      description: site.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...(verification ? { verification: { google: verification } } : {}),
  };
}
