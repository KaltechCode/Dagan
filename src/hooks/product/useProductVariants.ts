"use client";

import { useEffect, useMemo, useState } from "react";
import { Product, ProductVariation } from "@/types/product";

export function useProductVariants(product: Product) {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    if (!product?.variations) return;

    const defaults: Record<string, string> = {};

    product.attributes.forEach((attribute) => {
      if (attribute.options.length) {
        defaults[attribute.name] = attribute.options[0];
      }
    });

    setSelectedOptions(defaults);
  }, [product]);

  const currentProduct = useMemo(() => {
    if (!product.variations) {
      return product;
    }

    const variation = product.variations.find((variation) =>
      variation.attributes.every(
        (attribute) => selectedOptions[attribute.name] === attribute.option,
      ),
    );

    if (!variation) {
      return product;
    }

    return {
      ...product,
      id: variation.id,
      sku: variation.sku,
      price: variation.price,
      regularPrice: variation.regularPrice,
      salePrice: variation.salePrice,
      stockStatus: variation.stockStatus,
      stockQuantity: variation.stockQuantity,
      image: variation.image ?? product.image,
    };
  }, [product, selectedOptions]);

  const availableOptions = useMemo(() => {
    return product.attributes;
  }, [product]);

  function selectOption(attribute: string, option: string) {
    setSelectedOptions((previous) => ({
      ...previous,
      [attribute]: option,
    }));
  }

  return {
    currentProduct,
    selectedOptions,
    availableOptions,
    selectOption,
  };
}
