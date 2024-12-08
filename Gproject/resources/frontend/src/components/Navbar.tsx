import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Camera, LogOut, Menu, X, ShoppingCart } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import { useNotificationStore } from '../store/notificationStore';
import NotificationBell from './NotificationBell';

function NavLink({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium ${className}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { isAuthenticated, isAdmin, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = useCartStore((state) => state.getItemCount());
  const notificationCount = useNotificationStore((state) => state.notifications.length);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/products">{t('nav.products')}</NavLink>
            {isAuthenticated ? (
              <>
                {isAdmin() && (
                  <NavLink to="/admin">{t('nav.admin.dashboard')}</NavLink>
                )}
                <NavLink to="/profile">{t('nav.profile')}</NavLink>
                <NavLink to="/cart" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </NavLink>
                {notificationCount > 0 && <NotificationBell />}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <LogOut className="w-5 h-5" />
                  <span>{t('nav.logout')}</span>
                </button>
              </>
            ) : (
              <NavLink to="/login">{t('auth.login')}</NavLink>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </MobileNavLink>
              <MobileNavLink to="/products" onClick={() => setIsMenuOpen(false)}>
                {t('nav.products')}
              </MobileNavLink>
              {isAuthenticated ? (
                <>
                  {isAdmin() && (
                    <MobileNavLink to="/admin" onClick={() => setIsMenuOpen(false)}>
                      {t('nav.admin.dashboard')}
                    </MobileNavLink>
                  )}
                  <MobileNavLink to="/profile" onClick={() => setIsMenuOpen(false)}>
                    {t('nav.profile')}
                  </MobileNavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </>
              ) : (
                <MobileNavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                  {t('auth.login')}
                </MobileNavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}