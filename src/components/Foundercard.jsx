import React from 'react';

const FounderCard = ({ name, role, id, icon, color, bio, tags, isLight }) => {
    // Logic to assign the single-word identity based on the card's color/role
    const identity = color === 'blue' ? 'Architect' : color === 'orange' ? 'Strategist' : 'Bridge';

    const colorStyles = {
        blue: isLight ? "text-blue-700 bg-blue-600/5 border-blue-600/10" : "text-blue-400 bg-blue-500/10 border-blue-500/20",
        orange: isLight ? "text-orange-800 bg-orange-600/5 border-orange-600/10" : "text-orange-400 bg-orange-500/10 border-orange-500/20",
        teal: isLight ? "text-teal-700 bg-teal-600/5 border-teal-600/10" : "text-teal-400 bg-teal-500/10 border-teal-500/20"
    };

    return (
        <div className={`relative w-full lg:w-1/3 min-h-[620px] flex flex-col group overflow-hidden rounded-[2.5rem] border transition-all duration-700 backdrop-blur-md
            ${isLight
                ? 'bg-white/70 border-black/5 shadow-xl'
                : 'bg-[#0a0a0c]/60 border-white/10 shadow-2xl hover:border-white/20'}`}>

            {/* ANIMATED BORDER TRACE (Hover Effect) */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                ${color === 'blue' ? 'bg-gradient-to-br from-blue-500/20 via-transparent to-transparent' : 
                  color === 'orange' ? 'bg-gradient-to-br from-orange-500/20 via-transparent to-transparent' : 
                  'bg-gradient-to-br from-teal-500/20 via-transparent to-transparent'}`} />

            <div className="relative flex-1 p-10 md:p-12 flex flex-col z-10">
                
                {/* 1. TOP ANCHOR: Featuring the new Identity Word */}
                <div className="flex justify-between items-start mb-16">
                    <div className={`p-4 rounded-2xl border ${colorStyles[color]} transition-all duration-700 group-hover:scale-110 group-hover:rotate-6`}>
                        {icon}
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <span className={`font-mono text-[8px] uppercase tracking-[0.4em] mb-2 transition-colors duration-500
                            ${isLight ? 'text-black/40' : 'text-zinc-500 group-hover:text-blue-400'}`}>
                            {identity}
                        </span>
                        <div className={`h-[1px] w-16 bg-gradient-to-r from-transparent ${color === 'blue' ? 'to-blue-500' : color === 'orange' ? 'to-orange-500' : 'to-teal-500'}`} />
                    </div>
                </div>

                {/* 2. CENTER CONTENT */}
                <div className="flex-grow space-y-10">
                    <div className="space-y-4">
                        <h4 className={`text-5xl font-black italic uppercase leading-[0.85] tracking-tighter transition-all duration-500 
                            ${isLight ? 'text-black' : 'text-zinc-100 group-hover:text-white'}`}>
                            {name.replace('_', ' ')}
                        </h4>
                        <p className={`font-mono text-[10px] font-black tracking-[0.3em] uppercase ${colorStyles[color].split(' ')[0]}`}>
                            {role}
                        </p>
                    </div>

                    <p className={`text-[14px] font-light italic leading-relaxed pl-8 border-l-2 transition-all duration-500
                        ${isLight
                            ? 'text-black/70 border-blue-600/20'
                            : 'text-zinc-400 border-white/10 group-hover:text-zinc-200 group-hover:border-white/30'}`}>
                        {bio}
                    </p>
                </div>

                {/* 3. BOTTOM ANCHOR */}
                <div className="mt-16 pt-8 border-t border-black/[0.03] dark:border-white/[0.03] flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <div key={i} className={`px-4 py-1.5 rounded-md border font-mono text-[8px] uppercase tracking-widest transition-all
                            ${isLight
                                ? 'bg-black/[0.03] border-black/5 text-black/50'
                                : 'bg-white/5 border-white/10 text-zinc-500 group-hover:text-zinc-300'}`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* DYNAMIC LIGHT REFRACTION */}
            <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine" />
        </div>
    );
};

export default FounderCard;