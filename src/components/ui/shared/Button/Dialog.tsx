"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface DialogProps {
  open: boolean;

  onOpenChange?(open: boolean): void;

  title?: string;

  children: ReactNode;
}

export function Dialog({ open, onOpenChange, title, children }: DialogProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange?.(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => onOpenChange?.(false)}
      />

      <div className="absolute left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button
            type="button"
            onClick={() => onOpenChange?.(false)}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
