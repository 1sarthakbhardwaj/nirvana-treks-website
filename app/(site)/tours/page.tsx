import Container from "@/components/ui/container";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight, Filter, Search } from "lucide-react";

export const metadata = {
  title: "Tours & Adventures | Nirvana Treks & Tours",
  description: "Discover our curated collection of treks, tours, and adventures across incredible India.",
};

const tours = [
  { 
    slug: "kashmir-great-lakes", 
    title: "Kashmir Great Lakes Trek", 
    subtitle: "Seven Pristine Alpine Lakes",
    days: 7, 
    region: "Jammu & Kashmir",
    difficulty: "Moderate",
    price: "₹25,000",
    rating: 4.8,
    image: "🏔️",
    description: "Trek through seven stunning alpine lakes in the heart of Kashmir Himalayas"
  },
  { 
    slug: "spiti-valley", 
    title: "Spiti Valley Road Trip", 
    subtitle: "Cold Desert Adventure",
    days: 8, 
    region: "Himachal Pradesh",
    difficulty: "Easy",
    price: "₹18,000", 
    rating: 4.9,
    image: "🏜️",
    description: "Journey through the mystical landscapes of Little Tibet"
  },
  { 
    slug: "kerala-backwaters", 
    title: "Kerala Backwaters Retreat", 
    subtitle: "Houseboat Experience",
    days: 4, 
    region: "Kerala",
    difficulty: "Easy",
    price: "₹12,000",
    rating: 4.7,
    image: "🛶",
    description: "Serene cruise through palm-fringed waterways and traditional villages"
  },
];

const categories = [
  { name: "All Adventures", count: tours.length },
  { name: "Trekking", count: 1 },
  { name: "Road Trips", count: 1 },
  { name: "Cultural Tours", count: 1 },
];

export default function ToursPage() {
  return (
    <main className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Adventures</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From challenging Himalayan treks to peaceful backwater cruises, discover handpicked journeys that showcase the incredible diversity of India.
          </p>
        </div>

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
                                  tour.difficulty === 'Moderate' ? 'text-yellow-400 bg-yellow-500/20' :
                                  'text-red-400 bg-red-500/20';

            return (
              <Link 
                key={tour.slug} 
                href={`/tours/${tour.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="p-6">
                  {/* Image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {tour.image}
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
          <h2 className="text-2xl font-semibold text-white mb-4">Can't Find What You're Looking For?</h2>
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


