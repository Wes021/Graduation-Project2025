import { Product } from '../types';

export const mockProducts: Product[] = [
  // Cameras
  {
    id: '1',
    name: 'Canon EOS R5',
    nameAr: 'كانون إي أو إس R5',
    description: 'Professional full-frame mirrorless camera with 8K video capability',
    descriptionAr: 'كاميرا احترافية كاملة الإطار بدون مرآة مع إمكانية تصوير فيديو 8K',
    price: 3899,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    specs: {
      sensor: 'Full-frame CMOS',
      resolution: '45MP',
      video: '8K RAW',
    },
    stock: 10,
    rating: 4.9,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Sony A7 IV',
    nameAr: 'سوني A7 IV',
    description: 'Advanced full-frame mirrorless camera for photo and video',
    descriptionAr: 'كاميرا متقدمة كاملة الإطار بدون مرآة للصور والفيديو',
    price: 2499,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
    specs: {
      sensor: 'Full-frame CMOS',
      resolution: '33MP',
      video: '4K 60p',
    },
    stock: 15,
    rating: 4.8,
    reviews: 95,
  },
  {
    id: '3',
    name: 'Nikon Z6 II',
    nameAr: 'نيكون Z6 II',
    description: 'Versatile mirrorless camera with excellent low-light performance',
    descriptionAr: 'كاميرا متعددة الاستخدامات بدون مرآة مع أداء ممتاز في الإضاءة المنخفضة',
    price: 1999,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c',
    specs: {
      sensor: 'Full-frame CMOS',
      resolution: '24.5MP',
      video: '4K 60p',
    },
    stock: 8,
    rating: 4.7,
    reviews: 82,
  },
  {
    id: '4',
    name: 'Fujifilm X-T4',
    nameAr: 'فوجي فيلم X-T4',
    description: 'Professional APS-C mirrorless camera with IBIS',
    descriptionAr: 'كاميرا احترافية APS-C بدون مرآة مع نظام تثبيت الصورة',
    price: 1699,
    originalPrice: 1899,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac',
    specs: {
      sensor: 'APS-C X-Trans CMOS',
      resolution: '26.1MP',
      video: '4K 60p',
    },
    stock: 12,
    rating: 4.8,
    reviews: 74,
  },
  {
    id: '5',
    name: 'Canon EOS R6',
    nameAr: 'كانون إي أو إس R6',
    description: 'Versatile full-frame mirrorless camera for professionals',
    descriptionAr: 'كاميرا احترافية متعددة الاستخدامات كاملة الإطار بدون مرآة',
    price: 2499,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1515724684585-0c44e1c7f3da',
    specs: {
      sensor: 'Full-frame CMOS',
      resolution: '20.1MP',
      video: '4K 60p',
    },
    stock: 7,
    rating: 4.9,
    reviews: 63,
  },

  // Lenses
  {
    id: '6',
    name: 'Sony 24-70mm f/2.8 GM',
    nameAr: 'سوني 24-70 مم f/2.8 GM',
    description: 'Professional zoom lens for Sony E-mount cameras',
    descriptionAr: 'عدسة زوم احترافية لكاميرات سوني E-mount',
    price: 2199,
    originalPrice: 2399,
    category: 'lenses',
    image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9',
    specs: {
      focalLength: '24-70mm',
      aperture: 'f/2.8',
      mount: 'Sony E',
    },
    stock: 15,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '7',
    name: 'Canon RF 50mm f/1.2L',
    nameAr: 'كانون RF 50 مم f/1.2L',
    description: 'Premium portrait lens for Canon RF mount',
    descriptionAr: 'عدسة بورتريه ممتازة لكاميرات كانون RF',
    price: 2299,
    category: 'lenses',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35',
    specs: {
      focalLength: '50mm',
      aperture: 'f/1.2',
      mount: 'Canon RF',
    },
    stock: 6,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: '8',
    name: 'Nikon Z 70-200mm f/2.8 VR',
    nameAr: 'نيكون Z 70-200 مم f/2.8 VR',
    description: 'Professional telephoto zoom lens with vibration reduction',
    descriptionAr: 'عدسة تيليفوتو زوم احترافية مع نظام تثبيت الاهتزاز',
    price: 2599,
    category: 'lenses',
    image: 'https://images.unsplash.com/photo-1617005082275-4b53c349f8b4',
    specs: {
      focalLength: '70-200mm',
      aperture: 'f/2.8',
      mount: 'Nikon Z',
    },
    stock: 4,
    rating: 4.8,
    reviews: 42,
  },
  {
    id: '9',
    name: 'Sigma 85mm f/1.4 DG DN Art',
    nameAr: 'سيجما 85 مم f/1.4 DG DN Art',
    description: 'Professional portrait lens for mirrorless cameras',
    descriptionAr: 'عدسة بورتريه احترافية للكاميرات بدون مرآة',
    price: 1199,
    category: 'lenses',
    image: 'https://images.unsplash.com/photo-1617005082275-4b53c349f8b4',
    specs: {
      focalLength: '85mm',
      aperture: 'f/1.4',
      mount: 'Sony E/L-Mount',
    },
    stock: 9,
    rating: 4.7,
    reviews: 38,
  },
  {
    id: '10',
    name: 'Canon RF 15-35mm f/2.8L',
    nameAr: 'كانون RF 15-35 مم f/2.8L',
    description: 'Ultra-wide zoom lens for landscape photography',
    descriptionAr: 'عدسة زوم واسعة للغاية لتصوير المناظر الطبيعية',
    price: 2299,
    category: 'lenses',
    image: 'https://images.unsplash.com/photo-1617005082275-4b53c349f8b4',
    specs: {
      focalLength: '15-35mm',
      aperture: 'f/2.8',
      mount: 'Canon RF',
    },
    stock: 7,
    rating: 4.8,
    reviews: 45,
  },

  // Lighting
  {
    id: '11',
    name: 'Profoto B10 Plus',
    nameAr: 'بروفوتو B10 Plus',
    description: 'Professional battery-powered flash with LED modeling light',
    descriptionAr: 'فلاش احترافي يعمل بالبطارية مع إضاءة LED',
    price: 2095,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1533747122906-9ac7835bfeb0',
    specs: {
      power: '500Ws',
      batteryLife: '200 flashes',
      weight: '1.9kg',
    },
    stock: 5,
    rating: 4.9,
    reviews: 32,
  },
  {
    id: '12',
    name: 'Godox AD600 Pro',
    nameAr: 'جودوكس AD600 Pro',
    description: 'Portable studio flash with TTL and HSS',
    descriptionAr: 'فلاش استوديو محمول مع نظام TTL وHSS',
    price: 899,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1533747122906-9ac7835bfeb0',
    specs: {
      power: '600Ws',
      batteryLife: '360 flashes',
      weight: '2.1kg',
    },
    stock: 8,
    rating: 4.7,
    reviews: 54,
  },
  {
    id: '13',
    name: 'Aputure 120d II',
    nameAr: 'أبوتشر 120d II',
    description: 'Professional LED continuous light for video',
    descriptionAr: 'إضاءة LED احترافية متواصلة للفيديو',
    price: 745,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1533747122906-9ac7835bfeb0',
    specs: {
      power: '120W',
      temperature: '5500K',
      CRI: '>96',
    },
    stock: 12,
    rating: 4.8,
    reviews: 67,
  },
  {
    id: '14',
    name: 'Nanlite Forza 60B',
    nameAr: 'نانلايت Forza 60B',
    description: 'Compact bi-color LED light for photo and video',
    descriptionAr: 'إضاءة LED ثنائية اللون مدمجة للصور والفيديو',
    price: 399,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1533747122906-9ac7835bfeb0',
    specs: {
      power: '60W',
      temperature: '2700-6500K',
      CRI: '>95',
    },
    stock: 15,
    rating: 4.6,
    reviews: 43,
  },
  {
    id: '15',
    name: 'Profoto A1X',
    nameAr: 'بروفوتو A1X',
    description: 'Professional on-camera flash with natural light shaping',
    descriptionAr: 'فلاش احترافي للكاميرا مع تشكيل ضوء طبيعي',
    price: 1095,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1533747122906-9ac7835bfeb0',
    specs: {
      power: '76Ws',
      batteryLife: '450 flashes',
      recycleTime: '1s',
    },
    stock: 9,
    rating: 4.8,
    reviews: 51,
  },

  // Accessories
  {
    id: '16',
    name: 'DJI RS 3 Pro',
    nameAr: 'دي جي آي RS 3 Pro',
    description: 'Professional 3-axis camera gimbal stabilizer',
    descriptionAr: 'مثبت كاميرا احترافي ثلاثي المحاور',
    price: 999,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    specs: {
      payload: '4.5kg',
      battery: '12 hours',
      weight: '1.3kg',
    },
    stock: 6,
    rating: 4.8,
    reviews: 47,
  },
  {
    id: '17',
    name: 'Peak Design Travel Tripod',
    nameAr: 'بيك ديزاين حامل كاميرا للسفر',
    description: 'Professional carbon fiber travel tripod',
    descriptionAr: 'حامل كاميرا احترافي من ألياف الكربون للسفر',
    price: 599,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    specs: {
      maxHeight: '152cm',
      weight: '1.27kg',
      capacity: '9.1kg',
    },
    stock: 11,
    rating: 4.9,
    reviews: 83,
  },
  {
    id: '18',
    name: 'ProGrade Digital CFexpress',
    nameAr: 'برو جريد CFexpress',
    description: '256GB professional memory card',
    descriptionAr: 'بطاقة ذاكرة احترافية 256 جيجابايت',
    price: 349,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    specs: {
      capacity: '256GB',
      readSpeed: '1700MB/s',
      writeSpeed: '1500MB/s',
    },
    stock: 20,
    rating: 4.7,
    reviews: 36,
  },
  {
    id: '19',
    name: 'SmallRig Camera Cage',
    nameAr: 'سمول ريج قفص كاميرا',
    description: 'Professional camera cage with multiple mounting points',
    descriptionAr: 'قفص كاميرا احترافي مع نقاط تثبيت متعددة',
    price: 149,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    specs: {
      material: 'Aluminum',
      weight: '380g',
      compatibility: 'Universal',
    },
    stock: 25,
    rating: 4.6,
    reviews: 58,
  },
  {
    id: '20',
    name: 'Think Tank Photo Backpack',
    nameAr: 'ثينك تانك حقيبة ظهر',
    description: 'Professional camera backpack with laptop compartment',
    descriptionAr: 'حقيبة ظهر احترافية للكاميرا مع حجرة للحاسوب المحمول',
    price: 299,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    specs: {
      capacity: '25L',
      laptopSize: '15"',
      waterproof: 'Yes',
    },
    stock: 14,
    rating: 4.8,
    reviews: 72,
  },

  // Backdrops
  {
    id: '21',
    name: 'Savage Seamless Paper',
    nameAr: 'خلفية ورقية سافاج',
    description: '2.72m x 11m professional backdrop paper',
    descriptionAr: 'ورق خلفية احترافي 2.72م × 11م',
    price: 69,
    category: 'backdrops',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
    specs: {
      width: '2.72m',
      length: '11m',
      color: 'Pure White',
    },
    stock: 30,
    rating: 4.7,
    reviews: 94,
  },
  {
    id: '22',
    name: 'Kate Abstract Backdrop',
    nameAr: 'خلفية كيت التجريدية',
    description: 'Professional hand-painted canvas backdrop',
    descriptionAr: 'خلفية قماشية مرسومة يدويًا احترافية',
    price: 199,
    category: 'backdrops',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
    specs: {
      material: 'Canvas',
      size: '2.2m x 2.2m',
      washable: 'Yes',
    },
    stock: 8,
    rating: 4.8,
    reviews: 37,
  },
  {
    id: '23',
    name: 'Neewer Chromakey Green Screen',
    nameAr: 'نيور شاشة خضراء كروماكي',
    description: 'Collapsible green screen with stand',
    descriptionAr: 'شاشة خضراء قابلة للطي مع حامل',
    price: 149,
    category: 'backdrops',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
    specs: {
      size: '1.8m x 2.8m',
      material: 'Muslin',
      portable: 'Yes',
    },
    stock: 16,
    rating: 4.6,
    reviews: 63,
  },
  {
    id: '24',
    name: 'Lastolite Urban Backdrop',
    nameAr: 'خلفية لاستولايت أوربان',
    description: 'Collapsible urban background',
    descriptionAr: 'خلفية حضرية قابلة للطي',
    price: 199,
    category: 'backdrops',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
    specs: {
      size: '1.5m x 2.1m',
      reversible: 'Yes',
      weight: '2kg',
    },
    stock: 7,
    rating: 4.7,
    reviews: 29,
  },
  {
    id: '25',
    name: 'Impact Muslin Background',
    nameAr: 'خلفية إمباكت موسلين',
    description: 'Professional muslin backdrop with stand kit',
    descriptionAr: 'خلفية موسلين احترافية مع طقم حامل',
    price: 159,
    category: 'backdrops',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
    specs: {
      size: '3m x 6m',
      material: 'Muslin',
      includes: 'Stand Kit',
    },
    stock: 13,
    rating: 4.5,
    reviews: 48,
  },
];