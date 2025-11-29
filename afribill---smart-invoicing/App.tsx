import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { WaitlistSection } from './components/WaitlistSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show Thank You page when form is successfully submitted
  if (isSubmitted) {
    return <ThankYou onBack={() => setIsSubmitted(false)} />;
  }

  const handleSuccess = () => {
    setIsSubmitted(true);
    // Ensure we start at the top of the thank you page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-accent selection:text-white">
      <Header />
      <main>
        <Hero onSuccess={handleSuccess} />
        <About />
        <Features />
        <Audience />
        <WaitlistSection onSuccess={handleSuccess} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;