import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
}

const categories = ['All', 'Mandaps', 'Receptions', 'Sangeet', 'Mehndi'];

const galleryItems: GalleryItemProps[] = [
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-1.jpg',
    category: 'Mandaps',
    title: 'Traditional Red Mandap'
  },
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-2.jpg',
    category: 'Receptions',
    title: 'Elegant Ballroom Setup'
  },
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-3.jpg',
    category: 'Sangeet',
    title: 'Colorful Night Celebration'
  },
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-4.jpg',
    category: 'Mehndi',
    title: 'Garden Mehndi Setup'
  },
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-5.jpg',
    category: 'Receptions',
    title: 'Modern Minimalist Reception'
  },
  {
    image: 'https://imaginedcor.studio/wp-content/uploads/2021/09/gallery-6.jpg',
    category: 'Mandaps',
    title: 'Contemporary White Mandap'
  },
];

const GalleryItem = ({ image, category, title }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm uppercase tracking-wider mb-1">{category}</p>
          <h3 className="font-serif text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <p className="text-neutral-600">
            Explore our collection of beautifully decorated wedding venues and ceremonial spaces.
          </p>
        </div>

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
            <GalleryItem key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
