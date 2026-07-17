"use client";

import Image from "next/image";

import clsx from "clsx";
import { ProductImage } from "@/types/product";

interface Props {
  image: ProductImage;

  active: boolean;

  onClick(): void;
}

export default function GalleryThumbnail({ image, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "overflow-hidden rounded-lg border",
        active && "border-primary",
      )}
    >
      <Image
        src={image.src}
        alt={image.alt ?? ""}
        width={120}
        height={120}
        className="aspect-square object-cover"
      />
    </button>
  );
}
