import StructuredData from "@/components/structured-data";
import { getTourBySlug } from "@/lib/tours-catalog";
import { touristTripJsonLd, tourBreadcrumbJsonLd } from "@/lib/seo";

type Props = {
  slug: string;
};

export default function TourSeoJsonLd({ slug }: Props) {
  const entry = getTourBySlug(slug);
  if (!entry) return null;

  return (
    <StructuredData
      data={[touristTripJsonLd(entry), tourBreadcrumbJsonLd(entry)]}
    />
  );
}
