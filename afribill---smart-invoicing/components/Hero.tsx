import React from 'react';
import { WaitlistForm } from './WaitlistForm';
import { CheckCircle2, FileText, Receipt, Wallet, History, LayoutGrid, Settings, Users } from 'lucide-react';

interface HeroProps {
  onSuccess?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSuccess }) => {
  return (
    <section className="relative bg-brand-dark pt-28 pb-12 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-brand-accent/10 blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-brand-action/10 blur-[80px] md:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Top Header Section (Full Width, Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="animate-gentle-pulse inline-flex items-center px-4 py-1.5 rounded-full bg-brand-action border border-brand-action text-white text-xs md:text-sm font-medium font-mono shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              COMING SOON TO AFRICAN BUSINESSES
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Smart invoicing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-teal-200">African businesses.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Create invoices, track sales, and stay tax-ready — all in one simple app made for African entrepreneurs.
          </p>
        </div>

        {/* Content Grid: Image Left | Form Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Visual / CSS Devices Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
             {/* Device Container */}
             <div className="relative w-full max-w-[400px] sm:max-w-[650px] aspect-[0.6/1] sm:aspect-[1.5/1] lg:aspect-[1.3/1] transition-all duration-300 transform lg:scale-105 origin-left">
                
                {/* Laptop (Hidden on Mobile, Visible on SM+) */}
                <div className="absolute right-0 top-[10%] w-[85%] h-[80%] bg-slate-900 rounded-xl border-[6px] border-slate-800 shadow-2xl overflow-hidden hidden sm:flex flex-col z-10 transition-transform duration-500 hover:scale-[1.01] hover:shadow-brand-accent/5">
                   {/* Laptop Header */}
                   <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                   </div>
                   {/* Laptop Screen Content - Dark Mode */}
                   <div className="flex-1 bg-brand-dark p-6 grid grid-cols-2 gap-4 place-content-center relative">
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      
                      {/* Grid Items */}
                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                            <FileText size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">Create Invoice</span>
                      </div>
                      
                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                            <Receipt size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">Create Receipt</span>
                      </div>

                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center relative group cursor-default">
                         <div className="absolute top-2 right-2 bg-yellow-500 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded">PRO</div>
                         <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                            <Wallet size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">Sales & Expenses</span>
                      </div>

                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                            <History size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">History</span>
                      </div>
                      
                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                            <LayoutGrid size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">Insights</span>
                      </div>

                      <div className="bg-brand-primary p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 text-center group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                            <Settings size={20} />
                         </div>
                         <span className="text-slate-200 font-medium text-sm">Settings</span>
                      </div>
                   </div>
                </div>

                {/* Phone (Mobile: Center/Large. Desktop: Overlay/Small) */}
                <div className={`
                    absolute 
                    left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-[100%]
                    sm:left-0 sm:translate-x-0 sm:bottom-0 sm:w-[40%] sm:h-[95%] sm:ml-4
                    bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 
                    shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden z-20 flex flex-col 
                    transition-transform duration-500 hover:-translate-y-2
                `}>
                   {/* Phone Notch/Status Bar */}
                   <div className="bg-white h-8 w-full relative shrink-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-xl"></div>
                   </div>

                   {/* Phone Screen Content - Light Mode */}
                   <div className="flex-1 bg-white flex flex-col overflow-hidden relative">
                      {/* App Header */}
                      <div className="px-5 py-4 flex items-center justify-between shrink-0">
                         <span className="font-bold text-lg text-brand-dark">AfriBill</span>
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <Settings className="w-5 h-5 text-slate-500" />
                         </div>
                      </div>

                      {/* App Grid */}
                      <div className="flex-1 p-4 grid grid-cols-2 gap-3 overflow-y-auto content-start scrollbar-none pb-8">
                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center animate-pop-in [animation-delay:100ms] aspect-square">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-brand-accent">
                               <FileText size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">Create Invoice</span>
                         </div>

                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center animate-pop-in [animation-delay:200ms] aspect-square">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-brand-accent">
                               <Receipt size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">Create Receipt</span>
                         </div>

                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center relative animate-pop-in [animation-delay:300ms] aspect-square">
                            <div className="absolute top-2 right-2 bg-yellow-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">PRO</div>
                            <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                               <Wallet size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">Sales & Expenses</span>
                         </div>

                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center animate-pop-in [animation-delay:400ms] aspect-square">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                               <History size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">History</span>
                         </div>

                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center animate-pop-in [animation-delay:500ms] aspect-square">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-brand-accent">
                               <LayoutGrid size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">Insights</span>
                         </div>

                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center animate-pop-in [animation-delay:600ms] aspect-square">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                               <Users size={24} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold leading-tight">Customers</span>
                         </div>
                      </div>

                      {/* Phone Bottom Nav Indicator */}
                      <div className="h-6 w-full flex items-center justify-center shrink-0 bg-white">
                         <div className="w-1/3 h-1 bg-slate-200 rounded-full"></div>
                      </div>
                   </div>
                </div>

             </div>
          </div>

          {/* Right: Data Capture & Features */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 backdrop-blur-sm shadow-xl">
               
               <div className="mb-8 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Join the Waitlist</h3>
                  <div className="space-y-3">
                    {[
                      "Create professional invoices in seconds",
                      "Generate clean digital receipts",
                      "See your sales and records at a glance"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start text-left">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-300 text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <WaitlistForm variant="hero" onSuccess={onSuccess} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};