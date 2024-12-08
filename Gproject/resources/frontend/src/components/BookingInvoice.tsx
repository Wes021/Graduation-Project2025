import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Camera } from 'lucide-react';
import { services } from '../data/services';
import { Booking } from '../store/bookingStore';

interface BookingInvoiceProps {
  booking: Booking;
  invoiceNumber: string;
  onClose: () => void;
}

export default function BookingInvoice({ booking, invoiceNumber, onClose }: BookingInvoiceProps) {
  const { t, i18n } = useTranslation();
  const service = services.find(s => s.id === booking.serviceId);
  const currentDate = new Date().toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
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
                {t(`services.${booking.serviceId}.title`)}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">{t('invoice.package')}</p>
              <p className="font-medium text-gray-900 dark:text-white capitalize">
                {booking.package}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">{t('invoice.date')}</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {new Date(booking.date).toLocaleDateString(i18n.language)}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">{t('invoice.time')}</p>
              <p className="font-medium text-gray-900 dark:text-white">{booking.time}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">{t('invoice.location')}</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {t(`cities.${booking.city}`)}
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
              ${booking.price}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-t dark:border-gray-700">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('invoice.total')}
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${booking.price}
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
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {t('common.close')}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{t('invoice.download')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}