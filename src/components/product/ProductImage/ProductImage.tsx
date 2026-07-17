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
  height = 670,
  priority = false,
  rounded = true,
  hoverSrc,
  className,
  sizes = "(max-width:768px) 50vw, 25vw",
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
        src={hovered && hoverSrc ? hoverSrc : image}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full transition-transform duration-300 hover:scale-105"
        onError={() => setImage("/images/product-placeholder.webp")}
      />
    </div>
  );
}
