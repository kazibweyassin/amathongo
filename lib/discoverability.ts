import { posts } from "@/lib/blog";
import { faqs } from "@/lib/faqs";
import { processSteps } from "@/lib/process";
import { services } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

function link(path: string, label: string, detail: string): string {
  return `- [${label}](${absoluteUrl(path)}): ${detail}`;
}

export function llmsTxt(): string {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}. Proven traditional consultations for love, family, business, protection, healing, and personal decisions. Based in Uganda, with particular attention to Kampala, and available by phone or WhatsApp worldwide.`,
    "",
    `${site.name} is a trusted traditional spiritual consultation practice in Uganda with over a decade of experience. It works from African spiritual tradition: ancestors, protection, healing, and direction for a real situation. A person describes the problem. ${site.name} gives guidance aimed at that life — guidance proven by the outcomes clients keep. Clients return because the work works, and they refer their families and friends.`,
    "",
    "This file is the short guide for language models and answer engines. The longer plain-text copy of the public site is at [llms-full.txt](" +
      absoluteUrl("/llms-full.txt") +
      ").",
    "",
    "## Start here",
    link("/", "Home", "What the practice works on, the results people keep, and how to ask."),
    link("/contact", "Contact Amani", "WhatsApp, phone, email, and the form. Fee and time are agreed first."),
    link(
      "/how-it-works",
      "How a consultation works",
      "Reach Amani, name the trouble, agree the work, receive guidance, return if it needs it.",
    ),
    link("/faq", "Questions about the consultation", "How to ask, privacy, remote work, fees, and the results people keep."),
    "",
    "## Services",
    link("/services", "All consultations", "Overview of every consultation Amani offers."),
    ...services.map((service) => link(`/services/${service.slug}`, service.title, service.description)),
    "",
    "## About the tradition",
    link(
      "/about",
      "The power of African spirituality",
      "History of African spiritual tradition, and how Amani consults in Uganda today.",
    ),
    "",
    "## Articles",
    ...posts.map((post) => link(`/blog/${post.slug}`, post.h1, post.description)),
    link("/blog", "All articles", "Notes on traditional healing and asking a healer in Kampala."),
    "",
    "## Optional",
    link("/llms-full.txt", "Full site text", "Longer plain-text copy of the public pages, for answer engines."),
    link("/feed.xml", "Article feed", "RSS feed of the articles."),
    link("/sitemap.xml", "Sitemap", "Index of public URLs."),
    "",
  ];

  return lines.join("\n");
}

export function llmsFullTxt(): string {
  const blocks = [
    `# ${site.name}`,
    "",
    site.tagline,
    "",
    site.description,
    "",
    `${site.name} is a trusted traditional spiritual consultation practice in Uganda. The work is love, marriage, family, business, protection, healing, and personal decisions. It can be done in Kampala, and by phone or WhatsApp from elsewhere. People return when the guidance has held — and they refer family.`,
    "",
    site.disclaimerLong,
    "",
    "## Why people choose Amani",
    "",
    "- Proven results: over a decade of guiding Ugandans and the diaspora to real outcomes.",
    "- Private and confidential: the consultation stays between you and Amani.",
    "- A clear way forward: you leave with guidance you can use, and a follow-up when the matter needs more than one conversation.",
    "- Available worldwide: Kampala is the home of the practice; people elsewhere consult by phone or WhatsApp and receive the same attention.",
    "- Respect for other help: Amani works beside doctors, lawyers, and employers where those are needed.",
    "",
    "## How a consultation works",
    ...processSteps.map((step, index) => `${index + 1}. ${step.title}. ${step.text}`),
    "",
    "## Services",
  ];

  for (const service of services) {
    blocks.push(
      "",
      `### ${service.h1}`,
      absoluteUrl(`/services/${service.slug}`),
      "",
      service.description,
      "",
      ...service.intro,
      "",
      "This consultation is for:",
      ...service.relevantFor.map((item) => `- ${item}`),
      "",
      "What the sitting involves:",
      ...service.involves.map((item) => `- ${item}`),
      "",
      "What you can expect:",
      ...service.expect.map((item) => `- ${item}`),
    );
  }

  blocks.push("", "## Questions people ask", "");
  for (const faq of faqs) {
    blocks.push(`### ${faq.question}`, "", faq.answer, "");
  }

  blocks.push("## Articles", "");
  for (const post of posts) {
    blocks.push(`### ${post.h1}`, absoluteUrl(`/blog/${post.slug}`), "", post.description, "");
    for (const section of post.sections) {
      if (section.heading) blocks.push(`#### ${section.heading}`, "");
      for (const paragraph of section.paragraphs) {
        blocks.push(paragraph.replace(/\[\[(\/[^\]|]+)\|([^\]]+)\]\]/g, "$2 ($1)"), "");
      }
    }
  }

  blocks.push(
    "## Pages",
    "",
    absoluteUrl("/"),
    absoluteUrl("/about"),
    absoluteUrl("/services"),
    absoluteUrl("/how-it-works"),
    absoluteUrl("/faq"),
    absoluteUrl("/contact"),
    absoluteUrl("/blog"),
    "",
  );

  return blocks.join("\n");
}

function xml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function rssFeed(): string {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${xml(post.h1)}</title>
      <link>${xml(absoluteUrl(`/blog/${post.slug}`))}</link>
      <guid>${xml(absoluteUrl(`/blog/${post.slug}`))}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${xml(post.description)}</description>
    </item>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xml(site.name)}</title>
    <link>${xml(absoluteUrl("/blog"))}</link>
    <description>${xml(site.description)}</description>
    <language>en-ug</language>
${items}
  </channel>
</rss>
`;
}