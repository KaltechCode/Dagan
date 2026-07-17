"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shared/Button";
import { useLoginMutation } from "@/redux/api/authApi";
import { LoginRequest } from "@/types/auths";
import { LoginSchema } from "@/schema/auth";
import PasswordInput from "./PasswordInput";
import { Input } from "../ui/shared/Input/Input";

export default function LoginForm() {
  const router = useRouter();

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = async (values: LoginRequest) => {
    try {
      await login(values).unwrap();

      router.replace("/account");
      router.refresh();
    } catch (error) {
      const message =
        error && typeof error === "object" && "message" in error
          ? String(error.message)
          : "Invalid email or password.";

      setError("root", {
        message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        label="Password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("remember")} />

        <span className="text-sm">Remember me</span>
      </label>

      {errors.root && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
      )}

      <Button type="submit" loading={isLoading} className="w-full">
        Sign In
      </Button>

      <div className="flex justify-between text-sm">
        <Link href="/forgot-password" className="hover:text-primary">
          Forgot password?
        </Link>

        <Link href="/register" className="hover:text-primary">
          Create account
        </Link>
      </div>
    </form>
  );
}
