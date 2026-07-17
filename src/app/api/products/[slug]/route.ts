import { failure, success } from "@/libs/api.responses";
import { productService } from "@/services/product.services";
import { NextRequest } from "next/server";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { slug } = await params;

    if (!slug) {
      return failure("Product slug is required", 400);
    }

    const product = await productService.getProductBySlug(slug);

    return success(product);
  } catch (error) {
    return failure(
      error instanceof Error ? error.message : "Failed to fetch product",
    );
  }
}
