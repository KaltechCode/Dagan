"use client";

import AvatarUpload from "@/components/form/AvaterUpload";
import BillingForm from "@/components/form/BillingForm";
import ProfileForm from "@/components/form/ProfileForm";
import ShippingForm from "@/components/form/ShippingAddress";
import Footer from "@/components/layout/footer/Footer";
import Section from "@/components/layout/section/Section";
import { useCustomer } from "@/hooks/customer/useCustomer";
import Header from "@/widget/header/Header";

export default function AccountPage() {
  const { customer, isLoading } = useCustomer();

  if (isLoading && !customer) {
    return <div className="container mx-auto py-10">Loading account...</div>;
  }

  return (
    <>
      <Section className="bg-white py-0!">
        <div className="space-y-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <AvatarUpload />

              <div className="space-y-1">
                <h1 className="product-title font-semibold">
                  {customer?.display_name}
                </h1>

                <p className="text-muted-foreground">{customer?.email}</p>

                <p className="text-sm text-muted-foreground">
                  @{customer?.username}
                </p>
              </div>
            </div>
          </div>

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Profile Information</h2>

            <ProfileForm />
          </section>

          {/* <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Billing Address</h2>

            <BillingForm />
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Shipping Address</h2>

            <ShippingForm />
          </section> */}
        </div>
      </Section>
    </>
  );
}
