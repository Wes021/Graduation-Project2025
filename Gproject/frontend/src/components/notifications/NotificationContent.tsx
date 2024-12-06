import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import { Notification } from '../../store/notificationStore';

interface NotificationContentProps {
  notification: Notification;
  image: string;
  onRemove: (id: string) => void;
}

export default function NotificationContent({ notification, image, onRemove }: NotificationContentProps) {
  const { t, i18n } = useTranslation();
  
  const formattedDate = new Date(notification.createdAt).toLocaleString(
    i18n.language === 'ar' ? 'ar-SA' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  );
  
  return (
    <div className={cn(
      "flex items-start gap-4",
      i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'
    )}>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt=""
          className="w-12 h-12 rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn(
          'text-sm text-gray-900 dark:text-white leading-relaxed',
          !notification.isRead && 'font-semibold'
        )}>
          {notification.message}
        </p>
        {notification.details && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {notification.details}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {formattedDate}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(notification.id);
        }}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        title={t('common.remove')}
      >
        ×
      </button>
    </div>
  );
}