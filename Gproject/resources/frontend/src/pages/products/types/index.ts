export type ProductCategory = 'cameras' | 'lenses' | 'lighting' | 'accessories' | 'backdrops';

// types.ts
export interface Product {
  product_id:number;
  product_name: string;
  price: number;
  description: string;
  category_name: string;
  produt_status_name: string;
}
