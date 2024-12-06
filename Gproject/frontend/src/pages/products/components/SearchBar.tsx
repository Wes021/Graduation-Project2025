import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { useProductsStore } from '../store/productsStore';

function SearchBar() {
  const { t } = useTranslation();
  const { searchQuery, setSearchQuery } = useProductsStore();

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('products.searchPlaceholder')}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
