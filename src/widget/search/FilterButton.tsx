"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface FilterButtonProps {
  onClick(): void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button onClick={onClick} className="lg:hidden  flex gap-2 items-center">
      <SlidersHorizontal size={18} />
      Filters
    </button>
  );
}
