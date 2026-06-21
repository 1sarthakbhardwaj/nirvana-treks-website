"use client";

import Container from "@/components/ui/container";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: easeSmooth },
  },
};

const itemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export default function HomeHeroContent() {
  const reduceMotion = useReducedMotion();
  const motionItem = reduceMotion ? itemReduced : item;

  return (
    <Container>
      <motion.div
        className="pt-32 pb-24 md:pt-40 md:pb-32"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={motionItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm text-emerald-300 backdrop-blur-sm"
          >
            <Star className="h-4 w-4" aria-hidden />
            Run by local Himachalis
          </motion.div>

          <motion.h1
            variants={motionItem}
            className="text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            Discover the Incredible Himalayan Ranges
          </motion.h1>

          <motion.p
            variants={motionItem}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Born and raised in these mountains, we run the treks we grew up on. Real Himachali
            locals taking you to the spots the tour buses never find.
          </motion.p>

          <motion.div
            variants={motionItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white forest-gradient shadow-lg transition-transform duration-500 ease-out hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Tours
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition-colors duration-500 ease-out hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
