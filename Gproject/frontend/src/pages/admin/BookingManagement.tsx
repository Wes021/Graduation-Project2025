import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, XCircle } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { useNotificationStore } from '../../store/notificationStore';
import { services } from '../../data/services';

export default function BookingManagement() {
  const { t } = useTranslation();
  const { bookings, updateBooking } = useBookingStore();
  const { addNotification } = useNotificationStore();

  // Filter states
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filter bookings based on selected filters
  const filteredBookings = bookings.filter(booking => {
    const matchesCity = !selectedCity || booking.city === selectedCity;
    const matchesService = !selectedService || booking.serviceId === selectedService;
    const matchesStatus = selectedStatus === 'all' || booking.status === selectedStatus;
    return matchesCity && matchesService && matchesStatus;
  });

  const handleStatusUpdate = (bookingId: string, status: 'confirmed' | 'cancelled') => {
    updateBooking(bookingId, { status });
    
    const booking = bookings.find(b => b.id === bookingId);
    const service = services.find(s => s.id === booking?.serviceId);
    const serviceName = t(`services.${booking?.serviceId}.title`);
    const message = status === 'confirmed' 
      ? t('notifications.bookingConfirmed', { service: serviceName })
      : t('notifications.bookingCancelled', { service: serviceName });
    
    addNotification(
      message, 
      status === 'confirmed' ? 'success' : 'error',
      { 
        serviceId: booking?.serviceId,
        image: service?.image
      }
    );
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t('admin.filters')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.filterByCity')}
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">{t('admin.allCities')}</option>
              {Object.keys(t('cities', { returnObjects: true })).map((city) => (
                <option key={city} value={city}>
                  {t(`cities.${city}`)}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.filterByService')}
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">{t('admin.allServices')}</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {t(`services.${service.id}.title`)}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('admin.filterByStatus')}
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">{t('admin.allStatuses')}</option>
              {['pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                <option key={status} value={status}>
                  {t(`booking.status.${status}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-4 px-4">{t('admin.bookingId')}</th>
                <th className="text-left py-4 px-4">{t('admin.service')}</th>
                <th className="text-left py-4 px-4">{t('admin.date')}</th>
                <th className="text-left py-4 px-4">{t('admin.time')}</th>
                <th className="text-left py-4 px-4">{t('admin.city')}</th>
                <th className="text-left py-4 px-4">{t('admin.status')}</th>
                <th className="text-left py-4 px-4">{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b dark:border-gray-700">
                  <td className="py-4 px-4">{booking.id}</td>
                  <td className="py-4 px-4">{t(`services.${booking.serviceId}.title`)}</td>
                  <td className="py-4 px-4">{booking.date}</td>
                  <td className="py-4 px-4">{booking.time}</td>
                  <td className="py-4 px-4">{t(`cities.${booking.city}`)}</td>
                  <td className="py-4 px-4">{t(`booking.status.${booking.status}`)}</td>
                  <td className="py-4 px-4">
                    {booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                          title={t('admin.confirm')}
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                          title={t('admin.reject')}
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBookings.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              {t('admin.noBookingsFound')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}