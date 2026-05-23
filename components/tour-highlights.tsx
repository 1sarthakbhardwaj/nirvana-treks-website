"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bus,
  Coffee,
  Flame,
  Gift,
  Mountain,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type HighlightCard = {
  title: string;
  description: string;
  icon?: "bus" | "cafe" | "trek" | "stars" | "gift" | "sparkles";
};

const iconMap: Record<NonNullable<HighlightCard["icon"]>, LucideIcon> = {
  bus: Bus,
  cafe: Coffee,
  trek: Mountain,
  stars: Flame,
  gift: Gift,
  sparkles: Sparkles,
};

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: easeSmooth },
  }),
};

type Props = {
  items: HighlightCard[];
  eyebrow?: string;
  title?: string;
};

export default function TourHighlights({
  items,
  eyebrow = "Why travellers love this trip",
  title = "Trip highlights",
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mb-16">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = item.icon ? iconMap[item.icon] : Sparkles;
          return (
            <motion.article
              key={item.title}
              custom={i}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-24px" }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 transition-colors hover:border-emerald-500/30"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"
                aria-hidden
              />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="relative mt-4 text-base font-semibold text-white">{item.title}</h4>
              <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
