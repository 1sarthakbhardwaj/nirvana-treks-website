"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Mountain, Star } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-cormorant), Georgia, serif" };

const STAR_SEED = [
  [12, 8, 0, false],
  [28, 14, 1.2, true],
  [45, 6, 0.4, false],
  [62, 18, 2.1, false],
  [78, 10, 0.8, true],
  [88, 22, 1.6, false],
  [5, 24, 2.8, false],
  [22, 32, 0.2, false],
  [38, 28, 1.4, true],
  [55, 35, 0.6, false],
  [72, 30, 2.4, false],
  [92, 38, 1.0, false],
  [15, 42, 1.8, false],
  [33, 45, 0.3, true],
  [50, 40, 2.6, false],
  [68, 48, 0.9, false],
  [85, 44, 1.5, false],
  [8, 52, 2.2, false],
  [25, 50, 0.7, false],
  [42, 55, 1.9, true],
  [60, 52, 0.5, false],
  [75, 58, 2.0, false],
  [95, 54, 1.3, false],
  [18, 12, 2.5, false],
  [52, 8, 0.1, true],
  [70, 16, 1.7, false],
  [35, 20, 2.3, false],
  [82, 26, 0.9, false],
  [10, 36, 1.1, false],
  [48, 32, 2.7, false],
  [65, 24, 0.4, true],
  [90, 12, 1.6, false],
  [20, 8, 2.9, false],
  [58, 14, 0.6, false],
  [40, 18, 1.2, false],
  [76, 34, 2.1, false],
  [30, 38, 0.8, true],
  [88, 48, 1.4, false],
  [14, 28, 2.0, false],
  [46, 48, 0.3, false],
  [64, 42, 1.8, false],
  [96, 28, 2.4, true],
  [6, 44, 1.0, false],
  [54, 22, 2.6, false],
  [72, 8, 0.2, false],
] as const;

