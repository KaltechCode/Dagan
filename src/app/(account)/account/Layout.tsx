import AuthGuard from "@/components/auth/AuthGuard";
import AccountSidebar from "@/components/customer/AccountSide";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AccountLayout({ children }: Props) {
  return (
    <AuthGuard>
      <Header />
      <div className="bg-white">
        <div className="grid gap-2 xmd:gap-5 md:gap-5 grid-cols-5 md:grid-cols-7 py-10 w-[95%] mx-auto">
          <AccountSidebar />

          <main className="col-span-4 md:col-span-5">{children}</main>
        </div>
      </div>
      <Footer />
    </AuthGuard>
  );
}
