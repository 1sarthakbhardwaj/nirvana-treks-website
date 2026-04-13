import Image from "next/image";
import Container from "@/components/ui/container";
import { Camera } from "lucide-react";

/** Full-resolution JPGs from `photos/` copied to `public/gallery/` for Next.js static serving */
const GALLERY = [
  { src: "/gallery/IMG_4267.jpg", alt: "Mountain trail and landscape from Nirvana Treks" },
  { src: "/gallery/IMG_4271.jpg", alt: "Himalayan views on a guided trek" },
  { src: "/gallery/IMG_4330.jpg", alt: "Valley scenery on a Nirvana adventure" },
  { src: "/gallery/IMG_4351.jpg", alt: "Peaks and sky during a mountain journey" },
  { src: "/gallery/IMG_4395.jpg", alt: "Trekking moments in the Himalayas" },
  { src: "/gallery/IMG_4444.jpg", alt: "Outdoor experience with Nirvana Treks & Tours" },
] as const;

export default function TrailGallery() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-emerald-950/20 to-background" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <Container className="relative">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200/90 backdrop-blur-sm">
            <Camera className="h-4 w-4" />
            From the trail
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Gallery</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-400">
            Scenes from our 2nd April trip: real trails, real peaks, and the views that stay with you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
          {GALLERY.map((item, i) => (
            <figure
              key={item.src}
              className={
                i === 0
                  ? "group relative min-h-[260px] overflow-hidden rounded-2xl border border-emerald-500/25 bg-muted/30 shadow-lg shadow-black/20 sm:min-h-[300px] lg:col-span-2 lg:row-span-2 lg:min-h-[420px]"
                  : "group relative min-h-[220px] overflow-hidden rounded-2xl border border-emerald-500/25 bg-muted/30 shadow-lg shadow-black/20 sm:min-h-[240px] lg:min-h-[220px]"
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="z-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-black/5 to-transparent transition-opacity duration-300 group-hover:from-black/50" />
              <div className="pointer-events-none absolute inset-0 z-[2] ring-1 ring-inset ring-white/10" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
