import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent md:w-8 md:h-8">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V21L6 18L9 21L12 18L15 21L18 18L21 21V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 8H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 16H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           <span className="text-white font-bold text-lg md:text-xl tracking-tight">AfriBill</span>
        </div>
        
        <Button 
          variant="primary" 
          onClick={scrollToWaitlist}
          className={`py-2 px-3 md:px-4 text-xs md:text-sm ${!scrolled ? 'bg-white/10 hover:bg-white/20 text-white shadow-none' : ''}`}
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};