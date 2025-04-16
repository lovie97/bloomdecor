
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
    image: 'https://www.theknot.com/tk-media/images/b4839e70-d188-11e4-be0a-22000aa61a3e~rs_1094.h',
    category: 'Mandaps',
    title: 'Traditional Red Mandap'
  },
  {
    image: 'https://i0.wp.com/blog.shaadishop.co/wp-content/uploads/2015/09/1002-sp_newport_beach_marriott_indian_wedding_photography.jpg?resize=720%2C480&ssl=1',
    category: 'Receptions',
    title: 'Elegant Ballroom Setup'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Sangeet',
    title: 'Colorful Night Celebration'
  },
  {
    image: 'https://d397bfy4gvgcdm.cloudfront.net/229521-RAGartistry-1163-698J3.jpeg',
    category: 'Mehndi',
    title: 'Garden Mehndi Setup'
  },
  {
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1598&q=80',
    category: 'Receptions',
    title: 'Modern Minimalist Reception'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
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
