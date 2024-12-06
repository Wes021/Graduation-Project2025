import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNotificationStore } from './notificationStore';

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface CartItem {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  trackingSteps: {
    received: boolean;
    shipping: boolean;
    onway: boolean;
    delivered: boolean;
  };
}

interface CartStore {
  items: CartItem[];
  orders: Order[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  createOrder: (customerName: string, notifications: { message: string; details: string }) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updateTrackingStep: (orderId: string, step: keyof Order['trackingSteps'], value: boolean) => void;
  deleteOrder: (orderId: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orders: [],
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
      createOrder: (customerName, notifications) => {
        const { items, getTotal, clearCart } = get();
        if (items.length === 0) return;

        const order: Order = {
          id: Math.random().toString(36).substring(2, 9),
          customerName,
          items: [...items],
          total: getTotal(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          trackingSteps: {
            received: false,
            shipping: false,
            onway: false,
            delivered: false
          }
        };

        // Add notification using the store's action directly
        useNotificationStore.getState().addNotification(
          notifications.message,
          'info',
          {
            orderId: order.id,
            image: items[0]?.image,
            details: notifications.details,
            forAdmin: true
          }
        );

        set((state) => ({
          orders: [...state.orders, order],
        }));
        clearCart();
      },
      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
        }));
      },
      updateTrackingStep: (orderId, step, value) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  trackingSteps: { ...order.trackingSteps, [step]: value },
                }
              : order
          ),
        }));
      },
      deleteOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== orderId),
        }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);