"use client";

import FormSection from "../form/FormSection";
import OptionSelector from "../form/OptionSelector";
import { useGetPaymentMethodsQuery } from "@/redux/api/checkoutApi";

export default function ShippingMethods() {
  const { data = [] } = useGetPaymentMethodsQuery();

  return (
    <FormSection title="Shipping Method">
      <OptionSelector
        name="shippingMethod"
        options={data.map((method) => ({
          id: method.id,
          title: method.title,
          description: method.description,
          cost: method.description,
        }))}
      />
    </FormSection>
  );
}
