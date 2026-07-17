import ProductCard from "@/components/product/productcard/ProductCard";
import GardenFreshBanner from "@/components/ui/Banner/GardenFreshBanner";
import { Product } from "@/types/product";
import React from "react";

function FourColumns({ products }: { products: Product[] }) {
  return (
    <div className="bg-white py-24 md:py-28 lg-py-32 2xl:py-36 w-[90%] 3k:w-[80%] mx-auto">
      <div className="grid grid-cols-1 grid-rows-1 gap-7 xl:gap-16 md:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-8">
        <GardenFreshBanner />

        <div className="md:col-span-1 xl:col-span-3 2xl:col-span-6">
          <div className="mb-15">
            <p className="section-subtitle">More to Discover</p>
            <h3 className="section-title leading-[2]!">
              Bestsellers of the week
            </h3>
          </div>
          <div className="grid sm:gap-5 xmd:gap-10  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-2 xl:gap-15 2xl:hidden">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className=" hidden 2xl:grid sm:gap-5 xmd:gap-10  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-2 xl:gap-15 2xl:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourColumns;
