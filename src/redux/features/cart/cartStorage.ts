import { STORAGE_KEYS } from "@/constants/storage";
import { CartState } from "./cartTypes";
import { debounce } from "@/utils/debounce";

export function saveCart(cart: CartState) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
}

export const persist = debounce(saveCart, 300);
