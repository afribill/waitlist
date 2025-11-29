import React from 'react';
import { FeatureCardProps } from '../types';
import { Smartphone, FileCheck, BookOpenCheck, Globe2 } from 'lucide-react';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
      <div className="text-brand-primary group-hover:text-brand-accent transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Smart Invoices",
      description: "Create professional invoices in seconds, share via WhatsApp, email, or PDF, and see who has paid at a glance."
    },
    {
      icon: <BookOpenCheck className="w-8 h-8" />,
      title: "Clean Receipts & Records",
      description: "Generate digital receipts and keep all your transactions organised in one place — no more missing books or torn papers."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Tax-Ready in Seconds",
      description: "AfriBill helps you organize your numbers so tax conversations become simple, not stressful."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Built for African SMEs",
      description: "Designed with African business realities in mind — flexible payments, multiple customers, mobile-first experience."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Why businesses are excited about AfriBill
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to manage your business finances, simplified.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};