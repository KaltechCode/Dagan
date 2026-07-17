const STORAGE_KEY = "recently-viewed-products";

const MAX_ITEMS = 12;

export function getRecentlyViewed(): number[] {
  if (typeof window === "undefined") {
    return [];
  }

  const value = localStorage.getItem(STORAGE_KEY);

  if (!value) {
    return [];
  }

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

export function addRecentlyViewed(productId: number) {
  if (typeof window === "undefined") {
    return;
  }

  const items = getRecentlyViewed().filter((id) => id !== productId);

  items.unshift(productId);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
}
