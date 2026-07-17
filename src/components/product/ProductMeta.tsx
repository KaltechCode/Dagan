import { Product } from "@/types/product";
import ProductBrand from "./ProductBrand";
import ProductSku from "./ProductSKU";
import ProductCategories from "./ProductCategory";

interface Props {
  product: Product;
}

export default function ProductMeta({ product }: Props) {
  return (
    <div className="space-y-5 border-t pt-6">
      <ProductSku sku={product.sku} />

      <ProductBrand brand={product.brand} />

      <ProductCategories categories={product.categories} />

      {/* <ProductTags tags={product.name} /> */}
    </div>
  );
}
