"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type MonthTier = "snow" | "good" | "great" | "mixed" | "avoid";

type Month = {
  name: string;
  label: string;
  tier: MonthTier;
  recommendation: ReactNode;
};

const MONTHS: Month[] = [
  {
    name: "Jan",
    label: "Snow treks",
    tier: "snow",
    recommendation: (
      <>
        <strong>January.</strong> Deep winter. This is snow-trek season, not regular trekking. Try a winter Triund or Prashar Lake. See our{" "}
        <Link href="/blog/snow-treks-himachal-winter">snow treks guide</Link>.
      </>
    ),
  },
  {
    name: "Feb",
    label: "Snow treks",
    tier: "snow",
    recommendation: (
      <>
        <strong>February.</strong> Reliable snow up high. A winter{" "}
        <Link href="/blog/triund-trek-guide">Triund</Link> or Prashar Lake delivers. Details in{" "}
        <Link href="/blog/snow-treks-himachal-winter">snow treks</Link>.
      </>
    ),
  },
  {
    name: "Mar",
    label: "Spring opens",
    tier: "good",
    recommendation: (
      <>
        <strong>March.</strong> Spring opens at lower and mid altitudes.{" "}
        <Link href="/blog/triund-trek-guide">Triund</Link> works well. Higher routes still hold snow.
      </>
    ),
  },
  {
    name: "Apr",
    label: "Prime spring",
    tier: "great",
    recommendation: (
      <>
        <strong>April.</strong> Prime spring. <Link href="/blog/triund-trek-guide">Triund</Link>,{" "}
        <Link href="/blog/kareri-lake-trek">Kareri Lake</Link>, and{" "}
        <Link href="/tours/bir-billing">Bir Billing</Link> flying are all on.
      </>
    ),
  },
  {
    name: "May",
    label: "Peak season",
    tier: "great",
    recommendation: (
      <>
        <strong>May.</strong> Peak season. Most treks open:{" "}
        <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga</Link>,{" "}
        <Link href="/blog/churdhar-trek-guide">Churdhar</Link>,{" "}
        <Link href="/blog/kareri-lake-trek">Kareri</Link>.
      </>
    ),
  },
  {
    name: "Jun",
    label: "Pre-monsoon",
    tier: "great",
    recommendation: (
      <>
        <strong>June.</strong> High treks at their best before the rain.{" "}
        <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga</Link> and{" "}
        <Link href="/blog/yulla-kanda-trek">Yulla Kanda</Link> shine.
      </>
    ),
  },
  {
    name: "Jul",
    label: "Monsoon",
    tier: "avoid",
    recommendation: (
      <>
        <strong>July.</strong> Monsoon. Skip the popular valleys. Rain-shadow Spiti is the play, read{" "}
        <Link href="/blog/monsoon-trekking-himachal">monsoon trekking</Link>.
      </>
    ),
  },
  {
    name: "Aug",
    label: "Monsoon",
    tier: "avoid",
    recommendation: (
      <>
        <strong>August.</strong> Peak monsoon. Only rain-shadow regions are sensible. See{" "}
        <Link href="/blog/monsoon-trekking-himachal">what is safe</Link>.
      </>
    ),
  },
  {
    name: "Sep",
    label: "Clears late",
    tier: "mixed",
    recommendation: (
      <>
        <strong>September.</strong> Clears in the second half. Late Sep is excellent for{" "}
        <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga</Link> and{" "}
        <Link href="/blog/kareri-lake-trek">Kareri</Link>.
      </>
    ),
  },
  {
    name: "Oct",
    label: "Best views",
    tier: "great",
    recommendation: (
      <>
        <strong>October.</strong> Best views of the year. Everything is good:{" "}
        <Link href="/blog/triund-trek-guide">Triund</Link>,{" "}
        <Link href="/blog/churdhar-trek-guide">Churdhar</Link>,{" "}
        <Link href="/blog/yulla-kanda-trek">Yulla Kanda</Link>.
      </>
    ),
  },
  {
    name: "Nov",
    label: "Late autumn",
    tier: "good",
    recommendation: (
      <>
        <strong>November.</strong> Crisp and quiet early in the month.{" "}
        <Link href="/blog/triund-trek-guide">Triund</Link> and{" "}
        <Link href="/blog/kareri-lake-trek">Kareri</Link> still go. High passes are closing.
      </>
    ),
  },
  {
    name: "Dec",
    label: "Winter snow",
    tier: "snow",
    recommendation: (
      <>
        <strong>December.</strong> Winter snow begins. Snow Triund and Prashar Lake. See{" "}
        <Link href="/blog/snow-treks-himachal-winter">snow treks</Link>.
      </>
    ),
  },
];

const TIER_CLASS: Record<MonthTier, string> = {
  great: "s-great",
  good: "s-good",
  mixed: "s-mixed",
  snow: "s-snow",
  avoid: "s-avoid",
};

export default function BlogMonthPicker() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="blog-picker">
      <div className="blog-months">
        {MONTHS.map((month, index) => (
          <button
            key={month.name}
            type="button"
            className={`blog-mo ${TIER_CLASS[month.tier]}${selected === index ? " sel" : ""}`}
            onClick={() => setSelected(index)}
          >
            <div className="blog-mo-bar" />
            <b>{month.name}</b>
            <span>{month.label}</span>
          </button>
        ))}
      </div>
      <div className="blog-month-legend">
        <span><i className="lg-great" />Prime</span>
        <span><i className="lg-good" />Good</span>
        <span><i className="lg-mixed" />Mixed</span>
        <span><i className="lg-snow" />Snow treks</span>
        <span><i className="lg-avoid" />Avoid</span>
      </div>
      <div className="blog-picker-result">
        {selected === null ? (
          <span className="blog-picker-lean">Tap a month above to see what works.</span>
        ) : (
          <p className="blog-picker-why">{MONTHS[selected]?.recommendation}</p>
        )}
      </div>
    </div>
  );
}
