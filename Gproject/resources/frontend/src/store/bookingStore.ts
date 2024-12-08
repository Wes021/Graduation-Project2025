import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNotificationStore } from './notificationStore';
import { services } from '../data/services';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  city: string;
  date: string;
  time: string;
  status: BookingStatus;
  createdAt: string;
  package: 'basic' | 'premium' | 'professional';
  price: number;
}

interface BookingStore {
  bookings: Booking[];
  addBooking: (bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>) => void;
  updateBooking: (id: string, data: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  getBooking: (id: string) => Booking | undefined;
  getUserBookings: (customerName: string) => Booking[];
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      bookings: [],
      addBooking: (bookingData) => {
        const booking: Booking = {
          id: Math.random().toString(36).substring(2, 9),
          ...bookingData,
          status: 'pending',
          createdAt: new Date().toISOString(),
        };

        const service = services.find(s => s.id === booking.serviceId);
        
        // Add notification
        useNotificationStore.getState().addNotification(
          `New booking from ${booking.customerName}`,
          'info',
          {
            serviceId: booking.serviceId,
            details: `Service: ${service?.title || booking.serviceId}`,
            forAdmin: true
          }
        );

        set((state) => ({
          bookings: [...state.bookings, booking],
        }));
      },
      updateBooking: (id, data) => {
        set((state) => ({
          bookings: state.bookings.map((booking) =>
            booking.id === id ? { ...booking, ...data } : booking
          ),
        }));

        // If status is being updated, send notification
        if (data.status) {
          const booking = get().bookings.find(b => b.id === id);
          if (booking) {
            const service = services.find(s => s.id === booking.serviceId);
            const notificationStore = useNotificationStore.getState();
            
            if (data.status === 'confirmed') {
              notificationStore.addNotification(
                `Your booking for ${service?.title || booking.serviceId} has been confirmed`,
                'success',
                { serviceId: booking.serviceId }
              );
            } else if (data.status === 'cancelled') {
              notificationStore.addNotification(
                `Your booking for ${service?.title || booking.serviceId} has been cancelled`,
                'error',
                { serviceId: booking.serviceId }
              );
            }
          }
        }
      },
      deleteBooking: (id) => {
        set((state) => ({
          bookings: state.bookings.filter((booking) => booking.id !== id),
        }));
      },
      getBooking: (id) => {
        return get().bookings.find((booking) => booking.id === id);
      },
      getUserBookings: (customerName) => {
        return get().bookings.filter(
          (booking) => booking.customerName === customerName
        );
      },
    }),
    {
      name: 'booking-storage',
    }
  )
);