import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProductsStore } from '../store/productsStore';

function ProductFilters() {
  const { t } = useTranslation();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
  } = useProductsStore();

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {t('products.filters.title')}
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {t('products.filters.categories')}
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>{t(`products.categories.${category}`)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {t('products.filters.priceRange')}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              {t('products.filters.minPrice')}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: Number(e.target.value) })
              }
              className="w-full"
            />
            <span className="text-sm text-gray-900 dark:text-white">
              ${priceRange.min}
            </span>
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              {t('products.filters.maxPrice')}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: Number(e.target.value) })
              }
              className="w-full"
            />
            <span className="text-sm text-gray-900 dark:text-white">
              ${priceRange.max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;