import AuthGuard from "@/components/auth/AuthGuard";
import ProfileForm from "@/components/form/ProfileForm";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <AuthGuard>
        <ProfileForm />
      </AuthGuard>
      <Footer />
    </div>
  );
}
