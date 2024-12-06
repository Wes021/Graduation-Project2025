import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react';
import { useNotificationStore } from '../../store/notificationStore';
import { useAuthStore } from '../../store/authStore';
import NotificationList from './NotificationList';

export default function NotificationBell() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAdmin } = useAuthStore();
  const {
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

  const handleNotificationClick = (notification: any) => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        title={t('notifications.title')}
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className={cn(
          "absolute mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50",
          i18n.language === 'ar' ? 'right-0' : 'left-0'
        )}>
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
                  onClick={markAllAsRead}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t('notifications.markAllRead')}
                </button>
              )}
            </div>
          </div>

          <NotificationList
            notifications={userNotifications}
            onNotificationClick={handleNotificationClick}
            onRemove={removeNotification}
          />
        </div>
      )}
    </div>
  );
}