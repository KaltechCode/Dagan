// app/cart/page.tsx

import Header from "@/widget/header/Header";
import CartPage from "./pageCart";
import Footer from "@/components/layout/footer/Footer";

export default function Page() {
  return (
    <div className="w-full bg-white">
      <Header />
      <CartPage />
      <Footer />
    </div>
  );
}
