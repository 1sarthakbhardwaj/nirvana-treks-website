import type { ThemedTourPackage } from "@/components/themed-tour/types";

export const triundTheme = {
  id: "triund",
  bg: "#0c1012",
  cream: "#f3efe7",
  muted: "#a5a89f",
  accent: "#ff8a5b",
  accentSoft: "#ffb787",
  accentMuted: "#8ec4d6",
  warm: "#ffb787",
  green: "#7fb069",
  ink2: "#141a1c",
  ink3: "#1c2427",
  line: "rgba(243,239,231,.09)",
  gradientLine: "linear-gradient(180deg,#ff8a5b,#ffb787 50%,#7fb069 100%)",
  priceGlow: "radial-gradient(circle,rgba(255,138,91,.22),transparent 70%)",
  btnGradient: "linear-gradient(135deg,#ffb787,#ff8a5b)",
  btnShadow: "0 10px 28px rgba(255,138,91,.3)",
  btnText: "#180a04",
  displayFont: "var(--font-newsreader), Georgia, serif",
  priceLabel: "Triund Trek · 2D / 3N",
};

export const triundPackage: ThemedTourPackage = {
  meta: [
    { label: "Duration", value: "2D / 3N", sub: "Fri 9 PM out · Mon AM back" },
    { label: "Highlight", value: "Sunrise", sub: "Camp on the ridge" },
    { label: "Quad / Triple", value: "₹7,499", sub: "per person" },
    { label: "Double", value: "₹7,999", sub: "per person" },
  ],
  prices: [
    { name: "Quad / Triple sharing", price: "₹7,499" },
    { name: "Double sharing", price: "₹7,999" },
  ],
  days: [
    {
      node: "N1",
      label: "Friday · Night 1",
      title: "Roll out of the city",
      when: "9:00 PM · Onboard · Overnight drive",
      body: "We board in the evening and point the bus at Dharamshala. Once everyone is settled, we run the intro rounds so no one is a stranger by morning. Sleep on the highway, wake up under the Dhauladhars.",
      acts: ["Intro rounds", "Mafia and Imposter", "Shared playlists"],
    },
    {
      node: "01",
      label: "Day 01 · Saturday",
      title: "Arrive, Bhagsu, trek to Triund",
      when: "Freshen up + breakfast · Trek up · Stay: Triund camp",
      body: "Morning arrival in Dharamshala. A hotel stop to freshen up with hot shower and breakfast, then a quick look at Bhagsu waterfall and McLeodganj before the trail. By afternoon we drive to Gallu Devi and climb to the Triund ridge (~7 km, 4 to 5 hrs) through oak and rhododendron. Camp at 2,875 m, watch the Dhauladhar wall turn pink, bonfire and hot dinner under the stars.",
      acts: [
        "Hotel freshen up + breakfast",
        "Bhagsu and McLeodganj",
        "Trek to the ridge",
        "Bonfire and dinner",
      ],
    },
    {
      node: "02",
      label: "Day 02 · Sunday",
      title: "Sunrise, trek down, head back",
      when: "Sunrise · Descent · Night 3: board the bus",
      body: "Up early for the moment everyone comes for: first light hitting the snow line, the whole range glowing. Breakfast at camp, then trek back down, lighter and faster. Time to relax over coffee in McLeodganj, plus a complimentary Himachali dish and a special gift send off from Team Nirvana. Board the bus in the evening for the overnight return.",
      acts: ["Sunrise over the Dhauladhars", "Trek down", "Free dish + special gift"],
      warmActs: [false, false, true],
      highlight: true,
    },
    {
      node: "→",
      label: "Monday",
      title: "Home",
      when: "Early morning · Drop in Delhi",
      body: "Overnight return and an early morning drop in Delhi. Tired legs, a full camera roll, and a new group of friends.",
    },
  ],
  included: [
    "Delhi or Chandigarh to Dharamshala transport",
    "Hotel freshen up + Triund camp night",
    "Camping gear (tents, sleeping bags)",
    "2 breakfasts + 1 dinner",
    "Bhagsu and McLeodganj sightseeing",
    "Guided trek, permits and trek leader",
    "Free authentic Himachali dish",
    "Special gift from Team Nirvana",
  ],
  notIncluded:
    "Lunches, personal expenses, pony or porter for personal bags, and anything not listed above.",
};
