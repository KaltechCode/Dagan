import BillingAddressForm from "@/components/form/BillingForm";
import ShippingAddressForm from "@/components/form/ShippingAddress";

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Billing Address</h2>

        <BillingAddressForm />
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Shipping Address</h2>

        <ShippingAddressForm />
      </section>
    </div>
  );
}
