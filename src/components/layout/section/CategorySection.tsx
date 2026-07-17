"use client";

import { Category } from "@/types/product";
import Section from "./Section";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import CategoryCarousel from "./CategoryCarousel";
import { Collection } from "@/types/api";

interface CategoriesSectionProps {
  title: string;
  subtitle: string;
  actionLabel: string;
  actionHref: string;
  categories: Category[];
}

export default function CategoriesSection({
  categories,
  subtitle,
  actionHref,
  actionLabel,
  title,
}: CategoriesSectionProps) {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />

      <SectionContent>
        <CategoryCarousel categories={categories} />
      </SectionContent>
    </Section>
  );
}
