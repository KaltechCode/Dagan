import type { Product } from "@/types/product";
import type { ProductQuery } from "@/redux/types";
import { Collection, WP } from "@/libs/wc_types";
import { wooCommerceClient } from "../libs/woocommerce/client";

export class ProductService {
  async getProducts(query?: ProductQuery): Promise<Collection<Product>> {
    console.log("Service query", query);
    return wooCommerceClient.get<Collection<Product>>(
      WP.PRODUCTS,
      query as Record<string, unknown>,
    );
  }

  async getProductBySlug(slug: string): Promise<Product> {
    return wooCommerceClient.get<Product>(WP.PRODUCT(slug));
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return wooCommerceClient.get<Product[]>(WP.FEATURED_PRODUCTS);
  }

  async getRelatedProducts(slug: string): Promise<Product[]> {
    return wooCommerceClient.get<Product[]>(WP.RELATED_PRODUCTS(slug));
  }

  async searchProducts(search: string): Promise<Product[]> {
    return wooCommerceClient.get<Product[]>(WP.SEARCH_PRODUCTS, {
      search,
    });
  }
}

export const productService = new ProductService();
