import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';
import { useProductsStore } from '../store/productsStore';
import { filterProducts } from '../utils/productFilter';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useAuthStore } from '../../../store/authStore';
import { useCartStore } from '../../../store/cartStore';

function ProductsList() {
  const { t, i18n } = useTranslation();
  const { products, searchQuery, selectedCategory, priceRange } = useProductsStore();

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
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product details
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/products/${product.id}` } });
      return;
    }

    addToCart({
      id: product.id,
      name: i18n.language === 'ar' ? product.nameAr : product.name,
      price: product.price,
      image: product.image,
    });
    
    navigate('/cart');
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative pb-[75%]">
          <img
            src={product.image}
            alt={i18n.language === 'ar' ? product.nameAr : product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {i18n.language === 'ar' ? product.nameAr : product.name}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {i18n.language === 'ar' ? product.descriptionAr : product.description}
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
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
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