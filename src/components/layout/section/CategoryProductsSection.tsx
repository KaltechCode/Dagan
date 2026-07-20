"use client";

import Section from "./Section";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import ProductCarousel from "./ProductCarousel";
import { Product } from "@/types/product";
import FourColumns from "./FourColumns";
import { useGetProductsQuery } from "@/redux/api/productApi";
import FourItemBox from "@/components/Box/FourItemBox";
import FourItemProduct from "@/components/Box/FourItemProduct";

interface IProps {
  title: string;

  subtitle?: string;

  description?: string;

  actionLabel?: string;

  actionHref?: string;

  type?: string;

  products: Product[];
}

export default function CategoryProductSection({
  title,
  subtitle,
  description,
  actionLabel,
  actionHref,
  products,
  type,
}: IProps) {
  const groceryProducts = useGetProductsQuery({ category: "grocery" });
  const BlouseProducts = useGetProductsQuery({ category: "blouses" });

  console.log("BlouseProducts", BlouseProducts);
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
        <FourItemProduct
          items={groceryProducts?.data?.items ?? []}
          count={0}
          index={4}
        />
        <FourItemProduct
          items={BlouseProducts?.data?.items ?? []}
          count={0}
          index={4}
        />
      </SectionContent>
    </Section>
  );
}
