import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, Twitter, Instagram } from 'lucide-react';

interface ThankYouProps {
  onBack: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-fade-in-up">
        
        {/* Branding */}
        <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V21L6 18L9 21L12 18L15 21L18 18L21 21V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 16H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-brand-dark font-bold text-2xl tracking-tight">AfriBill</span>
            </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-brand-accent" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          You’re on the AfriBill waitlist 🎉
        </h1>
        
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Thank you for signing up for early access to AfriBill. 
          We’ll email and/or WhatsApp you as soon as we launch and when early access is ready.
        </p>
        
        <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left space-y-3 border border-slate-100">
          <div className="flex items-start">
            <span className="mr-3 text-lg">✅</span>
            <span className="text-slate-700 font-medium">You’ll be among the first to try AfriBill</span>
          </div>
          <div className="flex items-start">
             <span className="mr-3 text-lg">✅</span>
            <span className="text-slate-700 font-medium">You’ll get launch updates and tips for running your business</span>
          </div>
          <div className="flex items-start">
             <span className="mr-3 text-lg">✅</span>
            <span className="text-slate-700 font-medium">You can reply to our messages with feedback</span>
          </div>
        </div>
        
        <Button onClick={onBack} fullWidth className="mb-8 py-4 text-lg">
          Back to AfriBill website
        </Button>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <span>Follow us for updates:</span>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};