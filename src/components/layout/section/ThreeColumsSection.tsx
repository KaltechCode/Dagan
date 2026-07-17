import React from "react";
import HorizonatalProductCarousel from "./HorizonatalProductCarousel";
import { Product } from "@/types/product";
import { useHomepage } from "@/hooks/useHomePage";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/shared/Button";
import { Icon } from "@/components/ui/shared/Icon/Icon";
import VegetablesBanner from "@/components/ui/Banner/VegetablesBanner";
import HorizontalLayoutBox from "./HorizontalLayoutBox";

function ThreeColumsSection({ products }: { products: Product[] }) {
  const {
    featuredProducts,
    saleProducts,
    newArrivals,
    bestSellers,
    categories,
  } = useHomepage();
  return (
    <div className="bg-white py-24 md:py-28 lg-py-32 2xl:py-36 w-[90%] 3k:w-[80%] mx-auto">
      <div className="grid grid-cols-1 grid-rows-1 gap-7 xl:gap-5 md:grid-cols-2 xl:grid-cols-3">
        <VegetablesBanner />

        <HorizontalLayoutBox title="Top Selling Products" products={products} />
        <HorizontalLayoutBox title="Top Rated Products" products={products} />
      </div>
    </div>
  );
}

export default ThreeColumsSection;
