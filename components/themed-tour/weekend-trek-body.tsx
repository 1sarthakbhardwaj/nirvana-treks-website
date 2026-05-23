"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  MessageCircle,
  Phone,
  Users,
  Gamepad2,
  Music,
  MapPin,
  Mountain,
  Sunrise,
  Tent,
  Flame,
  Gift,
  UtensilsCrossed,
  Building2,
  Waves,
  Coffee,
  Sparkles,
  Car,
} from "lucide-react";
import type { ThemedTourDay, ThemedTourPackage, ThemedTourTheme } from "./types";

const easeOut = [0.22, 1, 0.36, 1] as const;

function actIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("intro")) return <Users />;
  if (l.includes("mafia") || l.includes("imposter") || l.includes("game")) return <Gamepad2 />;
  if (l.includes("playlist") || l.includes("music")) return <Music />;
  if (l.includes("hotel") || l.includes("freshen")) return <Building2 />;
  if (l.includes("bhagsu") || l.includes("mcleod") || l.includes("café") || l.includes("cafe"))
    return <Coffee />;
  if (l.includes("trek") || l.includes("ridge") || l.includes("down") || l.includes("descent"))
    return <Mountain />;
  if (l.includes("sunrise")) return <Sunrise />;
  if (l.includes("bonfire") || l.includes("dinner")) return <Flame />;
  if (l.includes("camp") || l.includes("stay")) return <Tent />;
  if (l.includes("gift") || l.includes("dish")) return <Gift />;
  if (l.includes("dish")) return <UtensilsCrossed />;
  if (l.includes("forest") || l.includes("stream") || l.includes("lake") || l.includes("water"))
    return <Waves />;
  if (l.includes("star")) return <Sparkles />;
  if (l.includes("shrine") || l.includes("mirror") || l.includes("temple") || l.includes("darshan"))
    return <Sparkles />;
  if (l.includes("summit") || l.includes("panorama") || l.includes("360")) return <Mountain />;
  if (l.includes("deodar") || l.includes("forest")) return <Tent />;
  if (l.includes("transport") || l.includes("drive")) return <Car />;
  return <MapPin />;
}

type Props = {
  theme: ThemedTourTheme;
  headKicker: string;
  headTitle: React.ReactNode;
  headSubtitle: string;
  pkg: ThemedTourPackage;
};

export default function WeekendTrekBody({ theme, headKicker, headTitle, headSubtitle, pkg }: Props) {
  const reduce = useReducedMotion();
  const display = { fontFamily: theme.displayFont };

  return (
    <>
      <section className="pt-16 pb-2" style={{ background: theme.bg, color: theme.cream }}>
        <div className="mx-auto w-full max-w-[1080px] px-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              {headKicker}
            </p>
            <h2
              className="mt-1.5 font-medium leading-tight tracking-[-0.01em]"
              style={{ ...display, fontSize: "clamp(30px, 4.4vw, 46px)", color: theme.cream }}
            >
              {headTitle}
            </h2>
            <p
              className="mx-auto mt-3 max-w-[560px] text-[15px] leading-relaxed"
              style={{ color: theme.muted }}
            >
              {headSubtitle}
            </p>
          </motion.div>

          <div
            className="mt-8 mb-2 grid grid-cols-2 overflow-hidden rounded-2xl border sm:grid-cols-4"
            style={{ borderColor: theme.line, background: theme.line }}
          >
            {pkg.meta.map((m, i) => (
              <div key={i} className="p-5 sm:p-6" style={{ background: theme.ink2 }}>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: theme.accent }}
                >
                  {m.label}
                </p>
                <p
                  className="mt-1 font-medium leading-none"
                  style={{ ...display, fontSize: "29px", color: theme.cream }}
                >
                  {m.value}
                </p>
                <p className="mt-1.5 text-[12.5px]" style={{ color: theme.muted }}>
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

          <Timeline days={pkg.days} theme={theme} display={display} reduce={reduce} />
        </div>
      </section>

      <section className="pt-16 pb-8" style={{ background: theme.bg, color: theme.cream }}>
        <div className="mx-auto w-full max-w-[1080px] px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-[13px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: theme.accent }}
              >
                The details
              </p>
              <h2
                className="mt-1.5 font-medium leading-tight tracking-[-0.01em]"
                style={{ ...display, fontSize: "clamp(28px, 3.6vw, 40px)", color: theme.cream }}
              >
                What&apos;s included
              </h2>
              <ul className="mt-6 grid gap-3 gap-x-6 sm:grid-cols-2">
                {pkg.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14.5px]"
                    style={{ color: theme.cream, opacity: 0.88 }}
                  >
                    <Check
                      className="mt-0.5 h-[17px] w-[17px] flex-shrink-0"
                      style={{ stroke: theme.green }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[13.5px] leading-relaxed" style={{ color: theme.muted }}>
                <b className="font-semibold" style={{ color: theme.cream }}>
                  Not included:
                </b>{" "}
                {pkg.notIncluded}
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl border p-7 sm:p-8"
              style={{
                borderColor: theme.line,
                background: `linear-gradient(160deg, ${theme.ink3}, ${theme.ink2})`,
              }}
            >
              <span
                className="pointer-events-none absolute -right-[20%] -top-[40%] h-60 w-60 rounded-full"
                style={{ background: theme.priceGlow }}
                aria-hidden
              />
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: theme.accentSoft }}
              >
                {theme.priceLabel}
              </p>
              {pkg.prices.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 py-4"
                  style={{
                    borderBottom:
                      i < pkg.prices.length - 1 ? `1px solid ${theme.line}` : undefined,
                  }}
                >
                  <p className="text-[14.5px]" style={{ color: theme.cream, opacity: 0.88 }}>
                    {p.name}
                  </p>
                  <p className="font-medium" style={{ ...display, fontSize: "32px", color: theme.cream }}>
                    {p.price}{" "}
                    <small className="text-[13px] font-normal" style={{ color: theme.muted }}>
                      /pp
                    </small>
                  </p>
                </div>
              ))}
              <p className="mt-4 text-[12.5px] leading-relaxed" style={{ color: theme.muted }}>
                Prices per person. 50% advance confirms your seat. Balance 7 days before departure.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/918920614215"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: theme.btnGradient,
                    color: theme.btnText,
                    boxShadow: theme.btnShadow,
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-[15px] font-semibold transition-colors"
                  style={{ borderColor: theme.line, color: theme.cream }}
                >
                  <Phone className="h-4 w-4" />
                  Call us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Timeline({
  days,
  theme,
  display,
  reduce,
}: {
  days: ThemedTourDay[];
  theme: ThemedTourTheme;
  display: React.CSSProperties;
  reduce: boolean | null;
}) {
  return (
    <div className="relative ml-2 pt-10">
      <span
        className="pointer-events-none absolute left-[23px] top-[64px] bottom-[64px] w-0.5"
        style={{ background: theme.gradientLine, opacity: 0.55 }}
        aria-hidden
      />
      <ol className="list-none">
        {days.map((day, index) => (
          <DayBlock key={`${day.node}-${day.label}`} day={day} theme={theme} display={display} reduce={reduce} index={index} />
        ))}
      </ol>
    </div>
  );
}

