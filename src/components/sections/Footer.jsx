import React from 'react';
import PerfectLoomLogo from '../Loomlogo';

const Footer = ({ isLight, footerRef }) => {
    return (
        <footer 
            ref={footerRef} 
            className={`pt-20 pb-20 px-12 border-t relative z-10 overflow-hidden ${isLight ? 'border-black/5 bg-[#F5F5F7]' : 'border-white/5 bg-[#000103]'}`}
        >
            {/* INTERNATIONAL GRADE COSMIC ENGINE */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Layer 1: Deep Midnight Base */}
                <div className="absolute inset-0 bg-[#000103]" />

                {/* Layer 2: Volumetric Fog & Clouds */}
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.15)_0%,_transparent_70%)] blur-[100px] animate-nebula-drift" />
                    <div className="absolute -bottom-[20%] -right-[10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(124,58,237,0.1)_0%,_transparent_70%)] blur-[120px] animate-nebula-drift-reverse" />
                    <div className="absolute top-[20%] left-[-20%] w-[60%] h-[40%] bg-blue-900/10 blur-[130px] rounded-[100%] animate-cloud-move" />
                    <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[30%] bg-indigo-900/10 blur-[110px] rounded-[100%] animate-cloud-move-reverse" />
                </div>

                {/* Layer 3: The Shimmering Starfield */}
                <div className="absolute inset-0">
                    {[...Array(120)].map((_, i) => (
                        <div key={i} className="absolute bg-white rounded-full animate-star-brilliance"
                            style={{
                                width: Math.random() > 0.9 ? '3px' : '1px',
                                height: Math.random() > 0.9 ? '3px' : '1px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animationDelay: `${Math.random() * 22}s`,
                                opacity: Math.random() * 0.9,
                                boxShadow: Math.random() > 0.9 ? '0 0 12px 2px rgba(255,255,255,0.4)' : '0 0 6px 1px rgba(255,255,255,0.1)'
                            }}
                        />
                    ))}
                </div>

                {/* Layer 4: Real Comets */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-comet-streak"
                            style={{
                                top: (i === 0 ? 25 : 55) + Math.random() * 10 + '%',
                                left: '110%',
                                animationDelay: i === 0 ? '5s' : '18s',
                            }}
                        >
                            <div className="absolute top-1/2 left-0 w-64 h-[1.5px] -translate-y-1/2 bg-gradient-to-r from-white via-blue-500/30 to-transparent rounded-full blur-[0.5px]" />
                        </div>
                    ))}
                </div>

                {/* Layer 5: Matte Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-32">
                    {/* BRAND ASSEMBLY */}
                    <div className="flex flex-col items-center group">
                        <div className="mb-16 opacity-0 animate-gsap-reveal-heavy">
                            <PerfectLoomLogo />
                        </div>
                        <div className="relative">
                            <h2 className="text-[12vw] md:text-[9vw] font-black italic tracking-tighter leading-none uppercase flex items-center opacity-0 animate-gsap-reveal-heavy delay-200">
                                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">LOOM</span>
                                <span className='mx-2 text-white/50'>-</span>
                                <span className="text-blue-600 drop-shadow-[0_0_60px_rgba(37,99,235,0.6)]">LINK</span>
                            </h2>
                        </div>
                    </div>

                    {/* QUOTE ASSEMBLY */}
                    <div className="max-w-4xl space-y-12 py-5 border-y border-white/5 opacity-0 animate-gsap-reveal-heavy delay-500">
                        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[1.2em] text-white/20">
                            Sovereign Engineering Standard
                        </h3>
                        <p className="text-3xl md:text-6xl text-blue-100/60 font-extralight italic leading-tight tracking-tighter">
                            "Intelligence without a <span className="text-white/60">lock</span> is a risk. We engineer the <span className="text-blue-600/60 font-medium">safety</span> into the architecture."
                        </p>
                    </div>
                </div>

                {/* UTILITY FOOTER */}
                <div className="flex flex-col md:flex-row justify-between items-end mt-40 pt-16 border-t border-white/5 gap-12 opacity-0 animate-gsap-reveal-heavy delay-700">
                    <div className="flex gap-16 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
                        {["Neural_Silos", "Sovereign_Shield", "Audit_Ready"].map(item => (
                            <span key={item} className="hover:text-blue-500 transition-all duration-700 cursor-crosshair">{item}</span>
                        ))}
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-white/60 uppercase tracking-[1.5em] opacity-100 mb-3">
                            © 2026 LOOM-LINK
                        </p>
                        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;