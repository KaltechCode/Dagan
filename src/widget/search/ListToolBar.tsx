"use client";

import SearchBox from "./SearchBox";
import SortSelect from "./SortSelect";
import ViewToggle from "./ViewToggle";
import FilterButton from "./FilterButton";
import ProductsCount from "./ProductCount";

interface ListingToolbarProps {
  search: string;
  total: number;
  sort: string;
  view: "grid" | "list";
  sortOptions: {
    label: string;
    value: string;
  }[];

  onSearch(value: string): void;

  onSort(value: string): void;

  onView(view: "grid" | "list"): void;

  onOpenFilters(): void;
}

export default function ListingToolbar({
  search,
  total,
  sort,
  view,
  sortOptions,
  onSearch,
  onSort,
  onView,
  onOpenFilters,
}: ListingToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-[95%] xl:w-[90%] mx-auto">
      <div className="flex flex-wrap items-center gap-3 justify-between w-full">
        {/* <SearchBox value={search} onSearch={onSearch} />

        <SortSelect value={sort} options={sortOptions} onChange={onSort} /> */}

        <ProductsCount total={total} />

        <ViewToggle view={view} onChange={onView} />

        <FilterButton onClick={onOpenFilters} />
      </div>
    </div>
  );
}
