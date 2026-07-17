import { Product, ProductVariation } from "@/types/product";
import { wooCommerceClient } from "../woocommerce/client";

interface WooResponse<T> {
  data: T;
}

// export async function getProducts(
//   params?: Record<string, unknown>,
// ): Promise<Product[]> {
//   const response = (await wooClient.get("products", params)) as WooResponse<
//     Product[]
//   >;

//   return response.data;
// }

// export async function getProducts() {
//   const response = (await apiClient.get("products")) as WooResponse<
//     WooProduct[]
//   >;

//   return response.data;
// }

export async function getProduct(id: number): Promise<Product> {
  const response = (await wooCommerceClient.get(
    `products/${id}`,
  )) as WooResponse<Product>;

  return response.data;
}
export async function getProductBySlug(slug: string): Promise<Product> {
  const response = (await wooCommerceClient.get("products", {
    slug,
  })) as WooResponse<Product>;

  return response.data;
}
export async function getRelatedProduct(id: string): Promise<Product> {
  const response = (await wooCommerceClient.get(
    `products/${id}/related`,
  )) as WooResponse<Product>;

  return response.data;
}

export function findVariation(
  variations: ProductVariation[],
  selected: Record<string, string>,
) {
  return variations.find((variation) =>
    variation.attributes.every(
      (attribute) => selected[attribute.name] === attribute.option,
    ),
  );
}
