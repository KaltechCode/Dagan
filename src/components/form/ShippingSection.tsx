"use client";

import { useWatch } from "react-hook-form";
import FormSection from "./FormSection";
import AddressFields from "./AddressField";
import { Checkbox } from "../ui/shared/Button/Checkbox";

export default function ShippingSection() {
  const ship = useWatch({
    name: "shipToDifferentAddress",
  });

  return (
    <FormSection title="Shipping Address">
      <Checkbox
        label="Ship to a different address?"
        name="shipToDifferentAddress"
      />

      {ship && <AddressFields prefix="shipping" />}
    </FormSection>
  );
}
