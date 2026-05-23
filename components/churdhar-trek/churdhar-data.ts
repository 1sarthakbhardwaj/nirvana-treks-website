import type { ThemedTourPackage } from "@/components/themed-tour/types";

export const churdharTheme = {
  id: "churdhar",
  bg: "#0b0913",
  cream: "#f4eee9",
  muted: "#a59cae",
  accent: "#e3b65a",
  accentSoft: "#e3b65a",
  accentMuted: "#9a7bd0",
  warm: "#e3b65a",
  green: "#9bbf7e",
  ink2: "#14101f",
  ink3: "#1c1729",
  line: "rgba(244,238,233,.09)",
  gradientLine: "linear-gradient(180deg,#e3b65a,#9a7bd0 50%,#6a5acd 100%)",
  priceGlow: "radial-gradient(circle,rgba(227,182,90,.2),transparent 70%)",
  btnGradient: "linear-gradient(135deg,#e3b65a,#cc9b3e)",
  btnShadow: "0 10px 28px rgba(227,182,90,.28)",
  btnText: "#1a1206",
  displayFont: "var(--font-cormorant), Georgia, serif",
  priceLabel: "Churdhar Trek · 2D / 3N",
};

export const churdharPackage: ThemedTourPackage = {
  meta: [
    { label: "Duration", value: "2D / 3N", sub: "Fri 9 PM out · Mon AM back" },
    { label: "Summit", value: "3,647 m", sub: "Shirgul temple" },
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
      body: "We board in the evening and head for Sirmaur. Once everyone is settled, we run the intro rounds so no one is a stranger by morning. Sleep on the highway, wake up in the deodar country around Sarahan.",
      acts: ["Intro rounds", "Mafia and Imposter", "Shared playlists"],
    },
    {
      node: "01",
      label: "Day 01 · Saturday",
      title: "Sarahan, trek to camp",
      when: "Freshen up + breakfast · Trek up · Stay: Mountain camp",
      body: "Morning arrival at Sarahan in Sirmaur. Freshen up and breakfast, then begin the climb through thick deodar and oak forest toward the Churdhar base. We set camp by evening with the summit in view. Bonfire, hot dinner, and one of the darkest, clearest night skies in Himachal.",
      acts: [
        "Freshen up + breakfast",
        "Deodar forest trail",
        "Bonfire and dinner",
        "Stargazing",
      ],
    },
    {
      node: "02",
      label: "Day 02 · Sunday",
      title: "Summit, Shirgul temple, head back",
      when: "Pre-dawn push · Summit + darshan · Night 3: board the bus",
      body: "A pre-dawn push for the summit. Churdhar peak at 3,647 m, the highest point in the outer Himalayas. Darshan at the Shirgul Maharaj temple, and a panorama that on a clear day stretches from the Kinnaur ranges to the Shimla hills and the plains below. Then the long descent to Sarahan, a complimentary Himachali dish and special gift send off, and the bus home overnight.",
      acts: [
        "Churdhar summit (3,647 m)",
        "Shirgul Maharaj temple",
        "360° panorama",
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
    "Delhi or Chandigarh to Sarahan transport",
    "Freshen-up stop + mountain camp night",
    "Camping gear (tents, sleeping bags)",
    "2 breakfasts + 1 dinner",
    "Guided trek, permits and trek leader",
    "First aid and safety support",
    "Free authentic Himachali dish",
    "Special gift from Team Nirvana",
  ],
  notIncluded:
    "Lunches, personal expenses, pony or porter for personal bags, and anything not listed above. A high-summit trek. Reasonable fitness recommended, and warm layers are a must.",
};
