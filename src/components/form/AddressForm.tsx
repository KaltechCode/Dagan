"use client";

import { CheckoutAddress } from "@/types/checkout";

interface Props {
  title: string;

  value: CheckoutAddress;

  onChange: (value: CheckoutAddress) => void;

  disabled?: boolean;
}

export default function AddressForm({
  title,
  value,
  onChange,
  disabled,
}: Props) {
  function updateField(field: keyof CheckoutAddress, fieldValue: string) {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  }

  return (
    <section className="space-y-5 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          placeholder="First Name"
          value={value.firstName}
          disabled={disabled}
          onChange={(e) => updateField("firstName", e.target.value)}
        />

        <input
          placeholder="Last Name"
          value={value.lastName}
          disabled={disabled}
          onChange={(e) => updateField("lastName", e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={value.email}
          disabled={disabled}
          onChange={(e) => updateField("email", e.target.value)}
        />

        <input
          placeholder="Phone"
          value={value.phone}
          disabled={disabled}
          onChange={(e) => updateField("phone", e.target.value)}
        />

        <input
          placeholder="Company"
          value={value.company ?? ""}
          disabled={disabled}
          onChange={(e) => updateField("company", e.target.value)}
        />

        <input
          placeholder="Country"
          value={value.country}
          disabled={disabled}
          onChange={(e) => updateField("country", e.target.value)}
        />

        <input
          placeholder="State"
          value={value.state}
          disabled={disabled}
          onChange={(e) => updateField("state", e.target.value)}
        />

        <input
          placeholder="City"
          value={value.city}
          disabled={disabled}
          onChange={(e) => updateField("city", e.target.value)}
        />

        <input
          placeholder="Postcode"
          value={value.postcode}
          disabled={disabled}
          onChange={(e) => updateField("postcode", e.target.value)}
        />

        <input
          className="md:col-span-2"
          placeholder="Address Line 1"
          value={value.address1}
          disabled={disabled}
          onChange={(e) => updateField("address1", e.target.value)}
        />

        <input
          className="md:col-span-2"
          placeholder="Address Line 2"
          value={value.address2 ?? ""}
          disabled={disabled}
          onChange={(e) => updateField("address2", e.target.value)}
        />
      </div>
    </section>
  );
}

// Usage
// const [billing, setBilling] =
//   useState<CheckoutAddress>(...);

// const [shipping, setShipping] =
//   useState<CheckoutAddress>(...);

// <AddressForm
//   title="Billing Address"
//   value={billing}
//   onChange={setBilling}
// />

// <AddressForm
//   title="Shipping Address"
//   value={shipping}
//   onChange={setShipping}
// />
