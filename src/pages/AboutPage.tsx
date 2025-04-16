
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years of experience in event design, Priya founded Bloom Decor with a vision to create meaningful, culturally rich wedding experiences."
    },
    {
      name: "Raj Patel",
      role: "Design Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Raj brings a structural engineering background to our floral and decor designs, ensuring both beauty and stability in our elaborate installations."
    },
    {
      name: "Anita Desai",
      role: "Senior Floral Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Anita's intricate understanding of traditional and contemporary floral arrangements brings a unique perspective to every wedding she designs."
    },
    {
      name: "Vikram Singh",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Vikram ensures that every Bloom Decor event runs smoothly, coordinating our team and vendors with precision and attention to detail."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-neutral-50">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">About Us</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover the passion, creativity, and expertise behind Bloom Decor.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
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
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Bloom Decor was founded in 2010 by Priya Sharma, who recognized a need for wedding decor that truly celebrated the rich cultural heritage of Indian weddings while embracing contemporary design aesthetics.
              </p>
              <p className="text-neutral-700 mb-4">
                What began as a small passion project has grown into a respected design studio with a dedicated team of artists, designers, and event specialists. We've had the honor of decorating over 250 weddings throughout the region, each one unique and personal to the couple we served.
              </p>
              <p className="text-neutral-700">
                Our approach has always been centered on understanding the couple's story and vision, then translating that into immersive environments that feel both personal and transcendent. We believe that beautiful spaces create the backdrop for beautiful memories.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Passion</h3>
              <p className="text-neutral-600">
                We bring enthusiasm and dedication to every project, treating each wedding as if it were our own.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Creativity</h3>
              <p className="text-neutral-600">
                We blend tradition with innovation, creating designs that are both timeless and fresh.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Excellence</h3>
              <p className="text-neutral-600">
                We're committed to the highest standards in every aspect of our work, from design to execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative overflow-hidden rounded-full mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-5xl text-gold mb-2">250+</h3>
              <p className="text-neutral-600 font-medium">Weddings Designed</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-5xl text-gold mb-2">10+</h3>
              <p className="text-neutral-600 font-medium">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-5xl text-gold mb-2">15+</h3>
              <p className="text-neutral-600 font-medium">Team Members</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-5xl text-gold mb-2">98%</h3>
              <p className="text-neutral-600 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-neutral-600 mb-8">
            We'd love to hear about your wedding plans and how we can help bring your vision to life.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
