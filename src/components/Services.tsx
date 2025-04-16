
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-neutral-800 hover:text-gold transition-colors"
        >
          Learn more <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Wedding Mandaps',
      description: 'Custom designed mandaps that blend tradition with your personal style.',
      image: 'https://images.unsplash.com/photo-1617401371361-47000b4feacc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      link: '/services#mandaps'
    },
    {
      title: 'Reception Decor',
      description: 'Transform your reception venue with elegant and cohesive design elements.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1598&q=80',
      link: '/services#reception'
    },
    {
      title: 'Floral Design',
      description: 'Stunning floral arrangements that enhance the beauty of your celebration.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      link: '/services#floral'
    },
    {
      title: 'Event Planning',
      description: 'Comprehensive planning services to ensure your event unfolds flawlessly.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      link: '/services#planning'
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-neutral-600">
            We specialize in creating breathtaking wedding environments that reflect your unique love story and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
