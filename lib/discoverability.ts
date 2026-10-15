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
    `> ${site.tagline}. Political power, court cases, cleansing, protection, ancestral divination, and traditional remedies in Kampala and by phone or WhatsApp. People return when the healing has held.`,
    "",
    "House of Amathongo is a traditional African healer in Uganda — the work people call a witch doctor. House of Amathongo does the healing on a real trouble: a case won, political power opened, a house cleansed, money that can stay, or rest and strength beside a doctor.",
    "",
    "People come back, and they refer family, when that healing has held. The work is not a guarantee of a court win, a visa, a job, a pregnancy, sudden wealth, or a medical cure. For a medical emergency, go to a hospital. If a person is in danger, contact the police as well.",
    "",
    site.disclaimer,
    "",
    "This file is the short guide for language models and answer engines. The longer plain-text copy of the public site is at [llms-full.txt](" +
      absoluteUrl("/llms-full.txt") +
      ").",
    "",
    "## Start here",
    link("/", "Home", "What the healer works on, the results people keep, and how to ask."),
    link("/contact", "Contact House of Amathongo", "WhatsApp, phone, email, and the form. Fee and time are agreed first."),
    link(
      "/how-it-works",
      "How the healing is done",
      "Reach the healer, name the trouble, agree the work, the healing is done, return if it needs it.",
    ),
    link("/faq", "Questions about the healing", "How to ask, privacy, remote work, fees, and the results people keep."),
    "",
    "## Services",
    link("/services", "All healing", "Overview of every healing House of Amathongo does."),
    ...services.map((service) => link(`/services/${service.slug}`, service.title, service.description)),
    "",
    "## About the tradition",
    link(
      "/about",
      "The power of African spirituality",
      "History of African spiritual tradition, and how House of Amathongo heals in Uganda today.",
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
    "House of Amathongo is a traditional African healer in Kampala. The work is political power, court cases, cleansing, protection, ancestral divination, and traditional remedies. It can be done in Kampala, and by phone or WhatsApp from elsewhere. People return when the healing has held.",
    "",
    site.disclaimerLong,
    "",
    "## How the healing is done",
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
      "This healing is for:",
      ...service.relevantFor.map((item) => `- ${item}`),
      "",
      "What the healing involves:",
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
