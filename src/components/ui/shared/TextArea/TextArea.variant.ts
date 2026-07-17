import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "min-h-32",
    "w-full",
    "rounded-lg",
    "border",
    "bg-white",
    "px-3",
    "py-2",
    "transition",
    "outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "resize-y",
  ],
  {
    variants: {
      error: {
        true: "border-red-500",
        false: "border-gray-300",
      },
    },

    defaultVariants: {
      error: false,
    },
  },
);
