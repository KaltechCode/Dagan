import { z } from "zod";
export const addressSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),

  lastName: z.string().trim().min(1, "Last name is required."),

  company: z.string().trim().optional(),

  country: z.string().trim().min(1, "Country is required."),

  address1: z.string().trim().min(1, "Address is required."),

  address2: z.string().trim().optional(),

  city: z.string().trim().min(1, "City is required."),

  state: z.string().trim().min(1, "State is required."),

  postcode: z.string().trim().min(1, "Postal code is required."),

  phone: z.string().trim().min(1, "Phone number is required."),

  email: z.string().trim().email("Enter a valid email address."),
});

export type AddressFormValues = z.infer<typeof addressSchema>;
