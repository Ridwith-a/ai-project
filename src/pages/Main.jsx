import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
    Shield, Zap, Cpu,
    BarChart3, Terminal, Activity, ArrowRight, Sun, Moon
} from 'lucide-react';
import { Link } from 'react-router-dom';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ===============================
   SUB-COMPONENTS (Theme Aware)
================================ */

const PersonaPanel = ({ num, title, desc, icon, tag, isLight }) => (
    <section className="persona-panel w-screen h-screen flex-shrink-0 flex items-center justify-center px-10 md:px-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl items-center">
            <div className="space-y-8 relative z-10">
                <div className="text-blue-600 font-mono text-xl tracking-[0.4em] font-black">{num} //</div>
                <h2 className="text-[12vw] lg:text-[7vw] font-black tracking-tighter leading-none uppercase">{title}</h2>
                <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-xl italic transition-colors duration-700 ${isLight ? 'text-black/60' : 'text-white/30'}`}>
                    "{desc}"
                </p>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="absolute w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <motion.div
                    animate={{ y: [-15, 15, -15], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 scale-75 md:scale-100"
                >
                    {icon}
                </motion.div>
                <div className={`absolute bottom-0 right-0 md:right-10 border px-4 py-2 backdrop-blur-md transition-all duration-700 ${isLight ? 'border-black/10 bg-white/50' : 'border-white/10 bg-black/50'}`}>
                    <span className={`text-[10px] font-mono tracking-[0.3em] uppercase transition-colors duration-700 ${isLight ? 'text-black/40' : 'text-white/40'}`}>{tag}</span>
                </div>
            </div>
        </div>
    </section>
);

const ValueCard = ({ icon, title, desc, isLight }) => (
    <div className={`p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border transition-all duration-700 ${isLight ? 'bg-black/[0.03] border-black/5 hover:border-blue-600/30' : 'bg-white/[0.02] border-white/5 hover:border-blue-500/30'}`}>
        <div className="text-blue-600 mb-6 md:mb-10">{icon}</div>
        <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight uppercase">{title}</h4>
        <p className={`text-base md:text-lg leading-relaxed font-light transition-colors duration-700 ${isLight ? 'text-black/40' : 'text-white/30'}`}>{desc}</p>
    </div>
);

const PillarCard = ({ icon, title, desc, command, isLight }) => (
    <div className={`p-12 md:p-20 group transition-all duration-700 border-r border-b ${isLight ? 'bg-[#F5F5F7] hover:bg-white border-black/5' : 'bg-black hover:bg-blue-600/5 border-white/10'}`}>
        <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">{title}</h3>
        <p className={`text-lg leading-relaxed mb-10 transition-colors duration-700 ${isLight ? 'text-black/50' : 'text-white/40'}`}>{desc}</p>
        <div className={`font-mono text-[10px] p-4 border transition-all duration-700 ${isLight ? 'bg-black/5 border-black/10 text-black/40' : 'bg-blue-500/5 border-blue-500/10 text-blue-500/50'}`}>
            {command}
        </div>
    </div>
);

/* ===============================
   MAIN COMPONENT
================================ */

const LoomLinkFinal = () => {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    // 2. Save to localStorage whenever the theme changes
    useEffect(() => {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);
    const mainRef = useRef(null);
    const horizontalRef = useRef(null);
    const bgTextRef = useRef(null);
    const navRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroDescRef = useRef(null);
    const heroGlowRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
            heroTl.fromTo(heroGlowRef.current, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2, ease: "expo.out" })
                .from(heroTitleRef.current, { y: 140, skewY: 8, opacity: 0, duration: 1.6 }, "-=1.8")
                .from(heroDescRef.current, { y: 30, opacity: 0, duration: 1.2 }, "-=1.0");

            gsap.to(bgTextRef.current, {
                xPercent: -45,
                yPercent: 12,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            const panels = gsap.utils.toArray(".persona-panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + horizontalRef.current.scrollWidth,
                    invalidateOnRefresh: true,
                }
            });

            const showAnim = gsap.from(navRef.current, {
                yPercent: -100,
                paused: true,
                duration: 0.3,
                ease: "power2.out"
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: "max",
                onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                }
            });

            ScrollTrigger.refresh();
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className={`transition-colors duration-1000 font-sans overflow-x-hidden antialiased selection:bg-blue-600 ${
            isLight ? 'bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#020202] text-[#F5F5F7]'
        }`}>

            <div className="md:ps-210 ps-80 fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                <div ref={bgTextRef} className={`text-[35vw] font-black tracking-tighter leading-none select-none italic whitespace-nowrap transition-colors duration-1000 ${
                    isLight ? 'text-black/[0.09]' : 'text-white/[0.09]'
                }`}>
                    LOOM-LINK
                </div>
            </div>

            {/* RESPONSIVE NAV */}
            <nav ref={navRef} className={`fixed top-0 w-full z-[200] flex justify-between items-center px-6 md:px-12 py-6 md:py-8 backdrop-blur-md border-b transition-all duration-700 ${
                isLight ? 'bg-white/70 border-black/5' : 'bg-black/10 border-white/5'
            }`}>
                <div className="flex items-center gap-3 md:gap-4">
                     <div className="flex items-center gap-[3px] h-6 group">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-white"
                                style={{
                                    height: `${[40, 70, 100, 60, 30][i]}%`,
                                    animation: `wave 1.5s ease-in-out infinite ${i * 0.1}s`
                                }}
                            />
                        ))}
                        <style>{`
                            @keyframes wave {
                              0%, 100% { transform: scaleY(1); }
                              50% { transform: scaleY(0.6); }
                            }
                        `}</style>
                    </div>
                    <span className="text-lg md:text-xl font-black tracking-tighter uppercase">Loom-Link</span>
                </div>
                
                <div className="flex items-center gap-3 md:gap-6">
                    <button 
                        onClick={() => setIsLight(!isLight)}
                        className={`p-2.5 md:p-3 rounded-full border transition-all duration-500 flex items-center justify-center ${
                            isLight ? 'bg-black text-white border-black/10' : 'bg-white text-black border-white/10'
                        }`}
                    >
                        {isLight ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                    <button className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                        isLight ? 'bg-black text-white' : 'bg-white text-black hover:bg-blue-600 hover:text-white'
                    }`}>
                        Try Demo
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
                <div ref={heroGlowRef} className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full" />
                <h1 ref={heroTitleRef} className="text-[16vw] md:text-[11rem] font-bold tracking-tighter leading-[0.8] uppercase">
                    OWN YOUR <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-b ${isLight ? 'from-blue-600 to-blue-900' : 'from-white to-neutral-700'}`}>
                        INSIGHTS !
                    </span>
                </h1>
                <p ref={heroDescRef} className={`max-w-xl mx-auto mt-8 text-base md:text-2xl font-light italic transition-colors duration-700 ${isLight ? 'text-black/40' : 'text-white/40'}`}>
                    An AI assistant that turns your data into clear, instant decisions.
                </p>
            </section>

            {/* PERSONAS */}
            <div ref={horizontalRef} className={`flex flex-nowrap overflow-hidden border-y transition-colors duration-1000 relative z-10 ${
                isLight ? 'bg-white/50 border-black/5' : 'bg-black/50 border-white/5'
            }`}>
                <PersonaPanel isLight={isLight} num="01" title="Executive" desc="High-level summaries and proactive visualizations." icon={<BarChart3 size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Decision_Engine" />
                <PersonaPanel isLight={isLight} num="02" title="Manager" desc="Automate team reporting and export insights instantly." icon={<Activity size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Ops_Optimization" />
                <PersonaPanel isLight={isLight} num="03" title="Analyst" desc="Audit AI logic layers to ensure mathematical precision." icon={<Terminal size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Logic_Kernel" />
            </div>

            {/* TERMINAL SECTION */}
            <section className="py-20 md:py-40 px-4 md:px-6 flex flex-col items-center relative z-10">
                <div className={`w-full max-w-5xl backdrop-blur-xl border rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 ${
                    isLight ? 'bg-white/80 border-black/10' : 'bg-[#080808]/80 border-white/10'
                }`}>
                    <div className={`px-6 md:px-10 py-4 md:py-6 border-b flex justify-between items-center text-[9px] md:text-[10px] font-mono tracking-widest ${
                        isLight ? 'bg-black/5 border-black/5 text-black/40' : 'bg-black/40 border-white/5 text-white/40'
                    }`}>
                        <span>LoomLink_Terminal // AI_CHAT_BRIDGE</span>
                        <span className="text-blue-600">Node: NVIDIA_L40S</span>
                    </div>
                    <div className="p-10 md:p-32 flex flex-col items-center text-center space-y-8 md:space-y-10">
                        <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                            The future of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Data Conversation.</span>
                        </h3>
                        <p className={`max-w-xl mx-auto text-base md:text-xl font-light italic transition-colors duration-700 ${isLight ? 'text-black/60' : 'text-white/40'}`}>
                            "Our AI chat bridge transforms complex SQL clusters into human-readable executive intelligence in milliseconds."
                        </p>
                        <Link to="/how-it-works">
                            <button className={`group flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-500 ${
                                isLight ? 'bg-black text-white hover:bg-blue-600' : 'bg-white text-black hover:bg-blue-600 hover:text-white'
                            }`}>
                                See how it works <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* VALUE GRID */}
            <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <ValueCard isLight={isLight} icon={<Shield />} title="Sovereign" desc="Runs entirely on-premise. Sensitive data never leaves your network." />
                <ValueCard isLight={isLight} icon={<Zap />} title="Real-Time" desc="Semantic Caching delivers repeat insights in under 12ms." />
                <ValueCard isLight={isLight} icon={<Activity />} title="Proactive" desc="Automatically generates charts and drafts reports on trend detection." />
            </section>

            {/* PILLARS */}
            <section className="py-20 md:py-40 px-6 relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col mb-16 md:mb-20">
                    <div className="flex items-center gap-4 text-blue-600 font-mono text-sm tracking-[0.5em] uppercase mb-4">
                        <div className="w-12 h-[1px] bg-blue-600" /> Core Capabilities
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                        Engineered for <br /> <span className={isLight ? 'text-black/20' : 'text-white/20'}>Sovereign Action.</span>
                    </h2>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 border-t border-l transition-colors duration-700 ${isLight ? 'border-black/5 opacity-80' : 'border-white/10 '}`}>
                    <PillarCard isLight={isLight} icon={<Terminal size={40} />} title="Natural Language to Insight
