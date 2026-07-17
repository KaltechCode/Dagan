export interface ProductVariation {
  id: number;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_quantity: number | null;
  stock_status: string;
  image: {
    id: number;
    src: string;
    alt: string;
  };
  attributes: {
    id: number;
    name: string;
    option: string;
  }[];
}
