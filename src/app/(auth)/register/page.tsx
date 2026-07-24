import RegisterForm from "@/components/auth/RegisterForm";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/widget/header/Header";

export const metadata = {
  title: "Create Account",
  description: "Create a new customer account.",
};

export default function RegisterPage() {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-[95%] xl:w-[90%] border bg-white border-gray-200! mx-auto flex min-h-[80vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign up to start shopping.
            </p>
          </div>

          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
