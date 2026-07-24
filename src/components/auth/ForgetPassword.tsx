"use client";

import { useAuth } from "@/hooks/auth/useAuth";
import { forgotPasswordSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const { forgotPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onSubmit(values: ForgotPasswordFormValues) {
    await forgotPassword(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label>Email</label>

        <input type="email" {...register("email")} />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Send Reset Link
      </button>
    </form>
  );
}
