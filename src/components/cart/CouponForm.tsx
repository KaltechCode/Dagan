"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";
import { useCart } from "@/hooks/cart/useCart";
import { Input } from "../ui/shared/Input/Input";

interface CouponFormValues {
  code: string;
}

export default function CouponForm() {
  const { register, handleSubmit, reset } = useForm<CouponFormValues>();

  const { applyCoupon, mutating } = useCart();

  async function onSubmit(values: CouponFormValues) {
    await applyCoupon({
      code: values.code,
    });

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
      <Input placeholder="Coupon code" {...register("code")} />

      <Button type="submit" loading={mutating}>
        Apply
      </Button>
    </form>
  );
}
