import { Product } from "@/entities/product/types/product";
import { wooCommerceClient } from "./woocommerce/client";

interface WooResponse<T> {
  data: T;
}

export async function createOrder(body: unknown): Promise<Product> {
  const response = (await wooCommerceClient.post(
    "orders",
    body,
  )) as WooResponse<Product>;

  return response.data;
}
