"use client";

import ProductCard from "@/components/product/productcard/ProductCard";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductCarousel({ products }: Props) {
  return (
    <div className="grid sm:gap-5 xmd:gap-10  sm:grid-cols-2 md:grid-cols-3 md:gap-12  lg:grid-cols-4  xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
