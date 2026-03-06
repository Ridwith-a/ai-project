import React from 'react';

const SolutionCard = ({ num, title, desc, tag, icon, isLight }) => {
    return (
        <div className="solution-card w-screen h-screen flex-shrink-0 flex items-center justify-center px-10 relative overflow-hidden">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
                
                {/* LEFT CONTENT: TYPOGRAPHY */}
                <div className="space-y-10 z-10 text-left">
                    <div className="flex items-center gap-4">
                        <span className="text-blue-600 font-mono text-2xl font-black">{num} //</span>
                        <span className={`text-xs tracking-[0.5em] uppercase opacity-50 ${isLight ? 'text-black' : 'text-white'}`}>
                            {tag}
                        </span>
                    </div>
                    
                    <h2 className="text-[10vw] lg:text-[7vw] font-black italic tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600">
                        {title}
                    </h2>
                    
                    <p className={`text-xl md:text-3xl font-light leading-relaxed max-w-xl transition-colors duration-500 ${isLight ? 'text-black/60' : 'text-white/40'}`}>
                        {desc}
                    </p>
                </div>

                {/* RIGHT CONTENT: VISUAL ANCHOR */}
                <div className="relative flex justify-center opacity-20 lg:opacity-100">
                    <div className="absolute w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
                    <div className="scale-150 text-blue-600 transition-transform duration-700 group-hover:scale-175">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionCard;