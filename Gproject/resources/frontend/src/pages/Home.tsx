import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Camera, Clock, Award, Mountain, Leaf, ZoomIn, Calendar, Shirt, ShoppingBag, Utensils } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import Gallery from '../components/Gallery';

function Home() {
  const { t, i18n } = useTranslation();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBooking = () => {
    setIsBookingModalOpen(true);
  };

  const services = [
    { id: 'portrait', icon: <Camera className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1576694040870-b8cbe14b6b49' },
    { id: 'landscape', icon: <Mountain className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e' },
    { id: 'wildlife', icon: <Leaf className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1549366021-9f761d450615' },
    { id: 'macro', icon: <ZoomIn className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1550159930-40066082a4fc' },
    { id: 'event', icon: <Calendar className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1519741497674-611481863552' },
    { id: 'fashion', icon: <Shirt className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { id: 'product', icon: <ShoppingBag className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 'food', icon: <Utensils className="w-6 h-6" />, image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
            alt="Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              {t('hero.subtitle')}
            </p>
            <button 
              onClick={handleBooking}
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Camera className="w-8 h-8" />}
              title={t('features.quality.title')}
              description={t('features.quality.description')}
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title={t('features.time.title')}
              description={t('features.time.description')}
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title={t('features.experience.title')}
              description={t('features.experience.description')}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.header.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('services.header.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`${service.image}?w=800&h=600&fit=crop`}
                    alt={t(`services.${service.id}.title`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t(`services.${service.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(`services.${service.id}.description`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default Home;