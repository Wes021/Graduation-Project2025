import React from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from '../types'; // Ensure you have a proper Product type
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[]; // Add this interface to declare the prop type
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { t } = useTranslation();

  // Add a simple filter for demonstration purposes if needed
  const filteredProducts = products; // Adjust the filtering logic as required

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
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}
