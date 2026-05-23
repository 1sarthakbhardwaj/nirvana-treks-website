"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Gamepad2,
  Music,
  Coffee,
  ShoppingBag,
  Gift,
  UtensilsCrossed,
  Mountain,
  Waves,
  Flame,
  Sparkles,
  Sunrise,
  Tent,
  MapPin,
  Building2,
  Car,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  kasolRoutes,
  kasolIncluded,
  kasolNotIncluded,
  type KasolDay,
  type KasolRoute,
} from "./kasol-kheerganga-data";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

function actIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("intro")) return <Users />;
  if (l.includes("mafia") || l.includes("imposter") || l.includes("game")) return <Gamepad2 />;
  if (l.includes("playlist") || l.includes("music")) return <Music />;
  if (l.includes("café") || l.includes("cafe")) return <Coffee />;
  if (l.includes("market")) return <ShoppingBag />;
  if (l.includes("dish") || l.includes("dinner") || l.includes("langar")) return <UtensilsCrossed />;
  if (l.includes("gift")) return <Gift />;
  if (l.includes("trek") || l.includes("pine") || l.includes("down")) return <Mountain />;
  if (l.includes("spring") || l.includes("hot")) return <Waves />;
  if (l.includes("bonfire")) return <Flame />;
  if (l.includes("star")) return <Sparkles />;
  if (l.includes("sunrise")) return <Sunrise />;
  if (l.includes("manikaran") || l.includes("hidimba") || l.includes("temple"))
    return <Building2 />;
  if (l.includes("manali") || l.includes("drive") || l.includes("solang") || l.includes("sissu"))
    return <Car />;
  if (l.includes("camp") || l.includes("stay")) return <Tent />;
  return <MapPin />;
}

