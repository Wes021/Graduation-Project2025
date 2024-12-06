import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Aperture, Lightbulb, Package, Image } from 'lucide-react';
import { useProductsStore } from '../store/productsStore';
import { cn } from '../../../utils/cn';

const categoryIcons = {
  cameras: Camera,
  lenses: Aperture,
  lighting: Lightbulb,
  accessories: Package,
  backdrops: Image,
};

export default function CategoryFilter() {
  const { t } = useTranslation();
  const { categories, selectedCategory, setSelectedCategory } = useProductsStore();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {t('products.filters.categories')}
      </h3>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                category === selectedCategory
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{t(`products.categories.${category}`)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}