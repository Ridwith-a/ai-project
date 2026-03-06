import React from 'react';

const ArchNode = ({ title, subtitle, icon, isOperational, isLight }) => {
  return (
    <div className={`relative group w-full max-w-[210px] p-6 rounded-[1.5rem] border backdrop-blur-3xl transition-all duration-700 
        ${isOperational
            ? isLight ? 'bg-teal-600/5 border-teal-600/20' : 'bg-teal-500/5 border-teal-500/20'
            : isLight ? 'bg-blue-600/5 border-blue-600/20' : 'bg-blue-500/5 border-blue-500/20'}
        ${isLight ? 'hover:border-blue-600/50 shadow-sm' : 'hover:border-blue-400/50'}`}>
        
        {/* ICON ASSEMBLY */}
        <div className={`mb-3 transition-transform duration-500 group-hover:scale-110 
            ${isOperational ? isLight ? 'text-teal-700' : 'text-teal-400' : isLight ? 'text-blue-700' : 'text-blue-400'}`}>
            {icon}
        </div>

        {/* TEXT CONTENT */}
        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] leading-tight mb-1 
            ${isLight ? 'text-black' : 'text-white'}`}>{title}</h4>
        
        <p className={`text-[8px] font-mono uppercase tracking-widest leading-none 
            ${isLight ? 'opacity-60 text-black' : 'opacity-40 text-white'}`}>{subtitle}</p>
    </div>
  );
};

export default ArchNode;