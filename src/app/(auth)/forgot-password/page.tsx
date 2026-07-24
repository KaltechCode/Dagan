import ForgotPasswordForm from "@/components/auth/ForgetPassword";
import GuestGuard from "@/components/auth/GuestGuard";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";

export default function ForgotPasswordPage() {
  return (
    <GuestGuard>
      <div className="bg-white">
        <Header />
        <ForgotPasswordForm />
        <Footer />
      </div>
    </GuestGuard>
  );
}
