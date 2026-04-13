import Container from "@/components/ui/container";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { guestReviewQuotes, GOOGLE_REVIEWS_URL } from "@/lib/guest-reviews";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <section
        className="border-b border-border/80 bg-gradient-to-b from-secondary/25 via-background to-card/25 py-16"
        aria-labelledby="guest-reviews-heading"
      >
        <Container>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5">
                <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" aria-hidden />
                <span
                  id="guest-reviews-heading"
                  className="text-xs font-semibold uppercase tracking-widest text-amber-200/95"
                >
                  What guests say
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Short notes from travellers who came out with us. Tap through to Google for the full story and latest
                reviews.
              </p>
            </div>
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:from-emerald-400 hover:to-emerald-500 md:self-auto"
            >
              Read more on Google
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {guestReviewQuotes.map((q, i) => (
              <li key={i}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-5 shadow-sm backdrop-blur-sm transition hover:border-emerald-500/30 hover:bg-card/70">
                  <blockquote className="flex-1 border-l-2 border-emerald-500/40 pl-4">
                    <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{q.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-medium text-emerald-400/90">{q.author}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="flex flex-col items-center justify-between gap-6 py-10 text-muted-foreground md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Nirvana Treks & Tours. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/tours" className="transition-colors hover:text-foreground">
            Tours
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
