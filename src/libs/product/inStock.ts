export function isInStock(quantity: number | null, status: string) {
  if (status === "instock") {
    return true;
  }

  return quantity !== null && quantity > 0;
}
