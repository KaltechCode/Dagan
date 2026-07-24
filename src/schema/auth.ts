import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(1, "Username or email is required."),

  password: z.string().min(1, "Password is required."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters.")
      .max(30, "Username cannot exceed 30 characters.")
      .regex(
        /^[a-zA-Z0-9._-]+$/,
        "Username can only contain letters, numbers, dots, underscores, and hyphens.",
      ),

    email: z.string().trim().email("Please enter a valid email address."),

    first_name: z
      .string()
      .trim()
      .max(50, "First name cannot exceed 50 characters.")
      .optional(),

    last_name: z
      .string()
      .trim()
      .max(50, "Last name cannot exceed 50 characters.")
      .optional(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters."),

    confirm_password: z.string().min(8, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

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
