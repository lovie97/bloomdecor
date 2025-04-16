
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
      image: 'https://xn--imaginedcor-ibb.studio/wp-content/uploads/2023/03/service-1.jpg',
      link: '/services#mandaps'
    },
    {
      title: 'Reception Decor',
      description: 'Transform your reception venue with elegant and cohesive design elements.',
      image: 'https://xn--imaginedcor-ibb.studio/wp-content/uploads/2023/03/service-2.jpg',
      link: '/services#reception'
    },
    {
      title: 'Floral Design',
      description: 'Stunning floral arrangements that enhance the beauty of your celebration.',
      image: 'https://xn--imaginedcor-ibb.studio/wp-content/uploads/2023/03/service-3.jpg',
      link: '/services#floral'
    },
    {
      title: 'Event Planning',
      description: 'Comprehensive planning services to ensure your event unfolds flawlessly.',
      image: 'https://xn--imaginedcor-ibb.studio/wp-content/uploads/2023/03/service-4.jpg',
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
