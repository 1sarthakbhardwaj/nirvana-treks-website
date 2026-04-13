import Container from "@/components/ui/container";
import TourDetailHeroVisual from "@/components/tour-detail-hero-visual";
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
      { day: 1, title: "Day 1 – Departure from Delhi", timeHint: "Evening 6:30–8:00 PM pickup", description: "Evening departure from Delhi in a comfortable tempo traveller / bus. Overnight journey through beautiful mountain roads. Arrival in Kasol by morning." },
      { day: 2, title: "Day 2 – Kasol Exploration & Local Sightseeing", timeHint: "Full day on trail & town", description: "Check-in at campsite or riverside stay. Breakfast amidst the mountains. Visit Kasol Market, enjoy Café Hopping (Moon Dance Café, Evergreen Café). Explore Chalal Village Trek or relax by the Parvati River. Visit Manikaran Sahib Gurudwara & experience the natural hot springs. Evening bonfire with light music and dinner under the stars. Overnight stay at Kasol." },
      { day: 3, title: "Day 3 – Kheerganga Trek & Return Journey", timeHint: "Early start ~6:00 AM", description: "Early morning breakfast, drive to Barshaini (trek start point). Begin the scenic Kheerganga Trek through pine forests, waterfalls, and villages. Reach Kheerganga top, relax in the natural hot water springs and soak in mountain views. Descend to Barshaini by evening and start the return journey to Delhi. Overnight travel, reach Delhi the next morning." }
    ],
    departures: [
      { label: "Fri batch", detail: "6:30 PM, Delhi pickup (RK Ashram / Majnu Ka Tila)" },
      { label: "Sat", detail: "~2:00 PM, Kasol check-in & local time" },
      { label: "Mon return", detail: "Morning, Delhi arrival (traffic dependent)" },
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
    itineraryAvailability: "coming_soon",
    itineraryNotice: "Itinerary coming soon, please wait. Dates and hour-by-hour timings will be posted here shortly. WhatsApp us for early details.",
  },
  "triund-trek": {
    title: "Triund Trek",
    subtitle: "Classic Dharamkot Ridge | From ₹5,999",
    description:
      "A short, scenic hike to Triund with grand views of the Dhauladhar range and the Kangra valley: perfect weekend adventure.",
    image: "⛰️",
    price: "₹5,999",
    originalPrice: "₹7,499",
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
    itineraryAvailability: "sold_out",
    itineraryNotice: "Sold out for this time, please try next time.",
    departures: [
      { label: "Next season", detail: "Weekend departures from McLeod Ganj; new slots open soon" },
    ],
  },
  "bir-rajgundha": {
    title: "Bir, Barot to Rajgundha Trek",
    subtitle: "3 Days / 2 Nights | From ₹5,999",
    description:
      "Trek from the paragliding capital through Barot into the hidden Rajgundha valley: lush meadows, stunning mountain views, and nights under an ocean of stars.",
    image: "🏕️",
    price: "₹5,999",
    originalPrice: "₹7,999",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy to Moderate",
    location: "Kangra Valley, Himachal Pradesh",
    maxGroupSize: 14,
    rating: 4.8,
    reviews: 64,
    highlights: [
      "Trek through pine and deodar forests from Bir",
      "Camp in the pristine Rajgundha valley meadow",
      "360-degree views of the Dhauladhar range",
      "Bonfire under unpolluted starry skies",
      "Visit the ancient Rajgundha village",
      "Optional paragliding in Bir before/after trek"
    ],
    itinerary: [
      { day: 1, title: "Day 1 – Bir & Barot to Rajgundha", description: "Arrive in Bir, meet the group and trek lead. Drive to Barot and begin the trek through dense forests and open ridges. Reach Rajgundha valley by evening. Set up camp, bonfire and dinner under the stars." },
      { day: 2, title: "Day 2 – Rajgundha Exploration", description: "Wake up to valley views. After breakfast, explore Rajgundha village and nearby meadows. Optional hike to higher ridges for panoramic Dhauladhar views. Evening at leisure, bonfire with music." },
      { day: 3, title: "Day 3 – Descent & Departure", description: "Early morning sunrise point visit. Breakfast and descend back to Bir via an alternate route through Palachak. Reach Bir by afternoon. Trip ends." }
    ],
    included: [
      "Camping accommodation (tents, sleeping bags, mats)",
      "All meals during the trek (breakfast, lunch, dinner)",
      "Experienced trek guide & support staff",
      "Permits and forest entry fees",
      "Bonfire & group activities",
      "Basic first aid kit"
    ],
    excluded: [
      "Transport to/from Bir",
      "Paragliding fee (optional)",
      "Personal expenses",
      "Travel insurance"
    ],
    bestTime: "Mar–Jun, Sep–Nov",
    fitnessLevel: "Basic fitness sufficient; regular walks recommended",
  },
  "kareri-lake": {
    title: "Kareri Lake Trek",
    subtitle: "3 Days / 2 Nights | From ₹5,999",
    description:
      "Trek to the glacial Kareri Lake nestled at 2,934m in the Dhauladhar range: alpine meadows, dense forests, and a pristine high-altitude lake.",
    image: "💎",
    price: "₹5,999",
    originalPrice: "₹7,999",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    location: "Kangra Valley, Himachal Pradesh",
    maxGroupSize: 12,
    rating: 4.8,
    reviews: 58,
    highlights: [
      "Pristine glacial lake at 2,934m altitude",
      "Camp beside the crystal-clear Kareri Lake",
      "Dense oak, pine and rhododendron forests",
      "Rich birdlife and Himalayan flora",
      "Panoramic views of snow-capped Dhauladhar peaks",
      "Authentic Gaddi shepherd village encounters"
    ],
    itinerary: [
      { day: 1, title: "Day 1 – Dharamshala to Kareri Village", description: "Drive from Dharamshala to Kareri village (the trek base). Begin the trek through terraced fields and oak forests to the midway campsite at Rioti. Set up camp, dinner and bonfire." },
      { day: 2, title: "Day 2 – Rioti to Kareri Lake", description: "Post breakfast, continue the ascent through dense forest, crossing streams. Reach Kareri Lake by afternoon. Explore the glacial lake, enjoy the reflections of Dhauladhar peaks. Camp beside the lake. Evening bonfire." },
      { day: 3, title: "Day 3 – Kareri Lake to Dharamshala", description: "Sunrise at the lake. Breakfast and begin descent. Trek back to Kareri village, drive to Dharamshala. Trip ends by evening." }
    ],
    included: [
      "Camping accommodation (tents, sleeping bags, mats)",
      "All meals during the trek",
      "Certified trek guide & support staff",
      "Permits and forest entry fees",
      "Transport: Dharamshala – Kareri village – Dharamshala",
      "Basic first aid & emergency oxygen"
    ],
    excluded: [
      "Transport to/from Dharamshala",
      "Personal expenses",
      "Travel insurance",
      "Any item not mentioned in inclusions"
    ],
    bestTime: "Apr–Jun, Sep–Nov",
    fitnessLevel: "Moderate fitness required; ability to walk 6-8 hours a day on mountain trails",
  },
  "hampta-pass": {
    title: "Hampta Pass Trek",
    subtitle: "5 Nights / 6 Days | From ₹12,999",
    description:
      "Cross the dramatic Hampta Pass at 4,270m, from the lush green Kullu valley to the stark, arid landscapes of Spiti. One of the most rewarding crossover treks in the Himalayas.",
    image: "🏔️",
    price: "₹12,999",
    originalPrice: "₹15,999",
    duration: "5 Nights / 6 Days",
    difficulty: "Moderate to Difficult",
    location: "Kullu–Spiti, Himachal Pradesh",
    maxGroupSize: 12,
    rating: 4.9,
    reviews: 87,
    highlights: [
      "Cross the legendary Hampta Pass at 4,270m",
      "Dramatic landscape shift: green Kullu to barren Spiti",
      "Camp at stunning Balu Ka Ghera & Shea Goru",
      "Visit the mesmerizing Chandratal (Moon Lake)",
      "River crossings, glacial moraines & alpine meadows",
      "Professional mountaineering guides & full support team"
    ],
    itinerary: [
      { day: 1, title: "Day 1 – Manali to Jobra to Chika", description: "Drive from Manali to Jobra (trek starting point at 3,100m). Trek to Chika campsite through lush apple orchards and pine forests. Set up camp at Chika (3,050m). Evening orientation and bonfire." },
      { day: 2, title: "Day 2 – Chika to Balu Ka Ghera", description: "Trek through dense forests opening into vast meadows. Cross streams and reach Balu Ka Ghera (3,600m), a stunning campsite in a wide valley surrounded by towering peaks. Acclimatisation walk." },
      { day: 3, title: "Day 3 – Balu Ka Ghera to Shea Goru (Pass Day)", description: "The big day. Early start for the Hampta Pass ascent (4,270m). Navigate glacial moraines and snowfields. Witness the dramatic landscape change at the pass (green to barren). Descend to Shea Goru (3,900m) on the Spiti side. Camp." },
      { day: 4, title: "Day 4 – Shea Goru to Chatru", description: "Descend along the Shea Nala river through the stark Spiti terrain. Reach Chatru (3,360m). Rest day at camp. Optional drive to explore the area." },
      { day: 5, title: "Day 5 – Chatru to Chandratal to Sissu", description: "Drive to Chandratal Lake (4,300m), the breathtaking crescent-shaped Moon Lake. Spend time at the lake. Drive to Sissu in the Lahaul valley. Celebrate trek completion!" },
      { day: 6, title: "Day 6 – Sissu to Manali", description: "Drive back to Manali via the Atal Tunnel. Trip ends in Manali by afternoon. Departure with unforgettable memories." }
    ],
    included: [
      "Camping accommodation (quality tents, sleeping bags, mats)",
      "All meals during the trek (veg & non-veg options)",
      "Certified mountaineering guide & support staff",
      "Cook, helpers and pack mules/porters",
      "All permits, forest entry fees & camping charges",
      "Transport: Manali–Jobra, Chatru–Chandratal–Sissu–Manali",
      "First aid kit, emergency oxygen cylinder & oximeter",
      "Chandratal Lake visit"
    ],
    excluded: [
      "Transport to/from Manali",
      "Personal expenses & gear",
      "Travel insurance",
      "Accommodation in Manali before/after trek",
      "Any item not mentioned in inclusions"
    ],
    bestTime: "Jun–Sep (post-snowmelt, pre-winter)",
    fitnessLevel: "Good fitness required; regular cardio and strength training recommended. Must be comfortable walking 6-8 hours on steep terrain at high altitude.",
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

type ItineraryAvailability = "open" | "coming_soon" | "sold_out";

function itineraryAvailabilityOf(
  tour: (typeof tours)[keyof typeof tours]
): ItineraryAvailability {
  const a =
    "itineraryAvailability" in tour ? tour.itineraryAvailability : undefined;
  if (a === "coming_soon" || a === "sold_out") return a;
  return "open";
}

export default async function TourDetailPage({ params }: Params) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return notFound();

  const itineraryAvailability = itineraryAvailabilityOf(tour);
  const itineraryNotice =
    "itineraryNotice" in tour && tour.itineraryNotice ? tour.itineraryNotice : null;
  const departures = (
    "departures" in tour && Array.isArray(tour.departures) ? tour.departures : []
  ) as { label: string; detail?: string }[];

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
              <p className="mt-4 text-sm text-white/55">
                Refer friends and earn credit on your next trip.{" "}
                <Link href="/#referral-program" className="text-emerald-400 underline-offset-2 hover:underline">
                  see Refer &amp; earn
                </Link>
                .
              </p>
            </div>
            
            <div className="relative">
              <div className="relative isolate h-80 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <TourDetailHeroVisual />
                <span
                  className="pointer-events-none absolute bottom-4 right-4 text-6xl drop-shadow-lg md:text-7xl"
                  aria-hidden
                >
                  {tour.image}
                </span>
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

          {itineraryAvailability !== "open" && itineraryNotice && (
            <div
              className={`mb-8 rounded-xl border p-5 backdrop-blur-sm ${
                itineraryAvailability === "sold_out"
                  ? "border-red-500/35 bg-red-500/10"
                  : "border-amber-500/35 bg-amber-500/10"
              }`}
            >
              <p className="font-medium text-white/95">{itineraryNotice}</p>
            </div>
          )}

          {departures.length > 0 && (
            <div className="mb-8">
              <h4 className="mb-3 text-lg font-semibold text-white/90">
                Typical timings & departures
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {departures.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-sm font-medium text-emerald-400">{d.label}</div>
                    {d.detail ? (
                      <p className="mt-1 text-sm text-white/75">{d.detail}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {itineraryAvailability !== "sold_out" ? (
            <div
              className={`space-y-4 ${
                itineraryAvailability === "coming_soon" ? "opacity-80" : ""
              }`}
            >
              {tour.itinerary.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="font-bold text-emerald-400">{item.day}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                    {"timeHint" in item && item.timeHint ? (
                      <p className="mb-2 text-sm text-emerald-300/90">{item.timeHint}</p>
                    ) : null}
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/60 text-sm">
              Day-by-day plan is hidden while this batch is full. Message us for the next
              departure window.
            </p>
          )}
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


