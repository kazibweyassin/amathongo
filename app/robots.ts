import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Expanded list of modern AI and LLM search agents (Up to date for 2026)
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "CohereBot",
  "Omgilibot",
  "YouBot"
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl();

  // 1. Standard rules for global search engines (Google, Bing, Yahoo)
  const baseRules = {
    userAgent: "*",
    allow: [
      "/", 
      "/llms.txt",  // Crucial: Ensures visibility for AI context indexers
      "/feed.xml"   // Crucial: Ensures discovery of RSS updates
    ],
    disallow: [
      "/api/", 
      "/studio/",   // Protects CMS/admin backends if applicable
      "/_next/"     // Blocks direct Next.js build internal folders
    ],
  };

  // 2. Map out the AI crawler array to separate rule blocks so Next.js parses them correctly
  const crawlerRules = aiCrawlers.map((bot) => ({
    userAgent: bot,
    allow: ["/", "/llms.txt"], // Explicit permission for LLMs to read your AI optimization file
    disallow: ["/api/", "/_next/"],
  }));

  return {
    rules: [
      baseRules,
      ...crawlerRules
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
