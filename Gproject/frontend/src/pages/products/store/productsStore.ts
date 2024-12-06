import { create } from 'zustand';
import { Product, ProductCategory } from '../types';
import { mockProducts } from '../data/mockProducts';

interface ProductsStore {
  products: Product[];
  categories: ProductCategory[];
  searchQuery: string;
  selectedCategory: string;
  priceRange: {
    min: number;
    max: number;
  };
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, data: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: mockProducts,
  categories: ['cameras', 'lenses', 'lighting', 'accessories', 'backdrops'],
  searchQuery: '',
  selectedCategory: '',
  priceRange: {
    min: 0,
    max: 5000,
  },
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setPriceRange: (range) => set({ priceRange: range }),
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
  updateProduct: (id, data) => set((state) => ({
    products: state.products.map((product) =>
      product.id === id ? { ...product, ...data } : product
    ),
  })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id),
  })),
}));