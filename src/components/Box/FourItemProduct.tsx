import { Category, Product } from "@/types/product";
import React from "react";
import FourItemItem from "./FourItemItem";

function FourItemProduct({
  items,
  count,
  index,
}: {
  items: Product[];
  count: number;
  index: number;
}) {
  console.log("first", items);
  return (
    <div className=" rounded-[5px] p-4 py-4 border-2 border-[#f3f3f3]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {items.slice(index, count).map((item: Product, index: number) => {
          return (
            <FourItemItem
              item={item.image?.src ?? ""}
              name={item.image?.alt || ""}
              key={index}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FourItemProduct;
