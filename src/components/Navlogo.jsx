import React from 'react';

const LoomLinkNavLogo = ({ isLight }) => {
    return (
        <div className="relative group select-none w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* OUTER L (The Loom): Adaptive color logic */}
                <path
                    d="M30 25 V70 C 30 75, 35 80, 40 80 H75"
                    fill="none"
                    stroke={isLight ? "black" : "white"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={`transition-all duration-700 group-hover:stroke-blue-600 ${isLight ? 'opacity-100' : 'opacity-80'}`}
                />

                {/* INNER L (The Link): Adaptive color logic */}
                <path
                    d="M45 25 V60 C 45 65, 50 68, 55 68 H75"
                    fill="none"
                    stroke={isLight ? "black" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className={`transition-all duration-700 ${isLight ? 'opacity-60 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-50'}`}
                />
            </svg>
        </div>
    );
};

export default LoomLinkNavLogo;