function DayBlock({
  day,
  theme,
  display,
  reduce,
  index,
}: {
  day: ThemedTourDay;
  theme: ThemedTourTheme;
  display: React.CSSProperties;
  reduce: boolean | null;
  index: number;
}) {
  const whenParts = day.when.split(" · ");

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: easeOut }}
      className="relative pb-10 pl-[60px] sm:pl-[74px] last:pb-0"
    >
      <div
        className="absolute left-0 top-0.5 z-[2] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2"
        style={{
          ...display,
          fontSize: day.node.length > 2 ? "16px" : "20px",
          fontWeight: 500,
          background: theme.ink3,
          borderColor: day.highlight ? theme.accent : theme.line,
          color: day.highlight ? theme.warm : theme.cream,
        }}
      >
        {day.node}
      </div>

      <p
        className="text-[12px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: theme.accentSoft }}
      >
        {day.label}
      </p>
      <h3
        className="mt-1 font-medium leading-tight tracking-[-0.01em]"
        style={{ ...display, fontSize: "clamp(24px, 3.2vw, 34px)", color: theme.cream }}
      >
        {day.title}
      </h3>

      <p className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[13px]" style={{ color: theme.muted }}>
        {whenParts.map((part, i) => {
          const isAccent =
            /\d/.test(part) ||
            part.toLowerCase().includes("stay") ||
            part.toLowerCase().includes("board") ||
            part.toLowerCase().includes("drop") ||
            part.toLowerCase().includes("evening") ||
            part.toLowerCase().includes("early");
          return isAccent ? (
            <b key={i} className="font-semibold" style={{ color: theme.accentMuted }}>
              {part}
            </b>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </p>

      <p className="mt-3.5 max-w-[660px] text-[15.5px] leading-relaxed" style={{ color: theme.cream, opacity: 0.88 }}>
        {day.body}
      </p>

      {day.acts && day.acts.length > 0 ? (
        <div className="mt-4 flex max-w-[660px] flex-wrap gap-2.5">
          {day.acts.map((a, i) => {
            const warm = day.warmActs?.[i];
            return (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-[10px] border px-3.5 py-1.5 text-[13.5px]"
                style={{ borderColor: theme.line, background: theme.ink2, color: theme.cream }}
              >
                <span
                  className="[&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:stroke-current"
                  style={{ color: warm ? theme.warm : theme.accentSoft }}
                >
                  {actIcon(a)}
                </span>
                {a}
              </span>
            );
          })}
        </div>
      ) : null}
    </motion.li>
  );
}
