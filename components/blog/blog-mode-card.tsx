import type { ReactNode } from "react";

type Stat = {
  label: string;
  value: string;
};

type Props = {
  tagline: string;
  title: string;
  stats: Stat[];
  children: ReactNode;
};

export default function BlogModeCard({
  tagline,
  title,
  stats,
  children,
}: Props) {
  return (
    <div className="blog-mode">
      <span className="tagline">{tagline}</span>
      <h3>{title}</h3>
      <div className="blog-mode-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b>{stat.label}</b>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>
      <p>{children}</p>
    </div>
  );
}
