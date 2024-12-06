import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Order } from '../../../store/cartStore';
import OrderTracking from '../../../components/OrderTracking';

interface OrderCardProps {
  order: Order;
  onStatusUpdate: (orderId: string, status: Order['status']) => void;
  onTrackingUpdate: (orderId: string, step: keyof Order['trackingSteps'], value: boolean) => void;
}

export default function OrderCard({ order, onStatusUpdate, onTrackingUpdate }: OrderCardProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Order Header */}
      <div className="p-6 border-b dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('order.title')} #{order.id}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {order.customerName} - {new Date(order.createdAt).toLocaleDateString(i18n.language)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {order.status === 'pending' && (
              <>
                <button
                  onClick={() => onStatusUpdate(order.id, 'confirmed')}
                  className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                  title={t('admin.confirm')}
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onStatusUpdate(order.id, 'cancelled')}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                  title={t('admin.reject')}
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Order Tracking */}
      {order.status !== 'pending' && order.status !== 'cancelled' && (
        <OrderTracking 
          order={order}
          isAdmin={true}
          onUpdateStep={(step, value) => onTrackingUpdate(order.id, step, value)}
        />
      )}

      {/* Order Items */}
      <div className="p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
          {t('order.items')}
        </h4>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('order.quantity')}: {item.quantity}
                </p>
              </div>
              <p className="font-medium text-gray-900 dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-end">
          <p className="font-medium text-gray-900 dark:text-white">
            {t('order.total')}: ${order.total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}