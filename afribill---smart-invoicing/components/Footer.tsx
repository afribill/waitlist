import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V21L6 18L9 21L12 18L15 21L18 18L21 21V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               <span className="text-white font-bold text-lg">AfriBill</span>
            </div>
            <p className="text-sm">Smart Invoicing for African Businesses.</p>
            <p className="text-brand-accent font-medium text-sm">#NoWahalaBusiness</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} AfriBill. All rights reserved.</p>
          <a href="/admin" className="opacity-30 hover:opacity-100 hover:text-brand-accent transition-all duration-300">
            Admin Access
          </a>
        </div>
      </div>
    </footer>
  );
};