"use client";

import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";
import { resetPasswordSchema } from "@/schema/auth";
import { useAuth } from "@/hooks/auth/useAuth";

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const params = useSearchParams();

  const key = params.get("key") ?? "";
  const login = params.get("login") ?? "";

  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  async function onSubmit(values: ResetPasswordFormValues) {
    await resetPassword({
      key,
      login,
      password: values.password,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label>New Password</label>

        <input type="password" {...register("password")} />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password</label>

        <input type="password" {...register("confirmPassword")} />

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Reset Password
      </button>
    </form>
  );
}
