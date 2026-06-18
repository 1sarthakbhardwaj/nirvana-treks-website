import type { BlogFaqItem } from "./types";

export const KASOL_TRAVEL_FAQ: BlogFaqItem[] = [
  {
    question: "How far is Kasol from Delhi?",
    answer:
      "Kasol is about 520 km from Delhi by road. The drive takes 12 to 14 hours depending on traffic and stops, which is why most travellers take an overnight bus and arrive the next morning.",
  },
  {
    question: "Is there a direct bus from Delhi to Kasol?",
    answer:
      "Some private operators run direct overnight Volvo buses from Delhi to Kasol during the main season. Otherwise, take any Delhi to Manali bus, get off at Bhuntar, and connect to Kasol by a local bus or shared cab about an hour away.",
  },
  {
    question: "What is the nearest airport to Kasol?",
    answer:
      "Bhuntar airport, also called Kullu Manali airport, is the nearest at roughly 30 km from Kasol, though flights are limited and weather dependent. Most fliers instead land at Chandigarh, about 280 km away, and continue by road.",
  },
  {
    question: "What is the best time to visit Kasol?",
    answer:
      "March to June and September to November are ideal. Avoid peak monsoon in July and August when the Parvati Valley road is prone to landslides. Winter is quiet and cold, with snow possible in the higher reaches.",
  },
];

export const KASOL_OVERNIGHT_HOWTO = {
  name: "How to reach Kasol from Delhi by overnight bus",
  totalTime: "PT14H",
  steps: [
    {
      position: 1,
      name: "Board at Delhi",
      text: "Take an overnight Volvo or HRTC bus from ISBT Kashmiri Gate or Majnu ka Tila on Friday evening, between 5 and 9 PM.",
    },
    {
      position: 2,
      name: "Get off at Bhuntar",
      text: "Stay on until Bhuntar, the junction for the Parvati Valley, reached early the next morning. Most Manali bound buses pass through here.",
    },
    {
      position: 3,
      name: "Connect to Kasol",
      text: "From Bhuntar take a local bus or shared cab along the Parvati Valley road to Kasol, roughly 30 km and about an hour away.",
    },
  ],
};