" desc="Convert prompts to precise SQL logic and results instantly." command="EXECUTING: NL_QUERY_SYNTHESIS" />
                    <PillarCard isLight={isLight} icon={<Zap size={40} />} title="The Loom-Link Action Rule" desc="Autonomous agent that analyzes and drafts executive reports." command="STATUS: AGENT_ACTIVE" />
                    <PillarCard isLight={isLight} icon={<Cpu size={40} />} title="Semantic Caching" desc="High-speed performance powered by intelligent retrieval." command="LATENCY: 12MS" />
                    <PillarCard isLight={isLight} icon={<BarChart3 size={40} />} title="Proactive Visuals" desc="Charts that materialize the moment data supports it." command="MODE: RENDER_DYNAMO" />
                </div>
            </section>

            {/* FOOTER */}
            <footer className={`pt-40 md:pt-60 pb-20 relative z-10 border-t transition-all duration-1000 ${isLight ? 'bg-white opacity-60 border-black/5' : 'bg-black/20 border-white/5'}`}>
                <div className="max-w-7xl mx-auto px-12 text-center">
                    <h2 className={`text-[15vw] font-bold tracking-tighter leading-none mb-10 uppercase select-none transition-all duration-700 ${
                        isLight ? 'text-black/80' : 'text-white/60'
                    }`}>
                        LOOM-LINK
                    </h2>
                    <Link to="/brief">
                        <button className="px-10 md:px-16 py-4 md:py-6 rounded-full font-black text-lg md:text-xl transition-all duration-500 shadow-2xl bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95">
                            Brief About Us
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default LoomLinkFinal;