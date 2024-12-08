import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../store/cartStore';
import OrderTracking from '../components/OrderTracking';

export default function OrderDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { orders } = useCartStore();
  const order = orders.find(o => o.id === id);

  if (!order) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('order.notFound')}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t('order.details')} #{order.id}
        </h1>

        {/* Order Status and Tracking */}
        {order.status === 'shipped' && <OrderTracking order={order} />}

        {/* Order Details */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('order.items')}
          </h2>
          
          <div className="space-y-4">
            {order.items.map((item) => (
              <div 
                key={item.id}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('order.quantity')}: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t dark:border-gray-700">
            <div className="flex justify-between text-lg font-semibold">
              <span>{t('order.total')}</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}