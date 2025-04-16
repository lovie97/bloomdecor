
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507032336878-13f159192baa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Our team creating beautiful decorations"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="heading-lg mb-6">The Bloom Decor Story</h2>
            <p className="text-neutral-700 mb-4">
              Bloom Decor was founded on the belief that your wedding day should reflect your unique love story and cultural heritage. With over a decade of experience in Indian wedding decor, our team specializes in creating immersive, memorable environments for your celebration.
            </p>
            <p className="text-neutral-700 mb-6">
              We approach each wedding as a blank canvas, bringing together traditional elements with contemporary design to create spaces that feel both timeless and personal. Our attention to detail and commitment to excellence have made us a trusted name in wedding decor.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">250+</h3>
                <p className="text-neutral-600">Weddings Designed</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">10+</h3>
                <p className="text-neutral-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">15+</h3>
                <p className="text-neutral-600">Team Members</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">98%</h3>
                <p className="text-neutral-600">Client Satisfaction</p>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
