import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

function Cart() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user } = useAuthStore();
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (!user?.name) return;
    navigate('/payment');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cart.empty')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('cart.emptyMessage')}
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('cart.browseProducts')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {t('cart.title')}
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <img
                src={item.image}
                alt={i18n.language === 'ar' ? item.nameAr || item.name : item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {i18n.language === 'ar' ? item.nameAr || item.name : item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-400">{t('cart.total')}</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${getTotal().toFixed(2)}
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate('/products')}
              className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {t('cart.continueShopping')}
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('cart.checkout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;