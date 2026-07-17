"use client";

import Link from "next/link";
import ProductBadge from "@/components/small/ProductBadge";
import { ProductPrice } from "../productPrice";
import ProductRating from "../ProductRating/ProductRatin";
import ProductTitle, { ProductTitleTwo } from "../ProductTitle/Index";
import { Product } from "@/types/product";
import ProductSubCategory from "./ProductSubCategory";
import { formatCurrency } from "@/components/helpers/currency";

interface Props {
  product: Product;

  showBadge: boolean;

  showRating: boolean;

  showCategory: boolean;
}

export default function ProductCardBody({
  product,
  showBadge,
  showRating,
  showCategory,
}: Props) {
  return (
    <div className="bg-white space-y-3 py-4">
      {showBadge && (
        <ProductBadge
          featured={product.featured}
          onSale={product.onSale}
          stockStatus={product.stockStatus}
          stockQuantity={product.stockQuantity}
        />
      )}

      {showCategory && <ProductSubCategory category="Baby Food" />}

      <Link href={`/product/${product.slug}`}>
        <ProductTitleTwo>{product.name}</ProductTitleTwo>
      </Link>

      {showRating && (
        <ProductRating
          rating={Number(product.averageRating)}
          reviews={product.ratingCount}
        />
      )}

      <ProductPrice
        price={product.price}
        regularPrice={product.regularPrice}
        salePrice={product.salePrice}
        onSale={product.onSale}
      />
    </div>
  );
}
