export interface TranslationNamespace {
  brand: string;
  nav: Record<string, any>;
  auth: Record<string, any>;
  home: Record<string, any>;
  services: Record<string, any>;
  booking: Record<string, any>;
  products: Record<string, any>;
  cart: Record<string, any>;
  payment: Record<string, any>;
  invoice: Record<string, any>;
  admin: Record<string, any>;
  common: Record<string, any>;
  cities: Record<string, any>;
  footer: Record<string, any>;
  profile: Record<string, any>;
  order: Record<string, any>;
  notifications: Record<string, any>;
}

export interface TranslationResources {
  translation: TranslationNamespace;
}