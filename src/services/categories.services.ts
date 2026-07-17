import { API } from "@/libs/api/endpoints";
import { wooCommerceClient } from "@/libs/woocommerce/client";
import { Collection } from "@/types/api";
import { Category } from "@/types/product";

class CategoryService {
  async getCategories(): Promise<Collection<Category>> {
    return wooCommerceClient.get<Collection<Category>>(API.CATEGORIES);
  }

  async getCategory(slug: string): Promise<Category> {
    return wooCommerceClient.get<Category>(`${API.CATEGORIES}/${slug}`);
  }
}

export const categoryService = new CategoryService();
