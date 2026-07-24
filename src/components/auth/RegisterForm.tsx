"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/shared/Button";
import { useAuth } from "@/hooks/auth/useAuth";
import { registerSchema, type RegisterFormValues } from "@/schema/auth";

import PasswordInput from "./PasswordInput";
import { Input } from "../ui/shared/Input/Input";

export default function RegisterForm() {
  const { register, isRegistering } = useAuth();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    const { confirm_password, ...payload } = values;

    await register(payload);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Username"
        {...registerField("username")}
        error={errors.username?.message}
      />

      <Input
        label="Email"
        type="email"
        {...registerField("email")}
        error={errors.email?.message}
      />

      <Input
        label="First Name"
        {...registerField("first_name")}
        error={errors.first_name?.message}
      />

      <Input
        label="Last Name"
        {...registerField("last_name")}
        error={errors.last_name?.message}
      ></Input>

      <PasswordInput
        label="Password"
        autoComplete="password"
        error={errors.password?.message}
        {...registerField("password")}
      />

      <PasswordInput
        label="Confirm Password"
        autoComplete="new-password"
        error={errors.confirm_password?.message}
        {...registerField("confirm_password")}
      />

      <Button type="submit" disabled={isRegistering} className="w-full">
        {isRegistering ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}
