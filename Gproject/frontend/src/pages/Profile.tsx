import React, { useState, useRef } from 'react';
import { Camera, Mail, User, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import OrderTracking from '../components/OrderTracking';
import { useCartStore } from '../store/cartStore';
import { useBookingStore } from '../store/bookingStore';
import BookingCard from '../components/BookingCard';
import BookingModal from '../components/BookingModal';

function Profile() {
  const { t } = useTranslation();
  const { user, updateProfile } = useAuthStore();
  const { orders } = useCartStore();
  const { bookings, updateBooking, deleteBooking } = useBookingStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
    avatar: user?.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
  });

  // Filter bookings for current user
  const userBookings = bookings.filter(booking => booking.customerName === user?.name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profile);
    setIsEditing(false);
  };

  const handleEditBooking = (booking: any) => {
    setEditingBooking(booking);
  };

  const handleCancelBooking = (bookingId: string) => {
    updateBooking(bookingId, { status: 'cancelled' });
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Header/Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>

          {/* Profile Content */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="absolute -top-16 left-6">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  onClick={handleImageClick}
                  className={`w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 ${
                    isEditing ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
                  }`}
                />
                {isEditing && (
                  <div className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white">
                    <Camera className="w-4 h-4" />
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              {isEditing && (
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  {t('profile.actions.changePhoto')}
                </div>
              )}
            </div>

            {/* Edit Button */}
            <div className="flex justify-center pt-4 mt-16">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {isEditing ? t('profile.actions.save') : t('profile.actions.edit')}
              </button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="profile" className="mt-8">
              <TabsList>
                <TabsTrigger value="profile">{t('profile.tabs.profile')}</TabsTrigger>
                <TabsTrigger value="bookings">{t('profile.tabs.bookings')}</TabsTrigger>
                <TabsTrigger value="orders">{t('profile.tabs.orders')}</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <User className="w-4 h-4" />
                        <span>{t('profile.personalInfo.fullName')}</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Mail className="w-4 h-4" />
                        <span>{t('profile.personalInfo.email')}</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Phone className="w-4 h-4" />
                        <span>{t('profile.personalInfo.phone')}</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{t('profile.personalInfo.address')}</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('profile.personalInfo.bio')}
                    </label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  {isEditing && (
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        {t('profile.actions.save')}
                      </button>
                    </div>
                  )}
                </form>
              </TabsContent>

              <TabsContent value="bookings">
                <div className="space-y-6">
                  {userBookings.length > 0 ? (
                    userBookings.map((booking) => (
                      <BookingCard
                        key={booking.id}
                        booking={booking}
                        onEdit={handleEditBooking}
                        onCancel={handleCancelBooking}
                        onDelete={deleteBooking}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        {t('profile.noBookings')}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="orders">
                <div className="space-y-8">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <div key={order.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {t('order.title')} #{order.id}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {t(`order.status.${order.status}`)}
                            </span>
                          </div>

                          {/* Order Items */}
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center gap-4">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {t('order.quantity')}: {item.quantity}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Order Tracking */}
                          {order.status !== 'pending' && order.status !== 'cancelled' && (
                            <div className="mt-6">
                              <OrderTracking order={order} />
                            </div>
                          )}

                          <div className="mt-4 pt-4 border-t dark:border-gray-600 flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {t('order.total')}: ${order.total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        {t('profile.noOrders')}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Edit Booking Modal */}
      {editingBooking && (
        <BookingModal
          isOpen={!!editingBooking}
          onClose={() => setEditingBooking(null)}
          selectedService={editingBooking.serviceId}
          initialData={editingBooking}
          isEditing
        />
      )}
    </div>
  );
}

export default Profile;