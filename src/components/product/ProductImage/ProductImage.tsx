"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductImageProps } from "./types";
import { getImageSource } from "./util";
import { cn } from "@/libs/utils";

export default function ProductImage({
  src,
  alt,
  width = 2500,
  height = 2500,
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
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className=" transition-transform duration-300 hover:scale-105 aspect-square object-fit"
        onError={() => setImage("/images/product-placeholder.webp")}
      />
    </div>
  );
}
