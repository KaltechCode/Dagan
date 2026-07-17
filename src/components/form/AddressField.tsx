"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../ui/shared/Input/Input";
import { Select } from "../ui/shared/Button/Select";

interface AddressFieldsProps {
  prefix: "billing" | "shipping";
}

export default function AddressFields({ prefix }: AddressFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = (name: string) => {
    const group = errors[prefix as keyof typeof errors] as Record<
      string,
      { message?: string }
    >;

    return group?.[name]?.message;
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Input
        label="First Name"
        error={fieldError("firstName")}
        {...register(`${prefix}.firstName`)}
      />

      <Input
        label="Last Name"
        error={fieldError("lastName")}
        {...register(`${prefix}.lastName`)}
      />

      <Input label="Company" {...register(`${prefix}.company`)} />

      <Input
        label="Phone"
        error={fieldError("phone")}
        {...register(`${prefix}.phone`)}
      />

      <Input
        type="email"
        label="Email"
        error={fieldError("email")}
        {...register(`${prefix}.email`)}
      />

      <Input
        label="Address Line 1"
        error={fieldError("address1")}
        {...register(`${prefix}.address1`)}
      />

      <Input label="Address Line 2" {...register(`${prefix}.address2`)} />

      <Input
        label="City"
        error={fieldError("city")}
        {...register(`${prefix}.city`)}
      />

      <Input
        label="State"
        error={fieldError("state")}
        {...register(`${prefix}.state`)}
      />

      <Input
        label="Postcode"
        error={fieldError("postcode")}
        {...register(`${prefix}.postcode`)}
      />

      <Select
        label="Country"
        error={fieldError("country")}
        {...register(`${prefix}.country`)}
        options={[
          {
            label: "Nigeria",
            value: "NG",
          },
        ]}
      />
    </div>
  );
}
