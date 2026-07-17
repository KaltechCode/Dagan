"use client";

import ProductDescription from "./ProductDescription";
import AddToCartSection from "./AddToSection";
import { Product } from "@/types/product";
import { ProductTitleTwo } from "@/components/product/ProductTitle/Index";
import { ProductRatingTwo } from "@/components/product/ProductRating/ProductRatin";
import { ProductPrice } from "@/components/product/productPrice";
import ProductVariantSelector from "@/components/product/productVariantSelector.ts/ProductVariantsSelector";
import { useProductVariants } from "@/hooks/product/useProductVariants";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const { currentProduct, selectedOptions, availableOptions, selectOption } =
    useProductVariants(product);

  console.log("current", currentProduct);

  return (
    <div className="space-y-6">
      <ProductTitleTwo>{product.name}</ProductTitleTwo>

      <ProductRatingTwo
        rating={Number(product.averageRating)}
        reviews={product.ratingCount}
      />

      <ProductPrice
        price={currentProduct.price}
        regularPrice={currentProduct.regularPrice}
        salePrice={currentProduct.salePrice}
        onSale={currentProduct.regularPrice > currentProduct.salePrice}
      />

      {/* {product.type === "variable" && (
        <ProductVariantSelector
          attributes={product.attributes}
          selectedOptions={selectedOptions}
          availableOptions={availableOptions}
          onSelect={selectOption}
        /> */}
      {/* )} */}

      <AddToCartSection product={product} />

      <ProductDescription html={product.description} />
    </div>
  );
}
