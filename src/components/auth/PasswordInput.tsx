"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">
        {label && <label className="block text-sm font-medium">{label}</label>}

        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={[
              "w-full rounded-lg border px-4 py-3 pr-12 outline-none transition-colors",
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-primary",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
