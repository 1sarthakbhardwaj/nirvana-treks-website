"use client";

import Container from "@/components/ui/container";
import GoogleReviewsSection from "@/components/google-reviews-section";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { TOURS_CATALOG } from "@/lib/tours-catalog";
import Link from "next/link";
import { usePathname } from "next/navigation";

const POPULAR_TREK_SLUGS = [
  "kasol-trip",
  "bir-billing",
  "triund-trek",
  "kareri-lake",
  "churdhar-trek",
] as const;

const popularTreks = TOURS_CATALOG.filter((tour) =>
  (POPULAR_TREK_SLUGS as readonly string[]).includes(tour.slug)
);

export default function Footer() {
  const pathname = usePathname();
  const showReviews = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  return (
    <footer className="border-t border-border">
      {showReviews ? <GoogleReviewsSection /> : null}

      <Container className="py-10">
        <div className="mb-8 grid gap-8 border-b border-border pb-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Popular treks
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {popularTreks.map((tour) => (
                <Link
                  key={tour.slug}
                  href={`/tours/${tour.slug}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tour.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Journal
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/blog"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                All guides
              </Link>
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 text-muted-foreground md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Nirvana Treks & Tours. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/tours" className="transition-colors hover:text-foreground">
              Tours
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Journal
            </Link>
            <Link href="/refer" className="transition-colors hover:text-foreground">
              Refer & Earn
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>

        {isBlog ? (
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Planning a weekend trek?{" "}
            <Link href="/tours" className="underline underline-offset-2 hover:text-foreground">
              Browse our upcoming departures
            </Link>
            .
          </p>
        ) : null}
      </Container>
    </footer>
  );
}
