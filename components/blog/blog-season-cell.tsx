type SeasonRating = "great" | "good" | "mixed" | "avoid" | "snow";

type Props = {
  rating: SeasonRating;
  label: string;
};

export default function BlogSeasonCell({ rating, label }: Props) {
  return <span className={`blog-cm blog-cm-${rating}`}>{label}</span>;
}
