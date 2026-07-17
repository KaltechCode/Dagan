"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutContext } from "@/hooks/checkout/useCheckoutContext";
import { CheckoutRequest } from "@/types/payment";
import { checkoutSchema } from "@/schema/checkoutSchema";
import Form from "./Form";
import BillingSection from "./BillingSection";
import ShippingSection from "./ShippingSection";
import ShippingMethods from "../checkout/ShippingMethod";
import PaymentMethods from "./PaymentMethod";
import OrderReview from "../checkout/OrderReview";
import CheckoutSummary from "../checkout/CheckoutSummary";
import PlaceOrderButton from "../checkout/PlaceOrderButton";
import { CustomerAddress } from "@/types/customer";

export const defaultAddress: CustomerAddress = {
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  country: "",
  email: "",
  phone: "",
};

export default function CheckoutForm() {
  const checkout = useCheckoutContext();

  const methods = useForm<CheckoutRequest>({
    resolver: zodResolver(checkoutSchema),

    values: {
      billing: checkout.billing ?? defaultAddress,

      shipping: checkout.shipping ?? defaultAddress,

      shipToDifferentAddress: checkout.shipToDifferentAddress,

      shippingMethod:
        checkout.shippingMethods.find((x) => x.selected)?.id ?? "",

      paymentMethod: checkout.paymentMethods[0]?.id ?? "",

      customerNote: "",

      createAccount: false,
    },
  });

  async function onSubmit(values: CheckoutRequest) {
    const response = await checkout.placeOrder(values);

    window.location.assign(response.paymentUrl);
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8">
            <BillingSection />

            <ShippingSection />

            <ShippingMethods />

            <PaymentMethods />
          </div>

          <div className="space-y-6">
            <OrderReview />

            <CheckoutSummary />

            <PlaceOrderButton />
          </div>
        </div>
      </Form>
    </FormProvider>
  );
}
