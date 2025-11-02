import Container from "@/components/ui/container";
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
      image:
        "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=1600&auto=format&fit=crop",
      description:
        "Adventure + Nature + Relaxation: Kasol exploration, Chalal village, Manikaran Sahib & epic Kheerganga trek",
    },
    {
      title: "Bir Billing Trip",
      href: "/tours/bir-billing",
      duration: "3 Days",
      difficulty: "Easy",
      location: "Kangra Valley, Himachal Pradesh",
      price: "₹6,999",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop",
      description: "Paragliding, cafes, monasteries and sunsets",
    },
    {
      title: "Triund Trek",
      href: "/tours/triund-trek",
      duration: "2 Days / 1 Night",
      difficulty: "Easy to Moderate",
      location: "McLeod Ganj, Himachal Pradesh",
      price: "₹3,999",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      description: "Classic ridge trek with Dhauladhar views",
    },
  ];

  // Intentionally left blank: feature cards are defined inline below for clarity

  return (
    <main>
      {/* Refined, Image-led Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan landscape"
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
                Discover Incredible India
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed animate-fade-in-up delay-400">
                Treks, tours and curated journeys across mountains, deserts and coasts. Crafted with care, led by locals.
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

      {/* Featured Tours */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/40 to-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Adventures</h2>
            <p className="mt-3 text-lg text-gray-400">Handpicked journeys that showcase India’s diversity</p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour, index) => (
              <Link
                key={tour.href}
                href={tour.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 150}ms` }}
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
                        : tour.difficulty === "Moderate"
                        ? "bg-yellow-500/15 text-yellow-300"
                        : "bg-red-500/15 text-red-300"
                    }`}>
                      {tour.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:gap-2 transition-all">
                      View Tour <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg forest-gradient text-white font-semibold shadow-lg hover:scale-105 transition-all"
            >
              View All Adventures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-secondary/30 relative overflow-hidden">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Nirvana?</h2>
            <p className="mt-3 text-lg text-gray-400">Thoughtful details that make your trip seamless</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Local Guides", desc: "Led by experts who belong to the mountains" },
              { icon: Heart, title: "Small Groups", desc: "Personal attention, authentic connections" },
              { icon: Star, title: "Safety First", desc: "Reliable logistics and well-planned itineraries" },
            ].map((f, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
