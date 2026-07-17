import ProductCardHorizontal from "@/components/product/productcard/ProductCardHorizontal";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function HorizonatalProductCarousel({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5">
      {products.map((product) => (
        <ProductCardHorizontal key={product.id} product={product} />
      ))}
    </div>
  );
}
