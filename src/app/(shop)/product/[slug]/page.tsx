import Footer from "@/components/layout/footer/Footer";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/tab/ProductTabs";
import ProductGallery from "@/features/product/ProductGallery";
import { productService } from "@/services/product.services";
import Header from "@/widget/header/Header";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const product = await productService.getProductBySlug(slug);
  console.log("detail", product);
  return (
    <div className="bg-white">
      <Header />
      <div className="py-8 w-[95%] xl:w-[90%] mx-auto bg-white w">
        <div className="grid gap-10 md:grid-cols-2">
          <ProductGallery product={product} />

          <ProductInfo product={product} />

          <ProductTabs product={product} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
