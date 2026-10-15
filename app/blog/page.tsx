import { BlogGrid } from "@/components/BlogGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/blog";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata = buildMetadata({
  title: "Notes on Traditional African Healing",
  description:
    "Articles on traditional African healing in Uganda: what the healer does, what to expect, remedies, and how to ask in Kampala.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <PageHero
        eyebrow="Journal"
        title="Notes for people deciding whether to ask the healer"
        lede="Practical notes on the healing, the results people keep, and arranging a visit in Kampala."
        crumbs={crumbs}
      />
      <section className="section">
        <div className="page-wrap">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
