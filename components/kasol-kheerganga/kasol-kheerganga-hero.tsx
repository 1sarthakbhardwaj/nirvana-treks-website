"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, Star } from "lucide-react";
import { kasolStars } from "./kasol-kheerganga-data";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function KasolKheergangaHero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: easeOut },
  });

  return (
    <header
      className="relative isolate flex min-h-[94vh] flex-col justify-end overflow-hidden"
      style={{
        background:
          "radial-gradient(70% 50% at 78% 16%, rgba(207,227,240,.30) 0%, rgba(120,170,200,.06) 36%, transparent 60%), radial-gradient(90% 60% at 50% 118%, rgba(255,122,69,.30) 0%, rgba(244,169,60,.06) 36%, transparent 60%), linear-gradient(180deg,#101c33 0%, #142630 34%, #15302e 60%, #0a0f11 100%)",
      }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 50, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        className="pointer-events-none absolute right-[20%] top-[13%] h-24 w-24 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 38%,#fdfdf6 0%,#e6ecef 55%,#c4d0d6 100%)",
          boxShadow: "0 0 70px 18px rgba(207,227,240,.4)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {kasolStars.map((s, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-[#cfe3f0] ${s.big ? "h-[3px] w-[3px] shadow-[0_0_6px_rgba(207,227,240,.8)]" : "h-0.5 w-0.5"}`}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              opacity: 0.85,
              animation: reduce ? undefined : `kasol-tw 3.4s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-[120px] w-[340px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center bottom,rgba(255,122,69,.5),transparent 70%)",
          filter: "blur(6px)",
          animation: reduce ? undefined : "kasol-flick 3s ease-in-out infinite",
        }}
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] block w-full"
        viewBox="0 0 1440 440"
        preserveAspectRatio="none"
        height="440"
        aria-hidden
      >
        <path
          d="M0 440 V210 L150 120 L300 200 L460 90 L640 190 L820 70 L1010 180 L1210 110 L1440 190 V440 Z"
          fill="#9fb6c0"
          opacity=".26"
        />
        <path
          d="M0 440 V270 L180 210 L360 270 L540 190 L760 260 L980 180 L1180 250 L1440 210 V440 Z"
          fill="#16302e"
          opacity=".82"
        />
        <path
          d="M0 440 V340 L120 312 L150 300 L180 312 L320 340 L430 318 L520 290 L560 278 L600 290 L760 340 L900 312 L1010 286 L1050 274 L1090 286 L1240 330 L1440 320 V440 Z"
          fill="#0a0f11"
        />
        <g fill="#0a0f11">
          <path d="M240 348 l14 -34 14 34 z" />
          <path d="M268 352 l11 -26 11 26 z" />
          <path d="M690 344 l16 -38 16 38 z" />
          <path d="M722 348 l11 -26 11 26 z" />
          <path d="M1130 342 l14 -32 14 32 z" />
          <path d="M1158 346 l10 -24 10 24 z" />
        </g>
      </svg>

      <div className="relative z-[3] mx-auto w-full max-w-[1080px] px-6 pb-[7vh] pt-32 text-[#eef2ee]">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#46b3a6]"
            style={{ boxShadow: "0 0 12px #46b3a6" }}
          />
          Nirvana Treks &amp; Tours
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-[13px] font-medium uppercase tracking-[0.32em] text-[#6fd0c4]"
        >
          Parvati Valley · Himachal Pradesh
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="mt-2.5 font-normal leading-[0.92] tracking-[-0.01em]"
          style={{ ...display, fontSize: "clamp(54px, 10.5vw, 132px)" }}
        >
          Kasol &amp;{" "}
          <em className="italic text-[#f4a93c]" style={{ fontStyle: "italic" }}>
            Kheerganga
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 max-w-[580px] text-base text-[#dde6e2] sm:text-lg"
        >
          Hot springs under a full sky of stars, slow café mornings by the Parvati, and a
          climb through pine forest to the meadow at Kheerganga. One valley, two ways to run
          it, depending on the snow.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-7 flex flex-wrap gap-2.5">
          <Chip icon={<Calendar className="h-[15px] w-[15px]" />}>5 days · 4 nights</Chip>
          <Chip icon={<Clock className="h-[15px] w-[15px]" />}>From Delhi or Chandigarh</Chip>
          <Chip icon={<Star className="h-[15px] w-[15px]" />}>From ₹7,499</Chip>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
          className="mt-9 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#9aa6a3]"
        >
          <span className="relative inline-block h-px w-9 overflow-hidden bg-[#9aa6a3]">
            <span
              className="absolute inset-y-0 left-0 w-1/2 bg-[#46b3a6]"
              style={{
                animation: reduce ? undefined : "kasol-slidebar 2.4s ease-in-out infinite",
              }}
            />
          </span>
          Scroll to plan your trip
        </motion.div>
      </div>

      <style>{`
        @keyframes kasol-tw { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
        @keyframes kasol-flick { 0%, 100% { opacity: .7; } 50% { opacity: 1; } }
        @keyframes kasol-slidebar { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </header>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[13px] font-medium text-[#eef2ee] backdrop-blur">
      <span className="text-[#6fd0c4]">{icon}</span>
      {children}
    </span>
  );
}
