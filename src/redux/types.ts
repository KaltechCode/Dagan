export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Pagination {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface Collection<T> {
  items: T[];
  pagination: Pagination;
}

export interface ProductImage {
  id: number;

  src: string;

  large: string;

  medium: string;

  thumbnail: string;

  alt: string;
}

export interface Category {
  id: number;

  name: string;

  slug: string;
}

export interface ProductAttribute {
  name: string;

  value: string;
}

export interface ProductVariation {
  id: number;

  sku: string;

  price: number;

  regularPrice: number;

  salePrice: number;

  stockStatus: string;

  stockQuantity: number | null;

  image: ProductImage | null;

  attributes: ProductAttribute[];
}

export interface Product {
  id: number;

  slug: string;

  sku: string;

  name: string;

  type: "simple" | "variable";

  description: string;

  shortDescription: string;

  price: number;

  regularPrice: number;

  salePrice: number;

  featured: boolean;

  onSale: boolean;

  stockStatus: string;

  stockQuantity: number | null;

  averageRating: number;

  ratingCount: number;

  image?: ProductImage;

  images?: ProductImage[];

  categories: Category[];

  attributes: ProductAttribute[];

  variations: ProductVariation[];

  relatedProductIds: number[];

  upsellIds: number[];

  crossSellIds: number[];
}

export interface ProductQuery {
  page?: number;

  perPage?: number;

  search?: string;

  category?: string;

  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;

  onSale?: boolean;

  featured?: boolean;

  orderby?: "menu_order" | "date" | "price" | "rating" | "popularity" | "title";
  order?: "ASC" | "DESC";
}
