import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 mb-4`}>
              <Camera className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">{t('brand')}</span>
            </div>
            <p className="text-sm">{t('footer.description')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{t('footer.contact.email')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">{t('footer.contact.phone')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>{t('footer.contact.address')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.links.title')}
            </h3>
            <ul className="space-y-2">
              {['about', 'services', 'portfolio', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="hover:text-blue-400 transition-colors block"
                  >
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.newsletter.title')}
            </h3>
            <p className="text-sm mb-4">{t('footer.newsletter.description')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className={`flex-1 px-4 py-2 ${
                  isRTL ? 'rounded-r-md' : 'rounded-l-md'
                } text-gray-900 focus:outline-none`}
              />
              <button
                type="submit"
                className={`px-4 py-2 bg-blue-600 text-white ${
                  isRTL ? 'rounded-l-md' : 'rounded-r-md'
                } hover:bg-blue-700 transition-colors`}
              >
                {t('footer.newsletter.button')}
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                {t('footer.social.title')}
              </h4>
              <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={t('footer.social.facebook')}
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={t('footer.social.instagram')}
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={t('footer.social.twitter')}
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;