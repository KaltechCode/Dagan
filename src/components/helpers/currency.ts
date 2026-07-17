export function formatCurrency(
  value: number,
  currency = "USD",
  locale = "en-NG",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}
