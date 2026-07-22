"use client";
import { Product } from "@/types/product";
import ProductMeta from "./ProductMeta";

import ProductStock from "./productStock/ProductStock";
import { ProductPrice } from "./productPrice";
import ProductShortDescription from "./ProductShortDescription";
import ProductActions from "./productcard/ProductAction";
import ProductRating from "./ProductRating/ProductRatin";
import ProductTitle from "./ProductTitle/Index";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="space-y-6">
      <ProductTitle title={product.name} />

      <ProductRating
        rating={product.averageRating}
        reviews={product.reviewCount}
      />

      <ProductPrice
        price={product.price}
        regularPrice={product.regularPrice}
        salePrice={product.salePrice}
        onSale={product.onSale}
      />

      <ProductStock
        inStock={product.inStock}
        quantity={product.stockQuantity}
      />

      <ProductShortDescription html={product.shortDescription} />

      <ProductActions product={product} showQuantityControl={false} />

      {/* <ProductMeta product={product} /> */}
    </div>
  );
}
