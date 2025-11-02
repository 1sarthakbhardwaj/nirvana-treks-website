import Container from "@/components/ui/container";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Clock, Users, Star, Calendar, Heart, ArrowRight,
  CheckCircle, XCircle, AlertTriangle
} from "lucide-react";

const tours = {
  "kasol-trip": {
    title: "Kasol–Kheerganga Trek & Sightseeing",
    subtitle: "2 Nights / 3 Days | Delhi Pickup & Drop",
    description:
      "Adventure + Nature + Relaxation: Kasol exploration, Chalal village trek, Manikaran Sahib visit, and the epic Kheerganga trek with natural hot springs.",
    image: "🏞️",
    price: "₹6,499",
    originalPrice: "₹8,499",
    duration: "2 Nights / 3 Days",
    difficulty: "Easy to Moderate",
    location: "Parvati Valley, Himachal Pradesh",
    maxGroupSize: 14,
    rating: 4.8,
    reviews: 92,
    highlights: [
      "Delhi pickup & drop by comfortable tempo traveller/bus",
      "Riverside stay in Kasol with stunning views",
      "Café hopping & local market exploration",
      "Chalal village mini-trek adventure",
      "Manikaran Sahib visit & natural hot springs experience",
      "Guided Kheerganga trek through pine forests",
      "Bonfire night with music under the stars",
      "All meals included (breakfast, lunch, dinner)"
    ],
    itinerary: [
      { day: 1, title: "Day 1 – Departure from Delhi", description: "Evening departure from Delhi in a comfortable tempo traveller / bus. Overnight journey through beautiful mountain roads. Arrival in Kasol by morning." },
      { day: 2, title: "Day 2 – Kasol Exploration & Local Sightseeing", description: "Check-in at campsite or riverside stay. Breakfast amidst the mountains. Visit Kasol Market, enjoy Café Hopping (Moon Dance Café, Evergreen Café). Explore Chalal Village Trek or relax by the Parvati River. Visit Manikaran Sahib Gurudwara & experience the natural hot springs. Evening bonfire with light music and dinner under the stars. Overnight stay at Kasol." },
      { day: 3, title: "Day 3 – Kheerganga Trek & Return Journey", description: "Early morning breakfast, drive to Barshaini (trek start point). Begin the scenic Kheerganga Trek through pine forests, waterfalls, and villages. Reach Kheerganga top, relax in the natural hot water springs and soak in mountain views. Descend to Barshaini by evening and start the return journey to Delhi. Overnight travel, reach Delhi the next morning." }
    ],
    included: [
      "Delhi pickup & drop in comfortable tempo traveller/bus",
      "Accommodation: Camp stay in Kasol & overnight journey",
      "All meals: Breakfast, lunch, and dinner included",
      "Trek guide & basic first aid",
      "All permits and entry fees",
      "Manikaran Gurudwara visit",
      "Bonfire & group activities",
      "Local sightseeing assistance"
    ],
    excluded: [
      "Personal expenses & shopping",
      "Any activities not mentioned",
      "Travel insurance",
      "Additional snacks & beverages"
    ],
    bestTime: "Year-round (best: Mar–Jun, Sep–Nov)",
    fitnessLevel: "Basic fitness sufficient for Kheerganga trek",
  },
  "bir-billing": {
    title: "Bir Billing Trip",
    subtitle: "Paragliding Capital of India",
    description:
      "Experience paragliding from Billing to Bir, visit monasteries, explore cafes, and enjoy stunning sunsets over the Kangra valley.",
    image: "🪂",
    price: "₹6,999",
    originalPrice: "₹8,499",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    location: "Kangra Valley, Himachal Pradesh",
    maxGroupSize: 12,
    rating: 4.9,
    reviews: 76,
    highlights: [
      "Paragliding tandem flight (optional)",
      "Monastery visits & village walks",
      "Sunset points and cafe hopping",
      "Comfortable stays"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Local Explorations", description: "Reach Bir, check-in, explore cafes and monasteries." },
      { day: 2, title: "Billing Paragliding", description: "Drive to Billing, tandem flight to Bir (optional), sunset point." },
      { day: 3, title: "Leisure & Departure", description: "Leisure morning, local shopping, depart with memories." }
    ],
    included: [
      "Accommodation (twin sharing)",
      "Local assistance & permits",
      "Transport for local sightseeing",
    ],
    excluded: [
      "Paragliding fee",
      "Meals",
      "Personal expenses",
      "Travel insurance"
    ],
    bestTime: "Mar–Jun, Sep–Nov",
    fitnessLevel: "No specific fitness required",
  },
  "triund-trek": {
    title: "Triund Trek",
    subtitle: "Classic Dharamkot Ridge | From ₹3,999",
    description:
      "A short, scenic hike to Triund with grand views of the Dhauladhar range and the Kangra valley—perfect weekend adventure.",
    image: "⛰️",
    price: "₹3,999",
    originalPrice: "₹4,999",
    duration: "2 Days / 1 Night",
    difficulty: "Easy to Moderate",
    location: "McLeod Ganj, Himachal Pradesh",
    maxGroupSize: 18,
    rating: 4.7,
    reviews: 143,
    highlights: [
      "Panoramic Dhauladhar views",
      "Camp under starry skies",
      "Beginner-friendly trail",
    ],
    itinerary: [
      { day: 1, title: "McLeod Ganj to Triund", description: "Start trek from Dharamkot/Bhagsu. Reach Triund. Sunset & camp stay." },
      { day: 2, title: "Sunrise & Return", description: "Enjoy sunrise. Descend to McLeod Ganj. Trip ends post lunch." }
    ],
    included: [
      "Camp stay",
      "Trek guide",
      "Permits",
      "Basic first aid"
    ],
    excluded: [
      "Meals",
      "Transport to base",
      "Personal expenses",
      "Travel insurance"
    ],
    bestTime: "Year-round (avoid heavy snow/rains)",
    fitnessLevel: "Basic fitness sufficient",
  },
} as const;

