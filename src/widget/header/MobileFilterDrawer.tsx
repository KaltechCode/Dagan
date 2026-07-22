"use client";

import { Drawer } from "@/components/ui/Drawer";
import FilterSidebar from "../filter/FilterSidebar";
import { useShop } from "@/hooks/shop/useShop";
import { SORT_OPTIONS } from "@/constants/order";

interface Props {
  open: boolean;
  onOpenChange(open: boolean): void;
}

export default function MobileFilterDrawer({ open, onOpenChange }: Props) {
  const { products, pagination, query, loading, update, clearFilters } =
    useShop();
  return (
    <Drawer open={open} onOpenChange={onOpenChange} title="Filters">
      <FilterSidebar />
    </Drawer>
  );
}
