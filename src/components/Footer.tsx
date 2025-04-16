import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">Bloom Decor</h3>
            <p className="text-neutral-600 mb-4">
              Creating unforgettable wedding decor that celebrates your unique love story and cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-600 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#mandaps" className="text-neutral-600 hover:text-gold transition-colors">
                  Wedding Mandaps
                </Link>
              </li>
              <li>
                <Link to="/services#reception" className="text-neutral-600 hover:text-gold transition-colors">
                  Reception Decor
                </Link>
              </li>
              <li>
                <Link to="/services#floral" className="text-neutral-600 hover:text-gold transition-colors">
                  Floral Design
                </Link>
              </li>
              <li>
                <Link to="/services#planning" className="text-neutral-600 hover:text-gold transition-colors">
                  Event Planning
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gold" />
                <a 
                  href="mailto:info@bloomdecor.com" 
                  className="text-neutral-600 hover:text-gold transition-colors"
                >
                  info@bloomdecor.com
                </a>
              </li>
              <li>
                <p className="text-neutral-600">
                  123 Wedding Lane<br />
                  Chicago, IL 60601
                </p>
              </li>
              <li>
                <p className="text-neutral-600">
                  (555) 123-4567
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              &copy; {currentYear} Bloom Decor. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-neutral-500 hover:text-gold transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-500 hover:text-gold transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
