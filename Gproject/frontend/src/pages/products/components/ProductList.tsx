import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';
import { useProductsStore } from '../store/productsStore';
import { filterProducts } from '../utils/productFilters';
import { Link } from 'react-router-dom';

function ProductsList() {
  const { t } = useTranslation();
  const { products, searchQuery, selectedCategory, priceRange } =
    useProductsStore();

  const filteredProducts = filterProducts(products, {
    searchQuery,
    category: selectedCategory,
    priceRange,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative pb-[75%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            onClick={() => {
              /* Add to cart logic */
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{t('products.addToCart')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
