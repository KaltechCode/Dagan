export interface WooImage {
  id: number;
  src: string;
  alt: string;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WooAttribute {
  id: number;
  name: string;
  slug: string;
  variation: boolean;
  options: string[];
}

export interface WooProduct {
  id: number;

  slug: string;

  sku: string;

  name: string;

  type: "simple" | "variable";

  description: string;

  short_description: string;

  regular_price: string;

  sale_price: string;

  price: string;

  featured: boolean;

  average_rating: string;

  rating_count: number;

  stock_status: string;

  stock_quantity: number | null;

  on_sale: boolean;

  images: WooImage[];

  categories: WooCategory[];

  attributes: WooAttribute[];
}
