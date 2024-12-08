import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Layout, 
  Camera, 
  Mountain, 
  Leaf, 
  ZoomIn, 
  Calendar, 
  Shirt, 
  ShoppingBag, 
  Utensils 
} from 'lucide-react';
import { cn } from '../utils/cn';

const categories = [
  { id: 'all', icon: Layout, label: 'الكل', labelEn: 'All' },
  { id: 'portrait', icon: Camera, label: 'بورتريه', labelEn: 'Portrait' },
  { id: 'landscape', icon: Mountain, label: 'مناظر طبيعية', labelEn: 'Landscape' },
  { id: 'wildlife', icon: Leaf, label: 'حياة برية', labelEn: 'Wildlife' },
  { id: 'macro', icon: ZoomIn, label: 'ماكرو', labelEn: 'Macro' },
  { id: 'event', icon: Calendar, label: 'مناسبات', labelEn: 'Events' },
  { id: 'fashion', icon: Shirt, label: 'أزياء', labelEn: 'Fashion' },
  { id: 'product', icon: ShoppingBag, label: 'منتجات', labelEn: 'Product' },
  { id: 'food', icon: Utensils, label: 'طعام', labelEn: 'Food' }
];

const galleryItems = [
  {
    id: 1,
    category: 'portrait',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    title: 'Portrait Photography',
    description: 'Professional studio portrait'
  },
  {
    id: 2,
    category: 'landscape',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    title: 'Mountain Vista',
    description: 'Sunrise over mountains'
  },
  {
    id: 3,
    category: 'wildlife',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
    title: 'Wildlife Photography',
    description: 'Lion in natural habitat'
  },
  {
    id: 4,
    category: 'macro',
    image: 'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=600&fit=crop',
    title: 'Macro Photography',
    description: 'Water droplet on leaf'
  },
  {
    id: 5,
    category: 'event',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    title: 'Wedding Photography',
    description: 'Capturing special moments'
  },
  {
    id: 6,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
    title: 'Fashion Photography',
    description: 'High-end fashion shoot'
  },
  {
    id: 7,
    category: 'portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    title: 'Natural Light Portrait',
    description: 'Outdoor portrait session'
  },
  {
    id: 8,
    category: 'landscape',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    title: 'Waterfall',
    description: 'Long exposure waterfall'
  },
  {
    id: 9,
    category: 'product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    title: 'Product Photography',
    description: 'Commercial product shoot'
  },
  {
    id: 10,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop',
    title: 'Food Photography',
    description: 'Culinary arts'
  },
  {
    id: 11,
    category: 'event',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    title: 'Corporate Event',
    description: 'Business conference coverage'
  },
  {
    id: 12,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
    title: 'Street Fashion',
    description: 'Urban fashion photography'
  }
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('gallery.title')}
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600"
              )}
            >
              <category.icon className="w-4 h-4" />
              <span>{i18n.language === 'ar' ? category.label : category.labelEn}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                )}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300"
                       style={{ transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}