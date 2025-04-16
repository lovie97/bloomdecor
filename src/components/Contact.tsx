
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="text-neutral-600">
            Ready to discuss your wedding decor plans? We'd love to hear from you and help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-neutral-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-neutral-600">info@bloomdecor.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Studio Location</h4>
                  <p className="text-neutral-600">123 Wedding Lane<br />Chicago, IL 60601</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-neutral-600">Monday - Friday: 10am - 6pm<br />Saturday: By appointment only<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-sm mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="event-date" className="block text-sm font-medium text-neutral-700 mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  name="event-date"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                  placeholder="Tell us about your event"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
