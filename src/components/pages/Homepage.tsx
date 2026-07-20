"use client";

import { HeroSectionData } from "@/types/ui";
import HeroSection from "../layout/section/HeroSection";
import ProductsSection from "../layout/section/ProductSection";
import CategoriesSection from "../layout/section/CategorySection";
import NewsletterSection from "../layout/section/NewsletterSection";
import { useHomepage } from "@/hooks/useHomePage";
import HomeFirstBanner from "../ui/Banner/HomeFirstBanner";
import ProductCardHorizontal from "../product/productcard/ProductCardHorizontal";
import ThreeColumsSection from "../layout/section/ThreeColumsSection";
import FourColumns from "../layout/section/FourColumns";
import WhyIconsCarousel from "../layout/section/WhyIconsCarousel";
import FourItemItem from "../Box/FourItemItem";
import FourItemBox from "../Box/FourItemBox";
import { useCategory } from "@/hooks/category/useCategory";
import { useGetProductsQuery } from "@/redux/api/productApi";
import CategoryProductSection from "../layout/section/CategoryProductsSection";

interface HomePageProps {
  hero: HeroSectionData;
}

export default function HomePage({ hero }: HomePageProps) {
  const {
    featuredProducts,
    saleProducts,
    newArrivals,
    bestSellers,
    categories,
  } = useHomepage();

  return (
    <>
      <HeroSection data={hero} />

      <CategoriesSection
        title="Popular on the Dagan store."
        subtitle="Shop by Category"
        actionLabel="View All"
        actionHref="/shop"
        categories={categories ?? []}
      />

      <ProductsSection
        title="Featured Products"
        subtitle="All Product Shop"
        actionLabel="View All"
        actionHref="/shop"
        products={featuredProducts.data?.items ?? []}
        type="all"
      />
      <CategoryProductSection
        title="Products By Categories"
        subtitle="All Product Shop"
        actionLabel="View All"
        actionHref="/shop"
        products={featuredProducts.data?.items ?? []}
      />

      <HomeFirstBanner />

      <ThreeColumsSection products={featuredProducts.data?.items ?? []} />

      <FourColumns products={featuredProducts.data?.items ?? []} />

      <WhyIconsCarousel />

      <div className="">{/* <ProductCardHorizontal /> */}</div>

      {/* <ProductsSection
        title="Sale Products"
        subtitle="Limited Offers"
        actionLabel="View All"
        actionHref="/shop?sale=true"
        products={saleProducts.data?.items ?? []}
      />

      <ProductsSection
        title="New Arrivals"
        subtitle="Latest"
        actionLabel="View All"
        actionHref="/shop?sort=newest"
        products={newArrivals.data?.items ?? []}
      />

      <ProductsSection
        title="Best Sellers"
        subtitle="Popular"
        actionLabel="View All"
        actionHref="/shop?sort=popularity"
        products={bestSellers.data?.items ?? []}
      /> */}

      {/* <CategoriesSection categories={categories.data ?? []} /> */}

      {/* <NewsletterSection /> */}
    </>
  );
}
