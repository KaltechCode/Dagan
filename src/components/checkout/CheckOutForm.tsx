"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Field } from "@/components/ui/shared/Fields";
import PaymentMethods from "./PaymentMethod";
import PlaceOrderButton, { PlaceOrderBtnForm } from "./PlaceOrderBtn";
import { useCheckout } from "@/hooks/checkout/useCheckout";
import { CheckoutSchema, checkoutSchema } from "@/schema/checkoutSchema";

export default function CheckoutForm() {
  const { placeOrder, isPlacingOrder } = useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <form onSubmit={handleSubmit(placeOrder)} className="space-y-8">
      <section className="rounded-xl border p-6">
        <h2 className="mb-6 text-xl font-semibold">Billing Details</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="First Name" error={errors.billing?.firstName}>
            <input {...register("billing.firstName")} />
          </Field>

          <Field label="Last Name" error={errors.billing?.lastName}>
            <input {...register("billing.lastName")} />
          </Field>

          <Field label="Email" error={errors.billing?.email}>
            <input type="email" {...register("billing.email")} />
          </Field>

          <Field label="Phone" error={errors.billing?.phone}>
            <input {...register("billing.phone")} />
          </Field>

          <Field label="Country" error={errors.billing?.country}>
            <input {...register("billing.country")} />
          </Field>

          <Field label="State" error={errors.billing?.state}>
            <input {...register("billing.state")} />
          </Field>

          <Field label="City" error={errors.billing?.city}>
            <input {...register("billing.city")} />
          </Field>

          <Field label="Postcode" error={errors.billing?.postcode}>
            <input {...register("billing.postcode")} />
          </Field>
        </div>

        <Field label="Address" error={errors.billing?.address1}>
          <input {...register("billing.address1")} />
        </Field>
      </section>

      <PaymentMethods register={register} />

      <PlaceOrderBtnForm isLoading={isPlacingOrder} />
    </form>
  );
}
