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
        id="features"
        active={activeTab === "features"}
        onClick={onChange}
      >
        Features
      </ProductTab>

      <ProductTab
        id="perfect_for"
        active={activeTab === "perfect_for"}
        onClick={onChange}
      >
        Perfect For
      </ProductTab>

      <ProductTab
        id="styling_suggestions"
        active={activeTab === "styling_suggestions"}
        onClick={onChange}
      >
        Style
      </ProductTab>

      <ProductTab
        id="care_instructions"
        active={activeTab === "care_instructions"}
        onClick={onChange}
      >
        Care
      </ProductTab>
      <ProductTab id="fit" active={activeTab === "fit"} onClick={onChange}>
        Fit
      </ProductTab>
    </div>
  );
}
