import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Mail, Phone, Loader2, User, AlertCircle } from 'lucide-react';
import { WaitlistFormProps } from '../types';
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const supabaseUrl = 'https://qlmmqogjlpcvqxavmocy.supabase.co';
const supabaseAnonKey = 'sb_publishable_8IvPHSlA3_-rUTcORSaFcA_Vyuce9GH';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = 'hero', onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (loading) return;

    setLoading(true);
    setIsError(false);
    setErrorMessage('');
    
    try {
      // Send data to Supabase
      const { error } = await supabase
        .from('afribill_waitlist')
        .insert({
          full_name: fullName || null,
          email: email,
          whatsapp_phone: phone || null,
          consent_whatsapp: consent,
          consent_email: true,
          source: 'coming_soon_page'
        });

      if (error) {
        throw error;
      }

      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      
      // Navigate to Thank You page
      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {
      console.error('Supabase Error:', error);
      setIsError(true);
      setErrorMessage('Something went wrong adding you to the AfriBill waitlist. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-4 rounded-lg bg-white border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 text-base shadow-sm";

  return (
    <form id="waitlist-form" onSubmit={handleSubmit} className={`w-full ${variant === 'footer' ? 'max-w-md mx-auto' : ''}`}>
      <div className="space-y-4">
        
        {/* Full Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            name="full_name"
            placeholder="Your name (optional)"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`${inputClasses} pl-12`}
            disabled={loading}
          />
        </div>

        {/* WhatsApp Number */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp number (e.g. +2348012345678)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputClasses} pl-12`}
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputClasses} pl-12`}
            disabled={loading}
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 px-1">
          <input
            type="checkbox"
            name="consent_whatsapp"
            id="consent_whatsapp"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-accent focus:ring-brand-accent cursor-pointer"
            disabled={loading}
          />
          <label htmlFor="consent_whatsapp" className="text-xs md:text-sm text-slate-600 cursor-pointer select-none leading-tight">
            I agree to receive AfriBill launch updates on WhatsApp and email.
          </label>
        </div>

        <Button 
          type="submit" 
          fullWidth 
          disabled={loading}
          className="shadow-xl shadow-brand-action/20 py-4 text-lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Join the Waitlist'
          )}
        </Button>
      </div>
      
      {/* Error Message */}
      {isError && (
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-red-500 font-medium animate-fade-in">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMessage}
        </div>
      )}
      
      {/* Helper Text (Only show if no error) */}
      {!isError && (
        <p className={`mt-3 text-center text-xs md:text-sm ${variant === 'hero' ? 'text-slate-300' : 'text-slate-500'}`}>
          Be the first to know when AfriBill launches. No spam, ever.
        </p>
      )}
    </form>
  );
};