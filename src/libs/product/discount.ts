export function calculateDiscount(regularPrice: number, salePrice: number) {
  const regular = Number(regularPrice);
  const sale = Number(salePrice);

  if (regular <= 0 || sale <= 0) {
    return 0;
  }

  return Math.round(((regular - sale) / regular) * 100);
}
