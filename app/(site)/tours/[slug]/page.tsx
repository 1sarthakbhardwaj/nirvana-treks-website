import Container from "@/components/ui/container";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Clock, Users, Star, Calendar, Heart, ArrowRight,
  CheckCircle, XCircle, AlertTriangle
} from "lucide-react";

const tours = {
  "kashmir-great-lakes": {
    title: "Kashmir Great Lakes Trek",
    subtitle: "Seven Pristine Alpine Lakes Adventure",
    description: "Embark on one of India's most spectacular high-altitude treks through the heart of the Kashmir Himalayas. This challenging yet rewarding journey takes you through seven stunning alpine lakes, each more beautiful than the last.",
    image: "🏔️",
    price: "₹25,000",
    originalPrice: "₹30,000",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate to Challenging",
    location: "Sonamarg, Jammu & Kashmir",
    maxGroupSize: 12,
    rating: 4.8,
    reviews: 124,
    highlights: [
      "Seven pristine alpine lakes including Vishansar and Krishansar",
      "Spectacular views of snow-capped peaks",
      "Diverse flora and fauna of the Kashmir Valley",
      "Traditional Kashmiri camping experience",
      "Professional mountain guides and safety equipment"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Pick-up from airport, briefing, and overnight in houseboat" },
      { day: 2, title: "Srinagar to Sonamarg", description: "Drive to Sonamarg base camp, equipment check" },
      { day: 3, title: "Sonamarg to Nichnai", description: "First day of trekking through pine forests" },
      { day: 4, title: "Nichnai to Vishansar Lake", description: "Trek to the first spectacular lake" },
      { day: 5, title: "Vishansar to Krishansar Lake", description: "Visit multiple lakes in one day" },
      { day: 6, title: "Krishansar to Gadsar Lake", description: "The most challenging and rewarding day" },
      { day: 7, title: "Return to Srinagar", description: "Trek back and drive to Srinagar for departure" }
    ],
    included: [
      "Professional trek leader and local guides",
      "All camping equipment (tents, sleeping bags, mats)",
      "All meals during the trek",
      "Transportation from Srinagar",
      "First aid kit and safety equipment",
      "Permits and entry fees"
    ],
    excluded: [
      "Flights to/from Srinagar",
      "Personal trekking gear",
      "Travel insurance",
      "Tips for guides and support staff",
      "Any personal expenses"
    ],
    bestTime: "June to September",
    fitnessLevel: "Good fitness required with prior trekking experience"
  },
  "spiti-valley": {
    title: "Spiti Valley Road Trip",
    subtitle: "Cold Desert Adventure",
    description: "Journey through the mystical Spiti Valley, often called 'Little Tibet'. This incredible road trip takes you through ancient monasteries, traditional villages, and some of the most dramatic landscapes in the Indian Himalayas.",
    image: "🏜️",
    price: "₹18,000",
    originalPrice: "₹22,000",
    duration: "8 Days / 7 Nights",
    difficulty: "Easy to Moderate",
    location: "Shimla to Manali via Spiti",
    maxGroupSize: 8,
    rating: 4.9,
    reviews: 89,
    highlights: [
      "Visit ancient monasteries like Key and Tashigang",
      "Drive through the world's highest village - Komic",
      "Stunning landscapes of the cold desert",
      "Traditional Spitian culture and cuisine",
      "Comfortable vehicle with experienced driver"
    ],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Scenic drive to the hill station" },
      { day: 2, title: "Shimla to Kalpa", description: "Beautiful drive through Kinnaur valley" },
      { day: 3, title: "Kalpa to Tabo", description: "Enter Spiti valley, visit Tabo monastery" },
      { day: 4, title: "Tabo to Kaza", description: "Explore the capital of Spiti" },
      { day: 5, title: "Kaza Sightseeing", description: "Visit Key monastery, Komic, and Langza" },
      { day: 6, title: "Kaza to Chandrataal", description: "Drive to the moon lake" },
      { day: 7, title: "Chandrataal to Manali", description: "Cross Rohtang Pass to reach Manali" },
      { day: 8, title: "Manali to Delhi", description: "Return journey with memories" }
    ],
    included: [
      "Comfortable SUV/Tempo Traveller",
      "Experienced driver cum guide",
      "Hotel accommodation (twin sharing)",
      "All permits and entry fees", 
      "Sightseeing as per itinerary",
      "Basic first aid kit"
    ],
    excluded: [
      "Meals (allows you to try local cuisine)",
      "Personal expenses and shopping",
      "Camera fees at monasteries",
      "Travel insurance",
      "Tips for driver and guide"
    ],
    bestTime: "May to October",
    fitnessLevel: "Basic fitness sufficient"
  },
  "kerala-backwaters": {
    title: "Kerala Backwaters Retreat",
    subtitle: "Houseboat & Cultural Immersion",
    description: "Experience the tranquil beauty of Kerala's famous backwaters aboard traditional houseboats. This peaceful retreat combines relaxation with cultural exploration through the heart of 'God's Own Country'.",
    image: "🛶",
    price: "₹12,000",
    originalPrice: "₹15,000",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    location: "Alleppey & Kumarakom, Kerala",
    maxGroupSize: 6,
    rating: 4.7,
    reviews: 156,
    highlights: [
      "Stay in traditional Kerala houseboats",
      "Serene cruise through palm-fringed canals",
      "Authentic Kerala cuisine and culture",
      "Visit spice plantations and local villages",
      "Ayurvedic spa treatments available"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Airport pickup, drive to Alleppey, board houseboat" },
      { day: 2, title: "Backwater Cruise", description: "Full day cruising through canals and lakes" },
      { day: 3, title: "Kumarakom Exploration", description: "Visit bird sanctuary and spice plantations" },
      { day: 4, title: "Departure", description: "Morning leisure time, transfer to Kochi airport" }
    ],
    included: [
      "Traditional houseboat accommodation",
      "All meals (Kerala cuisine)",
      "Backwater cruising",
      "Local sightseeing",
      "Airport transfers",
      "English speaking guide"
    ],
    excluded: [
      "Flights to/from Kochi",
      "Alcoholic beverages",
      "Ayurvedic treatments",
      "Personal expenses",
      "Travel insurance"
    ],
    bestTime: "October to March",
    fitnessLevel: "No fitness requirements"
  }
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


