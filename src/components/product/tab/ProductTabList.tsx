"use client";

import { ProductTabKey } from "@/hooks/product/useProductTab";
import ProductTab from "./ProductTab";
import { Product } from "@/types/product";

interface ProductTabListProps {
  activeTab: ProductTabKey;

  onChange(tab: ProductTabKey): void;
  product: Product;
}

export default function ProductTabList({
  activeTab,
  onChange,
  product,
}: ProductTabListProps) {
  return (
    <div className="flex justify-between border-b border-gray-200 px-5">
      {product.description && (
        <ProductTab
          id="description"
          active={activeTab === "description"}
          onClick={onChange}
        >
          Description
        </ProductTab>
      )}

      {product.details.features && (
        <ProductTab
          id="features"
          active={activeTab === "features"}
          onClick={onChange}
        >
          Features
        </ProductTab>
      )}

      {product.details.perfect_for && (
        <ProductTab
          id="perfect_for"
          active={activeTab === "perfect_for"}
          onClick={onChange}
        >
          Perfect For
        </ProductTab>
      )}

      {product.details.styling_suggestions && (
        <ProductTab
          id="styling_suggestions"
          active={activeTab === "styling_suggestions"}
          onClick={onChange}
        >
          Style
        </ProductTab>
      )}

      {product.details.care_instructions && (
        <ProductTab
          id="care_instructions"
          active={activeTab === "care_instructions"}
          onClick={onChange}
        >
          Care
        </ProductTab>
      )}

      {product.details.fit && (
        <ProductTab id="fit" active={activeTab === "fit"} onClick={onChange}>
          Fit
        </ProductTab>
      )}
    </div>
  );
}
