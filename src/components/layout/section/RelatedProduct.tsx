"use client";

import { useRelatedProducts } from "@/hooks/product/useRelatedProduct";
import { Product } from "@/types/product";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import ProductCarousel from "./ProductCarousel";

interface Props {
  product: Product;
}

export default function RelatedProducts({ product }: Props) {
  const { relatedProducts } = useRelatedProducts(product.slug);

  if (!relatedProducts.length) {
    return null;
  }

  return (
    <Section>
      <SectionHeader title="Related Products" />

      <ProductCarousel products={relatedProducts} />
    </Section>
  );
}
