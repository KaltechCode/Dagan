"use client";

import { useShop } from "@/features/product/hooks/useShop";

export default function ProductToolbar() {
  const { orderby, setOrderBy } = useShop();

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Shop</h1>

      <select
        value={orderby}
        onChange={(e) => setOrderBy(e.target.value)}
        className="rounded-lg border p-2"
      >
        <option value="date">Newest</option>

        <option value="price">Price: Low to High</option>

        <option value="price-desc">Price: High to Low</option>

        <option value="popularity">Popular</option>

        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
