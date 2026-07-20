"use client";
import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Category } from "@/types/product";
import Section from "./Section";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import CategoryCarousel from "./CategoryCarousel";
import { Collection } from "@/types/api";
import FourItemBox from "@/components/Box/FourItemBox";

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
        {/* <CategoryCarousel categories={categories} /> */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop
          speed={7000}
          allowTouchMove={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <FourItemBox items={categories ?? []} count={4} index={0} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FourItemBox items={categories ?? []} count={8} index={4} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FourItemBox items={categories ?? []} count={12} index={8} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FourItemBox items={categories ?? []} count={16} index={12} />
          </SwiperSlide>
          <SwiperSlide>
            <FourItemBox items={categories ?? []} count={20} index={16} />
          </SwiperSlide>
        </Swiper>
      </SectionContent>
    </Section>
  );
}
