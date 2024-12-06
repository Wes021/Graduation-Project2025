import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import BookingModal from '../components/BookingModal';

const serviceFeatures = {
  portrait: [
    'إعداد إضاءة احترافي',
    'تغييرات متعددة للملابس',
    'تعديل رقمي',
    'صور عالية الدقة',
    'خيارات الطباعة متوفرة'
  ],
  landscape: [
    'استكشاف المواقع',
    'توقيت مثالي للإضاءة',
    'صور بانورامية عالية الدقة',
    'معالجة متقدمة بعد التصوير',
    'طباعة فنية متوفرة'
  ],
  wildlife: [
    'عدسات تصوير عن بعد احترافية',
    'مراقبة صبورة',
    'تصوير في الموائل الطبيعية',
    'توثيق السلوك',
    'تركيز على الحفاظ على البيئة'
  ],
  macro: [
    'معدات ماكرو متخصصة',
    'تكديس التركيز',
    'التقاط تفاصيل عالية',
    'تكوينات إبداعية',
    'توثيق علمي'
  ],
  event: [
    'مصورون متعددون متاحون',
    'تخطيط الجدول الزمني',
    'لقطات تلقائية ومنظمة',
    'معاينات في نفس اليوم',
    'معرض على الإنترنت'
  ],
  fashion: [
    'عارضون محترفون متاحون',
    'تصوير في الاستوديو أو المواقع',
    'مساعدة في التنسيق',
    'إنشاء كتالوج الأزياء',
    'جودة تحريرية'
  ],
  product: [
    'لقطات بخلفية بيضاء',
    'صور نمط الحياة',
    'تصوير 360 درجة',
    'إنشاء رسوم معلوماتية',
    'جاهز للتجارة الإلكترونية'
  ],
  food: [
    'تنسيق طعام احترافي',
    'إكسسوارات وخلفيات',
    'إضاءة طبيعية واستوديو',
    'تصوير القوائم',
    'باقات وسائل التواصل الاجتماعي'
  ]
};

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuthenticated } = useAuthStore();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!id) return null;

  const handleBooking = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/services/${id}` } });
      return;
    }
    setIsBookingModalOpen(true);
  };

  const features = serviceFeatures[id as keyof typeof serviceFeatures] || [];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12">
          <img
            src={`https://images.unsplash.com/photo-${
              {
                portrait: '1576694040870-b8cbe14b6b49',
                landscape: '1472214103451-9374bd1c798e',
                wildlife: '1549366021-9f761d450615',
                macro: '1550159930-40066082a4fc',
                event: '1519741497674-611481863552',
                fashion: '1469334031218-e382a71b716b',
                product: '1523275335684-37898b6baf30',
                food: '1476224203421-9ac39bcb3327'
              }[id]
            }?w=1600&h=900&fit=crop`}
            alt={t(`services.${id}.title`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {t(`services.${id}.title`)}
            </h1>
            <p className="text-xl max-w-2xl">
              {t(`services.${id}.description`)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('services.aboutService')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(`services.${id}.description`)}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('services.includedFeatures')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('services.bookingTitle')}
                </h3>

                <button
                  onClick={handleBooking}
                  className="w-full mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('services.bookNow')}
                </button>

                {!isAuthenticated && (
                  <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                    {t('services.loginRequired')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={id}
      />
    </div>
  );
}

export default ServiceDetails;