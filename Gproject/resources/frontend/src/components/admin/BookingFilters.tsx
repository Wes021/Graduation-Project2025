import React from 'react';
import { useTranslation } from 'react-i18next';
import { Filter } from 'lucide-react';
import { services } from '../../data/services';

interface BookingFiltersProps {
  selectedCity: string;
  selectedService: string;
  selectedStatus: string;
  onCityChange: (city: string) => void;
  onServiceChange: (service: string) => void;
  onStatusChange: (status: string) => void;
}

export default function BookingFilters({
  selectedCity,
  selectedService,
  selectedStatus,
  onCityChange,
  onServiceChange,
  onStatusChange,
}: BookingFiltersProps) {
  const { t } = useTranslation();

  const cities = [
    'amman', 'zarqa', 'irbid', 'aqaba', 'madaba', 'salt', 'jerash', 'ajloun',
    'mafraq', 'karak', 'tafilah', 'maan', 'ramtha', 'sahab', 'russeifa',
    'fuheis', 'mahis', 'dead_sea', 'petra', 'wadi_rum'
  ];

  const statuses = ['all', 'pending', 'confirmed', 'completed', 'cancelled'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t('admin.filters')}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* City Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('admin.filterByCity')}
          </label>
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">{t('admin.allCities')}</option>
            {cities.map((city) => (
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
            onChange={(e) => onServiceChange(e.target.value)}
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
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === 'all' ? t('admin.allStatuses') : t(`booking.status.${status}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}