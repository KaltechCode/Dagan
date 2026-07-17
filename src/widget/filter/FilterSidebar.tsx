"use client";

import FilterSection from "./filterSection";

import { useShop } from "@/hooks/shop/useShop";
import PriceRangeFilter from "./PriceRangeFilter";
import CheckboxFilter from "./FilterCheckbox";

export default function FilterSidebar() {
  const { query, update } = useShop();

  return (
    <aside className="space-y-2">
      <FilterSection title="Price">
        <PriceRangeFilter
          min={query.minPrice}
          max={query.maxPrice}
          onApply={(min, max) =>
            update({
              minPrice: min,
              maxPrice: max,
              page: 1,
            })
          }
        />
      </FilterSection>

      <FilterSection title="Availability">
        <CheckboxFilter
          selected={[query.inStock ? "stock" : ""].filter(Boolean)}
          options={[
            {
              label: "In Stock",
              value: "stock",
            },
          ]}
          onChange={(values) =>
            update({
              inStock: values.includes("stock"),
              page: 1,
            })
          }
        />
      </FilterSection>
    </aside>
  );
}
