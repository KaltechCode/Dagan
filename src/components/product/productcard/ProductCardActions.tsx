"use client";

import { Product } from "@/types/product";
import ProductActions from "./ProductAction";

interface Props {
  product: Product;

  showWishlist: boolean;

  showQuickView: boolean;
}

export default function ProductCardActions({ product, showWishlist }: Props) {
  return (
    <ProductActions
      product={product}
      classname="flex-col"
      showQuantityControl={false}
      cartClass="px-4 py-3"
    />
  );
}
