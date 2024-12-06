import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import BookingManagement from './BookingManagement';
import OrderManagement from './OrderManagement';
import ProductManagement from './ProductManagement';

export default function AdminDashboard() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t('admin.dashboard')}
        </h1>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">{t('admin.products')}</TabsTrigger>
            <TabsTrigger value="bookings">{t('admin.bookings')}</TabsTrigger>
            <TabsTrigger value="orders">{t('admin.orders')}</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <ProductManagement />
          </TabsContent>

          <TabsContent value="bookings">
            <BookingManagement />
          </TabsContent>

          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}