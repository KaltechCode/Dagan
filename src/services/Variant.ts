import { ProductVariation } from "@/entities/product/types/variation";
import { BaseService } from "./base.services";

class VariationService extends BaseService {
  async getVariations(productId: number) {
    return this.get<ProductVariation[]>(`products/${productId}/variations`);
  }
}

export const variationService = new VariationService();
