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
  cartLabel?: boolean;

  cartClass?: string;
  buyClass?: string;
  quantityClass?: string;
}

export default function ProductActions({
  product,
  showQuantityControl,
  classname,
  cartLabel,
  cartClass,
  buyClass,
  quantityClass,
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
    <div
      className={`space-y-6 w-full col-span-4 transition-all transition-500 `}
    >
      {product.type === "variable" && (
        <VariationSelector
          attributes={product.attributes}
          selected={attributes}
          onChange={updateAttribute}
        />
      )}

      <div className={`flex gap-4 ${classname}`}>
        {showQuantityControl && (
          <ProductQuantity
            value={quantity}
            max={
              selectedVariation?.stockQuantity ?? product.stockQuantity ?? 999
            }
            onChange={setQuantity}
            quantityClass={quantityClass}
          />
        )}
        {product.variations && product.variations.length > 0 ? (
          <AddToCartButton
            productId={product.id}
            quantity={quantity}
            variationId={product.variations[0]?.id}
            cartLabel={cartLabel}
            cartClass={cartClass}

            // attributes={}
          />
        ) : (
          <AddToCartButton
            productId={product.id}
            cartLabel={cartLabel}
            cartClass={cartClass}
          />
        )}

        <BuyNowButton
          loading={addingToCart}
          disabled={product.type === "variable" && !selectedVariation}
          onClick={handleBuyNow}
          buyClass={buyClass}
        />
      </div>
    </div>
  );
}
