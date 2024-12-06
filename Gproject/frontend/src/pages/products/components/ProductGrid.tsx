import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProductsStore } from '../store/productsStore';
import { filterProducts } from '../utils/productFilter';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const { t } = useTranslation();
  const { products, searchQuery, selectedCategory, priceRange } = useProductsStore();

  const filteredProducts = filterProducts(products, {
    searchQuery,
    category: selectedCategory,
    priceRange,
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          {t('products.notFound')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}