
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Bloom Decor transformed our wedding venue into an absolute dream. Every detail was perfect, and our guests couldn't stop talking about how beautiful everything looked.",
    author: "Priya & Arjun",
    role: "Married May 2023",
    image: "https://images.unsplash.com/photo-1516146857603-eba968acff73?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Bloom Decor was the best decision we made for our wedding. They understood our vision perfectly and executed it beyond our expectations.",
    author: "Aisha & Raj",
    role: "Married October 2022",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "I can't recommend Bloom Decor enough! Their attention to detail and ability to bring our ideas to life was incredible. Our mandap was absolutely stunning.",
    author: "Meera & Vikram",
    role: "Married August 2023",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Client Love</h2>
          <p className="text-neutral-600">
            Don't just take our word for it. Hear what our clients have to say about their experience with Bloom Decor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gold opacity-30">
            <Quote size={80} />
          </div>

          <div className="py-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  'transition-opacity duration-500 text-center',
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                )}
              >
                <p className="text-xl md:text-2xl text-neutral-700 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                  )}
                  <h3 className="font-serif text-xl font-medium">{testimonial.author}</h3>
                  <p className="text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              className="p-2 rounded-full border border-neutral-200 hover:border-gold transition-colors"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="p-2 rounded-full border border-neutral-200 hover:border-gold transition-colors"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
