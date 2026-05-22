"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { ExternalLink, Star } from "lucide-react";
import {
  formatRelativeReviewDate,
  formatReviewerInitials,
  type GuestReview,
  type ReviewsPayload,
} from "@/lib/reviews";
import { GOOGLE_REVIEWS_URL } from "@/lib/guest-reviews";

/** Seconds for one full marquee cycle — higher = slower */
const MARQUEE_SECONDS_PER_CARD = 6;

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-white/20"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GuestReview }) {
  const name = formatReviewerInitials(review.reviewer.displayName);

  return (
    <article className="flex w-[min(85vw,300px)] shrink-0 flex-col rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-lg sm:w-[300px]">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10">
          {review.reviewer.profilePhotoUrl ? (
            <Image
              src={review.reviewer.profilePhotoUrl}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-gray-500">{formatRelativeReviewDate(review.createTime)}</p>
        </div>
      </div>
      <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-gray-300 line-clamp-4">
        {review.comment}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <StarRow rating={review.starRating} />
        <GoogleMark />
      </div>
    </article>
  );
}

export default function GoogleReviewsSection() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json: ReviewsPayload) => setData(json))
      .catch(() => setError(true));
  }, []);

  const marqueeReviews = useMemo(() => {
    if (!data?.reviews.length) return [];
    return [...data.reviews, ...data.reviews];
  }, [data?.reviews]);

  const marqueeDuration = data
    ? `${Math.max(data.reviews.length * MARQUEE_SECONDS_PER_CARD, 90)}s`
    : "140s";

  const writeUrl = data?.writeReviewUrl || GOOGLE_REVIEWS_URL;

  return (
    <section
      className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-emerald-950/15 via-background to-background py-16 md:py-20"
      aria-labelledby="google-reviews-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 shadow-sm shadow-amber-500/5">
              <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" aria-hidden />
              <span
                id="google-reviews-heading"
                className="text-xs font-semibold uppercase tracking-widest text-amber-100"
              >
                What guests say
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Trusted on Google
            </h3>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              Honest feedback from travellers who joined our treks and tours across the Himalayas.
            </p>
          </div>
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-emerald-500 lg:self-end"
          >
            View all on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/95 p-5 shadow-2xl shadow-black/30 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          {data ? (
            <>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="text-lg font-semibold text-white">Excellent</span>
                  <StarRow rating={Math.round(data.averageRating)} />
                  <span className="text-sm text-gray-400">
                    <span className="font-semibold text-white">{data.averageRating.toFixed(1)}</span>
                    {" · "}
                    Based on {data.totalReviewCount} reviews
                  </span>
                  <GoogleMark />
                </div>
                <Link
                  href={writeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#1a73e8] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1557b0]"
                >
                  Write a review
                </Link>
              </div>

              <div
                className="reviews-marquee relative mt-5"
                data-lenis-prevent
                aria-label="Guest reviews marquee"
              >
                <div
                  className="reviews-marquee-track py-1"
                  style={{ "--marquee-duration": marqueeDuration } as CSSProperties}
                >
                  {marqueeReviews.map((review, index) => (
                    <ReviewCard key={`${review.reviewId}-${index}`} review={review} />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-gray-500 md:text-left">
                Reviews scroll slowly · hover to pause
              </p>
            </>
          ) : error ? (
            <p className="py-8 text-center text-sm text-gray-500">
              Reviews could not load.{" "}
              <Link href={GOOGLE_REVIEWS_URL} className="text-emerald-400 underline-offset-2 hover:underline">
                View them on Google
              </Link>
            </p>
          ) : (
            <div className="flex gap-4 overflow-hidden py-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-48 w-[min(85vw,300px)] shrink-0 animate-pulse rounded-2xl bg-white/5"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
