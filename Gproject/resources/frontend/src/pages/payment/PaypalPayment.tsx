import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PaypalIcon } from '../../components/icons/PaypalIcon';
import { useCartStore } from '../../store/cartStore';
import { useNotificationStore } from '../../store/notificationStore';

function PaypalPayment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotal, createOrder } = useCartStore();
  const { addNotification } = useNotificationStore();

  const paymentData = location.state;
  const amount = paymentData?.amount || getTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentData?.type === 'booking') {
      addNotification(
        t('notifications.bookingSuccess'),
        'success',
        {
          details: t('notifications.bookingPaymentCompleted')
        }
      );
      navigate('/payment/success', { state: paymentData });
    } else {
      // Handle product order
      createOrder('User Name', {
        message: t('notifications.orderSuccess'),
        details: t('notifications.paymentCompleted')
      });

      addNotification(
        t('notifications.purchaseSuccess'),
        'success',
        {
          details: t('notifications.orderConfirmation')
        }
      );

      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-[#f5f7fa] dark:bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <PaypalIcon className="w-16 h-16 text-[#003087] dark:text-blue-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('payment.paypalEmail')}
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('payment.paypalPassword')}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="pt-4 border-t dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-400">
                  {t('payment.total')}
                </span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${amount.toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0070ba] hover:bg-[#003087] text-white rounded-lg transition-colors"
              >
                {t('payment.payWithPaypal')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaypalPayment;