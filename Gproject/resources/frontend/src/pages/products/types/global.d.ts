// global.d.ts
interface Product {
  product_id:number;
    product_name: string;
    price: number;
    description: string;
    category_name: string;
    produt_status_name: string;
  }
  
  interface Window {
    __PRODUCTS__?: Product[];
  }
  