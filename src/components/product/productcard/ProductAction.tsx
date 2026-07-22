"use client";

import { useProduct } from "@/hooks/product/useProduct";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import ProductUnavailable from "../ProductUnavailable";
import VariationSelector from "../variation/VariationSelector";
import ProductQuantity from "../productDetails/ProductQuantity";
import AddToCartButton from "../AddtoCart/AddToCartButton";
import BuyNowButton from "@/components/small/BuyNowBtn";

interface ProductActionsProps {
  product: Product;
  showQuantityControl: boolean;
  classname?: string;
}

export default function ProductActions({
  product,
  showQuantityControl,
  classname,
}: ProductActionsProps) {
  const router = useRouter();

  const {
    quantity,
    setQuantity,
    attributes,
    updateAttribute,
    selectedVariation,
    addingToCart,
    addToCart,
  } = useProduct({
    slug: product.slug,
  });

  if (!product.inStock) {
    return <ProductUnavailable />;
  }

  async function handleBuyNow() {
    await addToCart();

    router.push("/checkout");
  }

  return (
    <div className={`space-y-6 w-full col-span-4`}>
      {product.type === "variable" && (
        <VariationSelector
          attributes={product.attributes}
          selected={attributes}
          onChange={updateAttribute}
        />
      )}
      {showQuantityControl && (
        <ProductQuantity
          value={quantity}
          max={selectedVariation?.stockQuantity ?? product.stockQuantity ?? 999}
          onChange={setQuantity}
        />
      )}

      <div className={`flex flex-col gap-4 justify-between ${classname}`}>
        {product.variations && product.variations.length > 0 ? (
          <AddToCartButton
            productId={product.id}
            quantity={quantity}
            variationId={product.variations[0]?.id}
            // attributes={}
          />
        ) : (
          <AddToCartButton productId={product.id} />
        )}

        <BuyNowButton
          loading={addingToCart}
          disabled={product.type === "variable" && !selectedVariation}
          onClick={handleBuyNow}
        />
      </div>
    </div>
  );
}
