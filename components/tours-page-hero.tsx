"use client";

import Container from "@/components/ui/container";
import HomeHeroBackground from "@/components/home-hero-background";

export default function ToursPageHero() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-10">
        <HomeHeroBackground />
      </div>
      <Container className="relative py-20 md:py-28">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Our Adventures
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
          From scenic ridge treks to dramatic high-altitude crossover passes, discover handpicked
          journeys across the incredible Himalayan ranges.
        </p>
      </Container>
    </section>
  );
}
