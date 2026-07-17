"use client";

import Section from "./Section";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import ProductCarousel from "./ProductCarousel";
import { Product } from "@/types/product";

interface ProductsSectionProps {
  title: string;

  subtitle?: string;

  description?: string;

  actionLabel?: string;

  actionHref?: string;

  type?: string;

  products: Product[];
}

export default function ProductsSection({
  title,
  subtitle,
  description,
  actionLabel,
  actionHref,
  products,
  type,
}: ProductsSectionProps) {
  return (
    <Section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        description={description}
        actionLabel={actionLabel}
        actionHref={actionHref}
        type={type}
      />

      <SectionContent>
        <ProductCarousel products={products} />
      </SectionContent>
    </Section>
  );
}
