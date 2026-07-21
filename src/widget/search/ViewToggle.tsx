"use client";

import { Grid2X2, List } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface ViewToggleProps {
  view: "grid" | "list";
  onChange(view: "grid" | "list"): void;
}

export default function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="flex">
      <button onClick={() => onChange("grid")} className="py-1 px-4">
        <Grid2X2 size={24} color="#014b30" />
      </button>

      <button onClick={() => onChange("list")}>
        <List size={24} color="#014b30" />
      </button>
    </div>
  );
}
