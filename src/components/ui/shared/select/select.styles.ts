import { cva } from "class-variance-authority";

export const triggerStyles = cva(
  [
    "flex",
    "h-11",
    "w-full",
    "items-center",
    "justify-between",
    "rounded-lg",
    "border",
    "bg-white",
    "px-4",
    "transition",
    "cursor-pointer",
    "outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
  ],
  {
    variants: {
      error: {
        true: "border-red-500",

        false: "border-gray-300",
      },

      disabled: {
        true: "opacity-50 cursor-not-allowed",

        false: "",
      },
    },

    defaultVariants: {
      error: false,

      disabled: false,
    },
  },
);
