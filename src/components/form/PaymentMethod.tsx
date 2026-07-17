"use client";

import { PaymentGateway } from "@/types/checkout";

interface Props {
  methods: PaymentGateway[];

  value: string;

  onChange: (method: string) => void;

  disabled?: boolean;
}

export default function PaymentMethodSelector({
  methods,
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <section className="space-y-5 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">Payment Method</h2>

      <div className="space-y-3">
        {methods.map((method) => (
          <label
            key={method.id}
            className="flex cursor-pointer items-start gap-3 rounded-lg border p-4"
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={value === method.id}
              disabled={disabled || !method.enabled}
              onChange={() => onChange(method.id)}
            />

            <div className="flex-1">
              <div className="font-medium">{method.title}</div>

              {method.description && (
                <p className="mt-1 text-sm text-gray-500">
                  {method.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}

// usesage
{
  /* <PaymentMethodSelector
  methods={paymentMethods}
  value={paymentMethod}
  onChange={setPaymentMethod}
/>; */
}
