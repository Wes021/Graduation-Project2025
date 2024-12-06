import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useAuthStore } from '../../../store/authStore';
import { useCartStore } from '../../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={i18n.language === 'ar' ? product.nameAr : product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {i18n.language === 'ar' ? product.nameAr : product.name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.rating}
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {i18n.language === 'ar' ? product.descriptionAr : product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
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
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{t('products.addToCart')}</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}