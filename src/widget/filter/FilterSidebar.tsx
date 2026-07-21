"use client";

import FilterSection from "./filterSection";

import { useShop } from "@/hooks/shop/useShop";
import PriceRangeFilter from "./PriceRangeFilter";
import CheckboxFilter from "./FilterCheckbox";
import SearchBox from "../search/SearchBox";
import SortSelect from "../search/SortSelect";

interface IProps {
  onSearch(value: string): void;
  search: string;
  onSort(value: string): void;
  sortOptions: {
    label: string;
    value: string;
  }[];
  sort: string;
}

export default function FilterSidebar({
  onSearch,
  search,
  onSort,
  sortOptions,
  sort,
}: IProps) {
  const { query, update } = useShop();

  return (
    <aside className="space-y-2 pr-2">
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

      <FilterSection title="Availability" classname="mt-3">
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

      <div className="space-y-4 mt-3">
        <SearchBox value={search} onSearch={onSearch} />

        <SortSelect value={sort} options={sortOptions} onChange={onSort} />
      </div>
    </aside>
  );
}
