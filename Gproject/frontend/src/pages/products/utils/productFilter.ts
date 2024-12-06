import { Product } from '../types';

interface FilterOptions {
  searchQuery: string;
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
}

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  return products.filter((product) => {
    // Search query filter
    const matchesSearch = !filters.searchQuery || 
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = !filters.category || product.category === filters.category;

    // Price range filter
    const matchesPrice = 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max;

    return matchesSearch && matchesCategory && matchesPrice;
  });
}