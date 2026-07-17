"use client";

import ProductGallery from "../product/gallery/ProductGallery";
import { ProductImageSkeleton } from "../product/ProductImage";
import ProductInfo from "../product/ProductInfo";
import ProductNotFound from "../product/ProductNotFound";
import ProductTabs from "../product/tab/ProductTabs";
import RecentlyViewed from "../layout/section/RecentViewed";
import { useProduct } from "@/hooks/product/useProduct";
import RelatedProducts from "../layout/section/RelatedProduct";

interface Props {
  slug: string;
}

export default function ProductPage({ slug }: Props) {
  const { product, loading } = useProduct({
    slug,
  });

  if (loading) {
    return <ProductImageSkeleton />;
  }

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="space-y-16">
      <section className="grid gap-12 lg:grid-cols-2">
        <ProductGallery images={product.images ?? []} />

        <ProductInfo product={product} />
      </section>

      <ProductTabs product={product} />

      <RelatedProducts product={product} />

      <RecentlyViewed productId={product.id} />
    </div>
  );
}
