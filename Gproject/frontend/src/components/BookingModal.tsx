import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { X, Clock, MapPin, Calendar } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useBookingStore } from '../store/bookingStore';
import { services } from '../data/services';
import type { Booking } from '../store/bookingStore';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
  initialData?: Booking;
  isEditing?: boolean;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00'
];

export default function BookingModal({ 
  isOpen, 
  onClose, 
  selectedService,
  initialData,
  isEditing = false
}: BookingModalProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addBooking, updateBooking } = useBookingStore();
  const [formData, setFormData] = useState({
    serviceId: selectedService || initialData?.serviceId || '',
    city: initialData?.city || '',
    date: initialData?.date || '',
    time: initialData?.time || '',
    package: initialData?.package || 'basic',
  });

  if (!isOpen) return null;

  const selectedServiceData = services.find(s => s.id === formData.serviceId);
  const packagePrice = selectedServiceData?.pricing[formData.package as keyof typeof selectedServiceData.pricing] || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/booking' } });
      return;
    }

    if (isEditing && initialData) {
      updateBooking(initialData.id, formData);
      onClose();
    } else {
      const bookingData = {
        ...formData,
        customerName: user?.name || 'Guest',
        price: packagePrice
      };
      addBooking(bookingData);
      navigate('/payment', { 
        state: { 
          amount: packagePrice,
          type: 'booking',
          serviceId: formData.serviceId,
          package: formData.package
        } 
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

        {/* Modal */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 shadow-xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {isEditing ? t('booking.edit') : t('booking.title')}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.serviceLabel')}
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">{t('booking.selectService')}</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {t(`services.${service.id}.title`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Package Selection */}
            {selectedServiceData && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('booking.packageLabel')}
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedServiceData.pricing).map(([key, price]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFormData({ ...formData, package: key })}
                      className={`p-4 border rounded-lg text-center ${
                        formData.package === key
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="font-semibold capitalize">{key}</div>
                      <div className="text-lg font-bold">${price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* City Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.cityLabel')}
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">{t('booking.selectCity')}</option>
                {Object.keys(t('cities', { returnObjects: true })).map((city) => (
                  <option key={city} value={city}>
                    {t(`cities.${city}`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.dateLabel')}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.timeLabel')}
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">{t('booking.selectTime')}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Total Price */}
            {selectedServiceData && (
              <div className="pt-4 border-t dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t('payment.total')}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${packagePrice}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {isEditing ? t('booking.edit') : t('booking.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}