// import CheckoutForm from "@/components/form/CheckoutForm";
// import CheckoutProvider from "@/providers/CheckoutProvider";

import Header from "@/widget/header/Header";
import CheckoutPage from "./CheckoutPage";
import Footer from "@/components/layout/footer/Footer";

// export const metadata = {
//   title: "Checkout",
// };

// export default function CheckoutPage() {
//   return (
//     <CheckoutProvider>
//       <div className="container py-10">
//         <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

//         <CheckoutForm />
//       </div>
//     </CheckoutProvider>
//   );
// }

export default function Page() {
  return (
    <div className="w-full bg-white">
      <Header />
      <CheckoutPage />
      <Footer />
    </div>
  );
}