type Params = { 
  params: Promise<{ slug: keyof typeof tours }>;
};

export function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return {};
  
  return {
    title: `${tour.title} | Nirvana Treks & Tours`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: Params) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return notFound();

  const difficultyColor = tour.difficulty.includes('Easy') ? 'text-green-400 bg-green-500/20' :
                         tour.difficulty.includes('Moderate') ? 'text-yellow-400 bg-yellow-500/20' :
                         'text-red-400 bg-red-500/20';

  return (
    <main className="py-16">
      <Container>
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
                  {tour.difficulty}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{tour.rating}</span>
                  <span className="text-white/60 text-sm">({tour.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{tour.title}</h1>
              <h2 className="text-xl text-emerald-400 mb-6">{tour.subtitle}</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{tour.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all">
                  Download Itinerary
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-8xl">
                {tour.image}
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">{tour.price}</div>
                  <div className="text-sm text-white/60 line-through">{tour.originalPrice}</div>
                  <div className="text-xs text-white/80">per person</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Clock, label: "Duration", value: tour.duration },
            { icon: MapPin, label: "Location", value: tour.location },
            { icon: Users, label: "Max Group", value: `${tour.maxGroupSize} people` },
            { icon: Calendar, label: "Best Time", value: tour.bestTime }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <item.icon className="w-8 h-8 mx-auto text-emerald-400 mb-3" />
              <div className="text-sm text-white/70 mb-1">{item.label}</div>
              <div className="font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Tour Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tour.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Detailed Itinerary</h3>
          <div className="space-y-4">
            {tour.itinerary.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">{item.day}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included/Excluded */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              What&apos;s Included
            </h3>
            <div className="space-y-3">
              {tour.included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-400" />
              What&apos;s Not Included
            </h3>
            <div className="space-y-3">
              {tour.excluded.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fitness Level */}
        <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-semibold text-white">Fitness Requirements</h3>
          </div>
          <p className="text-white/80">{tour.fitnessLevel}</p>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready for This Adventure?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join us for an unforgettable journey. Our expert team is ready to help you plan the perfect adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105"
            >
              Book This Adventure
              <Heart className="w-5 h-5" />
            </Link>
            <Link 
              href="/tours"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              View Other Tours
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}


