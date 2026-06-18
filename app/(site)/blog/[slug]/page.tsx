import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogArticleShell from "@/components/blog/blog-article-shell";
import BestWeekendTreksFromDelhiArticle from "@/components/blog/articles/best-weekend-treks-from-delhi";
import HowToReachKasolFromDelhiArticle from "@/components/blog/articles/how-to-reach-kasol-from-delhi";
import TwoDayTreksFirstTimersArticle from "@/components/blog/articles/2-day-treks-near-delhi-for-first-timers";
import OvernightVolvoToHimachalArticle from "@/components/blog/articles/overnight-volvo-to-himachal";
import TriundTrekGuideArticle from "@/components/blog/articles/triund-trek-guide";
import KheergangaTrekFromKasolArticle from "@/components/blog/articles/kheerganga-trek-from-kasol";
import StructuredData from "@/components/structured-data";
import { FIRST_TIMERS_FAQ } from "@/lib/blog/faq-first-timers";
import { KASOL_OVERNIGHT_HOWTO, KASOL_TRAVEL_FAQ } from "@/lib/blog/faq-kasol";
import { KHEERGANGA_FAQ } from "@/lib/blog/faq-kheerganga";
import { TRIUND_FAQ, TRIUND_HOWTO } from "@/lib/blog/faq-triund";
import { VOLVO_HIMACHAL_FAQ } from "@/lib/blog/faq-volvo";
import { WEEKEND_TREKS_FAQ } from "@/lib/blog/faq-weekend-treks";
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

function BlogArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "best-weekend-treks-from-delhi":
      return <BestWeekendTreksFromDelhiArticle />;
    case "how-to-reach-kasol-from-delhi":
      return <HowToReachKasolFromDelhiArticle />;
    case "2-day-treks-near-delhi-for-first-timers":
      return <TwoDayTreksFirstTimersArticle />;
    case "overnight-volvo-to-himachal":
      return <OvernightVolvoToHimachalArticle />;
    case "triund-trek-guide":
      return <TriundTrekGuideArticle />;
    case "kheerganga-trek-from-kasol":
      return <KheergangaTrekFromKasolArticle />;
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

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

  if (slug === "best-weekend-treks-from-delhi") {
    jsonLd.push(faqJsonLd(WEEKEND_TREKS_FAQ));
  }

  if (slug === "how-to-reach-kasol-from-delhi") {
    jsonLd.push(howToJsonLd(KASOL_OVERNIGHT_HOWTO));
    jsonLd.push(faqJsonLd(KASOL_TRAVEL_FAQ));
  }

  if (slug === "2-day-treks-near-delhi-for-first-timers") {
    jsonLd.push(faqJsonLd(FIRST_TIMERS_FAQ));
  }

  if (slug === "overnight-volvo-to-himachal") {
    jsonLd.push(faqJsonLd(VOLVO_HIMACHAL_FAQ));
  }

  if (slug === "triund-trek-guide") {
    jsonLd.push(howToJsonLd(TRIUND_HOWTO));
    jsonLd.push(faqJsonLd(TRIUND_FAQ));
  }

  if (slug === "kheerganga-trek-from-kasol") {
    jsonLd.push(faqJsonLd(KHEERGANGA_FAQ));
  }

  return (
    <>
      <StructuredData data={jsonLd} />
      <BlogArticleShell breadcrumbTitle={post.title}>
        <BlogArticleContent slug={slug} />
      </BlogArticleShell>
    </>
  );
}
