import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required."),

  lastName: z.string().trim().min(2, "Last name is required."),

  displayName: z.string().trim().min(2, "Display name is required."),

  email: z.string().trim().email("Enter a valid email."),

  phone: z.string().optional(),
});

export type ProfileSchema = z.infer<typeof profileSchema>;

export const addressSchema = z.object({
  firstName: z.string().min(2, "First name is required."),

  lastName: z.string().min(2, "Last name is required."),

  company: z.string().optional(),

  address1: z.string().min(3, "Address is required."),

  address2: z.string().optional(),

  city: z.string().min(2, "City is required."),

  state: z.string().min(2, "State is required."),

  postcode: z.string().min(2, "Postcode is required."),

  country: z.string().min(2, "Country is required."),

  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-s\.]?[0-9]{3}[-s\.]?[0-9]{4,6}$/im,
      "Please enter a valid phone number",
    ),

  email: z.string().pipe(z.email("Enter a valid Email")),
});

export type AddressSchema = z.infer<typeof addressSchema>;
