
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-medium">
          Bloom Decor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col items-center space-y-6 p-8">
          <Link to="/" className="nav-link text-xl" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="nav-link text-xl" onClick={toggleMenu}>Services</Link>
          <Link to="/gallery" className="nav-link text-xl" onClick={toggleMenu}>Gallery</Link>
          <Link to="/about" className="nav-link text-xl" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="nav-link text-xl" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
