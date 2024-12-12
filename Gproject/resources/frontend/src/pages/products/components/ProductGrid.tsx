import React from 'react';
import { useTranslation } from 'react-i18next';
import { filterProducts } from '../utils/productFilter';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const { t } = useTranslation();

  // Fetch products from the global variable (populated from the backend)
  const products = window.__PRODUCTS__ || [];

  // Assume these values are managed globally or passed as props
  const searchQuery = '';
  const selectedCategory = '';
  const priceRange = { min: 0, max: 5000 };

  // Filter products using the existing utility
  const filteredProducts = filterProducts(products, {
    searchQuery,
    category: selectedCategory,
    priceRange,
  });

  // Display a message if no products are found
  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          {t('products.notFound')}
        </p>
      </div>
    );
  }

  // Render the product grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}
