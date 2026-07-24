import type { Metadata } from "next";

import LoginForm from "@/components/auth/LoginForm";
import Header from "@/widget/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your customer account.",
};

export default function LoginPage() {
  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue shopping.
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">Don't have an account?</p>

            <a
              href="/register"
              className="mt-2 inline-block font-medium text-primary hover:underline"
            >
              Create Account
            </a>
          </div>

          <div className="mt-4 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
