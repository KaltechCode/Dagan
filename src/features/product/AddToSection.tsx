"use client";

import AddToCartButton from "@/components/product/AddtoCart/AddToCartButton";
import QuantitySelector from "@/components/product/productDetails/QuantitySelector";
import { useProduct } from "@/hooks/product/useProduct";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function AddToCartSection({ product }: Props) {
  const {
    quantity,
    setQuantity,
    selectedVariation,
    addingToCart,
    addToCart,
    loading,
  } = useProduct({
    slug: product.slug,
  });

  return (
    <div className="space-y-6">
      <QuantitySelector value={quantity} onChange={setQuantity} />

      <AddToCartButton
        productId={product.id}
        disabled={product.type === "variable" && !selectedVariation}
        onClick={addToCart}
      />
    </div>
  );
}
