"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  IndianRupee,
  Sparkles,
  Tent,
  CalendarDays,
} from "lucide-react";

export type TourItineraryDay = {
  day: number;
  title: string;
  timeHint?: string;
  summary?: string;
  description?: string;
  bullets?: string[];
  note?: string;
};

export type TourPackageVariant = {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  duration: string;
  badge?: string;
  pricingTiers: { label: string; price: string }[];
  itinerary: TourItineraryDay[];
  included?: string[];
};

type LogisticsItem = { label: string; detail?: string };

type Props = {
  packages: TourPackageVariant[];
  logistics?: LogisticsItem[];
  excluded?: string[];
};

type PackageTheme = {
  id: string;
  label: string;
  icon: typeof Tent;
  cardIdle: string;
  cardActive: string;
  badge: string;
  accent: string;
  accentMuted: string;
  timeline: string;
  panel: string;
  pricingBorder: string;
};

const themes: Record<string, PackageTheme> = {
  full: {
    id: "full",
    label: "Forest & stars",
    icon: Tent,
    cardIdle:
      "border-teal-500/20 bg-gradient-to-br from-teal-950/40 to-emerald-950/20 hover:border-teal-400/35",
    cardActive:
      "border-teal-400/55 bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-cyan-950/30 ring-2 ring-teal-400/25 shadow-lg shadow-teal-500/10",
    badge: "bg-teal-500/25 text-teal-100",
    accent: "text-teal-300",
    accentMuted: "text-teal-400/90",
    timeline: "from-teal-400/60 to-white/10",
    panel:
      "border-teal-500/25 bg-gradient-to-br from-teal-500/[0.08] via-emerald-500/[0.05] to-transparent",
    pricingBorder: "border-teal-500/20",
  },
  weekend: {
    id: "weekend",
    label: "Valley weekend",
    icon: CalendarDays,
    cardIdle:
      "border-amber-500/20 bg-gradient-to-br from-amber-950/40 to-orange-950/20 hover:border-amber-400/35",
    cardActive:
      "border-amber-400/55 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-950/30 ring-2 ring-amber-400/25 shadow-lg shadow-amber-500/10",
    badge: "bg-amber-500/25 text-amber-100",
    accent: "text-amber-300",
    accentMuted: "text-amber-400/90",
    timeline: "from-amber-400/60 to-white/10",
    panel:
      "border-amber-500/25 bg-gradient-to-br from-amber-500/[0.08] via-orange-500/[0.05] to-transparent",
    pricingBorder: "border-amber-500/20",
  },
};

const defaultTheme = themes.full;

