import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Truck, MapPin, CheckCircle } from 'lucide-react';
import type { Order } from '../store/cartStore';
import OrderTrackingStage from './order/OrderTrackingStage';
import OrderTrackingProgress from './order/OrderTrackingProgress';
import OrderTrackingMap from './order/OrderTrackingMap';

interface OrderTrackingProps {
  order: Order;
  isAdmin?: boolean;
  onUpdateStep?: (step: keyof Order['trackingSteps'], value: boolean) => void;
}

export default function OrderTracking({ 
  order, 
  isAdmin = false, 
  onUpdateStep 
}: OrderTrackingProps) {
  const { t } = useTranslation();

  const trackingSteps = order.trackingSteps || {
    received: false,
    shipping: false,
    onway: false,
    delivered: false
  };

  const deliveryStages = [
    { 
      id: 'received',
      icon: Package,
      completed: trackingSteps.received
    },
    { 
      id: 'shipping',
      icon: Truck,
      completed: trackingSteps.shipping
    },
    { 
      id: 'onway',
      icon: MapPin,
      completed: trackingSteps.onway
    },
    { 
      id: 'delivered',
      icon: CheckCircle,
      completed: trackingSteps.delivered
    },
  ];

  const handleStepClick = (stepId: string) => {
    if (!isAdmin || !onUpdateStep) return;
    onUpdateStep(stepId as keyof Order['trackingSteps'], true);
  };

  const completedSteps = Object.values(trackingSteps).filter(Boolean).length;
  const progressPercentage = (completedSteps / 4) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {t('order.tracking.title')} #{order.id}
        </h3>
        
        <div className="relative">
          <OrderTrackingProgress progress={progressPercentage} />
          
          <div className="relative flex justify-between">
            {deliveryStages.map((stage) => (
              <OrderTrackingStage
                key={stage.id}
                id={stage.id}
                icon={stage.icon}
                completed={stage.completed}
                isAdmin={isAdmin}
                onClick={() => handleStepClick(stage.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {trackingSteps.onway && <OrderTrackingMap />}
    </div>
  );
}