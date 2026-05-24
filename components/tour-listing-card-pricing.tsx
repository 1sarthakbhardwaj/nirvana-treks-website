import {
  formatInr,
  priceFromDisplay,
  pricingTiersLine,
  type TourCatalogEntry,
} from "@/lib/tours-catalog";

type Props = {
  tour: TourCatalogEntry;
  /** Larger price on tour detail grid cards */
  size?: "default" | "large";
  className?: string;
};

export default function TourListingCardPricing({
  tour,
  size = "default",
  className = "",
}: Props) {
  const tiers = pricingTiersLine(tour);
  const fromClass =
    size === "large"
      ? "text-2xl font-bold text-emerald-400"
      : "text-base font-bold text-emerald-400";

  return (
    <div className={`text-right ${className}`}>
      <p className={fromClass}>{priceFromDisplay(tour.priceFrom)}</p>
      {tiers ? (
        <p className="mt-0.5 text-[11px] leading-snug text-gray-400">{tiers}</p>
      ) : (
        <p className="mt-0.5 text-[11px] text-gray-500">per person</p>
      )}
    </div>
  );
}

/** Inline variant for compact rows */
export function TourPriceSummary({ tour }: { tour: TourCatalogEntry }) {
  const tiers = pricingTiersLine(tour);
  return (
    <span className="text-sm text-gray-400">
      {priceFromDisplay(tour.priceFrom)}
      {tiers ? (
        <span className="block text-[11px] text-gray-500">{tiers}</span>
      ) : null}
    </span>
  );
}

export { formatInr, priceFromDisplay };
