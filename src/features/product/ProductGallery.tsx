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

  console.log("Image", image);

  return (
    <div className="xmd:grid xmd:grid-cols-4 grid-rows-1 xmd:gap-3 lg:grid lg:grid-cols-5 lg:gap-4">
      <ProductImage
        src={image}
        alt={product.name}
        className="aspect-square xmd:col-span-3 lg:col-span-4 lg:order-2 "
        priority
      />

      <div className="mt-4 flex xmd:flex-col gap-3 xmd:col-span-1 row-span-1 xmd:grid lg:grid grid-cols-2 lg:col-span-1 lg:order-1">
        {product.images &&
          product.images.map((img, key) => (
            <button key={key} onClick={() => setImage(img.src)}>
              <ProductImage
                src={img.src}
                alt={img.alt}
                width={90}
                height={90}
                className=""
              />
            </button>
          ))}
      </div>
    </div>
  );
}
