import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Notification } from '../../store/notificationStore';
import NotificationContent from './NotificationContent';
import { getNotificationImage } from '../../utils/notificationUtils';

interface NotificationListProps {
  notifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
  onRemove: (id: string) => void;
}

export default function NotificationList({ 
  notifications, 
  onNotificationClick, 
  onRemove 
}: NotificationListProps) {
  const { t } = useTranslation();

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        {t('notifications.empty')}
      </div>
    );
  }

  return (
    <div className="divide-y dark:divide-gray-700 max-h-96 overflow-y-auto">
      {notifications.map((notification) => (
        <Link
          key={notification.id}
          to={notification.orderId ? `/orders/${notification.orderId}` : '#'}
          className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={() => onNotificationClick(notification)}
        >
          <NotificationContent
            notification={notification}
            image={getNotificationImage(notification)}
            onRemove={onRemove}
          />
        </Link>
      ))}
    </div>
  );
}