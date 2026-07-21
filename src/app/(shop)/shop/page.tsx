import { Suspense } from "react";

import ShopPage from "@/components/pages/ShopPage";
import ShopSkeleton from "@/components/ui/shared/skeleton/ShopSkeleton";
import Header from "@/widget/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Shop",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <Suspense fallback={<ShopSkeleton />}>
          <ShopPage />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
