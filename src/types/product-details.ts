import { Product } from "@/redux/types";
import { ProductVariation } from "./product";

export interface ProductDetails {
  product: Product;
  variations: ProductVariation[];
}
