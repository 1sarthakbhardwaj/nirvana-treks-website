export type GalleryImage = {
  src: string;
  alt: string;
  /** Bento grid span on large screens */
  featured?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/gallery/IMG_9715.jpg", alt: "Himalayan ridge and valley views", featured: true },
  { src: "/gallery/IMG_9227.jpg", alt: "Mountain panorama on a Nirvana Treks adventure" },
  { src: "/gallery/IMG_9416.jpg", alt: "Trekkers enjoying the trail" },
  { src: "/gallery/IMG_9696.jpg", alt: "Camp and scenery in the mountains" },
  { src: "/gallery/IMG_9697.jpg", alt: "Group moments on the trek" },
  { src: "/gallery/IMG_4395.jpg", alt: "Peaks and sky during a mountain journey" },
  { src: "/gallery/IMG_4444.jpg", alt: "Outdoor experience with Nirvana Treks & Tours" },
  { src: "/gallery/IMG_4267.jpg", alt: "Mountain trail and landscape" },
  { src: "/gallery/IMG_4271.jpg", alt: "Himalayan views on a guided trek" },
  { src: "/gallery/IMG_4330.jpg", alt: "Valley scenery on a Nirvana adventure" },
  { src: "/gallery/IMG_4351.jpg", alt: "High-altitude landscapes" },
];
