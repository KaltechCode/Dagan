"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";
import { useCustomer } from "@/hooks/customer/useCustomer";
import { useUpdateProfileMutation } from "@/redux/api/authApi";
import { UpdateProfileRequest } from "@/types/customer";
import { profileSchema } from "@/schema/customer";
import FormGrid from "./FormGrid";
import { Input } from "../ui/shared/Input/Input";
import FormActions from "./FormAction";
import FormSection from "./FormSection";
import Form from "./Form";

export default function ProfileForm() {
  const { customer } = useCustomer();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateProfileRequest>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (!customer) return;

    reset({
      firstName: customer.firstName,
      lastName: customer.lastName,
      displayName: customer.displayName,
      email: customer.email,
      phone: customer.phone ?? "",
    });
  }, [customer, reset]);

  async function onSubmit(values: UpdateProfileRequest) {
    await updateProfile(values).unwrap();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormSection
        title="Personal Information"
        description="Update your account details."
      >
        <FormGrid>
          <Input
            label="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />

          <Input
            label="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />

          <Input
            label="Display Name"
            error={errors.displayName?.message}
            {...register("displayName")}
          />

          <Input
            type="email"
            label="Email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Phone"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </FormGrid>
      </FormSection>

      <FormActions>
        <Button type="submit" loading={isLoading}>
          Save Changes
        </Button>
      </FormActions>
    </Form>
  );
}
