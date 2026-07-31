import Footer from "@/components/layout/footer/Footer";
import { VerifyEmail } from "@/components/auth/VerifyEmail";
import Header from "@/widget/header/Header";
import React, { Suspense } from "react";

function Verify() {
  return (
    <div>
      <Header />
      <Suspense>
        <VerifyEmail />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Verify;
