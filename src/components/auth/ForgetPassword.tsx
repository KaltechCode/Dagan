"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { ForgotPasswordRequest } from "@/types/auths";
import { Input } from "../ui/shared/Input/Input";
import { forgotPasswordSchema } from "@/schema/auth";

export default function ForgotPasswordForm() {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordRequest>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (values: ForgotPasswordRequest) => {
    await forgotPassword(values).unwrap();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Button type="submit" loading={isLoading} fullWidth>
        Send Reset Link
      </Button>

      <Link
        href="/login"
        className="block text-center text-sm hover:text-primary"
      >
        Back to Login
      </Link>
    </form>
  );
}
