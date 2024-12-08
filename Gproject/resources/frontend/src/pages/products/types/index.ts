export type ProductCategory = 'cameras' | 'lenses' | 'lighting' | 'accessories' | 'backdrops';

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  specs?: Record<string, string>;
  specsAr?: Record<string, string>;
  stock: number;
  rating: number;
  reviews: number;
  hasDiscount?: boolean;
  discountPercentage?: number;
}