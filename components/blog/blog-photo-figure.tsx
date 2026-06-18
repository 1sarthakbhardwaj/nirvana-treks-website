import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  caption: ReactNode;
  width?: number;
  height?: number;
};

export default function BlogPhotoFigure({
  src,
  alt,
  caption,
  width = 1200,
  height = 700,
}: Props) {
  return (
    <figure className="blog-figure">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 680px) 100vw, 680px"
        className="blog-photo"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
