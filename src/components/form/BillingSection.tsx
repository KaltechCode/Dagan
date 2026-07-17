"use client";

import AddressFields from "./AddressField";
import FormSection from "./FormSection";

export default function BillingSection() {
  return (
    <FormSection title="Billing Address">
      <AddressFields prefix="billing" />
    </FormSection>
  );
}
