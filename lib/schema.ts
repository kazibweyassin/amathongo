import { servicePhotos } from "@/lib/photos";
import { services } from "@/lib/services";
import {
  absoluteUrl,
  cityDisplay,
  emailAddress,
  hasEmail,
  hasHours,
  hasLocation,
  hasPhone,
  hoursDisplay,
  locationDisplay,
  phoneHref,
  site,
  siteUrl,
} from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Crumb = {
  name: string;
  path: string;
};

function telephone(): string | undefined {
  if (!hasPhone()) return undefined;
  return phoneHref().replace("tel:", "");
}

const knowsAbout = [
  "Traditional spiritual consultation",
  "Love and relationship guidance",
  "Marriage and family guidance",
  "Business and financial guidance",
  "Traditional healing and wellness",
  "Spiritual protection and guidance",
  "Personal and family guidance",
  "African spiritual tradition",
  "Ancestral guidance",
  "Spiritual direction",
];

const areaServed = [
  { "@type": "Country", name: "Uganda" },
  { "@type": "City", name: "Kampala" },
];

function serviceImage(slug: string) {
  const photo = servicePhotos[slug];
  return photo ? absoluteUrl(photo.src) : undefined;
}

function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Traditional spiritual consultations",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services/${service.slug}`),
        image: serviceImage(service.slug),
        serviceType: service.title,
        areaServed,
        provider: {
          "@type": "Organization",
          name: site.name,
          url: siteUrl(),
        },
      },
    })),
  };
}

export function organizationJson() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl(),
    description: site.description,
    logo: absoluteUrl("/icon"),
    knowsAbout,
    areaServed,
    ...(telephone() ? { telephone: telephone() } : {}),
    ...(hasEmail() ? { email: emailAddress() } : {}),
  };
}

export function websiteJson() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl(),
    description: site.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl(),
    },
  };
}

export function localBusinessJson() {
  const address = hasLocation()
    ? {
        "@type": "PostalAddress",
        streetAddress: locationDisplay(),
        addressCountry: "UG",
        ...(cityDisplay() ? { addressLocality: cityDisplay() } : {}),
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: siteUrl(),
    description: site.description,
    image: absoluteUrl("/opengraph-image"),
    knowsAbout,
    hasOfferCatalog: offerCatalog(),
    areaServed,
    ...(address ? { address } : {}),
    ...(telephone() ? { telephone: telephone() } : {}),
    ...(hasEmail() ? { email: emailAddress() } : {}),
    ...(hasHours() && hoursDisplay() === "24 hours"
      ? { openingHours: "Mo-Su 00:00-23:59" }
      : {}),
  };
}

export function serviceJson(service: {
  slug: string;
  title: string;
  description: string;
  h1: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.h1,
    description: service.description,
    image: serviceImage(service.slug),
    url: absoluteUrl(`/services/${service.slug}`),
    areaServed,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: siteUrl(),
    },
  };
}

export function breadcrumbJson(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJson(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJson(input: {
  slug: string;
  headline: string;
  description: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    ...(input.image ? { image: input.image } : {}),
    datePublished: input.date,
    dateModified: input.date,
    inLanguage: "en",
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: "Traditional spiritual consultation in Uganda",
    },
    mainEntityOfPage: absoluteUrl(`/blog/${input.slug}`),
    author: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl(),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl(),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon"),
      },
    },
  };
}