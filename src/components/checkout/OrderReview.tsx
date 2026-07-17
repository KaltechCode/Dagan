"use client";

import CartList from "../cart/CartList";
import FormSection from "../form/FormSection";

export default function OrderReview() {
  return (
    <FormSection title="Order Review">
      <CartList variant="checkout" />
    </FormSection>
  );
}
