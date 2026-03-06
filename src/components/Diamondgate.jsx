import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react'; // Added missing ArrowRight

// Define the component as the main function
const DiamondGate = ({ title, subtitle, isLight }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 group">
        {/* THE CORE DIAMOND ASSEMBLY */}
        <div className={`w-28 h-28 rotate-45 border-2 flex items-center justify-center backdrop-blur-md transition-all duration-500
            ${isLight
                ? 'border-orange-600 bg-orange-600/5 shadow-[0_0_30px_rgba(234,88,12,0.1)]'
                : 'border-orange-500/60 bg-orange-500/10 shadow-[0_0_40px_rgba(249,115,22,0.15)]'}`}>
            
            <div className="-rotate-45 text-center flex flex-col items-center">
                <ShieldCheck size={20} className={`${isLight ? 'text-orange-700' : 'text-orange-500'} mb-1 animate-pulse`} />
                <h4 className={`text-[8px] font-black uppercase tracking-tighter leading-tight 
                    ${isLight ? 'text-orange-900' : 'text-orange-100'}`}>
                    {title}
                </h4>
                <p className={`text-[6px] uppercase mt-1 
                    ${isLight ? 'text-orange-800/60' : 'text-orange-100/50'}`}>
                    {subtitle}
                </p>
            </div>
        </div>

        {/* ADAPTIVE CONFIDENCE LABELS */}
        <div className={`absolute -top-8 right-[-20px] text-[7px] font-black font-mono tracking-tighter uppercase italic flex items-center gap-1
            ${isLight ? 'text-green-700' : 'text-green-500/80'}`}>
            High Confidence <ArrowRight size={8} />
        </div>
        
        <div className={`absolute -bottom-8 right-[-20px] text-[7px] font-black font-mono tracking-tighter uppercase italic flex items-center gap-1
            ${isLight ? 'text-red-700' : 'text-red-500/80'}`}>
            Low Confidence <ArrowRight size={8} />
        </div>
    </div>
  );
};

export default DiamondGate;