import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex",
    "h-11",
    "items-center",
    "rounded-lg",
    "border",
    "bg-white",
    "transition",
    "focus-within:ring-2",
    "focus-within:ring-blue-500",
  ],
  {
    variants: {
      error: {
        true: "border-red-500",

        false: "border-gray-300",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      error: false,

      fullWidth: true,
    },
  },
);