function getTheme(packageId: string): PackageTheme {
  return themes[packageId] ?? defaultTheme;
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function DayCard({
  item,
  isLast,
  theme,
  index,
  reduceMotion,
}: {
  item: TourItineraryDay;
  isLast: boolean;
  theme: PackageTheme;
  index: number;
  reduceMotion: boolean | null;
}) {
  const title = item.title.replace(/^Day \d+\s*[:–—-]\s*/i, "");
  const summary = item.summary ?? item.description ?? "";
  const bullets = item.bullets ?? [];

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      {!isLast ? (
        <span
          className={`absolute left-[15px] top-10 bottom-0 w-px bg-gradient-to-b ${theme.timeline}`}
          aria-hidden
        />
      ) : null}
      <div
        className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold ${theme.accent} border-current/30 bg-current/10`}
      >
        {item.day}
      </div>
      <article className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
        {item.timeHint ? (
          <p
            className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${theme.panel} ${theme.accent}`}
          >
            <Clock className="h-3 w-3" />
            {item.timeHint}
          </p>
        ) : null}
        <h4 className="text-lg font-semibold text-white">
          <span className="mr-2 text-sm font-medium uppercase tracking-wide text-white/40">
            Day {item.day}
          </span>
          {title}
        </h4>
        {summary ? (
          <p className="mt-2 text-sm leading-relaxed text-white/70">{summary}</p>
        ) : null}
        {bullets.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {bullets.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-sm leading-relaxed text-white/75"
              >
                <Sparkles className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${theme.accent}`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {item.note ? (
          <p className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-100/85">
            <span className="font-medium text-amber-200/90">Good to know: </span>
            {item.note}
          </p>
        ) : null}
      </article>
    </motion.li>
  );
}

export default function TourPackageTabs({ packages, logistics = [], excluded = [] }: Props) {
  const [activeId, setActiveId] = useState(packages[0]?.id ?? "");
  const active = packages.find((p) => p.id === activeId) ?? packages[0];
  const reduceMotion = useReducedMotion();

  if (!active) return null;

  const theme = getTheme(active.id);
  const included = active.included ?? [];
  const ActiveIcon = theme.icon;

  return (
    <div className="space-y-12">
      <section>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-teal-950/50 via-[#1a140d] to-amber-950/50 p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-300/90">
            Pick your adventure
          </p>
          <h3 className="mt-2 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Two journeys in{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
              Parvati Valley
            </span>
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
            Same fun crew, two rhythms. Go deep with the Kheerganga trek and camp under the
            stars, or keep it light with a Kasol weekend and home by Saturday night.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {packages.map((pkg, i) => {
            const isActive = pkg.id === activeId;
            const pkgTheme = getTheme(pkg.id);
            const PkgIcon = pkgTheme.icon;
            const from = pkg.pricingTiers[0]?.price ?? "";

            return (
              <motion.button
                key={pkg.id}
                type="button"
                onClick={() => setActiveId(pkg.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                className={`relative overflow-hidden rounded-2xl border p-6 text-left transition-shadow duration-300 ${
                  isActive ? pkgTheme.cardActive : pkgTheme.cardIdle
                }`}
              >
                {isActive ? (
                  <motion.div
                    layoutId="package-glow"
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      background:
                        pkg.id === "full"
                          ? "radial-gradient(circle at top right, rgba(45,212,191,0.25), transparent 55%)"
                          : "radial-gradient(circle at top right, rgba(251,191,36,0.25), transparent 55%)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        pkg.id === "full" ? "bg-teal-500/20" : "bg-amber-500/20"
                      }`}
                    >
                      <PkgIcon
                        className={`h-5 w-5 ${pkg.id === "full" ? "text-teal-300" : "text-amber-300"}`}
                      />
                    </div>
                    {pkg.badge ? (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                          isActive ? pkgTheme.badge : "bg-white/10 text-white/55"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className={`mt-4 text-xs font-medium ${pkgTheme.accentMuted}`}>
                    {pkg.duration}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold capitalize text-white">
                    {pkg.shortName}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{pkg.subtitle}</p>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs text-white/50">from</span>
                    <span
                      className={`text-2xl font-bold ${
                        pkg.id === "full" ? "text-teal-300" : "text-amber-300"
                      }`}
                    >
                      {from}
                    </span>
                    <span className="text-xs text-white/50">per person</span>
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.section
          key={active.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`rounded-2xl border p-6 sm:p-8 ${theme.panel}`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className={`flex items-center gap-2 ${theme.accent}`}>
                <ActiveIcon className="h-4 w-4" />
                <span className="text-sm font-medium">{active.duration}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{active.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{active.subtitle}</p>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-md">
              {active.pricingTiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`rounded-xl border bg-black/25 px-4 py-4 ${theme.pricingBorder}`}
                >
                  <p className="text-xs text-white/55">{tier.label}</p>
                  <p className={`mt-1 flex items-center gap-0.5 text-2xl font-bold ${theme.accent}`}>
                    <IndianRupee className="h-5 w-5 opacity-80" aria-hidden />
                    {tier.price.replace("₹", "")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {logistics.length > 0 ? (
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium text-white/80">
                <MapPin className={`h-4 w-4 ${theme.accent}`} />
                Timings and pickup
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {logistics.map((item) => (
                  <div key={item.label} className="rounded-lg bg-white/[0.04] px-4 py-3">
                    <p className={`text-xs font-semibold uppercase tracking-wide ${theme.accentMuted}`}>
                      {item.label}
                    </p>
                    {item.detail ? (
                      <p className="mt-1 text-sm leading-snug text-white/70">{item.detail}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </motion.section>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.section
          key={`days-${active.id}`}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3 className="mb-6 text-lg font-semibold text-white">Day by day plan</h3>
          <ol className="list-none">
            {active.itinerary.map((item, index) => (
              <DayCard
                key={`${active.id}-day-${item.day}`}
                item={item}
                isLast={index === active.itinerary.length - 1}
                theme={theme}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </ol>
        </motion.section>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`extras-${active.id}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
          className="space-y-6"
        >
          {included.length > 0 ? (
            <section
              className={`rounded-2xl border p-6 sm:p-8 ${
                active.id === "full"
                  ? "border-teal-500/20 bg-teal-500/[0.06]"
                  : "border-amber-500/20 bg-amber-500/[0.06]"
              }`}
            >
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
                <CheckCircle className={`h-5 w-5 ${theme.accent}`} />
                Included in {active.shortName}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/80">
                    <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${theme.accent}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {excluded.length > 0 ? (
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
                <XCircle className="h-5 w-5 text-red-400/90" />
                Not included
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {excluded.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/65">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
