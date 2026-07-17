"use client";

import { useAppDispatch } from "@/redux/hooks";
import { SkeletonGrid } from "@/components/ui/shared/skeleton/";
import { SkeletonText } from "@/components/ui/shared/skeleton";
import HomePage from "@/components/pages/Homepage";
import { heroSectionData } from "@/constants/contentData";
import Header from "@/widget/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function page() {
  const dispatch = useAppDispatch();
  // const isLoading = true;

  // if (isLoading) {
  //   return (
  //     <>
  //       {" "}
  //       <SkeletonText lines={5} />
  //       <SkeletonGrid />
  //     </>
  //   );
  // }

  return (
    <main className="bg-white mx-auto">
      <Header />
      <HomePage hero={heroSectionData} />

      <Footer />
    </main>
  );
}
