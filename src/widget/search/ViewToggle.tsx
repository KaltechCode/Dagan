"use client";

import { Grid2X2, List } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface ViewToggleProps {
  view: "grid" | "list";
  onChange(view: "grid" | "list"): void;
}

export default function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="flex rounded-lg border">
      <Button
        variant={view === "grid" ? "primary" : "ghost"}
        size="icon"
        onClick={() => onChange("grid")}
      >
        <Grid2X2 size={18} />
      </Button>

      <Button
        variant={view === "list" ? "primary" : "ghost"}
        size="icon"
        onClick={() => onChange("list")}
      >
        <List size={18} />
      </Button>
    </div>
  );
}
