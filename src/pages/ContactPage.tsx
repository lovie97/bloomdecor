
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-neutral-50">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're excited to hear about your wedding plans and how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <Contact />

      {/* Map */}
      <section className="py-8">
        <div className="container-custom">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659768.6307599146!2d-87.86857760656082!3d41.80145968578681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e444c8c99e083%3A0xda7b840a9a579334!2sChicago%20Metropolitan%20Area!5e0!3m2!1sen!2sus!4v1744831805122!5m2!1sen!2sus" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bloom Decor Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="heading-sm mb-3">How far in advance should I book your services?</h3>
              <p className="text-neutral-600">
                We recommend booking our services 6-12 months in advance for full-service decor, especially for peak wedding season dates (May-October). For smaller arrangements, 3-6 months is usually sufficient.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">Do you offer consultations before booking?</h3>
              <p className="text-neutral-600">
                Yes, we offer complimentary initial consultations to discuss your vision, needs, and budget. This helps us understand your requirements and allows you to see if we're the right fit for your event.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">What is your pricing structure?</h3>
              <p className="text-neutral-600">
                Our pricing is customized based on your specific needs, venue, and design complexity. We offer packages starting at $3,000 for basic decor services, with comprehensive design packages typically ranging from $5,000-$15,000+.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">Do you travel for weddings?</h3>
              <p className="text-neutral-600">
                Yes, we service the greater Chicago area and can travel for destination weddings with additional travel fees. We've designed weddings throughout Illinois, Wisconsin, Indiana, and Michigan.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">What happens after the wedding is over?</h3>
              <p className="text-neutral-600">
                Our team handles all breakdown and cleanup of our decor items after your event concludes. We coordinate with your venue for appropriate timing to ensure a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
