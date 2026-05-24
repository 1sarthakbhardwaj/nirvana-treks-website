import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import type { TourCatalogEntry } from "@/lib/tours-catalog";
import TourListingCardPricing from "@/components/tour-listing-card-pricing";

type Props = {
  tour: TourCatalogEntry;
};

export default function FeaturedTourCard({ tour }: Props) {
  const difficultyClass =
    tour.difficulty === "Easy"
      ? "bg-emerald-500/15 text-emerald-300"
      : tour.difficulty.includes("Difficult")
        ? "bg-red-500/15 text-red-300"
        : tour.difficulty.includes("Moderate")
          ? "bg-yellow-500/15 text-yellow-300"
          : "bg-emerald-500/15 text-emerald-300";

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={tour.coverSrc}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        {tour.soldOut ? <div className="sold-out-scrim absolute inset-0" aria-hidden /> : null}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90">
            <Star className="h-3 w-3" /> {tour.rating}
          </span>
          {tour.badge ? (
            <span className="rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/90 to-violet-600/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-amber-500/20">
              {tour.badge}
            </span>
          ) : null}
        </div>
        {tour.soldOut ? (
          <div className="absolute right-3 top-3">
            <span className="sold-out-badge">
              <span className="sold-out-badge__text">Sold out</span>
            </span>
          </div>
        ) : null}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug text-white">{tour.title}</h3>
          <TourListingCardPricing tour={tour} className="shrink-0" />
        </div>
        <p className="mt-2 text-sm text-gray-400">{tour.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4 shrink-0" /> {tour.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4 shrink-0" /> {tour.duration}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyClass}`}>
            {tour.difficulty}
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-400 transition-all group-hover:gap-2">
            View Tour <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
