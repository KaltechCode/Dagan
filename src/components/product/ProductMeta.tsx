import { Product } from "@/types/product";
import ProductBrand from "./ProductBrand";
import ProductSku from "./ProductSKU";
import ProductCategories from "./ProductCategory";
import ProductMaterial from "./ProductMaterial";
import ProductFit from "./ProductFit";

interface Props {
  product: Product;
}

export default function ProductMeta({ product }: Props) {
  return (
    <div className="space-y-5 border-t pt-6">
      <ProductSku sku={product.sku} />

      <ProductBrand brand={product.brand} />

      <ProductCategories categories={product.categories} />

      {product.details.material && (
        <ProductMaterial html={product.details?.material} />
      )}
      {product.details.fit && <ProductFit html={product.details?.fit} />}
      {/* <ProductTags tags={product.name} /> */}
    </div>
  );
}
