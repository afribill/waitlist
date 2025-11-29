import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            What is AfriBill?
          </h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            AfriBill is a smart invoicing and business record app built specifically for <span className="font-semibold text-brand-dark">African entrepreneurs, SMEs, and freelancers</span>.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Instead of scattered receipts, handwritten notes, and confusing spreadsheets, AfriBill gives you one simple place to manage invoices, receipts, sales records, and tax-related information. 
          </p>
          <p className="text-lg font-medium text-brand-dark">
            Whether you sell products, services, or both, AfriBill helps you run your business like a pro.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-8">
            {['Invoices', 'Receipts', 'Sales Records', 'Tax Info'].map((item, idx) => (
               <div key={idx} className="bg-slate-50 p-3 md:p-4 rounded-lg border border-slate-100 shadow-sm text-brand-primary font-semibold text-sm md:text-base">
                  {item}
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};