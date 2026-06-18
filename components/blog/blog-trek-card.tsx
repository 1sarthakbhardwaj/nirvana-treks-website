import Link from "next/link";
import type { ReactNode } from "react";

type TrekStat = {
  label: string;
  value: string;
};

type Props = {
  rank: string;
  title: string;
  stats: TrekStat[];
  children: ReactNode;
  href: string;
  cta: string;
  glyph?: ReactNode;
};

export default function BlogTrekCard({
  rank,
  title,
  stats,
  children,
  href,
  cta,
  glyph,
}: Props) {
  return (
    <div className="blog-trek">
      {glyph ? (
        <div className="blog-trek-head">
          <div className="blog-trek-glyph" aria-hidden="true">
            {glyph}
          </div>
          <div>
            <span className="rank">{rank}</span>
            <h3>{title}</h3>
          </div>
        </div>
      ) : (
        <>
          <span className="rank">{rank}</span>
          <h3>{title}</h3>
        </>
      )}
      <div className="blog-trek-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b>{stat.label}</b>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>
      <p>{children}</p>
      <Link className="more" href={href}>
        {cta}
      </Link>
    </div>
  );
}
