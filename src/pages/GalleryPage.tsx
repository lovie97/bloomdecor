
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cn } from '@/lib/utils';

interface GalleryItem {
  image: string;
  category: string;
  title: string;
}

const categories = ['All', 'Mandaps', 'Receptions', 'Sangeet', 'Mehndi'];

const galleryItems: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop',
    category: 'Mandaps',
    title: 'Traditional Red Mandap'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741347686-c1e331c5053e?q=80&w=1470&auto=format&fit=crop',
    category: 'Receptions',
    title: 'Elegant Ballroom Setup'
  },
  {
    image: 'https://images.unsplash.com/photo-1611089809499-62301b8a59cc?q=80&w=1470&auto=format&fit=crop',
    category: 'Sangeet',
    title: 'Colorful Night Celebration'
  },
  {
    image: 'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?q=80&w=1470&auto=format&fit=crop',
    category: 'Mehndi',
    title: 'Garden Mehndi Setup'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop',
    category: 'Receptions',
    title: 'Modern Minimalist Reception'
  },
  {
    image: 'https://images.unsplash.com/photo-1520869578617-6b4832ef5e28?q=80&w=1470&auto=format&fit=crop',
    category: 'Mandaps',
    title: 'Contemporary White Mandap'
  },
  {
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1470&auto=format&fit=crop',
    category: 'Sangeet',
    title: 'Vibrant Dance Floor'
  },
  {
    image: 'https://images.unsplash.com/photo-1630526720753-354c1a200d88?q=80&w=1470&auto=format&fit=crop',
    category: 'Mehndi',
    title: 'Intimate Mehndi Celebration'
  },
  {
    image: 'https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?q=80&w=1470&auto=format&fit=crop',
    category: 'Mandaps',
    title: 'Outdoor Garden Mandap'
  },
  {
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop',
    category: 'Receptions',
    title: 'Luxury Hotel Ballroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=1470&auto=format&fit=crop',
    category: 'Sangeet',
    title: 'Festive Night Arrangement'
  },
  {
    image: 'https://images.unsplash.com/photo-1504448277373-b712e19c9b8d?q=80&w=1470&auto=format&fit=crop',
    category: 'Mehndi',
    title: 'Rustic Outdoor Mehndi'
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveItem(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-neutral-50">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Our Gallery</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our portfolio of beautifully decorated wedding venues and ceremonial spaces.
          </p>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  'px-4 py-2 text-sm uppercase tracking-wider transition-colors',
                  activeFilter === category
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-neutral-600 hover:text-gold'
                )}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm uppercase tracking-wider mb-1">{item.category}</p>
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Love What You See?</h2>
          <p className="text-neutral-600 mb-8">
            Let's create something beautiful together for your special day. Contact us to discuss your wedding decor needs.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
      
      {/* Lightbox */}
      {activeItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gold-light transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={activeItem.image} 
              alt={activeItem.title} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white">
              <p className="text-sm uppercase tracking-wider text-gold-light">{activeItem.category}</p>
              <h3 className="font-serif text-2xl">{activeItem.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
