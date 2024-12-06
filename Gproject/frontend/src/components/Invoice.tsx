import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Camera } from 'lucide-react';
import { services } from '../data/services';

interface InvoiceProps {
  data: {
    type: 'booking';
    serviceId: string;
    package: string;
    amount: number;
    date: string;
    time: string;
    city: string;
  };
  invoiceNumber: string;
}

export default function Invoice({ data, invoiceNumber }: InvoiceProps) {
  const { t, i18n } = useTranslation();
  const service = services.find(s => s.id === data.serviceId);
  const currentDate = new Date().toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 print:shadow-none">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-2">
          <Camera className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('brand')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.contact.address')}
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {t('invoice.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">#{invoiceNumber}</p>
          <p className="text-gray-600 dark:text-gray-400">{currentDate}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="border-t border-b dark:border-gray-700 py-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t('invoice.serviceDetails')}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400">{t('invoice.service')}</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {t(`services.${data.serviceId}.title`)}
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">{t('invoice.package')}</p>
            <p className="font-medium text-gray-900 dark:text-white capitalize">
              {data.package}
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">{t('invoice.date')}</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {new Date(data.date).toLocaleDateString(i18n.language)}
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">{t('invoice.time')}</p>
            <p className="font-medium text-gray-900 dark:text-white">{data.time}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">{t('invoice.location')}</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {t(`cities.${data.city}`)}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 dark:text-gray-400">
            {t('invoice.packagePrice')}
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            ${data.amount}
          </span>
        </div>
        <div className="flex justify-between items-center py-2 border-t dark:border-gray-700">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('invoice.total')}
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${data.amount}
          </span>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t('invoice.notes')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {t('invoice.termsAndConditions')}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>{t('invoice.download')}</span>
        </button>
      </div>
    </div>
  );
}