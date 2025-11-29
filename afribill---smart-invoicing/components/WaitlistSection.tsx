import React from 'react';
import { WaitlistForm } from './WaitlistForm';

interface WaitlistSectionProps {
  onSuccess?: () => void;
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ onSuccess }) => {
  return (
    <section id="waitlist-section" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-100 shadow-xl relative overflow-hidden">
          
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 relative z-10">
            Join the AfriBill Early Access List
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">
            We’re putting the final touches on AfriBill and inviting a small group of early users to test it first.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 text-left relative z-10">
            {[
              "Get notified the moment we launch",
              "Receive early access opportunities",
              "Help shape the future with your feedback"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center md:justify-start p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-brand-action mr-3"></div>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <WaitlistForm variant="footer" onSuccess={onSuccess} />
            <p className="mt-6 text-brand-accent font-medium">
              Join hundreds of African entrepreneurs getting ready for #NoWahalaBusiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
