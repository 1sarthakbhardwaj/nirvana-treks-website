import { FEATURABLE_WIDGET_ID } from "@/lib/guest-reviews";

export type GuestReview = {
  reviewId: string;
  reviewer: {
    profilePhotoUrl: string;
    displayName: string;
  };
  starRating: number;
  comment: string;
  createTime: string;
};

export type ReviewsPayload = {
  averageRating: number;
  totalReviewCount: number;
  writeReviewUrl: string;
  reviews: GuestReview[];
};

export async function fetchGuestReviews(): Promise<ReviewsPayload | null> {
  const res = await fetch(
    `https://api.featurable.com/v1/widgets/${FEATURABLE_WIDGET_ID}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;

  const data = (await res.json()) as {
    averageRating?: number;
    totalReviewCount?: number;
    profileUrl?: string;
    reviews?: GuestReview[];
  };

  if (!data.reviews?.length) return null;

  return {
    averageRating: data.averageRating ?? 5,
    totalReviewCount: data.totalReviewCount ?? data.reviews.length,
    writeReviewUrl: data.profileUrl ?? "",
    reviews: data.reviews,
  };
}

export function formatReviewerInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
}

export function formatRelativeReviewDate(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - then) / 1000));

  if (diffSec < 60) return "Just now";
  const mins = Math.floor(diffSec / 60);
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}
