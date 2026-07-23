"use client";

import { ProductTabKey } from "@/hooks/product/useProductTab";
import clsx from "clsx";

interface ProductTabProps {
  id: ProductTabKey;

  active: boolean;

  children: React.ReactNode;

  onClick(id: ProductTabKey): void;
}

export default function ProductTab({
  id,
  active,
  children,
  onClick,
}: ProductTabProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={clsx(
        "border-b-2 px-5 py-3 font-medium transition-colors flex-1 rounded-md mb-1 transition-all duration-300 ease-linear delay-300",
        active
          ? "border-bg-pry bg-bg-pry text-white"
          : "border-transparent text-gray-500 hover:text-gray-900",
      )}
    >
      {children}
    </button>
  );
}
