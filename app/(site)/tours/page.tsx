import Container from "@/components/ui/container";
import ToursPageHero from "@/components/tours-page-hero";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, ArrowRight, Filter, Search } from "lucide-react";

export const metadata = {
  title: "Tours & Adventures | Nirvana Treks & Tours",
  description: "Discover our curated collection of treks, tours, and adventures across the incredible Himalayan ranges.",
};

const tours = [
  {
    slug: "kasol-trip",
    title: "Kasol–Kheerganga Trek",
    subtitle: "2 Nights / 3 Days | From ₹6,499",
    days: 3,
    region: "Parvati Valley, Himachal Pradesh",
    difficulty: "Easy to Moderate",
    price: "₹6,499",
    rating: 4.8,
    image: "🏞️",
    coverSrc: "/gallery/kasol-kheerganga.webp",
    description: "Adventure + Nature + Relaxation: Kasol exploration, Chalal village trek, Manikaran Sahib visit, and epic Kheerganga trek with natural hot springs",
    soldOut: true,
  },
  {
    slug: "bir-billing",
    title: "Bir Billing Trip",
    subtitle: "Paragliding Capital of India",
    days: 3,
    region: "Kangra Valley, Himachal Pradesh",
    difficulty: "Easy",
    price: "₹6,999",
    rating: 4.9,
    image: "🪂",
    coverSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    description: "Cafe hopping in Bir, paragliding from Billing to Bir, monasteries and sunsets"
  },
  {
    slug: "triund-trek",
    title: "Triund Trek",
    subtitle: "Classic Dharamkot Ridge | From ₹5,999",
    days: 2,
    region: "McLeod Ganj, Himachal Pradesh",
    difficulty: "Easy to Moderate",
    price: "₹5,999",
    rating: 4.7,
    image: "⛰️",
    coverSrc:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=1200&auto=format&fit=crop",
    description: "Short, scenic ridge trek with panoramic views of the Dhauladhar range"
  },
  {
    slug: "bir-rajgundha",
    title: "Bir, Barot to Rajgundha Trek",
    subtitle: "3 Days / 2 Nights | From ₹5,999",
    days: 3,
    region: "Kangra Valley, Himachal Pradesh",
    difficulty: "Easy to Moderate",
    price: "₹5,999",
    rating: 4.8,
    image: "🏕️",
    coverSrc: "/gallery/barot-bir-rajgundha.webp",
    description: "Hidden valley trek through Bir & Barot with lush meadows, Dhauladhar views, and nights under the stars"
  },
  {
    slug: "kareri-lake",
    title: "Kareri Lake Trek",
    subtitle: "3 Days / 2 Nights | From ₹5,999",
    days: 3,
    region: "Kangra Valley, Himachal Pradesh",
    difficulty: "Moderate",
    price: "₹5,999",
    rating: 4.8,
    image: "💎",
    coverSrc: "/gallery/kareri-lake.webp",
    description: "Trek to a pristine glacial lake at 2,934m surrounded by snow-capped Dhauladhar peaks"
  },
  {
    slug: "hampta-pass",
    title: "Hampta Pass Trek",
    subtitle: "5 Nights / 6 Days | From ₹12,999",
    days: 6,
    region: "Kullu–Spiti, Himachal Pradesh",
    difficulty: "Moderate to Difficult",
    price: "₹12,999",
    rating: 4.9,
    image: "🏔️",
    coverSrc:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=1200&auto=format&fit=crop",
    description: "Dramatic crossover trek from green Kullu valley to barren Spiti, with Chandratal Lake visit"
  },
];

const categories = [
  { name: "All Adventures", count: tours.length },
  { name: "Trekking", count: 5 },
  { name: "Paragliding", count: 1 },
  { name: "Weekend", count: 4 },
  { name: "Multi-day", count: 2 },
];

export default function ToursPage() {
  return (
    <main>
      <ToursPageHero />
      <Container className="py-16">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="whitespace-nowrap px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search adventures..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => {
            const difficultyColor = tour.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
                                  tour.difficulty.includes('Difficult') ? 'text-red-400 bg-red-500/20' :
                                  tour.difficulty.includes('Moderate') ? 'text-yellow-400 bg-yellow-500/20' :
                                  'text-green-400 bg-green-500/20';

            return (
              <Link 
                key={tour.slug} 
                href={`/tours/${tour.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="p-6">
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={tour.coverSrc}
                      alt={`${tour.title} (photo)`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {"soldOut" in tour && tour.soldOut ? (
                      <div className="sold-out-scrim absolute inset-0" aria-hidden />
                    ) : null}
                    {"soldOut" in tour && tour.soldOut ? (
                      <div className="absolute left-3 top-3">
                        <span className="sold-out-badge">
                          <span className="sold-out-badge__text">Sold out</span>
                        </span>
                      </div>
                    ) : null}
                    <span
                      className="absolute bottom-2 right-2 text-4xl drop-shadow-md opacity-90"
                      aria-hidden
                    >
                      {tour.image}
                    </span>
                  </div>
                  
                  {/* Tour Info */}
                  <div className="space-y-4">
                    {/* Rating and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{tour.rating}</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-400">{tour.price}</span>
                    </div>
                    
                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                        {tour.title}
                      </h3>
                      <p className="text-emerald-400 text-sm font-medium">{tour.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed">
                      {tour.description}
                    </p>
                    
                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{tour.region}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{tour.days} days</span>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
                        {tour.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-emerald-400 group-hover:gap-2 transition-all">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center p-8 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We specialize in creating custom adventures tailored to your interests, fitness level, and schedule. Let us design the perfect journey for you.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105"
          >
            Plan Custom Adventure
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </main>
  );
}


