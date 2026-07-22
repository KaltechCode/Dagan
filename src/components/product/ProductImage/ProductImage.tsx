"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductImageProps } from "./types";
import { getImageSource } from "./util";
import { cn } from "@/libs/utils";

export default function ProductImage({
  src,
  alt,
  width = 580,
  height = 580,
  priority = false,
  rounded = true,
  hoverSrc,
  className,
  sizes = "(max-width:768px) 20vw, 15vw",
}: ProductImageProps) {
  const [image, setImage] = useState(getImageSource(src));

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        rounded && "rounded-xl",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="w-full transition-transform duration-300 hover:scale-105 aspect-square"
        onError={() => setImage("/images/product-placeholder.webp")}
      />
    </div>
  );
}
