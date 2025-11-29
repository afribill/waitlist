import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItemProps } from '../types';

const AccordionItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold text-brand-dark hover:text-brand-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-accent" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "When is AfriBill launching?",
      answer: "We’re currently in development and early testing. Join the waitlist to be the first to know the official launch date."
    },
    {
      question: "Will AfriBill be free?",
      answer: "We’re planning a free tier for small businesses, with optional paid features for those who need more power and flexibility."
    },
    {
      question: "Which countries will you support first?",
      answer: "We’re starting with African markets, especially Nigeria and other key SME hubs, then expanding step by step."
    },
    {
      question: "How will I access AfriBill?",
      answer: "AfriBill will be available via web and mobile-friendly interface, with a simple, clean dashboard."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 md:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};