import GuestGuard from "@/components/auth/GuestGuard";
import ResetPasswordForm from "@/components/auth/ResetPassword";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";

export default function ResetPasswordPage() {
  return (
    <div className="bg-white">
      <Header />
      <GuestGuard>
        <ResetPasswordForm />
      </GuestGuard>
      <Footer />
    </div>
  );
}
