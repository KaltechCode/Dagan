"use client";

import { ProductImage } from "@/types/product";
import GalleryThumbnail from "./GalleryThumbMail";

interface Props {
  images: ProductImage[];

  activeIndex: number;

  onSelect(index: number): void;
}

export default function GalleryThumbnailList({
  images,
  activeIndex,
  onSelect,
}: Props) {
  return (
    <div className="mt-4 grid grid-cols-5 gap-3">
      {images.map((image, index) => (
        <GalleryThumbnail
          key={image.id}
          image={image}
          active={activeIndex === index}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
