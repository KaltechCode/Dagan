import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "font-medium",
    "transition-colors",
    "duration-200",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "outline-none",
  ],

  {
    variants: {
      variant: {
        primary: "bg-bg-pry text-white hover:bg-gray-700 rounded-full",

        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",

        outline: "border border-gray-300 hover:bg-gray-100",

        ghost: "hover:bg-gray-100",

        destructive: "bg-red-600 text-white hover:bg-red-700",

        success: "bg-green-600 text-white hover:bg-green-700",

        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
      },

      size: {
        xs: "h-7 px-2 text-xs",

        sm: "px-3 text-sm",

        md: "h-max px-6 py-3 text-md",

        lg: "h-11 px-6",

        xl: "py-4 px-8 text-lg w-max",
        icon: "h-12 w-12 rounded-full flex justify-center items-center",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      fullWidth: false,
    },
  },
);
