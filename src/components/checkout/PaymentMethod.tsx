"use client";

import { useGetPaymentGatewaysQuery } from "@/redux/api/checkoutApi";

export default function PaymentMethods({ register }: any) {
  const { data = [], isLoading } = useGetPaymentGatewaysQuery();

  if (isLoading) {
    return <p>Loading payment methods...</p>;
  }

  return (
    <section className="rounded-xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">Payment Method</h2>

      <div className="space-y-4">
        {data.map((gateway) => (
          <label key={gateway.id} className="flex items-start gap-3">
            <input
              type="radio"
              value={gateway.id}
              {...register("payment_method")}
            />

            <div>
              <p className="font-medium">{gateway.title}</p>

              {gateway.description && (
                <p className="text-sm text-gray-500">{gateway.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
