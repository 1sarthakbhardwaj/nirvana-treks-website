import Container from "@/components/ui/container";
import TourDetailHeroVisual from "@/components/tour-detail-hero-visual";
import TourPackageTabs from "@/components/tour-package-tabs";
import TourHighlights from "@/components/tour-highlights";
import BirBillingTour from "@/components/bir-billing/bir-billing-tour";
import KasolKheergangaTour from "@/components/kasol-kheerganga/kasol-kheerganga-tour";
import TriundTour from "@/components/triund-trek/triund-tour";
import KareriTour from "@/components/kareri-lake/kareri-tour";
import ChurdharTour from "@/components/churdhar-trek/churdhar-tour";
import TourSeoJsonLd from "@/components/tour-seo-json-ld";
import { getTourBySlug } from "@/lib/tours-catalog";
import { buildTourMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, Clock, Users, Star, Calendar, Heart, ArrowRight,
  CheckCircle, XCircle, AlertTriangle
} from "lucide-react";

const kasolFullItinerary = [
  {
    day: 1,
    title: "Roll out of the city",
    timeHint: "9:00 PM onboard",
    summary:
      "Evening departure from Delhi. Icebreakers on the bus so no one's a stranger by morning. Sleep on the highway, wake in the hills.",
    bullets: [
      "Two truths and a lie",
      "Mafia, Imposter, and group deduction games",
      "Shared playlists and late night stories",
    ],
  },
  {
    day: 2,
    title: "Arrive Kasol and café hopping",
    timeHint: "Overnight in Kasol",
    summary: "Morning check-in, hot shower, mountain breakfast, then an easy day in the valley.",
    bullets: [
      "Café hopping along the Parvati River",
      "Kasol market for woollens and local finds",
      "Group dinner & music at the stay",
      "Complimentary Himachali Siddu on us",
    ],
  },
  {
    day: 3,
    title: "Kheerganga trek",
    timeHint: "~12 km, 4 to 5 hrs up, camp night",
    summary:
      "Drive to Barshaini and trek through Rudranag, waterfalls, and pine forest to camp.",
    bullets: [
      "Natural hot springs at the top",
      "Bonfire as the sun drops",
      "Stargazing with Milky Way views on clear nights",
      "Camp games, music & dinner under the sky",
    ],
    note: "If Kheerganga is closed: Manikaran Sahib (gurudwara, hot springs, langar) then Manali for the night.",
  },
  {
    day: 4,
    title: "Trek down and send off",
    timeHint: "Evening bus to Delhi",
    summary:
      "Sunrise at camp, breakfast, downhill trek. Relax in Kasol, then evening departure. Team gift + best-photo contest winner announced.",
    note: "If on Plan B: Hidimba Temple, Solang Nala & Sissu (Atal Tunnel side) instead of trek down.",
  },
  {
    day: 5,
    title: "Home",
    timeHint: "Early morning, Delhi",
    summary: "Overnight return. Early drop in Delhi with tired legs, a full camera roll, and new friends.",
  },
] as const;

const kasolWeekendItinerary = [
  {
    day: 1,
    title: "Friday night roll-out",
    timeHint: "9:00 PM from Delhi",
    summary:
      "Hit the road to Parvati Valley. Icebreakers, playlists, and games like Mafia and Imposter turn the bus into the pre party.",
  },
  {
    day: 2,
    title: "Kasol all day",
    timeHint: "Back Saturday night",
    summary: "Full Saturday in the valley — no trek, just vibes. Board Saturday night; Delhi by Sunday morning.",
    bullets: [
      "Café hopping & riverside chill",
      "Kasol market wander",
      "Optional Chalal or Manikaran",
      "Complimentary Siddu · group dinner",
    ],
  },
] as const;

