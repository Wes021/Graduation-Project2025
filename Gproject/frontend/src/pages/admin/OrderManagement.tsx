import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../../store/cartStore';
import { useNotificationStore } from '../../store/notificationStore';
import OrderCard from './components/OrderCard';

export default function OrderManagement() {
  const { t } = useTranslation();
  const { orders, updateOrderStatus, updateTrackingStep } = useCartStore();
  const { addNotification } = useNotificationStore();

  const handleStatusUpdate = (orderId: string, newStatus: Order['status']) => {
    updateOrderStatus(orderId, newStatus);
    
    const order = orders.find(o => o.id === orderId);
    if (order) {
      const message = t(`notifications.order.${newStatus}`);
      const details = t(`notifications.order.status.${newStatus}Details`);
      
      addNotification(
        message,
        newStatus === 'cancelled' ? 'error' : 'success',
        { 
          orderId,
          image: order.items[0]?.image,
          details,
          orderStatus: newStatus
        }
      );
    }
  };

  const handleTrackingUpdate = (orderId: string, step: keyof Order['trackingSteps'], value: boolean) => {
    updateTrackingStep(orderId, step, value);
    
    const order = orders.find(o => o.id === orderId);
    if (order) {
      const message = t(`order.tracking.${step}.title`);
      const details = t(`order.tracking.${step}.details`);

      addNotification(
        message,
        'info',
        {
          orderId,
          image: order.items[0]?.image,
          details
        }
      );
    }
  };

  return (
    <div className="space-y-8">
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onStatusUpdate={handleStatusUpdate}
            onTrackingUpdate={handleTrackingUpdate}
          />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            {t('admin.noOrdersFound')}
          </p>
        </div>
      )}
    </div>
  );
}