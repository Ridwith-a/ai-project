import React from 'react';

const ServicePillar = ({ icon, title, desc, command, isLight }) => {
    return (
        <div className={`flex flex-col justify-between h-full p-10 border-r border-b group transition-all duration-700 
            ${isLight 
                ? 'bg-white hover:bg-blue-50/30 border-black/5' 
                : 'bg-black/20 hover:bg-blue-900/10 border-white/5'}`}>
            
            <div>
                {/* ICON ASSEMBLY: Interactive scaling */}
                <div className="text-blue-500 mb-8 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-500">
                    {icon}
                </div>
                
                <h3 className={`text-3xl font-black uppercase italic mb-6 tracking-tighter leading-none transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                    {title}
                </h3>
                
                <p className={`text-lg leading-relaxed mb-10 font-light opacity-60 group-hover:opacity-100 transition-opacity ${isLight ? 'text-black' : 'text-white'}`}>
                    {desc}
                </p>
            </div>

            {/* TERMINAL STATUS BAR: Anchored to the bottom */}
            <div className="mt-auto">
                <div className={`font-mono text-[9px] p-3 border tracking-widest uppercase transition-colors 
                    ${isLight 
                        ? 'bg-black/5 border-black/5 text-blue-600' 
                        : 'bg-blue-500/5 border-blue-500/10 text-blue-500/60'}`}>
                    {`> AI_STATUS: ${command}`}
                </div>
            </div>
        </div>
    );
};

export default ServicePillar;