"use client";

import { ProductImage } from "@/types/product";
import Image from "next/image";

interface Props {
  image: ProductImage;

  onZoom(): void;
}

export default function GalleryMainImage({ image, onZoom }: Props) {
  return (
    <button
      type="button"
      onClick={onZoom}
      className="block w-full overflow-hidden rounded-xl border"
    >
      <Image
        src={image.src}
        alt={image.alt ?? ""}
        width={900}
        height={900}
        priority
        className="aspect-square w-full object-cover"
      />
    </button>
  );
}
