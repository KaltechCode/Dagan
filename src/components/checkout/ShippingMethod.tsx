"use client";

import { useCheckoutContext } from "@/hooks/checkout/useCheckoutContext";
import FormSection from "../form/FormSection";
import OptionSelector from "../form/OptionSelector";

export default function ShippingMethods() {
  const { shippingMethods } = useCheckoutContext();

  return (
    <FormSection title="Shipping Method">
      <OptionSelector
        name="shippingMethod"
        options={shippingMethods.map((method) => ({
          id: method.id,
          title: method.title,
          description: method.methodId,
          cost: method.cost,
        }))}
      />
    </FormSection>
  );
}
