import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email(),

  password: z.string().min(8),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),

  password: z.string().min(1, "Password is required."),

  remember: z.boolean(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name is required."),

    lastName: z.string().min(2, "Last name is required."),

    email: z.string().email("Enter a valid email."),

    password: z.string().min(8, "Password must contain at least 8 characters."),

    confirmPassword: z.string(),

    acceptTerms: z.boolean().refine((value) => value, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email."),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must contain at least 8 characters."),

    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
