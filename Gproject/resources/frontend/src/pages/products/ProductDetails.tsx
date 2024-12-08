import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Minus, Plus, Star } from 'lucide-react';
import { useProductsStore } from './store/productsStore';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuthenticated } = useAuthStore();
  const product = useProductsStore((state) =>
    state.products.find((p) => p.id === id)
  );
  const addToCart = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('products.notFound')}
          </h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/products/${id}` } });
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: i18n.language === 'ar' ? product.nameAr : product.name,
        price: product.price,
        image: product.image,
      });
    }
    navigate('/cart');
  };

  const specs = i18n.language === 'ar' ? product.specsAr : product.specs;

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={i18n.language === 'ar' ? product.nameAr : product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {i18n.language === 'ar' ? product.nameAr : product.name}
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-current'
                        : 'fill-none'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.reviews} {t('products.reviews')})
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {i18n.language === 'ar' ? product.descriptionAr : product.description}
            </p>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Specifications */}
            {specs && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('products.specifications')}
                </h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm text-gray-600 dark:text-gray-400">
                        {key}
                      </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 dark:text-gray-300">
                {t('products.quantity')}:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{t('products.addToCart')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;