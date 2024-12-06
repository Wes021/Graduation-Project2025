import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, Edit2, Trash2, XCircle, Receipt } from 'lucide-react';
import { Booking } from '../store/bookingStore';
import { cn } from '../utils/cn';
import BookingInvoice from './BookingInvoice';

interface BookingCardProps {
  booking: Booking;
  onEdit: (booking: Booking) => void;
  onCancel: (id: string) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function BookingCard({ booking, onEdit, onCancel, onDelete }: BookingCardProps) {
  const { t } = useTranslation();
  const [showInvoice, setShowInvoice] = useState(false);

  const serviceImage = `https://images.unsplash.com/photo-${
    {
      portrait: '1576694040870-b8cbe14b6b49',
      landscape: '1472214103451-9374bd1c798e',
      wildlife: '1549366021-9f761d450615',
      macro: '1550159930-40066082a4fc',
      event: '1519741497674-611481863552',
      fashion: '1469334031218-e382a71b716b',
      product: '1523275335684-37898b6baf30',
      food: '1476224203421-9ac39bcb3327'
    }[booking.serviceId]
  }?w=400&h=300&fit=crop`;

  const invoiceNumber = `INV-${booking.id.toUpperCase()}`;

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Service Image */}
          <div className="md:w-1/3">
            <div className="relative pb-[75%] md:pb-0 md:h-full">
              <img
                src={serviceImage}
                alt={t(`services.${booking.serviceId}.title`)}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Booking Details */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`services.${booking.serviceId}.title`)}
                </h3>
                <span className={cn(
                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium",
                  statusColors[booking.status]
                )}>
                  {t(`booking.status.${booking.status}`)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {booking.status === 'pending' && (
                  <>
                    <button
                      onClick={() => onEdit(booking)}
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                      title={t('booking.edit')}
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onCancel(booking.id)}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                      title={t('booking.cancel')}
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </>
                )}
                <button
                  onClick={() => onDelete(booking.id)}
                  className="p-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  title={t('booking.delete')}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                {booking.status !== 'pending' && (
                  <button
                    onClick={() => setShowInvoice(true)}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                    title={t('invoice.view')}
                  >
                    <Receipt className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date */}
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                <div>
                  <span className="block text-sm font-medium">{t('booking.dateLabel')}</span>
                  <span>{new Date(booking.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 mr-2" />
                <div>
                  <span className="block text-sm font-medium">{t('booking.timeLabel')}</span>
                  <span>{booking.time}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <div>
                  <span className="block text-sm font-medium">{t('booking.cityLabel')}</span>
                  <span>{t(`cities.${booking.city}`)}</span>
                </div>
              </div>

              {/* Package & Price */}
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Receipt className="w-5 h-5 mr-2" />
                <div>
                  <span className="block text-sm font-medium capitalize">{booking.package}</span>
                  <span>${booking.price}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t dark:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t('booking.createdAt')}: {new Date(booking.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      {showInvoice && (
        <BookingInvoice
          booking={booking}
          invoiceNumber={invoiceNumber}
          onClose={() => setShowInvoice(false)}
        />
      )}
    </>
  );
}