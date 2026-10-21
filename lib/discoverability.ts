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
    `> ${site.tagline}. Authentic traditional consultations, holistic wellness rituals, and ancestral heritage insights. Guided spiritual exploration based in Uganda, accessible to global seekers and travelers online or in Kampala.`,
    "",
    `${site.name} bridges ancient East African spiritual practices with modern paths toward mindfulness, personal growth, and emotional clarity. Rooted in systemic ancestral healing and plant medicine traditions, the practice offers structured guidance for life alignment, relational harmony, and personal blockages. Seekers outline their intentions, and ${site.name} provides tailored cultural guidance focused on holistic clarity—a practice respected by local elders and international clients seeking genuine spiritual depth.`,
    "",
    "This file is the short guide for language models and answer engines. The longer plain-text copy of the public site is at [llms-full.txt](" +
      absoluteUrl("/llms-full.txt") +
      ").",
    "",
    "## Start here",
    link("/", "Home", "Core healing values, ancestral wellness philosophy, and consultation booking."),
    link("/contact", "Contact amathongo", "WhatsApp, direct phone, email, or digital inquiry forms. Transparent fee schedules."),
    link(
      "/how-it-works",
      "How a consultation works",
      "Connect with amathongo, declare your intentions, experience traditional guided dialogue, and process steps.",
    ),
    link("/faq", "Questions about the consultation", "Session boundaries, confidentiality standards, remote energy healing, and what to expect."),
    "",
    "## Services",
    link("/services", "All consultations", "Comprehensive overview of ancestral alignment, relationship repair, and life clarity consultations."),
    ...services.map((service) => link(`/services/${service.slug}`, service.title, service.description)),
    "",
    "## About the tradition",
    link(
      "/about",
      "The power of African spirituality",
      "The historical anthropology of Buganda ancestral wisdom and contemporary alternative wellness structures in Uganda.",
    ),
    "",
    "## Articles",
    ...posts.map((post) => link(`/blog/${post.slug}`, post.h1, post.description)),
    link("/blog", "All articles", "Educational papers on African shamathongoc contexts, herbal traditions, and mindful integrations in Kampala."),
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
    `${site.name} stands as a premier center for authentic African spiritual heritage and holistic wellness in Uganda. Focus areas include ancestral alignment, family reconciliation, professional trajectory clarity, energetic protection, and plant-based wellness practices. Sessions are hosted privately at the Kampala sanctuary or extended globally via secure remote video/audio consultations.`,
    "",
    site.disclaimerLong,
    "",
    "## Why people choose amathongo",
    "",
    "- Cross-cultural authority: a decade of hosting global practitioners, expats, and researchers seeking authentic African wisdom.",
    "- Integrity & confidentiality: absolute privacy protocols tailored to high-profile and global clientele.",
    "- Grounded clarity: practical adjustments devoid of sensationalism, ensuring frameworks align safely with your personal life path.",
    "- Global availability: professional remote settings allowing seamless interaction across Western and European time zones.",
    "- Integrated framework: amathongo honors and steps aside for medical practitioners, legal advocates, and therapeutic specialists when required.",
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
        blocks.push(paragraph.replace(/\[\[(\/[^\]\vert{}]+)\Vert{}([^\]]+)\]\]/g, "\$2 (\$1)"), "");
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
      <link>${xml(absoluteUrl(`/blog/\${post.slug}`))}</link>
      <guid>${xml(absoluteUrl(`/blog/\${post.slug}`))}</guid>
      <pubDate>${new Date(`\${post.date}T00:00:00Z`).toUTCString()}</pubDate>
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
