import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
    Shield, Zap, Cpu,
    BarChart3, Terminal, Activity, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PersonaPanel = ({ num, title, desc, icon, tag }) => (
    <section className="persona-panel w-screen h-screen flex-shrink-0 flex items-center justify-center px-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl items-center">
            <div className="space-y-8 relative z-10">
                <div className="text-blue-500 font-mono text-xl tracking-[0.4em] font-black">{num} //</div>
                <h2 className="text-[7vw] font-black tracking-tighter leading-none uppercase">{title}</h2>
                <p className="text-white/30 text-2xl font-light leading-relaxed max-w-xl italic">"{desc}"</p>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="absolute w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <motion.div
                    animate={{ y: [-15, 15, -15], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    {icon}
                </motion.div>
                <div className="absolute bottom-0 right-10 border border-white/10 px-4 py-2 bg-black/50 backdrop-blur-md">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">{tag}</span>
                </div>
            </div>
        </div>
    </section>
);

const ValueCard = ({ icon, title, desc }) => (
    <div className="p-16 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-700">
        <div className="text-blue-500 mb-10">{icon}</div>
        <h4 className="text-3xl font-bold mb-6 tracking-tight">{title}</h4>
        <p className="text-white/30 text-lg leading-relaxed font-light">{desc}</p>
    </div>
);

const LoomLinkFinal = () => {
    const mainRef = useRef(null);
    const horizontalRef = useRef(null);
    const bgTextRef = useRef(null);
    const navRef = useRef(null);

    // HERO REFS FOR ANIMATION
    const heroTitleRef = useRef(null);
    const heroDescRef = useRef(null);
    const heroGlowRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. HERO ENTRY ANIMATION
            const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

            heroTl.fromTo(heroGlowRef.current,
                { scale: 0.4, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2.2, ease: "expo.out" }
            )
                .from(heroTitleRef.current, {
                    y: 140,
                    skewY: 8,
                    opacity: 0,
                    duration: 1.6,
                }, "-=1.8")
                .from(heroDescRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1.2,
                }, "-=1.0");

            // 2. SMART NAVBAR
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

            // 3. MOVING BACKGROUND
            gsap.to(bgTextRef.current, {
                xPercent: -45,
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            // 4. HORIZONTAL PERSONA WARP
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

            ScrollTrigger.refresh();
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-[#020202] text-[#F5F5F7] selection:bg-blue-600 font-sans overflow-x-hidden antialiased">

            {/* BACKGROUND MONOLITH */}
            <div className="md:ps-210 ps-80 fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                <div
                    ref={bgTextRef}
                    className="text-[35vw] font-black tracking-tighter text-white/[0.09] leading-none select-none italic whitespace-nowrap"
                    style={{ willChange: 'transform' }}
                >
                    LOOM-LINK
                </div>
            </div>

            {/* NAV */}
            <nav ref={navRef} className="fixed top-0 w-full z-[200] flex justify-between items-center px-12 py-10 backdrop-blur-md bg-black/10 border-b border-white/5">
                <div className="flex items-center gap-4">
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
                    <span className="text-xl font-black tracking-tighter uppercase ">Loom-Link</span>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                    Try Demo
                </button>
            </nav>

            {/* HERO SECTION */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
                <div
                    ref={heroGlowRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"
                />
                <div className="overflow-hidden mb-8">
                    <h1
                        ref={heroTitleRef}
                        className="text-[14vw] md:text-[11rem] font-bold tracking-tighter leading-[0.8]"
                    >
                        OWN YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
                            INSIGHTS !
                        </span>
                    </h1>
                </div>
                <p
                    ref={heroDescRef}
                    className="max-w-2xl mx-auto text-white/40 text-lg md:text-2xl font-light"
                >
                    An AI assistant that turns your data into clear, instant decisions.
                </p>
            </section>

            {/* HORIZONTAL PERSONAS */}
            <div ref={horizontalRef} className="flex flex-nowrap overflow-hidden bg-black border-y border-white/5 relative z-10 opacity-65">
                <PersonaPanel num="01" title="Executive" desc="High-level summaries and proactive visualizations for rapid decisioning." icon={<BarChart3 size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Decision_Engine" />
                <PersonaPanel num="02" title="Manager" desc="Automate team reporting and export detailed customer insights instantly." icon={<Activity size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Ops_Optimization" />
                <PersonaPanel num="03" title="Analyst" desc="Accelerate deep-dives. Audit AI logic layers to ensure mathematical precision." icon={<Terminal size={240} strokeWidth={0.5} className="text-blue-600/40" />} tag="Logic_Kernel" />
            </div>

            {/* TERMINAL SECTION */}
            <section className="py-40 px-6 flex flex-col items-center relative z-10">
                <div className="w-full max-w-5xl bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="px-10 py-6 border-b border-white/5 flex justify-between items-center bg-black/40 text-[10px] font-mono tracking-widest text-white/40">
                        <span>LoomLink_Terminal // AI_CHAT_BRIDGE</span>
                        <span className="text-blue-500">Node: NVIDIA_L40S</span>
                    </div>

                    <div className="p-12 md:p-32 flex flex-col items-center text-center space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                                The future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-indigo-500">
                                    Data Conversation.
                                </span>
                            </h3>
                            <p className="max-w-xl mx-auto text-white/40 text-lg md:text-xl font-light italic">
                                "Our AI chat bridge transforms complex SQL clusters into human-readable executive intelligence in milliseconds."
                            </p>
                        </div>

                        <Link to="/how-it-works">
                            <button className="group relative flex items-center gap-6 px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl">
                                See how it works
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Link>

                        <div className="pt-10 flex gap-8 items-center opacity-30">
                            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em]">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                AI Chat Active
                            </div>
                            <div className="w-[1px] h-4 bg-white/20" />
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em]">
                                Latency: 12ms
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE GRID */}
            <section className="py-40 px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <ValueCard icon={<Shield />} title="Sovereign" desc="Runs entirely on-premise. Sensitive data never leaves your network." />
                <ValueCard icon={<Zap />} title="Real-Time" desc="Semantic Caching delivers repeat insights in under 12ms." />
                <ValueCard icon={<Activity />} title="Proactive" desc="Automatically generates charts and drafts reports on trend detection." />
            </section>

            {/* PILLARS */}
            <section className="py-40 px-6 relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col mb-20">
                    <div className="flex items-center gap-4 text-blue-500 font-mono text-sm tracking-[0.5em] uppercase mb-4">
                        <div className="w-12 h-[1px] bg-blue-500" /> Core Capabilities
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Engineered for <br /> <span className="text-white/20">Sovereign Action.</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
                    <div className="bg-black p-12 md:p-20 group hover:bg-blue-600/5 transition-colors">
                        <div className="text-blue-500 mb-8"><Terminal size={40} /></div>
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Natural Language to Insight</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">Convert conversational prompts like <span className="text-white italic">"Which movies peaked in May?"</span> into precise SQL logic and data results instantly.</p>
                        <div className="font-mono text-[10px] text-blue-500/50 bg-blue-500/5 p-4 border border-blue-500/10">EXECUTING: NL_QUERY_SYNTHESIS // MODEL: LLAMA_3_PRO_70B</div>
                    </div>
                    <div className="bg-black p-12 md:p-20 group hover:bg-blue-600/5 transition-colors">
                        <div className="text-blue-500 mb-8"><Zap size={40} /></div>
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">The "LoomLink" Action Rule</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">Beyond chat. An autonomous agent that analyzes, calculates, and drafts executive emails or Slack reports without human intervention.</p>
                    </div>
                    <div className="bg-black p-12 md:p-20 group hover:bg-blue-600/5 transition-colors">
                        <div className="text-blue-500 mb-8"><Cpu size={40} /></div>
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Smart Semantic Caching</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">
                            High-speed performance powered by <span className="text-white">intelligent caching</span>.
                            Repeated insights are served in under 12ms through our optimized retrieval engine.
                        </p>
                    </div>
                    <div className="bg-black p-12 md:p-20 group hover:bg-blue-600/5 transition-colors">
                        <div className="text-blue-500 mb-8"><BarChart3 size={40} /></div>
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Proactive Visualizations</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">Automated charts and trend mappings that materialize the moment your data supports a comparison.</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-60 pb-20 relative z-10 border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-12">
                    {/* Main Branding */}
                    <div className="text-center mb-40">
                        <h2 className="text-[15vw] font-bold tracking-tighter leading-none mb-10 opacity-60 uppercase select-none">
                            LOOM-LINK
                        </h2>
                        <Link to={'/brief'}>
                            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                Brief About Us
                            </button>
                        </Link>
                    </div>

                    {/* Bottom Bar: Copyright & System Status */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                        <div className="flex items-center gap-6">
                            <span>© 2026 LOOM-LINK </span>
                            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
                            <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy_Protocol</span>
                            <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms_of_Service</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                                <span className="text-blue-500/80">System_Status: Operational</span>
                            </div>
                            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
                            <span>v1.0.4_Stable</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LoomLinkFinal;