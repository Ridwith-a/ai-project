import React from 'react';
import { Mail } from 'lucide-react';

const FounderCard = ({ name, role, id, icon, color, bio, tags, isLight, mail }) => {
    const identity = color === 'blue' ? 'Architect' : color === 'orange' ? 'Strategist' : 'Bridge';

    const colorStyles = {
        blue: isLight ? "text-blue-700 bg-blue-600/5 border-blue-600/10" : "text-blue-400 bg-blue-500/10 border-blue-500/20",
        orange: isLight ? "text-orange-800 bg-orange-600/5 border-orange-600/10" : "text-orange-400 bg-orange-500/10 border-orange-500/20",
        teal: isLight ? "text-teal-700 bg-teal-600/5 border-teal-600/10" : "text-teal-400 bg-teal-500/10 border-teal-500/20"
    };

    return (
        <div className={`relative w-full lg:w-1/3 h-[72vh] flex flex-col group overflow-hidden rounded-[2rem] border transition-all duration-700 backdrop-blur-md
            ${isLight
                ? 'bg-white/70 border-black/5 shadow-xl'
                : 'bg-[#0a0a0c]/60 border-white/10 shadow-2xl hover:border-white/20'}`}>

            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                ${color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-transparent' : 
                  color === 'orange' ? 'bg-gradient-to-br from-orange-500/10 via-transparent to-transparent' : 
                  'bg-gradient-to-br from-teal-500/10 via-transparent to-transparent'}`} />

            <div className="relative flex-1 p-6 md:p-7 flex flex-col z-10">
                
                {/* 1. TOP ANCHOR */}
                <div className="flex justify-between items-start mb-5">
                    <div className={`p-2.5 rounded-xl border ${colorStyles[color]} transition-all duration-700 group-hover:scale-105 group-hover:rotate-3`}>
                        {React.cloneElement(icon, { size: 18 })}
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <span className={`font-mono text-[7px] uppercase tracking-[0.4em] mb-1 transition-colors duration-500
                            ${isLight ? 'text-black/40' : 'text-zinc-500 group-hover:text-blue-400'}`}>
                            {identity}
                        </span>
                        <div className={`h-[1px] w-10 bg-gradient-to-r from-transparent ${color === 'blue' ? 'to-blue-500' : color === 'orange' ? 'to-orange-500' : 'to-teal-500'}`} />
                    </div>
                </div>

                {/* 2. CENTER CONTENT */}
                <div className="flex-grow space-y-4">
                    <div className="space-y-1.5">
                        <h4 className={`text-3xl font-black italic uppercase leading-[0.9] tracking-tighter transition-all duration-500 
                            ${isLight ? 'text-black' : 'text-zinc-100 group-hover:text-white'}`}>
                            {name.replace('_', ' ')}
                        </h4>
                        <p className={`font-mono text-[8px] font-black tracking-[0.2em] uppercase ${colorStyles[color].split(' ')[0]}`}>
                            {role}
                        </p>
                    </div>

                    <a href={`mailto:${mail}`} className={`flex items-center gap-2 font-mono text-[8px] tracking-widest transition-all duration-300 opacity-40 hover:opacity-100
                        ${isLight ? 'text-black' : 'text-white'}`}>
                        <Mail size={10} /> {mail}
                    </a>

                    <p className={`text-[12px] font-light italic leading-relaxed pl-5 border-l transition-all duration-500
                        ${isLight
                            ? 'text-black/70 border-blue-600/20'
                            : 'text-zinc-400 border-white/10 group-hover:text-zinc-200'}`}>
                        {bio}
                    </p>
                </div>

                {/* 3. BOTTOM ANCHOR */}
                <div className="mt-5 pt-5 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-wrap gap-1.5">
                    {tags.map((tag, i) => (
                        <div key={i} className={`px-2.5 py-1 rounded-md border font-mono text-[7px] uppercase tracking-widest transition-all
                            ${isLight
                                ? 'bg-black/[0.03] border-black/5 text-black/40'
                                : 'bg-white/5 border-white/10 text-zinc-500 group-hover:text-zinc-300'}`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine" />
        </div>
    );
};

export default FounderCard;