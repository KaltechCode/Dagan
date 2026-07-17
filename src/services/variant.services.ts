import { ProductVariation } from "@/types/product";
import { BaseService } from "./base.services";
import { API_ENDPOINTS } from "@/constants/endpoints";

class VariationService extends BaseService {
  async getVariations(productId: number) {
    return this.get<ProductVariation[]>(
      API_ENDPOINTS.PRODUCT_VARIATIONS(productId),
    );
  }
}

export const variationService = new VariationService();
