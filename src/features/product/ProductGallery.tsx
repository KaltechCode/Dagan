"use client";

import { ProductImage } from "@/components/product/ProductImage";
import { Product } from "@/types/product";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductGallery({ product }: Props) {
  const [image, setImage] = useState(
    product.images ? product.images[0]?.src : "/placeholder",
  );

  console.log("Image", image);

  return (
    <div className="border border-gray-200 py-5 px-5 rounded-md xmd:p-7 xl:p-10 2xl:p-12 3k:p-12">
      <ProductImage
        src={image}
        alt={product.name}
        className="aspect-square xmd:col-span-3 lg:col-span-4 lg:order-2 border border-gray-100 rounded-md "
        priority
      />

      <div className="mt-4 flex gap-3">
        {product.images &&
          product.images.map((img, key) => (
            <button key={key} onClick={() => setImage(img.src)}>
              <ProductImage
                src={img.src}
                alt={img.alt}
                width={100}
                height={100}
                className="border border-gray-200 p-1 rounded-md!"
              />
            </button>
          ))}
      </div>
    </div>
  );
}
