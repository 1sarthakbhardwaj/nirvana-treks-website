import type { Metadata } from "next";
import type { TourCatalogEntry } from "@/lib/tours-catalog";
import { formatInr } from "@/lib/tours-catalog";

export const SITE_URL = "https://nirvanatreks.com";

export const SITE_NAME = "Nirvana Treks & Tours";

export const DEFAULT_DESCRIPTION =
  "Government-authorized Himalayan treks and tours from Delhi and Chandigarh. Weekend trips to Triund, Kasol, Bir Billing, Kareri Lake, Churdhar, and more.";

export const DEFAULT_OG_IMAGE = "/gallery/kasol-kheerganga.webp";

export const SITE_EMAIL = "nirvanatreks.team@gmail.com";

export const SITE_PHONES = ["+919211946444", "+919816780973"];

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildTourMetadata(entry: TourCatalogEntry): Metadata {
  const description = entry.comingSoon
    ? `${entry.description} Coming soon — join the waitlist via WhatsApp or contact.`
    : `${entry.description} ${entry.duration} from ${formatInr(entry.priceFrom)} per person. ${entry.location}.`;

  return buildPageMetadata({
    title: entry.title,
    description,
    path: `/tours/${entry.slug}`,
    image: entry.coverSrc,
    keywords: [
      entry.title,
      entry.location,
      "Himachal trek",
      "weekend trek from Delhi",
      ...entry.tags,
    ],
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon-512.png"),
    email: SITE_EMAIL,
    telephone: SITE_PHONES,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: DEFAULT_DESCRIPTION,
  };
}

export function touristTripJsonLd(entry: TourCatalogEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: entry.title,
    description: entry.description,
    touristType: "Adventure travellers",
    itinerary: {
      "@type": "ItemList",
      description: `${entry.duration} · ${entry.location}`,
    },
    offers: {
      "@type": "Offer",
      price: entry.priceFrom,
      priceCurrency: "INR",
      availability: entry.comingSoon
        ? "https://schema.org/preorder"
        : "https://schema.org/InStock",
      url: absoluteUrl(`/tours/${entry.slug}`),
    },
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function tourBreadcrumbJsonLd(entry: TourCatalogEntry) {
  return breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: entry.title, path: `/tours/${entry.slug}` },
  ]);
}
