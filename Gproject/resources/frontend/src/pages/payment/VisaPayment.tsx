import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useNotificationStore } from '../../store/notificationStore';

function VisaPayment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotal, createOrder } = useCartStore();
  const { addNotification } = useNotificationStore();
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <CreditCard className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('payment.cardNumber')}
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('payment.cardName')}
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('payment.expiry')}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  CVV
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
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
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('payment.pay')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VisaPayment;