export default function KasolKheergangaSwitcher() {
  const [activeId, setActiveId] = useState<KasolRoute["id"]>("kheerganga");
  const active = kasolRoutes.find((r) => r.id === activeId) ?? kasolRoutes[0];
  const reduce = useReducedMotion();

  return (
    <>
      <section className="bg-[#0a0f11] pt-16 pb-2 text-[#eef2ee]">
        <div className="mx-auto w-full max-w-[1080px] px-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#46b3a6]">
              Choose your route
            </p>
            <h2
              className="mt-1.5 font-normal leading-tight tracking-[-0.01em]"
              style={{ ...display, fontSize: "clamp(30px, 4.4vw, 46px)" }}
            >
              Two ways up the{" "}
              <em className="italic text-[#f4a93c]" style={{ fontStyle: "italic" }}>
                valley
              </em>
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-relaxed text-[#9aa6a3]">
              Kheerganga can close for snow early in the season. Here is exactly what we do
              either way: trek to the camp, or pivot through Manikaran to Manali. Same price,
              same trip energy.
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <div className="relative inline-flex gap-1.5 rounded-full border border-white/[0.09] bg-[#111a1c] p-1.5">
              {kasolRoutes.map((route) => {
                const isActive = route.id === activeId;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setActiveId(route.id)}
                    className={`relative z-10 flex flex-col items-center gap-px rounded-full px-6 py-3 text-[15px] font-semibold leading-tight transition-colors duration-300 ${
                      isActive ? "text-[#04110f]" : "text-[#9aa6a3] hover:text-[#eef2ee]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="kasol-pill"
                        className="absolute inset-0 -z-10 rounded-full"
                        style={{
                          background: "linear-gradient(135deg,#6fd0c4,#46b3a6)",
                          boxShadow: "0 8px 24px rgba(70,179,166,.35)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span>{route.label}</span>
                    <span
                      className={`text-[11px] font-medium uppercase tracking-[0.08em] ${
                        isActive ? "text-[#04110f]/60" : "text-[#74807d]"
                      }`}
                    >
                      {route.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              <MetaStrip route={active} />
              <Timeline route={active} reduce={reduce} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <DetailsSection active={active} reduce={reduce} />
    </>
  );
}

function MetaStrip({ route }: { route: KasolRoute }) {
  return (
    <div className="mt-8 mb-2 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-4">
      {route.meta.map((m, i) => (
        <div key={`${route.id}-${i}`} className="bg-[#111a1c] p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#46b3a6]">
            {m.label}
          </p>
          <p
            className="mt-1 font-normal leading-none text-[#eef2ee]"
            style={{ ...display, fontSize: "30px" }}
          >
            {m.value}
          </p>
          <p className="mt-1.5 text-[12.5px] text-[#9aa6a3]">{m.sub}</p>
        </div>
      ))}
    </div>
  );
}

function Timeline({ route, reduce }: { route: KasolRoute; reduce: boolean | null }) {
  return (
    <div className="relative ml-2 pt-10">
      <span
        className="pointer-events-none absolute left-[23px] top-[64px] bottom-[64px] w-0.5"
        style={{
          background: "linear-gradient(180deg,#6fd0c4,#46b3a6 45%,#f4a93c 100%)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <ol className="list-none">
        {route.days.map((day, idx) => (
          <DayBlock key={`${route.id}-d${day.day}`} day={day} index={idx} reduce={reduce} />
        ))}
      </ol>
    </div>
  );
}

function DayBlock({
  day,
  index,
  reduce,
}: {
  day: KasolDay;
  index: number;
  reduce: boolean | null;
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
        className={`absolute left-0 top-0.5 z-[2] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 bg-[#172226] ${
          day.highlight
            ? "border-[#f4a93c] text-[#f4a93c]"
            : "border-white/15 text-[#eef2ee]"
        }`}
        style={{ ...display, fontSize: "18px", fontWeight: 400 }}
      >
        {String(day.day).padStart(2, "0")}
      </div>

      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6fd0c4]">
        {day.label}
      </p>

      <h3
        className="mt-1 font-normal leading-tight tracking-[-0.01em] text-[#eef2ee]"
        style={{ ...display, fontSize: "clamp(24px, 3.2vw, 34px)" }}
      >
        {day.title}
      </h3>

      <p className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[13px] text-[#9aa6a3]">
        {whenParts.map((part, i) => {
          const isAccent =
            /\d/.test(part) ||
            part.toLowerCase().includes("stay") ||
            part.toLowerCase().includes("board") ||
            part.toLowerCase().includes("drop") ||
            part.toLowerCase().includes("evening");
          return isAccent ? (
            <b key={i} className="font-semibold text-[#6fd0c4]">
              {part}
            </b>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </p>

      <p className="mt-3.5 max-w-[660px] text-[15.5px] leading-relaxed text-[#d6ded9]">
        {day.body}
      </p>

      {day.acts && day.acts.length > 0 ? (
        <div className="mt-4 flex max-w-[660px] flex-wrap gap-2.5">
          {day.acts.map((a, i) => {
            const warm = day.warmActs?.[i];
            return (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/[0.09] bg-[#111a1c] px-3.5 py-1.5 text-[13.5px] text-[#eef2ee]"
              >
                <span
                  className={`[&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:stroke-current ${
                    warm ? "text-[#f4a93c]" : "text-[#6fd0c4]"
                  }`}
                >
                  {actIcon(a)}
                </span>
                {a}
              </span>
            );
          })}
        </div>
      ) : null}

      {day.pivot ? (
        <p
          className="mt-4 max-w-[660px] rounded-xl border border-[#f4a93c]/22 bg-[#f4a93c]/[0.07] px-4 py-3.5 text-[14px] leading-relaxed text-[#ece3d3]"
          style={{ borderLeftWidth: "3px", borderLeftColor: "#f4a93c" }}
        >
          <b className="font-semibold text-[#f4a93c]">Snow on the trail? </b>
          {day.pivot.replace(/^Snow on the trail\?\s*/i, "")}
        </p>
      ) : null}
    </motion.li>
  );
}

function DetailsSection({
  active,
  reduce,
}: {
  active: KasolRoute;
  reduce: boolean | null;
}) {
  return (
    <section className="bg-[#0a0f11] pt-16 pb-8 text-[#eef2ee]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#46b3a6]">
              The details
            </p>
            <h2
              className="mt-1.5 font-normal leading-tight tracking-[-0.01em]"
              style={{ ...display, fontSize: "clamp(28px, 3.6vw, 40px)" }}
            >
              What&apos;s included
            </h2>

            <ul className="mt-6 grid gap-3 gap-x-6 sm:grid-cols-2">
              {kasolIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-[#d6ded9]">
                  <Check className="mt-0.5 h-[17px] w-[17px] flex-shrink-0 stroke-[#8fb96b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[13.5px] leading-relaxed text-[#9aa6a3]">
              <b className="font-semibold text-[#eef2ee]">Not included:</b> {kasolNotIncluded}
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#172226] to-[#111a1c] p-7 sm:p-8"
          >
            <span
              className="pointer-events-none absolute -right-[20%] -top-[40%] h-60 w-60 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,rgba(70,179,166,.22),transparent 70%)",
              }}
              aria-hidden
            />

            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6fd0c4]">
              {active.priceLabel}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {active.prices.map((p, i) => (
                  <div
                    key={p.name}
                    className={`flex items-baseline justify-between gap-4 py-4 ${
                      i < active.prices.length - 1 ? "border-b border-white/[0.09]" : ""
                    }`}
                  >
                    <p className="text-[14.5px] text-[#d6ded9]">{p.name}</p>
                    <p
                      className="font-normal text-[#eef2ee]"
                      style={{ ...display, fontSize: "32px" }}
                    >
                      {p.price}{" "}
                      <small
                        className="text-[13px] font-normal text-[#9aa6a3]"
                        style={{ fontFamily: "inherit" }}
                      >
                        /pp
                      </small>
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-[12.5px] leading-relaxed text-[#9aa6a3]">
              Prices per person. 50% advance confirms your seat. Balance 7 days before
              departure.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/918920614215"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-semibold text-[#04110f] transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#6fd0c4,#46b3a6)",
                  boxShadow: "0 10px 28px rgba(70,179,166,.3)",
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-[15px] font-semibold text-[#eef2ee] transition-colors hover:border-[#6fd0c4] hover:text-[#6fd0c4]"
              >
                <Phone className="h-4 w-4" />
                Call us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
