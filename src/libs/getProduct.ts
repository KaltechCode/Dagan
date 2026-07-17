import { WooCommerce } from "./woocommerce";

export async function getProduct(slug: string) {
  try {
    const response = await WooCommerce.get("products", {
      slug: slug,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
