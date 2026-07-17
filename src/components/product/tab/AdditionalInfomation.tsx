import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function AdditionalInformationTab({ product }: Props) {
  return (
    <div className="space-y-4">
      <p>
        <strong>SKU:</strong> {product.sku || "-"}
      </p>

      <p>
        <strong>Product Type:</strong> {product.type}
      </p>

      <p>
        <strong>Stock Status:</strong>{" "}
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {product?.weight && (
        <p>
          <strong>Weight:</strong> {product.weight}
        </p>
      )}

      {(product.dimensions?.length ||
        product.dimensions?.width ||
        product.dimensions?.height) && (
        <p>
          <strong>Dimensions:</strong> {product.dimensions?.length} ×{" "}
          {product.dimensions?.width} × {product.dimensions?.height}
        </p>
      )}
    </div>
  );
}
