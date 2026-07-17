"use client";

import { ProductGalleryProps } from "@/types/product";
import GalleryMainImage from "./GalleryMainImage";
import GalleryNavigation from "./GalleryNavigation";
import GalleryThumbnailList from "./GalleryThumbnailList";
import GalleryZoomButton from "./GalleryZoomButton";
import { useProductGallery } from "@/hooks/product/useProductGallery";
import GalleryLightbox from "./GalleryLightBox";

export default function ProductGallery({ images }: ProductGalleryProps) {
  const gallery = useProductGallery(images);

  return (
    <>
      <div className="relative">
        <GalleryMainImage
          image={gallery.activeImage}
          onZoom={gallery.openLightbox}
        />

        <GalleryNavigation
          onPrevious={gallery.previous}
          onNext={gallery.next}
        />

        <GalleryZoomButton onClick={gallery.openLightbox} />
      </div>

      <GalleryThumbnailList
        images={images}
        activeIndex={gallery.activeIndex}
        onSelect={gallery.setActiveIndex}
      />

      <GalleryLightbox
        open={gallery.isLightboxOpen}
        image={gallery.activeImage}
        onClose={gallery.closeLightbox}
      />
    </>
  );
}
