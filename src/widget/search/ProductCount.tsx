interface ProductsCountProps {
  total: number;
}

export default function ProductsCount({ total }: ProductsCountProps) {
  return <p className="text-sm text-gray-500">{total} products found</p>;
}