const tours = {
  "kasol-trip": {
    title: "Kasol × Kheerganga",
    subtitle: "5 days, 4 nights | Delhi or Chandigarh pickup and drop",
    description:
      "A Parvati Valley escape built around good people, good food, and a night under the stars at Kheerganga. Come solo or bring your crew. You will leave with new friends. Choose the full five day trek or a Kasol weekend that gets you home Saturday night.",
    image: "🏞️",
    price: "From ₹7,499",
    originalPrice: "₹8,999",
    duration: "5 Days / 4 Nights (or Weekend)",
    difficulty: "Easy to Moderate",
    location: "Parvati Valley, Himachal Pradesh",
    maxGroupSize: 14,
    rating: 4.8,
    reviews: 92,
    highlights: [],
    highlightCards: [
      {
        title: "Mountain road trip",
        description:
          "Round trip from Delhi with games, music, and icebreakers so the bus feels like day one of the adventure.",
        icon: "bus",
      },
      {
        title: "Kasol café culture",
        description:
          "Riverside coffee, market strolls, and slow mornings along the Parvati River in the heart of the valley.",
        icon: "cafe",
      },
      {
        title: "Kheerganga under the stars",
        description:
          "Trek through pine forest, soak in natural hot springs, and camp with bonfires and Milky Way views.",
        icon: "trek",
      },
      {
        title: "Taste of Himachal",
        description:
          "Complimentary Siddu at the stay. Warm, local, and fresh off the steamer.",
        icon: "sparkles",
      },
      {
        title: "Plan B built in",
        description:
          "If the trail is closed, we pivot to Manikaran Sahib and Manali without losing the trip energy.",
        icon: "stars",
      },
      {
        title: "Memories to take home",
        description:
          "Team Nirvana send off gift plus a best photo of the trip contest before you roll back to the city.",
        icon: "gift",
      },
    ],
    packageVariants: [
      {
        id: "full",
        name: "Full Experience: Kasol and Kheerganga",
        shortName: "Full experience",
        badge: "Most popular",
        subtitle: "Trek, camp under the stars, and five days in Parvati Valley",
        duration: "5 Days / 4 Nights",
        pricingTiers: [
          { label: "Quad / Triple sharing", price: "₹7,499" },
          { label: "Double sharing", price: "₹7,999" },
        ],
        itinerary: kasolFullItinerary,
        included: [
          "Delhi to Parvati Valley transport",
          "2 nights stay (Kasol + Kheerganga camp)",
          "2 breakfasts + 2 dinners",
          "Kheerganga camping with bonfire",
          "Complimentary Himachali Siddu",
          "Special gift + photo contest prize",
          "Trek guide & permits",
        ],
      },
      {
        id: "weekend",
        name: "Weekend Escape: Kasol Only",
        shortName: "Weekend escape",
        badge: "Quick getaway",
        subtitle: "Friday out, Saturday in Kasol, back Saturday night",
        duration: "Weekend, 1 night",
        pricingTiers: [
          { label: "Quad / Triple sharing", price: "₹6,499" },
          { label: "Double sharing", price: "₹6,999" },
        ],
        itinerary: kasolWeekendItinerary,
        included: [
          "Delhi to Kasol transport (weekend batch)",
          "1 night stay in Kasol",
          "Breakfast + dinner",
          "Café hopping & local sightseeing",
          "Complimentary Himachali Siddu",
          "Group activities & local assistance",
        ],
      },
    ],
    itinerary: kasolFullItinerary,
    departures: [
      { label: "Full trip", detail: "Day 1 at 9 PM from Delhi. Returns Day 5 early morning." },
      { label: "Weekend", detail: "Friday 9 PM out. Saturday in Kasol. Saturday night back to Delhi." },
      { label: "Pickup", detail: "Delhi by default. Chandigarh on request." },
    ],
    included: [
      "Delhi to Parvati Valley transport (Chandigarh on request)",
      "Accommodation as per package (Kasol + camp on full trip)",
      "Meals as listed per package",
      "Kheerganga camping, guide & permits (full trip)",
      "Complimentary Himachali Siddu",
      "Special gift & best-photo contest (full trip send-off)",
      "Bonfire, camp games & group activities",
    ],
    excluded: [
      "Personal expenses & shopping",
      "Lunches not mentioned in package",
      "Travel insurance",
      "Additional snacks & beverages",
    ],
    bestTime: "Year round (best Mar to Jun, Sep to Nov)",
    fitnessLevel: "Basic fitness for Kheerganga on the full package. Weekend is easy with no trek required.",
  },
  "bir-billing": {
    title: "Bir Billing",
    subtitle: "The Paragliding Capital of India",
    description:
      "Fly over the Dhauladhars, chase a hidden waterfall, and watch the valley turn gold at the landing site. Pick a tight weekend or stretch it into the wild Rajgundha Valley.",
    image: "🪂",
    price: "From ₹7,499",
    originalPrice: "₹8,999",
    duration: "4 to 5 days",
    difficulty: "Easy",
    location: "Kangra Valley, Himachal Pradesh",
    maxGroupSize: 14,
    rating: 4.9,
    reviews: 76,
    highlights: [
      "Tandem paragliding from Billing (optional add on)",
      "Hidden Gunehar waterfall guided walk",
      "Tibetan colony, monasteries and Bir cafés",
      "Sunset together at the landing site",
      "Extended option: trek into Rajgundha Valley",
      "Camp with bonfire under Hanuman Tibba views",
    ],
    itinerary: [
      { day: 1, title: "Day 1, Friday", description: "Evening departure from Delhi. Overnight drive with intro games on the bus." },
      { day: 2, title: "Day 2, Saturday", description: "Morning arrival in Bir. Day splits between paragliding and the Gunehar waterfall trek. Group sunset at the landing site, bonfire and dinner." },
      { day: 3, title: "Day 3, Sunday", description: "Café day in Bir, Tibetan colony and monasteries. Complimentary Himachali dish and gift before evening bus." },
      { day: 4, title: "Day 4, Monday", description: "Overnight return, early morning drop in Delhi." }
    ],
    included: [
      "Delhi to Bir transport (luxury coach)",
      "Stay in Bir guesthouse (and tents on Extended)",
      "Breakfasts and dinners as per plan",
      "Guided Gunehar waterfall trek",
      "Trek leader, permits and first aid",
      "Free authentic Himachali dish",
      "Special send off gift from Team Nirvana",
    ],
    excluded: [
      "Paragliding fee (optional add on, weather dependent)",
      "Lunches",
      "Personal expenses",
      "Travel insurance",
    ],
    bestTime: "Mar to Jun, Sep to Nov",
    fitnessLevel: "No specific fitness required. Extended trek is beginner friendly with no technical sections.",
  },
  "triund-trek": {
    title: "Triund Trek",
    subtitle: "Weekend ridge camp | From ₹7,499",
    description:
      "A short, sharp weekend climb to the most famous ridge in the Dhauladhars. Camp at 2,875 m, wake up to the snow wall at sunrise. Hotel freshen-up before the trail.",
    image: "⛰️",
    price: "₹7,499",
    originalPrice: "₹7,999",
    duration: "2 Days / 3 Nights",
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
    bestTime: "Mar to Jun, Sep to Nov",
    fitnessLevel: "Basic fitness sufficient",
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
    itineraryAvailability: "coming_soon",
    itineraryNotice:
      "Coming soon. We are opening new batches for this route. Message us on WhatsApp or call to join the waitlist.",
  },
  "kareri-lake": {
    title: "Kareri Lake Trek",
    subtitle: "Glacial lake weekend | From ₹7,499",
    description:
      "A crystal glacial lake fed by Dhauladhar snowmelt at around 3,000 m. Trek through forest and meadow, camp by the water, catch the peaks mirrored on a still morning.",
    image: "💎",
    price: "₹7,499",
    originalPrice: "₹7,999",
    duration: "2 Days / 3 Nights",
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
  "churdhar-trek": {
    title: "Churdhar Peak Trek",
    subtitle: "Summit weekend | From ₹7,499",
    description:
      "The highest summit in the outer Himalayas at 3,647 m, crowned by the Shirgul Maharaj temple. Forest camp above Sarahan, pre-dawn summit push, 360° views from Kinnaur to the Shimla hills.",
    image: "🏔️",
    price: "₹7,499",
    originalPrice: "₹7,999",
    duration: "2 Days / 3 Nights",
    difficulty: "Moderate to Difficult",
    location: "Sirmaur, Himachal Pradesh",
    maxGroupSize: 16,
    rating: 4.9,
    reviews: 42,
    highlights: [
      "Summit at 3,647 m, highest in the outer Himalayas",
      "Shirgul Maharaj temple darshan",
      "Deodar forest trek from Sarahan",
      "360° panorama on clear days",
      "Dark-sky stargazing at camp",
      "Special gift from Team Nirvana",
    ],
    itinerary: [
      {
        day: 1,
        title: "Friday night departure",
        description: "Evening bus from Delhi or Chandigarh. Intro rounds and games on board.",
      },
      {
        day: 2,
        title: "Sarahan to mountain camp",
        description: "Arrive Sarahan, freshen up, trek through deodar forest to camp.",
      },
      {
        day: 3,
        title: "Summit and return",
        description: "Pre-dawn push to Churdhar peak and Shirgul temple. Descend and overnight bus.",
      },
      {
        day: 4,
        title: "Monday morning",
        description: "Early drop in Delhi.",
      },
    ],
    included: [
      "Transport from Delhi or Chandigarh",
      "Freshen-up stop and mountain camp",
      "Camping gear",
      "2 breakfasts and 1 dinner",
      "Guide, permits, and trek leader",
      "First aid support",
      "Himachali dish and special gift",
    ],
    excluded: [
      "Lunches",
      "Personal expenses",
      "Pony or porter for personal bags",
      "Travel insurance",
    ],
    bestTime: "Apr to Jun, Sep to Nov",
    fitnessLevel: "Reasonable fitness recommended. Warm layers essential.",
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
  const entry = getTourBySlug(slug);
  if (!entry) return {};

  return buildTourMetadata(entry);
}

type ItineraryAvailability = "open" | "coming_soon" | "sold_out";

function itineraryAvailabilityOf(
  tour: (typeof tours)[keyof typeof tours]
): ItineraryAvailability {
  const a =
    "itineraryAvailability" in tour
      ? (tour.itineraryAvailability as ItineraryAvailability | undefined)
      : undefined;
  if (a === "coming_soon" || a === "sold_out") return a;
  return "open";
}

export default async function TourDetailPage({ params }: Params) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return notFound();

  if (slug === "bir-billing") {
    return (
      <>
        <TourSeoJsonLd slug={slug} />
        <BirBillingTour />
      </>
    );
  }

  if (slug === "kasol-trip") {
    return (
      <>
        <TourSeoJsonLd slug={slug} />
        <KasolKheergangaTour />
      </>
    );
  }

  if (slug === "triund-trek") {
    return (
      <>
        <TourSeoJsonLd slug={slug} />
        <TriundTour />
      </>
    );
  }

  if (slug === "kareri-lake") {
    return (
      <>
        <TourSeoJsonLd slug={slug} />
        <KareriTour />
      </>
    );
  }

  if (slug === "churdhar-trek") {
    return (
      <>
        <TourSeoJsonLd slug={slug} />
        <ChurdharTour />
      </>
    );
  }

  const itineraryAvailability = itineraryAvailabilityOf(tour);
  const itineraryNotice =
    "itineraryNotice" in tour && typeof tour.itineraryNotice === "string"
      ? tour.itineraryNotice
      : null;
  const departures = (
    "departures" in tour && Array.isArray(tour.departures) ? tour.departures : []
  ) as { label: string; detail?: string }[];
  const packageVariants =
    "packageVariants" in tour && Array.isArray(tour.packageVariants)
      ? tour.packageVariants
      : null;
  const highlightCards =
    "highlightCards" in tour && Array.isArray(tour.highlightCards)
      ? tour.highlightCards
      : null;
  const difficultyColor = tour.difficulty.includes('Easy') ? 'text-green-400 bg-green-500/20' :
                         tour.difficulty.includes('Moderate') ? 'text-yellow-400 bg-yellow-500/20' :
                         'text-red-400 bg-red-500/20';

  return (
    <>
      <TourSeoJsonLd slug={slug} />
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
              
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-sm text-white/55">
                Refer friends and earn credit on your next trip.{" "}
                <Link href="/refer" className="text-emerald-400 underline-offset-2 hover:underline">
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
              <div className="absolute -bottom-6 -right-6 min-w-[200px] rounded-xl border border-white/10 bg-black/85 p-4 backdrop-blur-sm">
                <p className="text-center text-xs font-medium uppercase tracking-wide text-white/50">
                  Starting from
                </p>
                <p className="text-center text-2xl font-bold text-emerald-400">{tour.price}</p>
                {packageVariants ? (
                  <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3 text-xs text-white/60">
                    <p className="flex justify-between gap-4">
                      <span>Full trip</span>
                      <span className="text-emerald-400/90">₹7,499+</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Weekend</span>
                      <span className="text-emerald-400/90">₹6,499+</span>
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-center text-sm text-white/50 line-through">
                      {tour.originalPrice}
                    </p>
                    <p className="text-center text-xs text-white/70">per person</p>
                  </>
                )}
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
        {highlightCards && highlightCards.length > 0 ? (
          <TourHighlights
            items={[...highlightCards]}
            eyebrow="Parvati Valley experience"
            title="What makes this trip special"
          />
        ) : tour.highlights.length > 0 ? (
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white">Tour Highlights</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {tour.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <span className="text-white/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Itinerary / packages */}
        <div className="mb-16">
          {!packageVariants ? (
            <h3 className="mb-8 text-2xl font-semibold text-white">Detailed Itinerary</h3>
          ) : null}

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

          {departures.length > 0 && !packageVariants ? (
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
          ) : null}

          {itineraryAvailability !== "sold_out" ? (
            packageVariants ? (
              <TourPackageTabs
                packages={[...packageVariants]}
                logistics={departures}
                excluded={[...tour.excluded]}
              />
            ) : (
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
                    <p className="text-white/70">
                      {"summary" in item && item.summary
                        ? item.summary
                        : "description" in item
                          ? item.description
                          : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            )
          ) : (
            <p className="text-white/60 text-sm">
              Day-by-day plan is hidden while this batch is full. Message us for the next
              departure window.
            </p>
          )}
        </div>

        {!packageVariants ? (
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                What&apos;s Included
              </h3>
              <div className="space-y-3">
                {tour.included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                <XCircle className="h-6 w-6 text-red-400" />
                What&apos;s Not Included
              </h3>
              <div className="space-y-3">
                {tour.excluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-400" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

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
    </>
  );
}


