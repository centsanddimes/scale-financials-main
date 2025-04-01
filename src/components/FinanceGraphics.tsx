
import React from 'react';
import { 
  PieChart, 
  BarChart3, 
  DollarSign, 
  LineChart, 
  PercentCircle, 
  CreditCard, 
  Receipt, 
  PiggyBank 
} from 'lucide-react';

const FinanceGraphics: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      
      {/* Base layer - stationary elements */}
      <div className="absolute">
        <div className="grid grid-cols-3 gap-8">
          {/* Cube 1 */}
          <div className="relative w-32 h-32 group">
            <div className="absolute inset-0 bg-scale-mint/20 transform rotate-45 border border-scale-mint/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PieChart size={40} className="text-scale-mint" />
            </div>
          </div>
          
          {/* Percentage Symbol */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "0.5s"}}>
            <PercentCircle size={80} className="text-scale-blue" />
          </div>
          
          {/* Bar Chart Cube */}
          <div className="relative w-32 h-32 animate-float" style={{animationDelay: "1s"}}>
            <div className="absolute inset-0 bg-scale-mint/20 transform rotate-45 border border-scale-mint/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BarChart3 size={40} className="text-scale-mint" />
            </div>
          </div>
          
          {/* Dollar Sign */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "1.5s"}}>
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-scale-mint/20 rounded-full"></div>
              <DollarSign size={60} className="text-scale-mint relative z-10" />
            </div>
          </div>
          
          {/* Pie Chart */}
          <div className="relative w-32 h-32 animate-float" style={{animationDelay: "2s"}}>
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="64" cy="64" r="50" stroke="#FFD68F" strokeWidth="2" fill="transparent" />
              <path d="M64 14 A50 50 0 0 1 114 64 L64 64 Z" fill="#FFD68F" fillOpacity="0.4" />
              <path d="M64 64 L64 14 A50 50 0 0 1 114 64 Z" fill="#FFD68F" fillOpacity="0.3" />
            </svg>
          </div>
          
          {/* Credit Card */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "2.5s"}}>
            <CreditCard size={60} className="text-scale-blue" />
          </div>
          
          {/* Line Chart */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "3s"}}>
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-scale-blue/20 rounded-full"></div>
              <LineChart size={50} className="text-scale-blue relative z-10" />
            </div>
          </div>
          
          {/* Receipt */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "3.5s"}}>
            <Receipt size={50} className="text-scale-gold" />
          </div>
          
          {/* Piggy Bank */}
          <div className="w-32 h-32 flex items-center justify-center animate-float" style={{animationDelay: "4s"}}>
            <PiggyBank size={50} className="text-scale-gold" />
          </div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default FinanceGraphics;
