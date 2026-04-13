"use client";

import { RotatingHeroBackground } from "@/components/home-hero-background";

export default function TourDetailHeroVisual() {
  return (
    <RotatingHeroBackground
      variant="compact"
      sizes="(max-width: 1024px) 100vw, min(45vw, 520px)"
      className="min-h-[20rem] overflow-hidden rounded-2xl"
    />
  );
}
