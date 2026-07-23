"use client";
import { useRelatedProducts } from "@/hooks/product/useRelatedProduct";
import React from "react";
import ProductsSection from "../layout/section/ProductSection";

function RelatedProductSection({ slug }: { slug: string }) {
  const { relatedProducts } = useRelatedProducts(slug);

  return (
    <ProductsSection
      title="Related Products"
      subtitle=""
      actionLabel=""
      actionHref="/shop"
      products={relatedProducts ?? []}
      type="all"
    />
  );
}

export default RelatedProductSection;
