import { failure, success } from "@/libs/api.responses";
import { productService } from "@/services/product.services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, { params }: Props) {
  try {
    const { slug } = await params;

    if (!slug) {
      return failure("Product slug is required", 400);
    }

    const products = await productService.getRelatedProducts(slug);

    return success(products);
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Failed to fetch related products",
    );
  }
}
