import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllRead: () => void;
}

export default function NotificationHeader({ unreadCount, onMarkAllRead }: NotificationHeaderProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4 border-b dark:border-gray-700">
      <div className={cn(
        "flex items-center justify-between",
        i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'
      )}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {t('notifications.title')}
        </h3>
        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {t('notifications.markAllRead')}
          </button>
        )}
      </div>
    </div>
  );
}