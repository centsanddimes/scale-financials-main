import React from 'react';
import ScaleLogo from '@/components/ScaleLogo';
import FinanceGraphics from '@/components/FinanceGraphics';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-8 pt-8 pb-4">
        <div className="max-w-[90rem] w-full mx-auto">
          <div className="w-fit">
            <ScaleLogo className="h-40 md:h-48" />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 py-16 lg:py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Close Books <span className="scale-gradient-text">Faster</span>, at Scale
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Automated Close Management for Accountants | 
            Works with QuickBooks, Xero & More
          </p>
          
          <WaitlistForm />
        </div>
        
        {/* Right Column - Graphics */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
          <FinanceGraphics />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="container mx-auto py-6 px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Scale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
