export type KasolDay = {
  day: number;
  label: string;
  title: string;
  when: string;
  body: string;
  bullets?: string[];
  acts?: string[];
  warmActs?: boolean[];
  pivot?: string;
  highlight?: boolean;
};

export type KasolRoute = {
  id: "kheerganga" | "manali";
  label: string;
  short: string;
  priceLabel: string;
  meta: { label: string; value: string; sub: string }[];
  prices: { name: string; price: string }[];
  days: KasolDay[];
};

export const kasolRoutes: KasolRoute[] = [
  {
    id: "kheerganga",
    label: "Kheerganga Camp",
    short: "5D · 4N · Trek + camp",
    priceLabel: "Kheerganga Camp · 5D / 4N",
    meta: [
      { label: "Duration", value: "5 Days", sub: "4 Nights · 2 on the road" },
      { label: "Highlight", value: "Camp", sub: "Hot springs · stargazing" },
      { label: "Quad / Triple", value: "₹7,499", sub: "per person" },
      { label: "Double", value: "₹7,999", sub: "per person" },
    ],
    prices: [
      { name: "Quad / Triple sharing", price: "₹7,499" },
      { name: "Double sharing", price: "₹7,999" },
    ],
    days: [
      {
        day: 1,
        label: "Day 01",
        title: "Roll out of the city",
        when: "9:00 PM · Onboard · Overnight drive",
        body: "We board in the evening and point the bus at the Parvati Valley. Once everyone is settled, we run the intro rounds so no one is a stranger by morning. Sleep on the highway, wake up to pine and river.",
        acts: ["Intro rounds", "Mafia and Imposter", "Shared playlists"],
      },
      {
        day: 2,
        label: "Day 02",
        title: "Arrive Kasol, café hopping",
        when: "Morning arrival · Breakfast included · Stay: Kasol",
        body: "Morning arrival into Kasol. Check in, hot shower, and a proper breakfast to reset. Then the day is yours, the easy way: café hopping along the Parvati, a wander through Kasol market, and a chilled first night with the group. Tonight you also get a complimentary authentic Himachali dish on us.",
        acts: [
          "Café hopping (ATS and riverside)",
          "Kasol market",
          "Free Himachali dish",
          "Group dinner",
        ],
        warmActs: [false, false, true, false],
      },
      {
        day: 3,
        label: "Day 03",
        title: "Kheerganga trek",
        when: "~12 km round · 4 to 5 hrs up · Stay: Kheerganga camp",
        body: "The big one. We drive to Barshaini and begin the climb through Rudranag, past the waterfall, up through pine forest with the valley dropping away beneath you. Reach camp by afternoon and the reward is waiting: the famous natural hot springs, a bonfire as the sun drops, and a sky absolutely loaded with stars.",
        acts: [
          "Pine forest trek",
          "Natural hot springs",
          "Bonfire and hot dinner",
          "Stargazing",
        ],
        warmActs: [false, true, true, false],
        highlight: true,
        pivot:
          "Snow on the trail? If Kheerganga is closed, we switch to the Manali Route (see the other tab). Manikaran hot springs, then across to Manali. Same price, no extra cost to you.",
      },
      {
        day: 4,
        label: "Day 04",
        title: "Trek down, head back",
        when: "Sunrise · Send off · Evening: board the bus",
        body: "Wake up to sunrise over the ranges, breakfast at camp, then trek back down. Lighter, faster, all downhill. Time to relax in Kasol before we roll out in the evening. Before we leave the valley, a little send off: a special gift from Team Nirvana to remember the trip by.",
        acts: ["Sunrise over the ranges", "Trek down to Kasol", "Special gift"],
        warmActs: [false, false, true],
      },
      {
        day: 5,
        label: "Day 05",
        title: "Home",
        when: "Early morning · Drop in Delhi",
        body: "Overnight return and an early morning drop in Delhi. Tired legs, a full camera roll, and a new group of friends.",
      },
    ],
  },
  {
    id: "manali",
    label: "Manali Route",
    short: "5D · 4N · If trail is closed",
    priceLabel: "Manali Route · 5D / 4N",
    meta: [
      { label: "Duration", value: "5 Days", sub: "4 Nights · 2 on the road" },
      { label: "Highlight", value: "Manali", sub: "Via Manikaran springs" },
      { label: "Quad / Triple", value: "₹7,499", sub: "per person" },
      { label: "Double", value: "₹7,999", sub: "per person" },
    ],
    prices: [
      { name: "Quad / Triple sharing", price: "₹7,499" },
      { name: "Double sharing", price: "₹7,999" },
    ],
    days: [
      {
        day: 1,
        label: "Day 01",
        title: "Roll out of the city",
        when: "9:00 PM · Onboard · Overnight drive",
        body: "Same start. Evening boarding, intro games on the bus, and a sunrise arrival into the Parvati Valley.",
        acts: ["Intro rounds", "Mafia and Imposter", "Shared playlists"],
      },
      {
        day: 2,
        label: "Day 02",
        title: "Arrive Kasol, café hopping",
        when: "Morning arrival · Breakfast included · Stay: Kasol",
        body: "Identical to the trek route. Café hopping along the Parvati, Kasol market, your complimentary Himachali dish, and a relaxed first night with the group in Kasol.",
        acts: [
          "Café hopping (ATS and riverside)",
          "Kasol market",
          "Free Himachali dish",
        ],
        warmActs: [false, false, true],
      },
      {
        day: 3,
        label: "Day 03",
        title: "Manikaran, across to Manali",
        when: "Hot springs and gurudwara · Stay: Manali",
        body: "A morning at Manikaran Sahib: the riverside gurudwara, the natural hot springs, and the langar. Then we drive out of the Parvati Valley and across to Manali, checking in by evening for a night in the hills.",
        acts: ["Manikaran Sahib", "Hot springs and langar", "Drive to Manali"],
        warmActs: [true, true, false],
        highlight: true,
      },
      {
        day: 4,
        label: "Day 04",
        title: "Manali sightseeing, head back",
        when: "Full day out · Send off · Evening: board the bus",
        body: "A full sightseeing day: the Hidimba Devi Temple in the cedar forest, Solang Nala for the views and activities, and a run up toward Sissu on the Atal Tunnel side if time allows. The special gift send off happens here before we board the bus in the evening.",
        acts: [
          "Hidimba Devi Temple",
          "Solang Nala",
          "Sissu / Atal Tunnel",
          "Special gift",
        ],
        warmActs: [false, false, false, true],
      },
      {
        day: 5,
        label: "Day 05",
        title: "Home",
        when: "Early morning · Drop in Delhi",
        body: "Overnight return and an early morning drop in Delhi.",
      },
    ],
  },
];

