"use client";

import { ProductImage } from "@/components/product/ProductImage";
import { Product } from "@/types/product";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductGallery({ product }: Props) {
  const [image, setImage] = useState(
    product.images ? product.images[0]?.src : "",
  );

  return (
    <div>
      <ProductImage
        src={image ?? ""}
        alt={product.name}
        className="aspect-square"
        priority
      />

      <div className="mt-4 flex gap-3 overflow-auto">
        {product.images &&
          product.images.map((img) => (
            <button key={img.id} onClick={() => setImage(img.src)}>
              <ProductImage
                src={img.src}
                alt={img.alt}
                width={90}
                height={90}
              />
            </button>
          ))}
      </div>
    </div>
  );
}
