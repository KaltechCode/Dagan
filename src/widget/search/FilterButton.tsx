"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface FilterButtonProps {
  onClick(): void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <Button variant="outline" onClick={onClick} className="lg:hidden">
      <SlidersHorizontal size={18} />
      Filters
    </Button>
  );
}
