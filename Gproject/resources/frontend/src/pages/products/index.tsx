import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import ProductGrid from './components/ProductGrid';

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t('products.title')}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <SearchBar />
              <div className="mt-6 pt-6 border-t dark:border-gray-700">
                <CategoryFilter />
              </div>
              <div className="mt-6 pt-6 border-t dark:border-gray-700">
                <PriceFilter />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}