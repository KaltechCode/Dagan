import { z } from "zod";

export const profileSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),

  last_name: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),

  display_name: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters")
    .max(100, "Display name must not exceed 100 characters"),

  email: z.string().trim().email("Please enter a valid email address"),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

export const billingSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),

  last_name: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),

  company: z
    .string()
    .trim()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),

  email: z.string().trim().email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),

  address_1: z.string().trim().min(5, "Address is required"),

  address_2: z.string().trim().optional().or(z.literal("")),

  city: z.string().trim().min(2, "City is required"),

  state: z.string().trim().min(2, "State is required"),

  postcode: z.string().trim().min(2, "Postcode is required"),

  country: z.string().trim().min(2, "Country is required"),
});

export type BillingFormValues = z.infer<typeof billingSchema>;

export const shippingSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),

  last_name: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),

  company: z
    .string()
    .trim()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),

  address_1: z.string().trim().min(5, "Address is required"),

  address_2: z.string().trim().optional().or(z.literal("")),

  city: z.string().trim().min(2, "City is required"),

  state: z.string().trim().min(2, "State is required"),

  postcode: z.string().trim().min(2, "Postcode is required"),

  country: z.string().trim().min(2, "Country is required"),
});

export type ShippingFormValues = z.infer<typeof shippingSchema>;
