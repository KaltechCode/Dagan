import React from "react";
import HorizonatalProductCarousel from "./HorizonatalProductCarousel";
import { Product } from "@/types/product";

function HorizontalLayoutBox({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  return (
    <div className="">
      <>
        <h3 className="section-title mb-7">{title}</h3>
      </>
      <HorizonatalProductCarousel products={products.slice(0, 3)} />
    </div>
  );
}

export default HorizontalLayoutBox;
