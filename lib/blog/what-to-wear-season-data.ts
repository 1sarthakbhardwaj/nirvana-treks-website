import type { SeasonOutfit } from "@/components/blog/blog-season-outfit";

export const WHAT_TO_WEAR_SEASONS: SeasonOutfit[] = [
  {
    id: "spring",
    label: "Spring",
    title: "Spring (March to May)",
    when: "Mild days, cold nights, snow lingering up high.",
    walking: [
      { title: "Walking", items: ["Quick-dry base t-shirt", "Light fleece you can stash", "Trek pants"] },
      { title: "Footwear", items: ["Trekking shoes with grip"] },
    ],
    camp: [
      { title: "Camp and night", items: ["Down or puffer jacket", "Thermals for the night", "Warm beanie"] },
      { title: "Accessories", items: ["Sun cap and sunglasses", "Sunscreen SPF 50", "Light gloves for early spring"] },
    ],
  },
  {
    id: "summer",
    label: "Summer",
    title: "Summer (June)",
    when: "Warm in the day, but still cold at altitude after dark.",
    walking: [
      { title: "Walking", items: ["Quick-dry t-shirt", "Trek pants or convertible pants", "A light fleece for the climb's cold patches"] },
      { title: "Footwear", items: ["Trekking shoes", "Sandals or floaters for camp"] },
    ],
    camp: [
      { title: "Camp and night", items: ["Light fleece or down for the evening", "Comfortable layers to sleep in"] },
      { title: "Accessories", items: ["Cap, sunglasses, heavy sunscreen", "Buff for sun and dust", "1 to 2 L of water minimum"] },
    ],
  },
  {
    id: "monsoon",
    label: "Monsoon",
    title: "Monsoon (July to mid-September)",
    when: "Wet and slippery. Only sensible in rain-shadow regions.",
    walking: [
      { title: "Walking", items: ["Waterproof shell jacket", "Waterproof or quick-dry pants", "Quick-dry base layers, pack spares"] },
      { title: "Footwear", items: ["Trekking shoes with deep grip", "Extra dry socks, more than you think"] },
    ],
    camp: [
      { title: "Camp and night", items: ["A dry set of clothes kept in a dry bag", "Fleece for damp, cold evenings"] },
      { title: "Accessories", items: ["Dry bags for everything electronic", "Leech protection", "Check the monsoon safety guide before you go"] },
    ],
  },
  {
    id: "autumn",
    label: "Autumn",
    title: "Autumn (mid-September to November)",
    when: "Clear and crisp by day, properly cold at night.",
    walking: [
      { title: "Walking", items: ["Quick-dry base layer", "Fleece mid layer", "Trek pants, shell handy"] },
      { title: "Footwear", items: ["Trekking shoes with grip"] },
    ],
    camp: [
      { title: "Camp and night", items: ["Down jacket for the evening", "Thermals as it gets colder", "Warm hat and gloves"] },
      { title: "Accessories", items: ["Sun cap and sunglasses by day", "Buff for the wind", "Headlamp, nights come early"] },
    ],
  },
  {
    id: "winter",
    label: "Winter",
    title: "Winter (December to February)",
    when: "Snow and sub-zero nights. The full system, no shortcuts.",
    walking: [
      { title: "Walking", items: ["Thermal base layer", "Fleece mid layer", "Down jacket", "Waterproof, windproof shell on top"] },
      { title: "Footwear", items: ["Insulated, waterproof boots", "Microspikes or crampons for grip", "Gaiters to keep snow out"] },
    ],
    camp: [
      { title: "Camp and night", items: ["Heavy thermals to sleep in", "Extra dry socks and gloves", "A warm sleeping setup"] },
      { title: "Accessories", items: ["Heavy gloves and a balaclava", "Wool socks, spare pairs", "See the snow treks guide for winter routes"] },
    ],
  },
];
