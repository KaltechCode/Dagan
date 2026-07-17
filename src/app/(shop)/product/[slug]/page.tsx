// import ProductInfo from "@/features/product/productFeatures";
// import ProductGallery from "@/features/product/ProductGallery";
// import { productService } from "@/services/product.services";

// interface Props {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default async function ProductPage({ params }: Props) {
//   const { slug } = await params;

//   const { product, variations } = await productService.getProductDetails(slug);

//   product.variations = variations;

//   return (
//     <div className="container py-10">
//       <div className="grid gap-10 lg:grid-cols-2">
//         <ProductGallery product={product} />

//         <ProductInfo product={product} />
//       </div>
//     </div>
//   );
// }

import ProductInfo from "@/features/product/productFeatures";
import ProductGallery from "@/features/product/ProductGallery";
import { productService } from "@/services/product.services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await productService.getProductBySlug(slug);

  console.log("product", product);

  return (
    <div className="container py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery product={product} />

        <ProductInfo product={product} />
      </div>
    </div>
  );
}
