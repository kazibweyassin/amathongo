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
      "traditional African healer Uganda",
      "witch doctor Uganda",
      "traditional healer Kampala",
      "political power and court cases Uganda",
      "spiritual cleansing Uganda",
      "ancestral divination Kampala",
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
