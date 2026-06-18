import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  caption: ReactNode;
  priority?: boolean;
};

export default function BlogHeroImage({ src, alt, caption, priority }: Props) {
  return (
    <div className="blog-hero-photo">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1120px) 100vw, 1120px"
        className="object-cover"
        priority={priority}
      />
      <div className="scrim" />
      <p className="blog-hero-tag">{caption}</p>
    </div>
  );
}
