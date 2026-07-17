"use client";

import { Button } from "@/components/ui/shared/Button";
import { Icon } from "@/components/ui/shared/Icon/Icon";
import { Input } from "@/components/ui/shared/Input/Input";
import { Search } from "lucide-react";

interface HeaderSearchProps {
  compact?: boolean;
}

export default function HeaderSearch({ compact = false }: HeaderSearchProps) {
  if (compact) {
    return (
      <button aria-label="Search" className="rounded-lg p-2 transition">
        <Icon name="user" size={20} className="text-primary" />
      </button>
    );
  }

  return (
    <div className="flex items-center lg:justify-center lg:flex-1">
      <button className="h-10 px-4 bg-bg-sdy uppercase text-white">
        Search
      </button>
      <input
        placeholder="Search products..."
        className="rounded-none h-10 px-3 border border-gray-200 rounded-br-md rounded-tr-md lg:w-[60%]"
      />
    </div>
  );
}
