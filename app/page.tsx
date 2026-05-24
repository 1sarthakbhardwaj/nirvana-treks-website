import Container from "@/components/ui/container";
import HomeHeroBackground from "@/components/home-hero-background";
import HomeHeroContent from "@/components/home-hero-content";
import TrailGallery from "@/components/trail-gallery";
import TripFinder from "@/components/trip-finder";
import TourListingCardPricing from "@/components/tour-listing-card-pricing";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/animate-on-scroll";
import { FEATURED_TOURS } from "@/lib/tours-catalog";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HomeHeroBackground />
        </div>

        <HomeHeroContent />
      </section>

      <div className="mountain-divider" />

      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background pt-16 pb-10 md:pt-20 md:pb-12">
        <Container>
          <AnimateOnScroll animation="fade-up" className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Adventures</h2>
            <p className="mt-3 text-lg text-gray-400">
              Weekend treks from{" "}
              <span className="font-semibold text-emerald-400">₹7,499</span> quad/triple ·{" "}
              <span className="font-semibold text-emerald-400/90">₹7,999</span> double (per person)
            </p>
          </AnimateOnScroll>

          <StaggerContainer
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.12}
          >
            {FEATURED_TOURS.map((tour) => (
              <StaggerItem key={tour.slug}>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={tour.coverSrc}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    {tour.soldOut ? (
                      <div className="sold-out-scrim absolute inset-0" aria-hidden />
                    ) : null}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90">
                        <Star className="h-3 w-3" /> {tour.rating}
                      </span>
                      {tour.badge ? (
                        <span className="rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/90 to-violet-600/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-amber-500/20">
                          {tour.badge}
                        </span>
                      ) : null}
                    </div>
                    {tour.soldOut ? (
                      <div className="absolute right-3 top-3">
                        <span className="sold-out-badge">
                          <span className="sold-out-badge__text">Sold out</span>
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-white">{tour.title}</h3>
                        <p className="mt-0.5 text-xs text-gray-500">{tour.subtitle}</p>
                      </div>
                      <TourListingCardPricing tour={tour} className="shrink-0" />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{tour.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4 shrink-0" /> {tour.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4 shrink-0" /> {tour.duration}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          tour.difficulty === "Easy"
                            ? "bg-emerald-500/15 text-emerald-300"
                            : tour.difficulty.includes("Difficult")
                              ? "bg-red-500/15 text-red-300"
                              : tour.difficulty.includes("Moderate")
                                ? "bg-yellow-500/15 text-yellow-300"
                                : "bg-emerald-500/15 text-emerald-300"
                        }`}
                      >
                        {tour.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-400 transition-all group-hover:gap-2">
                        View Tour <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll animation="fade-up" delay={0.3} className="mt-8 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white forest-gradient shadow-lg transition-all hover:scale-105"
            >
              View All Adventures
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      <TrailGallery />

      <TripFinder />

      <section className="relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-secondary/30 py-16 md:py-20">
        <Container>
          <AnimateOnScroll animation="fade-up" className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Nirvana?</h2>
            <p className="mt-3 text-lg text-gray-400">Thoughtful details that make your trip seamless</p>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              { icon: MapPin, title: "Local Guides", desc: "Led by experts who belong to the mountains" },
              { icon: Heart, title: "Small Groups", desc: "Personal attention, authentic connections" },
              { icon: Star, title: "Safety First", desc: "Reliable logistics and well-planned itineraries" },
            ].map((f, i) => (
              <StaggerItem key={i} animation="fade-left">
                <div className="relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-gray-400">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </main>
  );
}
