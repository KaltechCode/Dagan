import { success, failure } from "@/libs/api.responses";
import { productService } from "@/services/product.services";

export async function GET() {
  try {
    const products = await productService.getFeaturedProducts();

    return success(products);
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Failed to fetch featured products",
    );
  }
}
