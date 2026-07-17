"use client";

import { Dialog } from "@/components/ui/shared/Button/Dialog";
import { ProductImage } from "@/types/product";
import Image from "next/image";

interface Props {
  open: boolean;

  image: ProductImage;

  onClose(): void;
}

export default function GalleryLightbox({ open, image, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="flex justify-center p-6">
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          width={1200}
          height={1200}
          className="max-h-[90vh] w-auto rounded-lg"
        />
      </div>
    </Dialog>
  );
}
