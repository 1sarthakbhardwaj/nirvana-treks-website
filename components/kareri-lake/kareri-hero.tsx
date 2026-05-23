"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Waves, Star } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

export default function KareriHero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: easeOut },
  });

  return (
    <header
      className="relative isolate flex min-h-[96vh] flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#0f2a38 0%, #163f4e 38%, #11333f 50%, #0c2730 60%, #080f12 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "radial-gradient(70% 80% at 70% 30%, rgba(159,224,230,.28) 0%, rgba(72,196,207,.06) 42%, transparent 68%), linear-gradient(180deg,#13384a 0%,#185160 60%,#1d6070 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: "linear-gradient(180deg,#1a5160 0%,#123e4b 40%,#0a2028 100%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        className="pointer-events-none absolute right-[22%] top-[13%] z-[2] h-[84px] w-[84px] rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 40%,#fbfffe,#dff1f3 60%,#bcdfe2)",
          boxShadow: "0 0 60px 16px rgba(159,224,230,.4)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[14%] right-[22%] z-[2] h-[84px] w-[84px] rounded-full opacity-[0.18] blur-[2px]"
        style={{
          background: "radial-gradient(circle at 40% 40%,#fbfffe,#dff1f3 60%,#bcdfe2)",
        }}
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute left-0 right-0 top-[28%] z-[2] w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        height="200"
        aria-hidden
      >
        <path
          d="M0 200 V120 L160 60 L320 110 L470 30 L640 100 L820 24 L1010 96 L1210 56 L1440 104 V200 Z"
          fill="#9fc0c8"
          opacity=".5"
        />
        <path
          d="M0 200 V150 L200 96 L380 150 L560 80 L780 140 L1000 74 L1200 134 L1440 96 V200 Z"
          fill="#5b8a92"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] w-full scale-y-[-1] opacity-[0.26] blur-[1.2px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        height="200"
        aria-hidden
      >
        <path
          d="M0 200 V120 L160 60 L320 110 L470 30 L640 100 L820 24 L1010 96 L1210 56 L1440 104 V200 Z"
          fill="#9fc0c8"
        />
        <path
          d="M0 200 V150 L200 96 L380 150 L560 80 L780 140 L1000 74 L1200 134 L1440 96 V200 Z"
          fill="#5b8a92"
        />
      </svg>

      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 z-[3] h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(159,224,230,.5),transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-1/2 opacity-40"
        style={{
          background:
            "repeating-linear-gradient(180deg,transparent 0 16px,rgba(159,224,230,.05) 16px 17px)",
          animation: reduce ? undefined : "kareri-shim 6s linear infinite",
        }}
        aria-hidden
      />

      <div className="relative z-[4] mx-auto w-full max-w-[1080px] px-6 py-32 text-[#e9f4f5]">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#48c4cf]"
            style={{ boxShadow: "0 0 12px #48c4cf" }}
          />
          Nirvana Treks &amp; Tours
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-[13px] font-medium uppercase tracking-[0.32em] text-[#9fe0e6]"
        >
          Dhauladhar · Glacial Lake Trek
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="mt-2 font-normal leading-[0.96] tracking-[-0.01em]"
          style={{ ...display, fontSize: "clamp(54px, 10.5vw, 128px)" }}
        >
          Kareri{" "}
          <em className="italic text-[#9fe0e6]" style={{ fontStyle: "italic" }}>
            Lake
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 max-w-[560px] text-base text-[#d6e9ea] sm:text-lg"
        >
          A crystal glacial lake fed by Dhauladhar snowmelt, sitting at around 3,000 m with a
          tiny Shiva shrine on its bank. We trek up through forest and meadow, camp by the
          water, and catch the peaks mirrored on a still morning.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-7 flex flex-wrap gap-2.5">
          <Chip icon={<Calendar className="h-[15px] w-[15px]" />}>2 days · 3 nights</Chip>
          <Chip icon={<Waves className="h-[15px] w-[15px]" />}>Glacial lake · ~3,000 m</Chip>
          <Chip icon={<Star className="h-[15px] w-[15px]" />}>From ₹7,499</Chip>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
          className="mt-9 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#93a8ab]"
        >
          <span className="relative inline-block h-px w-9 overflow-hidden bg-[#93a8ab]">
            <span
              className="absolute inset-y-0 left-0 w-1/2 bg-[#48c4cf]"
              style={{
                animation: reduce ? undefined : "kareri-slidebar 2.4s ease-in-out infinite",
              }}
            />
          </span>
          Scroll to plan your trip
        </motion.div>
      </div>

      <style>{`
        @keyframes kareri-shim { from { background-position-y: 0; } to { background-position-y: 17px; } }
        @keyframes kareri-slidebar { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </header>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[13px] font-medium text-[#e9f4f5] backdrop-blur">
      <span className="text-[#9fe0e6]">{icon}</span>
      {children}
    </span>
  );
}
