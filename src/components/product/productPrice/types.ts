import { ProductVariation } from "@/types/product";

export interface ProductPriceProps {
  price?: number;

  regularPrice?: number;

  salePrice?: number;

  type?: "simple" | "variable";

  variations?: ProductVariation[];

  currency?: string;

  showDiscount?: boolean;

  className?: string;
}
