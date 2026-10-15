import { rssFeed } from "@/lib/discoverability";

export const dynamic = "force-static";

export function GET() {
  return new Response(rssFeed(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
