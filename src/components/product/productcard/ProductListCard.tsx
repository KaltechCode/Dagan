"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";
import AddToCartButton from "../AddtoCart/AddToCartButton";
import ProductRating from "../ProductRating/ProductRatin";
import { ProductPrice } from "../productPrice";
import { useProduct } from "@/hooks/product/useProduct";

interface ProductListCardProps {
  product: Product;
}

export default function ProductListCard({ product }: ProductListCardProps) {
  const { addToCart, addingToCart, loading } = useProduct({
    slug: product.slug,
  });
  return (
    <div className="flex flex-col gap-6 rounded-xl border p-5 md:flex-row">
      <Link href={`/product/${product.slug}`} className="shrink-0">
        <Image
          src={
            product.images ? product.images[0]?.src : "/images/placeholder.webp"
          }
          alt={product.images ? product.images[0].alt : product.name}
          width={220}
          height={220}
          className="rounded-lg object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-semibold hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2">
          <ProductRating
            rating={product.averageRating}
            reviews={product.reviewCount}
          />
        </div>

        {product.shortDescription && (
          <p className="mt-4 line-clamp-3 text-sm text-gray-600">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ProductPrice
            regularPrice={product.regularPrice}
            onSale={true}
            price={product.price}
            salePrice={product.salePrice}
          />

          <AddToCartButton productId={product.id} onClick={addToCart} />
        </div>
      </div>
    </div>
  );
}
