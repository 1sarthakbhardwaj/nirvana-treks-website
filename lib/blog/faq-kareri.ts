import type { BlogFaqItem } from "./types";

export const KARERI_FAQ: BlogFaqItem[] = [
  {
    question: "Is the Kareri Lake trek harder than Triund?",
    answer:
      "Yes, slightly. Kareri Lake is rated moderate against Triund's easy to moderate. It is longer at about 13 km one way and gains a little more height, but it stays well within reach of a reasonably fit trekker and rewards the effort with far fewer crowds.",
  },
  {
    question: "How long is the Kareri Lake trek?",
    answer:
      "The trek is about 13 km one way from Kareri village, taking 5 to 7 hours up. Most people do it as a 2-day trip with a night camped near the lake.",
  },
  {
    question: "Why choose Kareri Lake over Triund?",
    answer:
      "Kareri sits in the same Dhauladhar range as Triund but sees a fraction of the visitors. You get a river-fed alpine lake, quieter trails, open camping and a more pristine feel, in exchange for a slightly longer and harder walk.",
  },
  {
    question: "What is the best time for the Kareri Lake trek?",
    answer:
      "May to June and September to October are best, with clear skies and an accessible lake. Winter brings heavy snow and a frozen lake, while monsoon in July and August makes the trail slippery.",
  },
];

export const KARERI_HOWTO = {
  name: "How to do the Kareri Lake trek",
  totalTime: "PT6H",
  steps: [
    {
      position: 1,
      name: "Reach Kareri village",
      text: "Drive from Dharamshala to Kareri village, the road head, about 25 km away, where the trek begins.",
    },
    {
      position: 2,
      name: "Follow the stream",
      text: "The trail follows the Nyund stream up through forest and small hamlets, a steady riverside climb.",
    },
    {
      position: 3,
      name: "Climb to the meadows",
      text: "Above the forest the trail opens into alpine meadows below the Dhauladhar wall.",
    },
    {
      position: 4,
      name: "Reach Kareri Lake",
      text: "Arrive at the glacial Kareri Lake at about 2,934 m, with a small Shiva temple on its bank. Camp nearby.",
    },
  ],
};
