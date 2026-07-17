"use client";

import { useMemo, useState } from "react";

import { useGetProductQuery } from "@/redux/api/productApi";
import { useAddToCartMutation } from "@/redux/api/cartApi";
import { findVariation } from "@/libs/product/product";

interface UseProductOptions {
  slug: string;
}

export function useProduct({ slug }: UseProductOptions) {
  const { data, isLoading, refetch } = useGetProductQuery(slug);

  const [addToCart, addState] = useAddToCartMutation();

  const [quantity, setQuantity] = useState(1);

  const [attributes, setAttributes] = useState<Record<string, string>>({});

  const product = data;

  const selectedVariation = useMemo(() => {
    if (!product?.variations?.length) {
      return undefined;
    }

    return findVariation(product.variations, attributes);
  }, [product, attributes]);

  async function handleAddToCart() {
    if (!product) {
      return;
    }

    await addToCart({
      productId: product.id,

      variationId: selectedVariation?.id,

      quantity,

      attributes,
    }).unwrap();
  }

  function updateAttribute(name: string, value: string) {
    setAttributes((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  return {
    product,

    quantity,

    setQuantity,

    attributes,

    updateAttribute,

    selectedVariation,

    loading: isLoading,

    addingToCart: addState.isLoading,

    addToCart: handleAddToCart,

    refetch,
  };
}
