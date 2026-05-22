"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import Container from "@/components/ui/container";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

export default function TrailGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, goPrev, goNext]);

  const active = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-emerald-950/20 to-background" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <Container className="relative">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200/90 backdrop-blur-sm">
            <Camera className="h-4 w-4" />
            From the trail
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Gallery</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-400">
            Moments from our batches: trails, camps, peaks, and the views that stay with you. Tap any photo to
            preview full size.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-4 lg:gap-5">
          {GALLERY_IMAGES.map((item, i) => {
            const isHero = item.featured === true;
            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={
                  isHero
                    ? "group relative col-span-2 row-span-2 min-h-[260px] overflow-hidden rounded-2xl border border-emerald-500/30 bg-muted/30 text-left shadow-xl shadow-emerald-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:min-h-[320px] lg:min-h-[420px]"
                    : "group relative min-h-[140px] overflow-hidden rounded-2xl border border-emerald-500/25 bg-muted/30 text-left shadow-lg shadow-black/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:min-h-[180px] lg:min-h-[170px]"
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    isHero
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden />
                </span>
              </button>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:aspect-[16/10]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain bg-black"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-white/90">
                {active.alt} ({lightboxIndex + 1} / {GALLERY_IMAGES.length})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
