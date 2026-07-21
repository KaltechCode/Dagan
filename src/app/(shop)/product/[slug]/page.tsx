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

import Footer from "@/components/layout/footer/Footer";
import ProductInfo from "@/features/product/productFeatures";
import ProductGallery from "@/features/product/ProductGallery";
import { productService } from "@/services/product.services";
import Header from "@/widget/header/Header";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await productService.getProductBySlug(slug);

  return (
    <div className="bg-white">
      <Header />
      <div className="container py-8 w-[95%] xl:w-[90%] mx-auto bg-white w">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
