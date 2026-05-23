import type { ThemedTourPackage } from "@/components/themed-tour/types";

export const kareriTheme = {
  id: "kareri",
  bg: "#080f12",
  cream: "#e9f4f5",
  muted: "#93a8ab",
  accent: "#48c4cf",
  accentSoft: "#9fe0e6",
  accentMuted: "#9fe0e6",
  warm: "#e6c878",
  green: "#86c08a",
  ink2: "#0f191d",
  ink3: "#152327",
  line: "rgba(233,244,245,.09)",
  gradientLine: "linear-gradient(180deg,#9fe0e6,#48c4cf 50%,#2a8f9c 100%)",
  priceGlow: "radial-gradient(circle,rgba(72,196,207,.22),transparent 70%)",
  btnGradient: "linear-gradient(135deg,#9fe0e6,#48c4cf)",
  btnShadow: "0 10px 28px rgba(72,196,207,.3)",
  btnText: "#04130f",
  displayFont: "var(--font-dm-serif), Georgia, serif",
  priceLabel: "Kareri Lake · 2D / 3N",
};

export const kareriPackage: ThemedTourPackage = {
  meta: [
    { label: "Duration", value: "2D / 3N", sub: "Fri 9 PM out · Mon AM back" },
    { label: "Highlight", value: "The Lake", sub: "Lakeside camp" },
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
      body: "We board in the evening and head for the Dhauladhars. Once everyone is settled, we run the intro rounds so no one is a stranger by morning. Sleep on the highway, wake up to pine and river.",
      acts: ["Intro rounds", "Mafia and Imposter", "Shared playlists"],
    },
    {
      node: "01",
      label: "Day 01 · Saturday",
      title: "Freshen up, trek to lakeside camp",
      when: "Hotel + breakfast · Trek up · Stay: Lakeside camp",
      body: "Morning arrival on the Dharamshala side. A hotel stop to freshen up and have breakfast, then we drive to Kareri village and start the climb through oak and rhododendron forest, following the Nyund stream up to our lakeside camp. Bonfire, hot dinner, and a sky full of stars.",
      acts: [
        "Hotel freshen up + breakfast",
        "Forest and stream trail",
        "Bonfire and dinner",
        "Stargazing",
      ],
    },
    {
      node: "02",
      label: "Day 02 · Sunday",
      title: "Kareri Lake, descend, head back",
      when: "Early start · Glacial lake · Night 3: board the bus",
      body: "An early start to reach Kareri Lake while the water is still glass. The Dhauladhar peaks doubled in the reflection, a small Shiva shrine on the bank, snowmelt so clear you can see the bottom. Time by the water, then the long descent back through the forest. A complimentary Himachali dish and a special gift send off before we board the bus for the overnight return.",
      acts: [
        "Kareri Lake",
        "Lakeside Shiva shrine",
        "Mirror reflections",
        "Free dish + special gift",
      ],
      warmActs: [false, false, false, true],
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
    "Delhi or Chandigarh to Kareri transport",
    "Hotel freshen up + lakeside camp night",
    "Camping gear (tents, sleeping bags)",
    "2 breakfasts + 1 dinner",
    "Guided trek, permits and trek leader",
    "First aid and safety support",
    "Free authentic Himachali dish",
    "Special gift from Team Nirvana",
  ],
  notIncluded:
    "Lunches, personal expenses, pony or porter for personal bags, and anything not listed above. A slightly tougher trek than Triund. Basic fitness recommended.",
};
