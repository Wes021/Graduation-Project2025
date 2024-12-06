import { create } from 'zustand';
import { OrderStatus } from './cartStore';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  details?: string; // Added details field
  isRead: boolean;
  createdAt: string;
  image?: string;
  serviceId?: string;
  orderId?: string;
  orderStatus?: OrderStatus;
  forAdmin: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (
    message: string, 
    type: Notification['type'], 
    data?: { 
      details?: string;
      image?: string; 
      serviceId?: string; 
      orderId?: string;
      orderStatus?: OrderStatus;
      forAdmin?: boolean;
    }
  ) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
  getNotifications: (isAdmin: boolean) => Notification[];
  getUnreadCount: (isAdmin: boolean) => number;
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  unreadCount: 0,
  addNotification: (message, type = 'info', data = {}) => {
    const notification: Notification = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      details: data.details,
      type,
      isRead: false,
      createdAt: new Date().toISOString(),
      forAdmin: data.forAdmin || false,
      orderStatus: data.orderStatus,
      ...data
    };
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },
  markAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      ),
      unreadCount: state.unreadCount - 1,
    }));
  },
  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
      unreadCount: 0,
    }));
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
      unreadCount: state.unreadCount - (state.notifications.find((n) => n.id === id)?.isRead ? 0 : 1),
    }));
  },
  clearAll: () => {
    set({ notifications: [], unreadCount: 0 });
  },
  getNotifications: (isAdmin) => {
    return get().notifications.filter(n => n.forAdmin === isAdmin);
  },
  getUnreadCount: (isAdmin) => {
    return get().notifications.filter(n => n.forAdmin === isAdmin && !n.isRead).length;
  },
}));