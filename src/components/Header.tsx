import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
    
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container-content flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }} 
          className="text-xl font-semibold text-foreground"
        >
          <span className="text-fintech-600">V</span>enkat Sai
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={cn(
            'w-5 h-0.5 bg-foreground transition-all duration-300 mb-1.5',
            mobileMenuOpen && 'transform rotate-45 translate-y-2'
          )}></span>
          <span className={cn(
            'w-5 h-0.5 bg-foreground transition-all duration-300',
            mobileMenuOpen && 'opacity-0'
          )}></span>
          <span className={cn(
            'w-5 h-0.5 bg-foreground transition-all duration-300 mt-1.5',
            mobileMenuOpen && 'transform -rotate-45 -translate-y-2'
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm md:hidden',
          'transform transition-all duration-300 ease-in-out',
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="container-content py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="py-3 px-4 hover:bg-muted/50 rounded-md my-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
