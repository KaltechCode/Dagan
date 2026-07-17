"use client";

import { Button } from "@/components/ui/shared/Button";
import { Menu } from "lucide-react";

interface HeaderMenuButtonProps {
  onClick?: () => void;
}

export default function HeaderMenuButton({ onClick }: HeaderMenuButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Open menu"
      onClick={onClick}
      className="outline-none focus:outline-0"
    >
      <Menu size={22} className="text-white cursor-pointer" />
    </Button>
  );
}
