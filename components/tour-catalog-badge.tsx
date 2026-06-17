import { tourBadgeClassName } from "@/lib/tours-catalog";

export default function TourCatalogBadge({ label }: { label: string }) {
  return (
    <span className={tourBadgeClassName(label)}>{label}</span>
  );
}
