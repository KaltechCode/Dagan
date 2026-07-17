interface ProductSkuProps {
  sku?: string;
}

export default function ProductSku({ sku }: ProductSkuProps) {
  if (!sku) {
    return null;
  }

  return (
    <div>
      <span className="font-medium">SKU:</span> {sku}
    </div>
  );
}
