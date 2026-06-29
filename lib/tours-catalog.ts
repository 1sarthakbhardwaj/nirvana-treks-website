/**
 * Single source of truth for tour listing copy, durations, and pricing shown
 * on the homepage, tours index, and trip finder. Themed tour pages use the
 * same numbers in their *-data.ts files — keep those in sync when prices change.
 */

export type TourCatalogEntry = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  durationShort: string;
  /** Approximate trip length for filters (calendar days) */
  days: number;
  difficulty: string;
  location: string;
  /** Lowest per-person price (quad/triple or single tier) */
  priceFrom: number;
  /** Double sharing, when applicable */
  priceDouble?: number;
  rating: number;
  emoji: string;
  coverSrc: string;
  description: string;
  tagline: string;
  tags: string[];
  featured?: boolean;
  badge?: string;
  soldOut?: boolean;
  /** Blocks booking on the generic tour detail page */
  comingSoon?: boolean;
};

export function tourBadgeClassName(label: string): string {
  const base =
    "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg";
  if (/coming/i.test(label)) {
    return `${base} border border-sky-400/35 bg-slate-700/95 text-sky-100 shadow-sky-900/25`;
  }
  return `${base} border border-amber-400/40 bg-gradient-to-r from-amber-500/90 to-violet-600/90 shadow-amber-500/20`;
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function priceFromDisplay(amount: number): string {
  return `From ${formatInr(amount)}`;
}

export function pricingTiersLine(entry: TourCatalogEntry): string | null {
  if (entry.priceDouble == null) return null;
  return `${formatInr(entry.priceFrom)} quad/triple · ${formatInr(entry.priceDouble)} double`;
}

export const TOURS_CATALOG: TourCatalogEntry[] = [
  {
    slug: "kasol-trip",
    title: "Kasol × Kheerganga",
    subtitle: "5D/4N Kheerganga · weekend Kasol from ₹6,499",
    duration: "5 Days / 4 Nights",
    durationShort: "5D / 4N",
    days: 5,
    difficulty: "Easy to Moderate",
    location: "Parvati Valley, Himachal Pradesh",
    priceFrom: 7499,
    priceDouble: 7999,
    rating: 4.8,
    emoji: "🏞️",
    coverSrc: "/gallery/kasol-kheerganga.webp",
    description:
      "Café hops, Siddu on us, Kheerganga trek and stargazing. Weekend Kasol-only batch from ₹6,499.",
    tagline: "Parvati Valley, trek, and Milky Way camp",
    tags: ["adventure", "nature", "camping", "culture"],
    featured: true,
  },
  {
    slug: "bir-billing",
    title: "Bir Billing",
    subtitle: "Paragliding & valley weekends",
    duration: "2 Days / 3 Nights",
    durationShort: "2D / 3N",
    days: 3,
    difficulty: "Easy",
    location: "Kangra Valley, Himachal Pradesh",
    priceFrom: 7499,
    priceDouble: 7999,
    rating: 4.9,
    emoji: "🪂",
    coverSrc: "/gallery/bir-billing.jpg",
    description:
      "Café hopping, optional paragliding, monasteries and sunsets. Extended Rajgundha route from ₹7,999.",
    tagline: "Paragliding capital of India",
    tags: ["paragliding", "adventure", "photography", "culture"],
    featured: true,
  },
  {
    slug: "triund-trek",
    title: "Triund Trek",
    subtitle: "Weekend ridge camp",
    duration: "2 Days / 3 Nights",
    durationShort: "2D / 3N",
    days: 3,
    difficulty: "Easy to Moderate",
    location: "Dharamshala, Himachal Pradesh",
    priceFrom: 7499,
    priceDouble: 7999,
    rating: 4.7,
    emoji: "⛰️",
    coverSrc: "/gallery/triund.webp",
    description:
      "Fri night bus, hotel freshen-up, Bhagsu and McLeod, sunrise on the Dhauladhar wall.",
    tagline: "Ridge camp, sunrise on the Dhauladhars",
    tags: ["adventure", "nature", "camping", "photography"],
    featured: true,
  },
  {
    slug: "kareri-lake",
    title: "Kareri Lake Trek",
    subtitle: "Glacial lake weekend",
    duration: "2 Days / 3 Nights",
    durationShort: "2D / 3N",
    days: 3,
    difficulty: "Moderate",
    location: "Dhauladhar, Himachal Pradesh",
    priceFrom: 7499,
    priceDouble: 7999,
    rating: 4.8,
    emoji: "💎",
    coverSrc: "/gallery/kareri-lake.webp",
    description:
      "Forest climb to lakeside camp, Kareri Lake at dawn with peak reflections.",
    tagline: "Glacial lake, mirror reflections at dawn",
    tags: ["nature", "adventure", "camping", "photography"],
    featured: true,
  },
  {
    slug: "churdhar-trek",
    title: "Churdhar Peak Trek",
    subtitle: "Summit weekend · Shirgul temple",
    duration: "2 Days / 3 Nights",
    durationShort: "2D / 3N",
    days: 3,
    difficulty: "Moderate to Difficult",
    location: "Sirmaur, Himachal Pradesh",
    priceFrom: 7499,
    priceDouble: 7999,
    rating: 4.9,
    emoji: "🛕",
    coverSrc:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    description:
      "3,647 m summit, Shirgul temple darshan, deodar camp, 360° panorama.",
    tagline: "3,647 m summit + Shirgul temple",
    tags: ["adventure", "spiritual", "nature", "camping", "photography"],
    featured: true,
    badge: "New",
  },
  {
    slug: "bir-rajgundha",
    title: "Bir, Barot to Rajgundha Trek",
    subtitle: "Hidden valley trek · coming soon",
    duration: "3 Days / 2 Nights",
    durationShort: "3D / 2N",
    days: 3,
    difficulty: "Easy to Moderate",
    location: "Kangra Valley, Himachal Pradesh",
    priceFrom: 5999,
    priceDouble: 7999,
    rating: 4.8,
    emoji: "🏕️",
    coverSrc: "/gallery/barot-bir-rajgundha.webp",
    description:
      "Trek through Bir and Barot into Rajgundha meadow with Dhauladhar views.",
    tagline: "Hidden valley through Bir & Barot",
    tags: ["nature", "camping", "adventure", "photography"],
    badge: "Coming soon",
    comingSoon: true,
  },
  {
    slug: "hampta-pass",
    title: "Hampta Pass Trek",
    subtitle: "Kullu to Spiti crossover",
    duration: "5 Nights / 6 Days",
    durationShort: "5N / 6D",
    days: 6,
    difficulty: "Moderate to Difficult",
    location: "Kullu–Spiti, Himachal Pradesh",
    priceFrom: 12999,
    rating: 4.9,
    emoji: "🏔️",
    coverSrc:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cross Hampta Pass at 4,270 m from green Kullu to barren Spiti, plus Chandratal.",
    tagline: "Kullu to Spiti crossover + Chandratal",
    tags: ["adventure", "snow", "nature", "camping", "photography"],
    featured: true,
  },
];

export function getTourBySlug(slug: string): TourCatalogEntry | undefined {
  return TOURS_CATALOG.find((t) => t.slug === slug);
}

export const FEATURED_TOURS = TOURS_CATALOG.filter((t) => t.featured);

/** Trip finder / compact list */
export function toTripFinderEntry(t: TourCatalogEntry) {
  return {
    slug: t.slug,
    title: t.title,
    price: priceFromDisplay(t.priceFrom),
    duration: t.durationShort,
    emoji: t.emoji,
    tagline: t.tagline,
    tags: t.tags,
  };
}

export const TRIP_FINDER_CATALOG = TOURS_CATALOG.map(toTripFinderEntry);
