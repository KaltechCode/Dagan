"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";

import PasswordInput from "./PasswordInput";
import { RegisterRequest } from "@/types/auths";
import { useRegisterMutation } from "@/redux/api/authApi";
import { Input } from "../ui/shared/Input/Input";
import { registerSchema } from "@/schema/auth";
import { Checkbox } from "../ui/shared/Button/Checkbox";

interface RegisterFormValues extends RegisterRequest {
  confirmPassword: string;
  acceptTerms: boolean;
}

export default function RegisterForm() {
  const router = useRouter();

  const [registerUser, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async ({
    confirmPassword,
    acceptTerms,
    ...values
  }: RegisterFormValues) => {
    try {
      await registerUser(values).unwrap();

      router.replace("/account");
      router.refresh();
    } catch (error) {
      const message =
        error && typeof error === "object" && "message" in error
          ? String(error.message)
          : "Registration failed.";

      setError("root", {
        message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
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
      </div>

      <Input
        type="email"
        label="Email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        label="Password"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <PasswordInput
        label="Confirm Password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <Checkbox
        label="I agree to the Terms and Conditions"
        error={errors.acceptTerms?.message}
        {...register("acceptTerms")}
      />

      {errors.root && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
      )}

      <Button type="submit" loading={isLoading} fullWidth>
        Create Account
      </Button>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-medium hover:text-primary">
          Sign In
        </Link>
      </div>
    </form>
  );
}
