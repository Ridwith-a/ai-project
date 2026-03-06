import React from 'react';

const PerfectLoomLogo = () => {
    return (
        <div className="relative group p-12 select-none scale-150">
            {/* ATMOSPHERIC FIELD: Subtly illuminates the cosmos background */}
            <div className="absolute inset-0 bg-blue-500/[0.03] blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative w-32 h-32 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                        {/* High-Contrast Gradient for the dual strokes */}
                        <linearGradient id="dual-l-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="white" />
                            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* OUTER L (The Loom): Thick Architectural Stroke */}
                    <path
                        d="M30 20 V70 C 30 75, 35 80, 40 80 H80"
                        fill="none"
                        stroke="url(#dual-l-grad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:stroke-blue-500"
                    />

                    {/* INNER L (The Link): Thin Security Trace */}
                    <path
                        d="M45 20 V58 C 45 64, 50 68, 56 68 H80"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        className="opacity-10 group-hover:opacity-40 transition-all duration-1000 group-hover:animate-shimmer-trace"
                        style={{ strokeDasharray: '100', strokeDashoffset: '100' }}
                    />
                </svg>

                {/* THE SOVEREIGN FRAME: A geometric enclosure representing security */}
                <div className="absolute inset-2 border-[0.5px] border-white/5 rounded-[2.5rem] group-hover:border-blue-500/20 transition-all duration-1000 group-hover:scale-105" />
            </div>

            {/* Component-scoped Animation Logic */}
            <style>{`
                @keyframes shimmerTrace {
                  0% { stroke-dashoffset: 100; opacity: 0.1; }
                  50% { stroke-dashoffset: 0; opacity: 0.6; }
                  100% { stroke-dashoffset: -100; opacity: 0.1; }
                }
                .group-hover\\:animate-shimmer-trace {
                  animation: shimmerTrace 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default PerfectLoomLogo;