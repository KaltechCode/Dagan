"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface DrawerProps {
  open: boolean;

  onOpenChange(open: boolean): void;

  children: ReactNode;

  title?: string;

  side?: "left" | "right";
}

export function Drawer({
  open,
  onOpenChange,
  children,
  title,
  side = "right",
}: DrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
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
        className="absolute inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />

      <div
        className={[
          "absolute top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform",
          side === "right" ? "right-0" : "left-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-[calc(100%-65px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