export default function ChurdharHero() {
  const reduce = useReducedMotion();

  const stars = useMemo(
    () =>
      STAR_SEED.map(([x, y, delay, big], i) => ({
        id: i,
        left: `${x}%`,
        top: `${y}%`,
        delay: `${delay}s`,
        big,
      })),
    []
  );

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
          "radial-gradient(70% 55% at 50% 8%, rgba(227,182,90,.28) 0%, rgba(154,123,208,.08) 40%, transparent 64%), linear-gradient(180deg,#241a3a 0%, #2f2147 28%, #3a2750 48%, #2a1d36 66%, #0b0913 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[8%] h-40 w-[260px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top,rgba(227,182,90,.4),transparent 72%)",
          filter: "blur(8px)",
          animation: reduce ? undefined : "churdhar-pulse 5s ease-in-out infinite",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {stars.map((s) => (
          <i
            key={s.id}
            className={`absolute rounded-full bg-[#c5d0e6] ${s.big ? "h-[3px] w-[3px] shadow-[0_0_6px_rgba(197,208,230,.8)]" : "h-0.5 w-0.5"}`}
            style={{
              left: s.left,
              top: s.top,
              opacity: 0.8,
              animation: reduce ? undefined : `churdhar-tw 3.6s ease-in-out infinite`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-40 z-[2] h-20 opacity-70"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(197,208,230,.07),transparent)",
          animation: reduce ? undefined : "churdhar-mist 12s ease-in-out infinite",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[90px] z-[2] h-20 opacity-40"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(197,208,230,.07),transparent)",
          animation: reduce ? undefined : "churdhar-mist 12s ease-in-out infinite -6s",
        }}
        aria-hidden
      />

      <motion.svg
        initial={reduce ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: easeOut }}
        className="pointer-events-none absolute left-0 right-0 top-[14%] z-[3] w-full opacity-90"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        height="90"
        aria-hidden
      >
        <path
          d="M40 18 Q720 64 1400 20"
          stroke="rgba(244,238,233,.4)"
          strokeWidth="1.5"
          fill="none"
        />
        <g style={{ animation: reduce ? undefined : "churdhar-sway 4s ease-in-out infinite" }}>
          <path d="M120 30 l34 2 -2 26 -34 -2 z" fill="#d98a8a" />
          <path d="M210 33 l34 1 -1 26 -34 -1 z" fill="#e3b65a" />
          <path d="M300 35 l34 1 -1 26 -34 -1 z" fill="#9bbf7e" />
          <path d="M390 36 l34 0 0 26 -34 0 z" fill="#8fb6d6" />
          <path d="M560 40 l34 -1 1 26 -34 1 z" fill="#9a7bd0" />
          <path d="M880 40 l34 0 0 26 -34 0 z" fill="#d98a8a" />
          <path d="M1050 36 l34 -1 1 26 -34 1 z" fill="#e3b65a" />
          <path d="M1150 33 l34 -1 1 26 -34 1 z" fill="#9bbf7e" />
          <path d="M1250 30 l34 -2 2 26 -34 2 z" fill="#8fb6d6" />
        </g>
      </motion.svg>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] block w-full"
        viewBox="0 0 1440 440"
        preserveAspectRatio="none"
        height="440"
        aria-hidden
      >
        <path
          d="M0 440 V210 L160 130 L320 200 L470 90 L640 60 L720 30 L800 60 L960 150 L1130 90 L1300 160 L1440 120 V440 Z"
          fill="#5a4a72"
          opacity=".45"
        />
        <path
          d="M0 440 V280 L200 220 L380 280 L560 200 L720 150 L900 230 L1090 180 L1280 250 L1440 210 V440 Z"
          fill="#2a2140"
          opacity=".85"
        />
        <path
          d="M0 440 V350 L240 312 L520 352 L720 300 L920 350 L1180 312 L1440 340 V440 Z"
          fill="#0b0913"
        />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-[398px] left-1/2 z-[2] -translate-x-1/2"
        width="34"
        height="48"
        viewBox="0 0 40 56"
        fill="#0b0913"
        stroke="#e3b65a"
        strokeWidth="1.3"
        aria-hidden
      >
        <path d="M20 2 L20 10" />
        <circle cx="20" cy="13" r="3" fill="#e3b65a" stroke="none" />
        <path d="M9 54 L9 30 Q20 14 31 30 L31 54 Z" />
        <path d="M14 54 L14 40 Q20 32 26 40 L26 54" />
      </svg>

      <div className="relative z-[4] mx-auto w-full max-w-[1080px] px-6 pb-[7vh] pt-32 text-[#f4eee9]">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#e3b65a]"
            style={{ boxShadow: "0 0 12px #e3b65a" }}
          />
          Nirvana Treks &amp; Tours
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-[13px] font-medium uppercase tracking-[0.34em] text-[#e3b65a]"
        >
          Sirmaur · Shirgul Maharaj Temple
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="mt-1 font-medium leading-[0.92] tracking-normal"
          style={{ ...display, fontSize: "clamp(60px, 12vw, 150px)" }}
        >
          Churdhar{" "}
          <em className="italic text-[#e3b65a]" style={{ fontStyle: "italic" }}>
            Peak
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 max-w-[570px] text-base text-[#ebe4ec] sm:text-lg"
        >
          The highest summit in the outer Himalayas at 3,647 m, crowned by the Shirgul Maharaj
          (Lord Shiva) temple. We start from Sarahan, climb through deodar forest to a mountain
          camp, and make the summit at first light for a 360° view from Kinnaur to the Shimla
          hills.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-7 flex flex-wrap gap-2.5">
          <Chip icon={<Calendar className="h-[15px] w-[15px]" />}>2 days · 3 nights</Chip>
          <Chip icon={<Mountain className="h-[15px] w-[15px]" />}>3,647 m · summit</Chip>
          <Chip icon={<Star className="h-[15px] w-[15px]" />}>From ₹7,499</Chip>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
          className="mt-9 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#a59cae]"
        >
          <span className="relative inline-block h-px w-9 overflow-hidden bg-[#a59cae]">
            <span
              className="absolute inset-y-0 left-0 w-1/2 bg-[#e3b65a]"
              style={{
                animation: reduce ? undefined : "churdhar-slidebar 2.4s ease-in-out infinite",
              }}
            />
          </span>
          Scroll to plan your trip
        </motion.div>
      </div>

      <style>{`
        @keyframes churdhar-pulse { 0%, 100% { opacity: .6; } 50% { opacity: 1; } }
        @keyframes churdhar-tw { 0%, 100% { opacity: .2; } 50% { opacity: 1; } }
        @keyframes churdhar-mist { 0%, 100% { transform: translateX(-4%); } 50% { transform: translateX(4%); } }
        @keyframes churdhar-sway { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(3px); } }
        @keyframes churdhar-slidebar { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </header>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[13px] font-medium text-[#f4eee9] backdrop-blur">
      <span className="text-[#e3b65a]">{icon}</span>
      {children}
    </span>
  );
}
