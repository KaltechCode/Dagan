"use client";

import { useShop } from "@/hooks/shop/useShop";
import { useViewPreference } from "@/hooks/useViewPreference";
import { useState } from "react";
import ShopSkeleton from "../ui/shared/skeleton/ShopSkeleton";
import ListingToolbar from "@/widget/search/ListToolBar";
import ActiveFilters from "@/widget/filter/ActiveFilter";
import ShopLayout from "../shop/ShopLayout";
import FilterSidebar from "@/widget/filter/FilterSidebar";
import EmptyProducts from "../product/EmptyProduct";
import ProductList from "../product/productGrid/ProductList";
import ProductGrid from "../product/productGrid/ProductGrid";
import { SORT_OPTIONS } from "@/constants/order";
import MobileFilterDrawer from "@/widget/header/MobileFilterDrawer";

export default function ShopPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { products, pagination, query, loading, update, clearFilters } =
    useShop();

  const { view, setView } = useViewPreference();

  if (loading) {
    return <ShopSkeleton />;
  }

  return (
    <div className="w-[95%] xl:w-[90%] mx-auto lg:py-8">
      <ListingToolbar
        search={query.search ?? ""}
        total={pagination?.total ?? 0}
        sort={query.orderby ?? "menu_order"}
        view={view}
        sortOptions={SORT_OPTIONS}
        onSearch={(value) =>
          update({
            search: value,
            page: 1,
          })
        }
        onSort={(value) =>
          update({
            orderby: value,
            page: 1,
          })
        }
        onView={setView}
        onOpenFilters={() => setFiltersOpen(true)}
      />

      <ActiveFilters filters={[]} onRemove={() => {}} onClear={clearFilters} />

      <ShopLayout
        sidebar={
          <FilterSidebar
            sortOptions={SORT_OPTIONS}
            onSearch={(value) =>
              update({
                search: value,
                page: 1,
              })
            }
            onSort={(value) =>
              update({
                orderby: value,
                page: 1,
              })
            }
            search={query.search ?? ""}
            sort={query.orderby ?? "menu_order"}
          />
        }
        content={
          !products.length ? (
            <EmptyProducts />
          ) : view === "grid" ? (
            <ProductGrid products={products} loading={false} />
          ) : (
            <ProductList products={products} />
          )
        }
      />

      {/* {pagination && (
        <Pagination
          pagination={pagination}
          onPageChange={(page) => update({ page })}
        />
      )} */}

      <MobileFilterDrawer open={filtersOpen} onOpenChange={setFiltersOpen} />
    </div>
  );
}
