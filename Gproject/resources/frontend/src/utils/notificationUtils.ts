import { Notification } from '../store/notificationStore';

export function getNotificationImage(notification: Notification): string {
  if (notification.image) return notification.image;
  
  if (notification.serviceId) {
    const serviceImages = {
      portrait: '1576694040870-b8cbe14b6b49',
      landscape: '1472214103451-9374bd1c798e',
      wildlife: '1549366021-9f761d450615',
      macro: '1550159930-40066082a4fc',
      event: '1519741497674-611481863552',
      fashion: '1469334031218-e382a71b716b',
      product: '1523275335684-37898b6baf30',
      food: '1476224203421-9ac39bcb3327'
    };

    const photoId = serviceImages[notification.serviceId as keyof typeof serviceImages];
    return `https://images.unsplash.com/photo-${photoId}?w=100&h=100&fit=crop`;
  }

  return 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop';
}

export function formatNotificationDate(date: string, locale: string): string {
  return new Date(date).toLocaleString(
    locale === 'ar' ? 'ar-SA' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  );
}