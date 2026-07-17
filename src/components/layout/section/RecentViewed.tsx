"use client";

import { useRecentlyViewed } from "@/hooks/product/useRecentlyView";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ProductCarousel from "./ProductCarousel";

interface Props {
  productId: number;
}

export default function RecentlyViewed({ productId }: Props) {
  const { products } = useRecentlyViewed(productId);

  if (products.length <= 1) {
    return null;
  }

  return (
    <Section>
      <SectionHeader title="Recently Viewed" />

      <ProductCarousel
        products={products.filter((product) => product.id !== productId)}
      />
    </Section>
  );
}
