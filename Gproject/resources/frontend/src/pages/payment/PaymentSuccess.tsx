import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import Invoice from '../../components/Invoice';

export default function PaymentSuccess() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const paymentData = location.state;

  if (!paymentData) {
    navigate('/');
    return null;
  }

  const invoiceNumber = Math.random().toString(36).substring(2, 9).toUpperCase();

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('payment.success')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('payment.successMessage')}
          </p>
        </div>

        {/* Invoice */}
        <Invoice data={paymentData} invoiceNumber={invoiceNumber} />

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {t('payment.backToHome')}
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('payment.viewBookings')}
          </button>
        </div>
      </div>
    </div>
  );
}