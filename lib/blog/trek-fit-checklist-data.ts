import type { ChecklistCategory } from "@/components/blog/blog-checklist";

export const TREK_FIT_CHECKLIST: ChecklistCategory[] = [
  {
    name: "Week 1",
    subtitle: "Build the habit",
    items: [
      { title: "Day 1: 30-minute brisk walk", note: "Just move. Pace that lets you talk but not sing.", essential: true },
      { title: "Day 2: Stairs, 10 floors total + mobility", note: "Take them through the day. Add 10 minutes of stretching.", essential: true },
      { title: "Day 3: Leg strength, 2 sets", note: "Squats, lunges, calf raises. Bodyweight is fine.", essential: true },
      { title: "Day 4: 35-minute walk", note: "Add a small hill or incline if you can.", essential: true },
      { title: "Day 5: Stairs + core", note: "Stairs again, plus 3 planks of 20 to 30 seconds.", essential: true },
      { title: "Day 6: Long walk, 45 to 60 minutes", note: "Your weekend long one. Keep it steady.", essential: true },
      { title: "Day 7: Rest and stretch", note: "Gentle stretching only. Recovery is training too.", essential: true },
    ],
  },
  {
    name: "Week 2",
    subtitle: "Add load and incline",
    items: [
      { title: "Day 1: 45-minute walk with a light loaded pack", note: "3 to 5 kg in your backpack. Get used to the weight.", essential: true },
      { title: "Day 2: Stairs, 15 floors + leg strength", note: "Build the stair volume. Strength after.", essential: true },
      { title: "Day 3: Incline walk, 30 minutes", note: "Treadmill incline or a real slope. Uphill is the point.", essential: true },
      { title: "Day 4: Strength, 3 sets + core", note: "Squats, lunges, step-ups, planks. A little harder.", essential: true },
      { title: "Day 5: Rest or easy mobility", note: "Light movement, no hard effort.", essential: true },
      { title: "Day 6: Long loaded walk, 60 to 75 minutes", note: "Pack on, steady pace, ideally some incline.", essential: true },
      { title: "Day 7: Rest", note: "Let the legs absorb the work.", essential: true },
    ],
  },
  {
    name: "Week 3",
    subtitle: "Simulate, then taper",
    items: [
      { title: "Day 1: Loaded incline walk, 60 minutes", note: "Your biggest session. Pack and slope together.", essential: true },
      { title: "Day 2: Light strength + stairs", note: "Keep it moderate. Do not chase soreness now.", essential: true },
      { title: "Day 3: Long practice hike if possible", note: "2 to 3 hours outdoors, or a 90-minute walk.", essential: true },
      { title: "Day 4: Rest or easy walk", note: "Start easing off. The hard work is banked.", essential: true },
      { title: "Day 5: Short brisk walk + mobility", note: "Keep loose. Nothing taxing.", essential: true },
      { title: "Day 6: Rest", note: "Trek eve. Pack your bag, sleep well.", essential: true },
      { title: "Day 7: Trek day", note: "Show up fresh and enjoy it. This is the test.", essential: true },
    ],
  },
];
