import React from 'react';
import { ShoppingBag, Utensils, Brush, Truck, Laptop } from 'lucide-react';

export const Audience: React.FC = () => {
  const audienceList = [
    { icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />, label: "Shop owners & retailers" },
    { icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />, label: "Small food & catering businesses" },
    { icon: <Brush className="w-5 h-5 md:w-6 md:h-6" />, label: "Service providers & freelancers" },
    { icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />, label: "Vendors, suppliers & market traders" },
    { icon: <Laptop className="w-5 h-5 md:w-6 md:h-6" />, label: "Online business owners" },
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-dark text-white overflow-hidden relative">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Made for real everyday businesses
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              If you collect money, send invoices, or record sales — AfriBill is for you. We've stripped away the complexity of traditional accounting software to give you exactly what you need.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
                <p className="italic text-slate-200 text-sm md:text-base">"Finally, an app that understands how business is actually done in our markets."</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid gap-3 md:gap-4">
              {audienceList.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 md:p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors"
                >
                  <div className="p-2 md:p-3 rounded-lg bg-brand-accent/20 text-brand-accent mr-3 md:mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-base md:text-lg font-medium text-slate-100">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};