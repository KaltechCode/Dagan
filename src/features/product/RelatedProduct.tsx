"use client";

import ProductCard from "@/components/product/productcard/ProductCard";
import { useGetRelatedProductsQuery } from "@/redux/api/productApi";

interface Props {
  id: number;
}

export default function RelatedProducts({ id }: Props) {
  const { data = [] } = useGetRelatedProductsQuery(String(id));

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-bold">Related Products</h2>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
