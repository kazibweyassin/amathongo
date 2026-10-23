import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { Photo } from "@/components/Photo";
import { formatDate, getPost, posts, relatedPosts } from "@/lib/blog";
import { blogPhotos } from "@/lib/photos";
import { articleJson, breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.h1, path: `/blog/${post.slug}` },
  ];
  const more = relatedPosts(post);
  const services = post.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <JsonLd
        data={articleJson({
          slug: post.slug,
          headline: post.h1,
          description: post.description,
          date: post.date,
          image: blogPhotos[post.slug] ? absoluteUrl(blogPhotos[post.slug].src) : undefined,
        })}
      />
      <PageHero eyebrow="Article" title={post.h1} crumbs={crumbs} />
      <article className="section">
        <div className="page-wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-3xl">
            <p className="text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              {post.author}
            </p>
            {blogPhotos[post.slug] ? (
              <Photo
                photo={blogPhotos[post.slug]}
                ratio="16/9"
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="mt-8"
              />
            ) : null}
            {post.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]} className="mt-8">
                {section.heading ? (
                  <h2 className="font-display text-3xl text-ink">{section.heading}</h2>
                ) : null}
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-bark">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <aside className="h-fit border border-line bg-cream p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Related articles
            </p>
            <ul className="mt-4 space-y-3">
              {more.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="link">
                    {item.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Healing
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <CTASection
        id="article-cta"
        title="If this describes your concern"
        text="Name the trouble and the result you want kept. House of Amathongo will say which healing it needs, and when the work can begin."
      />
    </>
  );
}
