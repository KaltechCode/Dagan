export function formatPrice(price: number, currency = "₦") {
  return `${currency}${Number(price).toLocaleString()}`;
}
