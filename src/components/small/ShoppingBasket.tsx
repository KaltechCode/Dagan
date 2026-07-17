import React from "react";
import { FiShoppingBag } from "react-icons/fi";

function ShoppingBasket() {
  return (
    <button className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f4da] text-[#11431b] shadow-sm transition hover:bg-[#d4ebc2]">
      <FiShoppingBag className="h-5 w-5" />
      <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#11431b] px-[6px] text-[11px] font-semibold text-white">
        1
      </span>
    </button>
  );
}

export default ShoppingBasket;
