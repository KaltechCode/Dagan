import { Suspense } from "react";

import ShopPage from "@/components/pages/ShopPage";
import ShopSkeleton from "@/components/ui/shared/skeleton/ShopSkeleton";

export const metadata = {
  title: "Shop",
};

export default function Page() {
  return (
    <div className="container py-10">
      <Suspense fallback={<ShopSkeleton />}>
        <ShopPage />
      </Suspense>
    </div>
  );
}
