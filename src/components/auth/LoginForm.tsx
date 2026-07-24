"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/auth/useAuth";
import { type LoginFormValues, loginSchema } from "@/schema/auth";
import { Input } from "../ui/shared/Input/Input";
import { Button } from "../ui/shared/Button";

export default function LoginForm() {
  const { login, isLoggingIn, loginError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    await login(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {loginError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {"data" in loginError
            ? ((loginError.data as { message?: string })?.message ??
              "Login failed.")
            : "Login failed."}
        </div>
      )}

      <Input
        label="Username or Email"
        {...register("username")}
        error={errors.username?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isLoggingIn} className="w-full">
        {isLoggingIn ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
