import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogArticleShell from "@/components/blog/blog-article-shell";
import StructuredData from "@/components/structured-data";
import { getBlogEntry } from "@/lib/blog/registry";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog/posts";
import {
  blogBreadcrumbJsonLd,
  blogPostingJsonLd,
  buildBlogMetadata,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildBlogMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    image: post.image,
    keywords: post.keywords,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    section: post.section,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const entry = getBlogEntry(slug);
  if (!post || !entry) notFound();

  const { Component, faq, howTo } = entry;

  const jsonLd: Record<string, unknown>[] = [
    blogPostingJsonLd({
      headline: post.headline,
      description: post.description,
      slug: post.slug,
      image: post.image,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }),
    blogBreadcrumbJsonLd(post.slug, post.title),
  ];

  if (howTo) jsonLd.push(howToJsonLd(howTo));
  if (faq && faq.length > 0) jsonLd.push(faqJsonLd(faq));

  return (
    <>
      <StructuredData data={jsonLd} />
      <BlogArticleShell breadcrumbTitle={post.title}>
        <Component />
      </BlogArticleShell>
    </>
  );
}
