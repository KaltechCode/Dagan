"use client";
import { Product } from "@/types/product";
import ProductMeta from "./ProductMeta";

import ProductStock from "./productStock/ProductStock";
import { ProductPrice } from "./productPrice";
import ProductShortDescription from "./ProductShortDescription";
import ProductActions from "./productcard/ProductAction";
import ProductRating from "./ProductRating/ProductRatin";
import ProductTitle from "./ProductTitle/Index";
import ProductInfoDetails from "./ProductMaterial";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="space-y-6 border border-gray-200 rounded-md px-5 py-5 xmd:p-7">
      <ProductTitle title={product.name} />

      <ProductPrice
        price={product.price}
        regularPrice={product.regularPrice}
        salePrice={product.salePrice}
        onSale={product.onSale}
      />

      <ProductRating
        rating={product.averageRating}
        reviews={product.reviewCount}
      />

      <ProductStock
        inStock={product.inStock}
        quantity={product.stockQuantity}
      />

      <ProductShortDescription html={product.shortDescription} />

      {product.details.material && (
        <ProductInfoDetails html={product.details.material} title="Materials" />
      )}
      <ProductActions product={product} showQuantityControl={false} />

      {product.details.package_includes && (
        <ProductInfoDetails
          html={product.details.package_includes}
          title="Package Includes"
        />
      )}
    </div>
  );
}
