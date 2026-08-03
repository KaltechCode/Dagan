"use client";

import { cn } from "@/libs/utils";

import ProductCardActions from "./ProductCardActions";
import ProductCardBody from "./ProductCardBody";
import ProductCardImage from "./ProductCardImage";
import { Card } from "@/components/ui/shared/Card";
import { ProductCardProps } from "@/types/product";
import { useEffect, useRef, useState } from "react";

export default function ProductCard({
  product,
  priority = false,
  showWishlist = true,
  showRating = true,
  showBadge = false,
  showQuickView = false,
  shop,
  className,
}: ProductCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <Card
      className={cn(
        "group hover:shadow-lg overflow-hidden bg-white cursor-pointer transition-all transition-500 relative left-0 top-0",
        className,
      )}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <ProductCardImage product={product} priority={priority} />

      <ProductCardBody
        product={product}
        showBadge={showBadge}
        showRating={showRating}
        showCategory={true}
        shop={shop}
      />

      <div
        className={`left-0 z-10 absolute bg-white w-full px-4 py-9 transition-all ease-in-out duration-600 ${open ? "bottom-0" : "-bottom-40"}`}
      >
        <ProductCardActions
          product={product}
          showWishlist={showWishlist}
          showQuickView={showQuickView}
        />
      </div>
    </Card>
  );
}
