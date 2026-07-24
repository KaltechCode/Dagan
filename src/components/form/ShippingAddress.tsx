"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { shippingSchema, type ShippingFormValues } from "@/schema/customer";
import { useCustomer } from "@/hooks/customer/useCustomer";
import { Input } from "../ui/shared/Input/Input";
import { Button } from "../ui/shared/Button";

export default function ShippingForm() {
  const { customer, updateShipping, isLoading } = useCustomer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
    },
  });

  useEffect(() => {
    if (!customer?.shipping) return;

    reset({
      first_name: customer.shipping.first_name ?? "",
      last_name: customer.shipping.last_name ?? "",
      company: customer.shipping.company ?? "",
      address_1: customer.shipping.address_1 ?? "",
      address_2: customer.shipping.address_2 ?? "",
      city: customer.shipping.city ?? "",
      state: customer.shipping.state ?? "",
      postcode: customer.shipping.postcode ?? "",
      country: customer.shipping.country ?? "",
    });
  }, [customer, reset]);

  const onSubmit = async (values: ShippingFormValues) => {
    await updateShipping(values);
  };

  if (isLoading && !customer) {
    return <div>Loading shipping information...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="First Name"
          required
          error={errors.first_name?.message}
          {...register("first_name")}
        />

        <Input
          label="Last Name"
          required
          error={errors.last_name?.message}
          {...register("last_name")}
        />
      </div>

      <Input
        label="Company"
        error={errors.company?.message}
        {...register("company")}
      />

      <Input
        label="Address Line 1"
        required
        error={errors.address_1?.message}
        {...register("address_1")}
      />

      <Input
        label="Address Line 2"
        error={errors.address_2?.message}
        {...register("address_2")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="City"
          required
          error={errors.city?.message}
          {...register("city")}
        />

        <Input
          label="State"
          required
          error={errors.state?.message}
          {...register("state")}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Postcode"
          required
          error={errors.postcode?.message}
          {...register("postcode")}
        />

        <Input
          label="Country"
          required
          error={errors.country?.message}
          {...register("country")}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={!isDirty || isSubmitting}
        >
          Save Shipping Address
        </Button>
      </div>
    </form>
  );
}
