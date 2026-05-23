export type BirBillingDay = {
  day: number;
  label: string;
  title: string;
  when: string;
  body: string;
  bullets?: string[];
  splitPaths?: {
    a: { title: string; body: string; tag: string };
    b: { title: string; body: string; tag: string };
  };
  acts?: string[];
  staysAt?: string;
  pivot?: string;
  highlight?: boolean;
};

export type BirBillingPackage = {
  id: "weekend" | "extended";
  label: string;
  short: string;
  meta: { label: string; value: string; sub: string }[];
  days: BirBillingDay[];
  prices: { name: string; price: string }[];
  priceLabel: string;
};

export const birBillingPackages: BirBillingPackage[] = [
  {
    id: "weekend",
    label: "Weekend",
    short: "4D · 3N · Fri out",
    priceLabel: "Weekend · 4D / 3N",
    meta: [
      { label: "Duration", value: "4 Days", sub: "3 Nights · Fri departure" },
      { label: "Route", value: "Bir", sub: "Delhi to Bir Billing" },
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
        label: "Day 01 · Friday",
        title: "Roll out of the city",
        when: "9:00 PM · Onboard · Overnight drive",
        body: "We board in the evening and point the bus at the mountains. Once everyone is settled, we run the intro rounds so no one is a stranger by morning. Sleep on the highway, wake up under the Dhauladhars.",
        bullets: [
          "Two truths and a lie",
          "Mafia, Imposter, and group deduction games",
          "Shared playlists and late night stories",
        ],
      },
      {
        day: 2,
        label: "Day 02 · Saturday",
        title: "Bir, fly or chase waterfalls",
        when: "Morning arrival · Breakfast included",
        body: "Arrive, check in, freshen up and refuel with breakfast. Then the day splits by what you are into, and everyone regroups for the best sunset in the valley.",
        splitPaths: {
          a: {
            title: "Paragliding crew",
            body: "Head up to Billing (around 14 km above Bir) for a tandem flight over the valley.",
            tag: "Optional · own cost · weather permitting",
          },
          b: {
            title: "Easy going crew",
            body: "Trek out to the hidden Gunehar waterfall, a quiet forest walk to a local secret.",
            tag: "Included · guided",
          },
        },
        acts: ["Sunset at the landing site", "Bonfire and dinner together"],
        staysAt: "Stay: Bir guesthouse",
        highlight: true,
      },
      {
        day: 3,
        label: "Day 03 · Sunday",
        title: "The Bir side",
        when: "Café day · Send off · Evening: board the bus",
        body: "The slow, soulful day. We explore Bir on foot, the Tibetan Colony, the colourful monasteries, and the café scene Bir is famous for. Before we leave, two little send offs from Team Nirvana: a complimentary Himachali dish and a special gift to remember the trip.",
        acts: [
          "Tibetan colony and monasteries",
          "Café hopping in the valley",
          "Local shops and markets",
          "Free Himachali dish and gift",
        ],
      },
      {
        day: 4,
        label: "Day 04 · Monday",
        title: "Home",
        when: "Early morning · Drop in Delhi",
        body: "Overnight return and an early morning drop in Delhi. Tired legs, a full camera roll, and a new group of friends.",
      },
    ],
  },
  {
    id: "extended",
    label: "Extended",
    short: "5D · 4N · Rajgundha",
    priceLabel: "Extended · 5D / 4N · Rajgundha",
    meta: [
      { label: "Duration", value: "5 Days", sub: "4 Nights · into Rajgundha" },
      { label: "Route", value: "Rajgundha", sub: "Bir + Hanuman Tibba view" },
      { label: "All sharing", value: "₹7,999", sub: "per person" },
      { label: "Stay", value: "Tents", sub: "Camp in the valley" },
    ],
    prices: [
      { name: "All sharing (quad / triple / double)", price: "₹7,999" },
    ],
    days: [
      {
        day: 1,
        label: "Day 01 · Friday",
        title: "Roll out of the city",
        when: "9:00 PM · Onboard · Overnight drive",
        body: "Same start as the weekend. Evening boarding, intro games on the bus, and a sunrise arrival under the Dhauladhars.",
        bullets: [
          "Two truths and a lie",
          "Mafia, Imposter, and group deduction games",
          "Shared playlists and late night stories",
        ],
      },
      {
        day: 2,
        label: "Day 02 · Saturday",
        title: "Bir, fly or chase waterfalls",
        when: "Morning arrival · Breakfast included",
        body: "Identical to the weekend's valley day. Paragliding at Billing or the Gunehar waterfall trek, then everyone together for sunset at the landing site and a bonfire dinner.",
        splitPaths: {
          a: {
            title: "Paragliding crew",
            body: "Tandem flight from Billing over the Dhauladhar valley.",
            tag: "Optional · own cost · weather permitting",
          },
          b: {
            title: "Easy going crew",
            body: "Guided walk to the hidden Gunehar waterfall.",
            tag: "Included · guided",
          },
        },
        acts: ["Sunset at the landing site", "Bonfire and dinner together"],
        staysAt: "Stay: Bir guesthouse",
        highlight: true,
      },
      {
        day: 3,
        label: "Day 03 · Sunday",
        title: "Into Rajgundha Valley",
        when: "Easy trek · Camp night",
        body: "We leave the cafés behind for Rajgundha, a remote, road light valley tucked behind Billing. From here we set off on the easy trek toward the Hanuman Tibba viewpoint. Gentle gradient, big rewards, beginner friendly with no technical sections. Reach our tented camp by afternoon.",
        acts: [
          "Easy trek to Hanuman Tibba view",
          "Tented camp in the valley",
          "Bonfire and dinner",
          "Stargazing on clear nights",
        ],
        staysAt: "Stay: Tents, Rajgundha",
        highlight: true,
      },
      {
        day: 4,
        label: "Day 04 · Monday",
        title: "Explore Rajgundha and head back",
        when: "Sunrise · Send off · Evening: board the bus",
        body: "Sunrise over the valley, breakfast at camp, then a relaxed morning exploring Rajgundha. The village, the streams, the views the day trippers never see. Pack up by afternoon, descend, and board the bus in the evening. The Himachali dish and special gift send off happens here for the extended crew.",
        acts: [
          "Sunrise over the valley",
          "Explore village and streams",
          "Free Himachali dish and gift",
        ],
      },
      {
        day: 5,
        label: "Day 05 · Tuesday",
        title: "Home",
        when: "Early morning · Drop in Delhi",
        body: "Overnight return and an early morning drop in Delhi.",
      },
    ],
  },
];

export const birBillingIncluded = [
  "Delhi to Bir transport (luxury coach)",
  "Stay: Bir guesthouse and valley tents",
  "Breakfasts and dinners as per plan",
  "Sunset at the landing site",
  "Guided Gunehar waterfall trek",
  "Hanuman Tibba viewpoint trek (Extended)",
  "Trek leader, permits and first aid",
  "Free authentic Himachali dish",
  "Special send off gift from Team Nirvana",
];

export const birBillingNotIncluded =
  "Paragliding (optional add on, own cost, booked on the spot and weather dependent), lunches, personal expenses, and anything not listed above.";
