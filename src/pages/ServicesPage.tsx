
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetail = ({ title, description, image, features }: {
  title: string;
  description: string;
  image: string;
  features: string[];
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className={`lg:order-${title.includes('Reception') || title.includes('Event') ? '2' : '1'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className={`lg:order-${title.includes('Reception') || title.includes('Event') ? '1' : '2'}`}>
        <h2 className="heading-lg mb-6">{title}</h2>
        <p className="text-neutral-700 mb-6">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-gold/20 text-gold rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a href="/contact" className="btn-primary">
          Inquire About This Service
        </a>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Wedding Mandaps",
      description: "Our custom-designed mandaps are the centerpiece of any Indian wedding ceremony. We create stunning structures that blend traditional elements with your personal style, ensuring a beautiful and meaningful setting for your sacred vows.",
      image: "https://www.theknot.com/tk-media/images/b4839e70-d188-11e4-be0a-22000aa61a3e~rs_1094.h",
      features: [
        "Custom design consultations to match your vision",
        "Integration of traditional and modern elements",
        "Premium fabric selections and draping",
        "Customized floral arrangements",
        "Coordinated seating for families",
        "Specialized lighting design"
      ]
    },
    {
      title: "Reception Decor",
      description: "Transform your reception venue into an elegant and immersive environment that reflects your style as a couple. Our reception decor services cover everything from table settings to lighting, creating a cohesive and beautiful atmosphere for your celebration.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1598&q=80",
      features: [
        "Complete venue transformation",
        "Custom table settings and centerpieces",
        "Elegant backdrop designs for the head table",
        "Coordinated color schemes and themes",
        "Specialized lighting and ambiance creation",
        "Dance floor and stage design"
      ]
    },
    {
      title: "Floral Design",
      description: "Flowers bring life, color, and fragrance to your celebration. Our floral design team creates stunning arrangements that enhance the beauty of your wedding day, from personal flowers to elaborate venue decorations.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Personalized bridal bouquets and accessories",
        "Family and wedding party florals",
        "Ceremony and mandap floral design",
        "Reception table centerpieces",
        "Specialized installations and hanging designs",
        "Seasonal flower selection guidance"
      ]
    },
    {
      title: "Event Planning",
      description: "Our comprehensive planning services ensure that every aspect of your celebration is thoughtfully organized and flawlessly executed. We handle the logistics so you can focus on enjoying your special day.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      features: [
        "Vendor coordination and management",
        "Timeline development and scheduling",
        "Budget planning and tracking",
        "Day-of coordination",
        "Full-service planning from engagement to wedding day",
        "Cultural tradition integration"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-neutral-50">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We offer a comprehensive range of wedding decor and design services to create your perfect celebration.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-8">
        <div className="container-custom">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <ServiceDetail {...service} />
              {index < services.length - 1 && <hr className="border-t border-neutral-200 my-8" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Ready to Create Your Dream Wedding?</h2>
          <p className="text-neutral-600 mb-8">
            Contact us today to schedule a consultation. We'll discuss your vision, needs, and how we can bring your dream wedding to life.
          </p>
          <a href="/contact" className="btn-primary">
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
