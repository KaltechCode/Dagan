import { Category, Product } from "@/types/product";
import React from "react";
import FourItemItem from "./FourItemItem";

function FourItemBox({
  items,
  count,
  index,
}: {
  items: Category[];
  count: number;
  index: number;
}) {
  // const parentCategories = items.filter((item) => item.parentId == 0);
  return (
    <div className=" rounded-[5px] p-4 py-4 border-2 border-[#f3f3f3]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {items.slice(index, count).map((item: Category, index: number) => {
          return (
            <FourItemItem
              item={item.image ?? ""}
              name={item.name}
              key={index}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FourItemBox;
