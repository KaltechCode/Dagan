"use client";

import { Button } from "@/components/ui/shared/Button";
import { Icon } from "@/components/ui/shared/Icon/Icon";
import { Input } from "@/components/ui/shared/Input/Input";
import { Search } from "lucide-react";

interface HeaderSearchProps {
  btn?: boolean;
}

export default function HeaderSearch({ btn = false }: HeaderSearchProps) {
  return (
    <div className=" hidden md:flex items-center lg:justify-center flex-1 rounded-full bg-bg-sdy border border-bg-pry overflow-hidden px-3 lg:px-7 max-w-[800px]">
      <Icon name="search" size={20} className="text-gray-400" />
      <input
        placeholder="Search products..."
        className="rounded-none h-10 px-3  rounded-br-md rounded-tr-md lg:w-[100%] border-none outline-none focus:outline-none"
      />
    </div>
  );
}
