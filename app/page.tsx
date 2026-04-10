import Container from "@/components/ui/container";
import TrailGallery from "@/components/trail-gallery";
import TripFinder from "@/components/trip-finder";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/animate-on-scroll";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredTours = [
    {
      title: "Kasol–Kheerganga Trek",
      href: "/tours/kasol-trip",
      duration: "2 Nights / 3 Days",
      difficulty: "Easy to Moderate",
      location: "Parvati Valley, Himachal Pradesh",
      price: "₹6,499",
      rating: 4.8,
      image: "/gallery/kasol-kheerganga.webp",
      description:
        "Adventure + Nature + Relaxation: Kasol exploration, Chalal village, Manikaran Sahib & epic Kheerganga trek",
    },
    {
      title: "Triund Trek",
      href: "/tours/triund-trek",
      duration: "2 Days / 1 Night",
      difficulty: "Easy to Moderate",
      location: "McLeod Ganj, Himachal Pradesh",
      price: "₹5,999",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=1600&auto=format&fit=crop",
      description: "Classic ridge trek with Dhauladhar views",
    },
    {
      title: "Bir, Barot to Rajgundha Trek",
      href: "/tours/bir-rajgundha",
      duration: "3 Days / 2 Nights",
      difficulty: "Easy to Moderate",
      location: "Kangra Valley, Himachal Pradesh",
      price: "₹5,999",
      rating: 4.8,
      image: "/gallery/barot-bir-rajgundha.webp",
      description: "Hidden valley trek through Bir & Barot with lush meadows and starry nights",
    },
    {
      title: "Kareri Lake Trek",
      href: "/tours/kareri-lake",
      duration: "3 Days / 2 Nights",
      difficulty: "Moderate",
      location: "Kangra Valley, Himachal Pradesh",
      price: "₹5,999",
      rating: 4.8,
      image: "/gallery/kareri-lake.webp",
      description: "Glacial lake trek at 2,934m with Dhauladhar panoramas",
    },
    {
      title: "Hampta Pass Trek",
      href: "/tours/hampta-pass",
      duration: "5 Nights / 6 Days",
      difficulty: "Moderate to Difficult",
      location: "Kullu–Spiti, Himachal Pradesh",
      price: "₹12,999",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=1600&auto=format&fit=crop",
      description: "Epic crossover from green Kullu to barren Spiti + Chandratal",
    },
  ];

  // Intentionally left blank: feature cards are defined inline below for clarity

  return (
    <main>
      {/* Refined, Image-led Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop"
            alt="Kasol Kheerganga valley in the Himalayas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          {/* Subtle ambient glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        </div>

        <Container>
          <div className="pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2.5 text-sm text-emerald-300 border border-emerald-500/20 backdrop-blur-sm animate-fade-in-up">
                <Star className="w-4 h-4" />
                Trusted Mountain Experiences
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up delay-200">
                Discover the Incredible Himalayan Ranges
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed animate-fade-in-up delay-400">
                Treks, tours and curated journeys across the mighty Himalayan ranges. Crafted with care, led by locals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white forest-gradient shadow-lg hover:scale-105 transition-all"
                >
                  Explore Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white/90 border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mountain silhouette divider */}
      <div className="mountain-divider" />

      {/* Featured Tours */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/40 to-background relative overflow-hidden">
        <Container>
          <AnimateOnScroll animation="fade-up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Adventures</h2>
            <p className="mt-3 text-lg text-gray-400">Handpicked journeys across the Himalayan ranges</p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
            {featuredTours.map((tour) => (
              <StaggerItem key={tour.href}>
              <Link
                href={tour.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90">
                    <Star className="w-3 h-3" /> {tour.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{tour.title}</h3>
                    <span className="text-emerald-400 font-bold">{tour.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{tour.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {tour.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {tour.duration}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      tour.difficulty === "Easy"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : tour.difficulty.includes("Difficult")
                        ? "bg-red-500/15 text-red-300"
                        : tour.difficulty.includes("Moderate")
                        ? "bg-yellow-500/15 text-yellow-300"
                        : "bg-emerald-500/15 text-emerald-300"
                    }`}>
                      {tour.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:gap-2 transition-all">
                      View Tour <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll animation="fade-up" delay={0.3} className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg forest-gradient text-white font-semibold shadow-lg hover:scale-105 transition-all"
            >
              View All Adventures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      <TrailGallery />

      <TripFinder />

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-secondary/30 relative overflow-hidden">
        <Container>
          <AnimateOnScroll animation="fade-up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Nirvana?</h2>
            <p className="mt-3 text-lg text-gray-400">Thoughtful details that make your trip seamless</p>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { icon: MapPin, title: "Local Guides", desc: "Led by experts who belong to the mountains" },
              { icon: Heart, title: "Small Groups", desc: "Personal attention, authentic connections" },
              { icon: Star, title: "Safety First", desc: "Reliable logistics and well-planned itineraries" },
            ].map((f, i) => (
              <StaggerItem key={i} animation="fade-left">
              <div
                className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
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
