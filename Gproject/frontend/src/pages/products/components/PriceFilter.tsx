import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProductsStore } from '../store/productsStore';

export default function PriceFilter() {
  const { t } = useTranslation();
  const { priceRange, setPriceRange } = useProductsStore();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {t('products.filters.priceRange')}
      </h3>
      <div className="space-y-6">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            {t('products.filters.minPrice')}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: Number(e.target.value) })
              }
              className="flex-1"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white w-16">
              ${priceRange.min}
            </span>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            {t('products.filters.maxPrice')}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: Number(e.target.value) })
              }
              className="flex-1"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white w-16">
              ${priceRange.max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}