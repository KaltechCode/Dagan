"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";

import PasswordInput from "./PasswordInput";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { ResetPasswordRequest } from "@/types/auths";
import { resetPasswordSchema } from "@/schema/auth";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const key = searchParams.get("key") ?? "";
  const login = searchParams.get("login") ?? "";

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    const payload: ResetPasswordRequest = {
      key,
      login,
      password: values.password,
    };

    try {
      await resetPassword(payload).unwrap();

      router.replace("/login");
    } catch (error) {
      const message =
        error && typeof error === "object" && "message" in error
          ? String(error.message)
          : "Unable to reset password.";

      setError("root", {
        message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <PasswordInput
        label="New Password"
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

      {errors.root && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
      )}

      <Button type="submit" loading={isLoading} fullWidth>
        Reset Password
      </Button>
    </form>
  );
}
