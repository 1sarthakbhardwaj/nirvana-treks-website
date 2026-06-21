import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { buildPageMetadata } from "@/lib/seo";
import BlogTopoBackdrop from "@/components/blog/blog-topo-backdrop";

export const metadata: Metadata = buildPageMetadata({
  title: "Journal",
  description:
    "Trekking guides, weekend escape ideas and travel tips from Nirvana Treks. Plan your next Himalayan trip from Delhi.",
  path: "/blog",
  keywords: [
    "himalayan trekking blog",
    "weekend treks from delhi",
    "himachal travel guides",
    "trekking tips india",
  ],
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="blog-root">
      <BlogTopoBackdrop />
      <main className="blog-wrap">
        <nav className="blog-crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          Journal
        </nav>

        <header className="blog-index-header">
          <p className="blog-eyebrow">Journal</p>
          <h1>Trekking guides &amp; weekend ideas</h1>
          <p>
            Practical guides for planning Himalayan treks from Delhi. Distance,
            difficulty, season and what to pack.
          </p>
        </header>

        <div className="blog-card-grid">
          {[...BLOG_POSTS]
            .sort((a, b) => {
              const byDate =
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime();
              if (byDate !== 0) return byDate;
              return a.title.localeCompare(b.title);
            })
            .map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`}>
                <div className="blog-card-media">
                  <Image
                    src={post.image}
                    alt={post.headline}
                    fill
                    sizes="(max-width: 640px) 100vw, 540px"
                    className="object-cover"
                    unoptimized={post.image.endsWith(".svg")}
                  />
                </div>
                <div className="blog-card-body">
                  <p className="tag">{post.section}</p>
                  <h2>{post.headline}</h2>
                  <p>{post.excerpt}</p>
                  <span className="read-more">
                    {post.readMinutes} min read · Updated {formatDate(post.updatedAt)}
                  </span>
                </div>
              </Link>
            </article>
            ))}
        </div>
      </main>
    </div>
  );
}
