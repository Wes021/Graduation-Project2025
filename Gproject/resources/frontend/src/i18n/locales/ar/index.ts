import brand from './brand.json';
import nav from './nav.json';
import auth from './auth.json';
import home from './home.json';
import services from './services.json';
import booking from './booking.json';
import products from './products.json';
import cart from './cart.json';
import payment from './payment.json';
import invoice from './invoice.json';
import admin from './admin.json';
import common from './common.json';
import cities from './cities.json';
import footer from './footer.json';
import profile from './profile.json';
import order from './order.json';
import notifications from './notifications.json';

export function loadArabicTranslations() {
  return {
    ...brand,
    ...nav,
    ...auth,
    ...home,
    ...services,
    ...booking,
    ...products,
    ...cart,
    ...payment,
    ...invoice,
    ...admin,
    ...common,
    ...cities,
    ...footer,
    ...profile,
    ...order,
    ...notifications
  };
}