import { z } from "zod";
import { addressSchema } from "./customer";

export const checkoutSchema = z.object({
  billing: addressSchema,

  shipping: addressSchema,

  shipToDifferentAddress: z.boolean(),

  shippingMethod: z.string().min(1, "Select a shipping method."),

  paymentMethod: z.string().min(1, "Select a payment method."),

  customerNote: z.string().optional(),

  createAccount: z.boolean().optional(),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
