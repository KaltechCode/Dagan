"use client";

import ProductInfo from "@/features/product/productFeatures";
import ProductGallery from "@/features/product/ProductGallery";
import { useGetProductBySlugQuery } from "@/redux/api/productApi";

interface Props {
  slug: string;
}

export default function ProductDetails({ slug }: Props) {
  const { data: product, isLoading } = useGetProductBySlugQuery(slug);

  if (isLoading) {
    return <div className="container py-12">Loading...</div>;
  }

  if (!product) {
    return <div className="container py-12">Product not found.</div>;
  }

  return (
    <div className="container py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery product={product} />

        <ProductInfo product={product} />
      </div>
    </div>
  );
}
