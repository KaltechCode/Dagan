"use client";

import FilterSection from "./filterSection";
import PriceRangeFilter from "./PriceRangeFilter";
import CheckboxFilter from "./FilterCheckbox";

import SearchBox from "../search/SearchBox";
import SortSelect from "../search/SortSelect";

import { SORT_OPTIONS } from "@/constants/order";
import { useShop } from "@/hooks/shop/useShop";

export default function FilterSidebar() {
  const { query, update } = useShop();

  return (
    <aside className="space-y-4 pr-2">
      <SearchBox
        value={query.search ?? ""}
        onSearch={(value) =>
          update({
            search: value,
            page: 1,
          })
        }
      />

      <SortSelect
        value={query.orderby ?? "menu_order"}
        options={SORT_OPTIONS}
        onChange={(value) =>
          update({
            orderby: value,
            page: 1,
          })
        }
      />

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
          selected={query.inStock ? ["stock"] : []}
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
