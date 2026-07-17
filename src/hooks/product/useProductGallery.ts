"use client";

import { ProductImage } from "@/types/product";
import { useMemo, useState } from "react";

export function useProductGallery(images: ProductImage[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = useMemo(() => images[activeIndex], [images, activeIndex]);

  function next() {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  }

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  }

  return {
    images,

    activeIndex,

    activeImage,

    setActiveIndex,

    next,

    previous,

    isLightboxOpen,

    openLightbox: () => setLightboxOpen(true),

    closeLightbox: () => setLightboxOpen(false),
  };
}
