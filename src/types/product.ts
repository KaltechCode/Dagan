export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}
//

export interface ProductState {
  product?: Product;

  selectedVariation?: ProductVariation;

  quantity: number;

  loading: boolean;

  addingToCart: boolean;
}

export interface ProductAttribute {
  id: number;

  name: string;

  slug: string;

  options: string[];

  variation: boolean;
}

export interface ProductCategory {
  id: number;

  name: string;

  slug: string;
}

export interface Category {
  id: number;

  name: string;

  slug: string;

  description: string;
  parentId: number;

  parent: number;

  count: number;

  menuOrder: number;

  image: string | null;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}

export interface CategoryQuery {
  parent?: number;

  featured?: boolean;

  hideEmpty?: boolean;
}

export interface ProductBadgeProps {
  featured?: boolean;

  onSale?: boolean;

  stockStatus?: string;

  stockQuantity?: number | null;

  className?: string;
}

export interface ProductCardProps {
  product: Product;

  priority?: boolean;

  showWishlist?: boolean;

  showRating?: boolean;

  showBadge?: boolean;

  showQuickView?: boolean;

  className?: string;
  shop?: boolean;
}

export type SelectedOptions = Record<string, string>;

export interface Brand {
  id: number;

  name: string;

  slug: string;

  description?: string;

  image?: BrandImage;

  count?: number;

  featured?: boolean;

  menuOrder?: number;

  seo?: BrandSeo;
}

export interface BrandImage {
  id?: number;

  src: string;

  alt?: string;
}

export interface BrandSeo {
  title?: string;

  description?: string;

  keywords?: string[];
}

export interface ProductImage {
  id: number;

  src: string;

  alt: string;

  name?: string;
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

  variations?: ProductVariation[];

  relatedProductIds: number[];

  upsellIds: number[];

  crossSellIds: number[];

  reviewCount: number;

  inStock: boolean;

  weight?: number | undefined;

  brand?: Brand;
}

export interface CurrentProduct {
  productId: number;
  variationId?: number;

  sku: string;

  image?: string;

  price: number;

  regularPrice: number;

  salePrice: number;

  stockQuantity: number;

  stockStatus: string;

  attributes: SelectedOptions;

  variation?: ProductVariation;
}

export interface VariationAttribute {
  id: number;

  name: string;

  slug: string;

  option: string;
}

export interface ProductVariation {
  id: number;

  sku: string;

  price: number;

  regularPrice: number;

  salePrice: number;

  stockQuantity: number;

  stockStatus: "instock" | "outofstock" | "onbackorder";

  image?: string;

  attributes: VariationAttribute[];
}

export interface ProductGalleryProps {
  images: ProductImage[];
}

export interface GalleryState {
  activeIndex: number;

  isLightboxOpen: boolean;
}
