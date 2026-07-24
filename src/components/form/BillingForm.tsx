"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCustomer } from "@/hooks/customer/useCustomer";

import { billingSchema, type BillingFormValues } from "@/schema/customer";
import { Input } from "../ui/shared/Input/Input";
import { Button } from "../ui/shared/Button";

export default function BillingForm() {
  const { customer, updateBilling, isLoading } = useCustomer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<BillingFormValues>({
    resolver: zodResolver(billingSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      company: "",
      email: "",
      phone: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
    },
  });

  useEffect(() => {
    if (!customer?.billing) return;

    reset({
      first_name: customer.billing.first_name ?? "",
      last_name: customer.billing.last_name ?? "",
      company: customer.billing.company ?? "",
      email: customer.billing.email ?? "",
      phone: customer.billing.phone ?? "",
      address_1: customer.billing.address_1 ?? "",
      address_2: customer.billing.address_2 ?? "",
      city: customer.billing.city ?? "",
      state: customer.billing.state ?? "",
      postcode: customer.billing.postcode ?? "",
      country: customer.billing.country ?? "",
    });
  }, [customer, reset]);

  const onSubmit = async (values: BillingFormValues) => {
    await updateBilling(values);
  };

  if (isLoading && !customer) {
    return <div>Loading billing information...</div>;
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          type="email"
          label="Email"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Phone"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

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
          Save Billing Address
        </Button>
      </div>
    </form>
  );
}
