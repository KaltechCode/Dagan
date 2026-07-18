"use client";

import { forwardRef } from "react";
import { TextareaProps } from "./TextArea.types";

import { textareaVariants } from "./TextArea.variant";
import { Field } from "../Fields";
import { cn } from "@/libs/utils";
import { FieldTwo } from "../Fields/Field";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, description, error, className, required, ...props }, ref) => {
    return (
      <FieldTwo
        label={label || ""}
        description={description}
        error={error}
        required={required}
      >
        <textarea
          ref={ref}
          className={cn(
            textareaVariants({
              error: !!error,
            }),
            className,
          )}
          {...props}
        />
      </FieldTwo>
    );
  },
);

Textarea.displayName = "Textarea";