export const kasolIncluded = [
  "Delhi to Parvati Valley transport",
  "2 nights stay (Kasol + camp / Manali)",
  "2 breakfasts and 2 dinners",
  "Kheerganga camping and hot springs",
  "Guided trek and permits",
  "Trek leader and first aid",
  "Free authentic Himachali dish",
  "Special gift from Team Nirvana",
];

export const kasolNotIncluded =
  "Lunches, personal expenses, pony or porter for personal bags, and anything not listed above. Both routes are the same price. If the trail is closed we run the Manali Route at no extra cost.";

/** Fixed star positions for SSR-safe hero */
export const kasolStars: { x: number; y: number; big: boolean; delay: number }[] = [
  { x: 8, y: 12, big: false, delay: 0.2 },
  { x: 15, y: 28, big: true, delay: 1.1 },
  { x: 22, y: 8, big: false, delay: 2.4 },
  { x: 31, y: 35, big: false, delay: 0.8 },
  { x: 38, y: 18, big: true, delay: 1.9 },
  { x: 45, y: 42, big: false, delay: 2.1 },
  { x: 52, y: 6, big: false, delay: 0.5 },
  { x: 58, y: 22, big: false, delay: 1.4 },
  { x: 64, y: 48, big: true, delay: 2.8 },
  { x: 71, y: 14, big: false, delay: 0.3 },
  { x: 78, y: 32, big: false, delay: 1.7 },
  { x: 85, y: 9, big: true, delay: 2.2 },
  { x: 12, y: 45, big: false, delay: 1.2 },
  { x: 28, y: 52, big: false, delay: 0.9 },
  { x: 48, y: 55, big: true, delay: 2.6 },
  { x: 68, y: 38, big: false, delay: 1.5 },
  { x: 88, y: 44, big: false, delay: 0.6 },
  { x: 5, y: 32, big: false, delay: 2.0 },
  { x: 92, y: 20, big: true, delay: 1.0 },
  { x: 18, y: 5, big: false, delay: 2.3 },
  { x: 55, y: 28, big: false, delay: 0.4 },
  { x: 42, y: 12, big: false, delay: 1.8 },
  { x: 75, y: 50, big: false, delay: 2.5 },
  { x: 33, y: 8, big: true, delay: 0.7 },
  { x: 62, y: 5, big: false, delay: 1.3 },
  { x: 8, y: 52, big: false, delay: 2.9 },
  { x: 95, y: 35, big: false, delay: 1.6 },
  { x: 25, y: 38, big: false, delay: 0.1 },
  { x: 50, y: 18, big: true, delay: 2.7 },
  { x: 82, y: 8, big: false, delay: 1.1 },
  { x: 38, y: 48, big: false, delay: 0.2 },
  { x: 70, y: 25, big: false, delay: 2.4 },
  { x: 15, y: 18, big: true, delay: 1.9 },
  { x: 58, y: 42, big: false, delay: 0.8 },
  { x: 88, y: 52, big: false, delay: 2.1 },
  { x: 4, y: 22, big: false, delay: 1.4 },
  { x: 46, y: 5, big: true, delay: 2.8 },
  { x: 72, y: 12, big: false, delay: 0.5 },
  { x: 20, y: 48, big: false, delay: 1.7 },
  { x: 60, y: 32, big: false, delay: 2.2 },
  { x: 35, y: 25, big: true, delay: 0.3 },
  { x: 90, y: 15, big: false, delay: 1.2 },
  { x: 52, y: 50, big: false, delay: 2.6 },
  { x: 12, y: 8, big: false, delay: 1.5 },
  { x: 78, y: 42, big: true, delay: 0.9 },
  { x: 44, y: 38, big: false, delay: 2.0 },
  { x: 66, y: 8, big: false, delay: 1.0 },
  { x: 30, y: 15, big: false, delay: 2.3 },
];
