import AuthGuard from "@/components/auth/AuthGuard";
import ResetPasswordForm from "@/components/auth/ResetPassword";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="bg-white">
      <Header />
      <AuthGuard>
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </AuthGuard>
      <Footer />
    </div>
  );
}
