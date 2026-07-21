"use client";

import { Skeleton } from "@/components/ui/shared/skeleton";
import { Product } from "@/types/product";
import ProductCard from "../productcard/ProductCard";

interface Props {
  products: Product[];
  loading: boolean;
}

export default function ProductGrid({ products, loading }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-[var(--border)]"
          >
            <Skeleton className="aspect-square w-full" />

            <div className="space-y-3 p-4">
              <Skeleton className="h-4 w-3/4" />

              <Skeleton className="h-4 w-1/2" />

              <Skeleton className="h-5 w-1/3" />

              <Skeleton className="mt-4 h-10 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} shop={true} />
      ))}
    </div>
  );
}
