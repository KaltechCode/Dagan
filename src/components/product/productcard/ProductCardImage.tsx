"use client";

import Link from "next/link";

import { ProductImage } from "../ProductImage";
import { Product } from "@/types/product";

interface Props {
  product: Product;

  priority?: boolean;
}

export default function ProductCardImage({ product, priority }: Props) {
  return (
    <Link href={`/product/${product.slug}`}>
      <ProductImage
        src={product.images ? product.images[0]?.src : ""}
        alt={product.name}
        priority={priority}
        className="aspect-square"
        height={2500}
        width={2500}
      />
    </Link>
  );
}
