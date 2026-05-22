"use client";

import { motion, type Variant } from "framer-motion";
import { useLenis } from "lenis/react";
import { type ReactNode } from "react";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

type AnimationPreset = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "slide-up";

const presets: Record<AnimationPreset, { hidden: Variant; visible: Variant }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
};

type Props = {
  children: ReactNode;
  animation?: AnimationPreset;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: Props) {
  const preset = presets[animation];
  // Keep scroll-linked reveals in sync with Lenis smooth scroll
  useLenis();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: preset.hidden,
        visible: {
          ...preset.visible,
          transition: { duration, delay, ease: easeSmooth },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  animation = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  animation?: AnimationPreset;
}) {
  const preset = presets[animation];
  return (
    <motion.div
      variants={{
        hidden: preset.hidden,
        visible: {
          ...preset.visible,
          transition: { duration: 0.65, ease: easeSmooth },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
