"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Mountain, Star } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-newsreader), Georgia, serif" };

export default function TriundHero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: easeOut },
  });

  return (
    <header
      className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden"
      style={{
        background:
          "radial-gradient(85% 60% at 26% 20%, rgba(255,200,140,.5) 0%, rgba(255,160,100,.12) 40%, transparent 66%), linear-gradient(180deg,#21364a 0%, #3a4a55 26%, #7a6a5e 52%, #b98a63 70%, #1c2427 100%)",
      }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 54, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        className="pointer-events-none absolute left-[24%] top-[15%] h-[108px] w-[108px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,#fff6e0 0%,#ffd07a 48%,#ff9d52 78%,transparent 100%)",
          boxShadow: "0 0 80px 24px rgba(255,170,90,.45)",
        }}
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute right-[24%] top-[26%] opacity-50"
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        stroke="#f3efe7"
        strokeWidth="2"
        style={{
          animation: reduce ? undefined : "triund-floaty 7s ease-in-out infinite",
        }}
        aria-hidden
      >
        <path d="M6 20q8-10 16 0 8-10 16 0" />
        <path d="M52 12q6-8 12 0 6-8 12 0" />
        <path d="M92 24q5-7 10 0 5-7 10 0" />
      </svg>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 block w-full"
        viewBox="0 0 1440 460"
        preserveAspectRatio="none"
        height="460"
        aria-hidden
      >
        <path
          d="M0 460 V200 L150 120 L300 190 L470 80 L640 180 L820 70 L1010 170 L1210 110 L1440 180 V460 Z"
          fill="#9fb0bd"
          opacity=".34"
        />
        <path
          d="M0 460 V270 L180 200 L360 260 L540 175 L760 250 L980 165 L1180 240 L1440 200 V460 Z"
          fill="#5b6b62"
          opacity=".7"
        />
        <path
          d="M0 460 V340 L220 300 L430 345 L640 300 L880 348 L1120 305 L1440 335 V460 Z"
          fill="#37463c"
        />
        <path
          d="M0 460 V392 L240 372 L520 396 L820 372 L1120 396 L1440 380 V460 Z"
          fill="#1c2427"
        />
        <g fill="#1c2427">
          <path d="M610 350 l8 -16 8 16 z" />
          <path d="M628 352 l6 -12 6 12 z" />
        </g>
      </svg>

      <div className="relative z-[3] mx-auto w-full max-w-[1080px] px-6 pb-[7vh] pt-32 text-[#f3efe7]">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#ff8a5b]"
            style={{ boxShadow: "0 0 12px #ff8a5b" }}
          />
          Nirvana Treks &amp; Tours
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-[13px] font-medium uppercase tracking-[0.32em] text-[#ffb787]"
        >
          Dharamshala · The Dhauladhar Ridge
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="mt-1.5 font-medium leading-[0.94] tracking-[-0.02em]"
          style={{ ...display, fontSize: "clamp(58px, 11.5vw, 142px)" }}
        >
          Triund{" "}
          <em className="italic text-[#ffb787]" style={{ fontStyle: "italic" }}>
            Trek
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 max-w-[560px] text-base text-[#ece6da] sm:text-lg"
        >
          A short, sharp weekend climb to the most famous ridge in the Dhauladhars. Camp at
          2,875 m, wake up to the snow wall going gold at sunrise. We even throw in a hotel
          to freshen up before the trail.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-7 flex flex-wrap gap-2.5">
          <Chip icon={<Calendar className="h-[15px] w-[15px]" />}>2 days · 3 nights</Chip>
          <Chip icon={<Mountain className="h-[15px] w-[15px]" />}>2,875 m · moderate</Chip>
          <Chip icon={<Star className="h-[15px] w-[15px]" />}>From ₹7,499</Chip>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
          className="mt-9 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#a5a89f]"
        >
          <span className="relative inline-block h-px w-9 overflow-hidden bg-[#a5a89f]">
            <span
              className="absolute inset-y-0 left-0 w-1/2 bg-[#ff8a5b]"
              style={{
                animation: reduce ? undefined : "triund-slidebar 2.4s ease-in-out infinite",
              }}
            />
          </span>
          Scroll to plan your trip
        </motion.div>
      </div>

      <style>{`
        @keyframes triund-floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes triund-slidebar { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </header>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[13px] font-medium text-[#f3efe7] backdrop-blur">
      <span className="text-[#ffb787]">{icon}</span>
      {children}
    </span>
  );
}
