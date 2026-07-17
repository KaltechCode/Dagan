"use client";

import { ProductTabKey } from "@/hooks/product/useProductTab";
import ProductTab from "./ProductTab";

interface ProductTabListProps {
  activeTab: ProductTabKey;

  onChange(tab: ProductTabKey): void;
}

export default function ProductTabList({
  activeTab,
  onChange,
}: ProductTabListProps) {
  return (
    <div className="flex overflow-x-auto border-b">
      <ProductTab
        id="description"
        active={activeTab === "description"}
        onClick={onChange}
      >
        Description
      </ProductTab>

      <ProductTab
        id="specifications"
        active={activeTab === "specifications"}
        onClick={onChange}
      >
        Specifications
      </ProductTab>

      <ProductTab
        id="additional-information"
        active={activeTab === "additional-information"}
        onClick={onChange}
      >
        Additional Information
      </ProductTab>

      <ProductTab
        id="shipping"
        active={activeTab === "shipping"}
        onClick={onChange}
      >
        Shipping & Returns
      </ProductTab>
    </div>
  );
}
