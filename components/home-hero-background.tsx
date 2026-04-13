"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ROTATING_HERO_SLIDES } from "@/lib/rotating-hero-slides";

const INTERVAL_MS = 7000;

type Variant = "full" | "compact";

type RotatingHeroBackgroundProps = {
  /** Passed to next/image `sizes` for correct loading */
  sizes?: string;
  variant?: Variant;
  /** Extra classes on the positioning root (e.g. rounded corners) */
  className?: string;
};

export function RotatingHeroBackground({
  sizes = "100vw",
  variant = "full",
  className = "",
}: RotatingHeroBackgroundProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % ROTATING_HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, reduceMotion]);

  const overlay =
    variant === "full"
      ? "bg-gradient-to-b from-black/60 via-black/50 to-black/80"
      : "bg-gradient-to-t from-black/75 via-black/35 to-black/25";

  return (
    <div className={`relative h-full min-h-full w-full ${className}`}>
      <div className="absolute inset-0">
        {ROTATING_HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes={sizes}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className={`pointer-events-none absolute inset-0 ${overlay}`}
        aria-hidden
      />
      {variant === "full" ? (
        <>
          <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl animate-float" />
        </>
      ) : null}
      {reduceMotion && (
        <div
          className="absolute bottom-3 left-1/2 z-[1] flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="Background photos"
        >
          {ROTATING_HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomeHeroBackground() {
  return <RotatingHeroBackground sizes="100vw" variant="full" />;
}
