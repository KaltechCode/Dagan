import { CartItem } from "@/types/cart";
import { SelectedOptions } from "../types/selected-option";
import { Product } from "../types/product";
import { ProductVariation } from "../types/variation";

interface Params {
  product: Product;

  variation?: ProductVariation;

  quantity: number;

  attributes: SelectedOptions;
}

export function normalizeCartItem({
  product,
  variation,
  quantity,
  attributes,
}: Params): CartItem {
  return {
    productId: product.id,

    variationId: variation?.id,

    name: product.name,

    slug: product.slug,

    sku: variation?.sku ?? product.sku,

    image: variation?.image ?? product.images[0]?.src ?? "",

    price: variation?.price ?? product.price,

    regularPrice: variation?.regularPrice ?? product.regularPrice,

    salePrice: variation?.salePrice ?? product.salePrice,

    quantity,

    stockQuantity: variation?.stockQuantity ?? product.stockQuantity ?? 0,

    stockStatus: variation?.stockStatus ?? product.stockStatus,

    attributes,
  };
}
