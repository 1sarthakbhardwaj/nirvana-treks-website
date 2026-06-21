import type { ChecklistCategory } from "@/components/blog/blog-checklist";

export const PACKING_CHECKLIST: ChecklistCategory[] = [
  {
    name: "Pack and carry",
    items: [
      { title: "Backpack, 40 to 50 L", note: "One good pack is enough. Rent it for your first trek.", essential: true },
      { title: "Rain cover for the pack", note: "Mountain rain is sudden, even on clear mornings.", essential: true },
      { title: "Foldable daypack, 15 L", note: "For summit day if you are camping.", essential: false },
    ],
  },
  {
    name: "Footwear",
    items: [
      { title: "Trekking shoes with grip", note: "The most important item. Break them in before the trek.", essential: true },
      { title: "Wool or synthetic socks, 3 pairs", note: "No cotton. Wet cotton socks cause blisters.", essential: true },
      { title: "Camp slippers or floaters", note: "Relief for your feet at camp.", essential: false },
    ],
  },
  {
    name: "Clothing",
    subtitle: "Layers, not one thick jacket",
    items: [
      { title: "Quick-dry t-shirts, 2 to 3", note: "Synthetic, never cotton. Cotton stays wet and cold.", essential: true },
      { title: "Fleece or warm mid-layer", note: "Nights are cold at altitude, even in summer.", essential: true },
      { title: "Down or puffer jacket", note: "Your main warmth. Lighter and warmer than a sweater.", essential: true },
      { title: "Waterproof, windproof shell", note: "A light rain jacket that doubles as a windbreaker.", essential: true },
      { title: "Trek pants, 2 pairs", note: "Quick-dry. Leave the jeans at home.", essential: true },
      { title: "Thermals, top and bottom", note: "For cold nights and shoulder seasons.", essential: true },
      { title: "Warm hat or beanie", note: "You lose a lot of heat from your head.", essential: true },
      { title: "Sun cap or hat", note: "For the exposed daytime stretches.", essential: true },
      { title: "Light gloves", note: "For cold mornings and higher treks.", essential: false },
      { title: "Buff or neck gaiter", note: "Sun, wind and dust protection.", essential: false },
    ],
  },
  {
    name: "Health and first aid",
    items: [
      { title: "Personal medicines", note: "Anything you take regularly, plus a small buffer.", essential: true },
      { title: "Basic first-aid kit", note: "Band-aids, antiseptic, pain relief, blister plasters.", essential: true },
      { title: "Sunscreen, SPF 50", note: "UV is brutal at altitude. Reapply often.", essential: true },
      { title: "Lip balm with SPF", note: "Lips crack fast in dry mountain air.", essential: true },
      { title: "ORS or electrolyte sachets", note: "Rehydration after a long climb.", essential: true },
      { title: "Hand sanitiser", note: "No taps on the trail.", essential: true },
      { title: "Altitude medication", note: "Only for high treks, and only on a doctor's advice.", essential: false },
    ],
  },
  {
    name: "Toiletries",
    subtitle: "Travel-size everything",
    items: [
      { title: "Toothbrush and small toothpaste", note: "Travel-size is plenty.", essential: true },
      { title: "Quick-dry travel towel", note: "Packs small, dries fast.", essential: true },
      { title: "Wet wipes and toilet paper", note: "Carry the used paper back out.", essential: true },
      { title: "Menstrual supplies", note: "If needed, plus a sealable bag for waste.", essential: true },
    ],
  },
  {
    name: "Documents and money",
    items: [
      { title: "Government ID card", note: "Carry the original and a photo of it.", essential: true },
      { title: "Cash in small notes", note: "ATMs and network vanish up high.", essential: true },
    ],
  },
  {
    name: "Electronics",
    items: [
      { title: "Phone and charger", note: "Keep it on low power on the trail.", essential: true },
      { title: "Power bank", note: "There is no charging point on the mountain.", essential: true },
      { title: "Headlamp or torch", note: "Hands-free light is essential at camp.", essential: true },
    ],
  },
  {
    name: "Water, food and extras",
    items: [
      { title: "Water, 2 L capacity", note: "Bottles or a bladder. Hydration is everything.", essential: true },
      { title: "Trail snacks", note: "Nuts, energy bars, chocolate. Quick fuel.", essential: true },
      { title: "Sunglasses, UV protection", note: "Glare off snow and rock is intense.", essential: true },
      { title: "Trekking poles", note: "Save your knees on the descents.", essential: false },
      { title: "Dry bags or ziplocs", note: "Keep electronics and spare clothes dry.", essential: false },
      { title: "Garbage bag", note: "Carry your trash back down. Leave no trace.", essential: true },
    ],
  },
];
