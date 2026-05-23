"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Clock, Star } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BirBillingHero() {
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
          "radial-gradient(120% 80% at 72% 18%, rgba(255,150,70,.42) 0%, rgba(255,106,51,.10) 38%, transparent 64%), linear-gradient(180deg,#1a2336 0%, #2a2535 30%, #4a2f33 60%, #1a1820 100%)",
      }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 60, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        className="pointer-events-none absolute right-[22%] top-[14%] h-[120px] w-[120px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,#ffe7b3 0%,#ffb454 45%,#ff8a3d 75%,transparent 100%)",
          boxShadow: "0 0 90px 30px rgba(255,160,70,.45)",
          filter: "blur(.5px)",
        }}
        aria-hidden
      />

      <Glider
        className="left-[18%] top-[30%]"
        delay={0}
        fill="#ff6a33"
        scale={0.8}
        reduce={reduce}
      />
      <Glider
        className="left-[40%] top-[24%]"
        delay={-3}
        fill="#f9b24a"
        scale={0.55}
        reduce={reduce}
      />
      <Glider
        className="right-[30%] top-[38%]"
        delay={-6}
        fill="#8fc1e3"
        scale={0.65}
        reduce={reduce}
      />

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 block w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        height="420"
        aria-hidden
      >
        <path
          d="M0 420 V230 L160 170 L320 220 L470 140 L640 210 L820 120 L1010 200 L1200 150 L1440 210 V420 Z"
          fill="#3a2a33"
          opacity=".55"
        />
        <path
          d="M0 420 V280 L180 230 L360 280 L540 210 L760 270 L980 200 L1180 260 L1440 220 V420 Z"
          fill="#241a22"
          opacity=".8"
        />
        <path
          d="M0 420 V330 L220 290 L430 330 L640 280 L880 330 L1120 290 L1440 320 V420 Z"
          fill="#0c0e13"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6 pb-[7vh] pt-32 text-[#f5efe4]">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#ff6a33]"
            style={{ boxShadow: "0 0 12px #ff6a33" }}
          />
          Nirvana Treks &amp; Tours
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-[13px] font-medium uppercase tracking-[0.32em] text-[#f9b24a]"
        >
          Himachal Pradesh · The Paragliding Capital
        </motion.p>

        <motion.h1
          {...fadeUp(0.35)}
          className="mt-2 font-medium leading-[0.94] tracking-[-0.02em] text-[#f5efe4]"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(56px, 11vw, 140px)",
          }}
        >
          Bir{" "}
          <span className="italic text-[#f9b24a]" style={{ fontStyle: "italic" }}>
            Billing
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 max-w-[560px] text-base text-[#e7e0d3] sm:text-lg"
        >
          Fly over the Dhauladhars, chase a hidden waterfall, and watch the valley turn gold
          at the landing site. Pick your length: a tight weekend, or stretch it into the wild
          Rajgundha Valley.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-7 flex flex-wrap gap-2.5">
          <Chip icon={<Layers className="h-[15px] w-[15px]" />}>2 packages</Chip>
          <Chip icon={<Clock className="h-[15px] w-[15px]" />}>From Delhi or Chandigarh</Chip>
          <Chip icon={<Star className="h-[15px] w-[15px]" />}>From ₹7,499</Chip>
        </motion.div>

        <motion.div
          {...fadeUp(0.85)}
          className="mt-9 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#a7a194]"
        >
          <span className="relative inline-block h-px w-9 overflow-hidden bg-[#a7a194]">
            <span
              className="absolute inset-y-0 left-0 w-1/2 bg-[#ff6a33]"
              style={{
                animation: reduce ? undefined : "bir-slidebar 2.4s ease-in-out infinite",
              }}
            />
          </span>
          Scroll to plan your trip
        </motion.div>
      </div>

      <style>{`
        @keyframes bir-slidebar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes bir-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -14px); }
        }
      `}</style>
    </header>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[13px] font-medium text-[#f5efe4] backdrop-blur"
      style={{ borderColor: "rgba(245,239,228,.16)" }}
    >
      <span className="text-[#f9b24a]">{icon}</span>
      {children}
    </span>
  );
}

function Glider({
  className,
  delay,
  fill,
  scale,
  reduce,
}: {
  className?: string;
  delay: number;
  fill: string;
  scale: number;
  reduce: boolean | null;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{
        transform: `scale(${scale})`,
        animation: reduce ? undefined : `bir-drift 9s ease-in-out ${delay}s infinite`,
        opacity: 0.92,
      }}
      aria-hidden
    >
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <path d="M2 10 Q30 -2 58 10 L48 16 Q30 8 12 16 Z" fill={fill} />
        <path d="M30 14 L30 28" stroke="#f5efe4" strokeWidth="1.4" />
        <circle cx="30" cy="31" r="3" fill="#f5efe4" />
      </svg>
    </div>
  );
}
