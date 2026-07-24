"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema, type ProfileFormValues } from "@/schema/customer";
import { useCustomer } from "@/hooks/customer/useCustomer";
import { Input } from "../ui/shared/Input/Input";
import { Button } from "../ui/shared/Button";

export default function ProfileForm() {
  const { customer, updateProfile, isLoading } = useCustomer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      display_name: "",
      email: "",
    },
  });

  useEffect(() => {
    if (!customer) return;

    reset({
      first_name: customer.first_name ?? "",
      last_name: customer.last_name ?? "",
      display_name: customer.display_name ?? "",
      email: customer.email ?? "",
    });
  }, [customer, reset]);

  const onSubmit = async (values: ProfileFormValues) => {
    await updateProfile(values);
  };

  if (isLoading && !customer) {
    return <div className="space-y-4">Loading profile...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <Input
        label="Display Name"
        required
        helperText="This name will be shown publicly."
        error={errors.display_name?.message}
        {...register("display_name")}
      />

      <Input
        type="email"
        label="Email Address"
        required
        error={errors.email?.message}
        {...register("email")}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={!isDirty || isSubmitting}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}
