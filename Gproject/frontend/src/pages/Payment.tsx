import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CreditCard } from 'lucide-react';
import { PaypalIcon } from '../components/icons/PaypalIcon';
import { useCartStore } from '../store/cartStore';

function Payment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState<'visa' | 'paypal' | null>(null);
  const { getTotal } = useCartStore();

  // Get payment amount from location state (for bookings) or cart total (for products)
  const paymentData = location.state;
  const amount = paymentData?.amount || getTotal();

  const handleMethodSelect = (method: 'visa' | 'paypal') => {
    setSelectedMethod(method);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      navigate(`/payment/${selectedMethod}`, { state: paymentData });
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('payment.selectMethod')}
          </h1>

          <div className="space-y-4">
            {/* Payment Methods */}
            <div 
              onClick={() => handleMethodSelect('visa')}
              className={`flex items-center p-6 border rounded-lg cursor-pointer transition-colors ${
                selectedMethod === 'visa'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <CreditCard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('payment.creditCard')}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('payment.creditCardDesc')}
                </p>
              </div>
            </div>

            <div 
              onClick={() => handleMethodSelect('paypal')}
              className={`flex items-center p-6 border rounded-lg cursor-pointer transition-colors ${
                selectedMethod === 'paypal'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <PaypalIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  PayPal
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('payment.paypalDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 pt-8 border-t dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {t('payment.orderSummary')}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                {t('payment.total')}
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${amount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedMethod}
            className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {t('payment.continue')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;