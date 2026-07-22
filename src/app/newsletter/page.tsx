import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <div className="flex-1 flex justify-center items-center bg-black h-70">
        <Image src="/coming-soon.gif" alt="" height={300} width={250} />
      </div>
      <Footer />
    </div>
  );
}

export default page;
