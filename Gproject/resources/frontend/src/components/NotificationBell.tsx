import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNotificationStore } from '../store/notificationStore';
import { useAuthStore } from '../store/authStore';
import { cn } from '../utils/cn';

interface NotificationContentProps {
  notification: any;
  getNotificationImage: (notification: any) => string;
  onRemove: (id: string) => void;
}

function NotificationContent({ notification, getNotificationImage, onRemove }: NotificationContentProps) {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          src={getNotificationImage(notification)}
          alt=""
          className="w-12 h-12 rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn(
          'text-sm text-gray-900 dark:text-white',
          !notification.isRead && 'font-semibold'
        )}>
          {notification.message}
        </p>
        {notification.details && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {notification.details}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {new Date(notification.createdAt).toLocaleString()}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(notification.id);
        }}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
}

export default function NotificationBell() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAdmin } = useAuthStore();
  const {
    notifications,
    markAsRead,
    markAllAsRead,
    removeNotification,
    getNotifications,
    getUnreadCount
  } = useNotificationStore();

  const userNotifications = getNotifications(isAdmin());
  const unreadCount = getUnreadCount(isAdmin());

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNotificationImage = (notification: any) => {
    if (notification.image) return notification.image;
    if (notification.serviceId) {
      return `https://images.unsplash.com/photo-${
        {
          portrait: '1576694040870-b8cbe14b6b49',
          landscape: '1472214103451-9374bd1c798e',
          wildlife: '1549366021-9f761d450615',
          macro: '1550159930-40066082a4fc',
          event: '1519741497674-611481863552',
          fashion: '1469334031218-e382a71b716b',
          product: '1523275335684-37898b6baf30',
          food: '1476224203421-9ac39bcb3327'
        }[notification.serviceId]
      }?w=100&h=100&fit=crop`;
    }
    return 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('notifications.title')}
              </h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t('notifications.markAllRead')}
                </button>
              )}
            </div>
          </div>

          <div className="divide-y dark:divide-gray-700 max-h-96 overflow-y-auto">
            {userNotifications.length > 0 ? (
              userNotifications.map((notification) => (
                <Link
                  key={notification.id}
                  to={notification.orderId ? `/orders/${notification.orderId}` : '#'}
                  className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => {
                    if (!notification.isRead) markAsRead(notification.id);
                    setIsOpen(false);
                  }}
                >
                  <NotificationContent
                    notification={notification}
                    getNotificationImage={getNotificationImage}
                    onRemove={removeNotification}
                  />
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('notifications.empty')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}