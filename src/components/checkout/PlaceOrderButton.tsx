"use client";

import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";
import { useCheckoutContext } from "@/hooks/checkout/useCheckoutContext";

export default function PlaceOrderButton() {
  // const { submitting } = useCheckoutContext();

  const { formState } = useFormContext();

  return (
    <Button
      type="submit"
      loading={false}
      fullWidth
      disabled={!formState.isValid}
    >
      Place Order
    </Button>
  );
}
