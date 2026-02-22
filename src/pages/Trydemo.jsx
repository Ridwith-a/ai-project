import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Users, CheckCircle2, ArrowRight, Activity,
    Cpu, PanelLeftOpen, ChevronLeft
} from 'lucide-react';

function Trydemo() {
    const [isScanning, setIsScanning] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsScanning(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const planFeatures = [
        "Up to 10 Authorized Users",
        "Full MEARN Stack Integration",
        "Action Bridge AI Access",
        "Real-time SQL Auditing",
        "Holographic UI Customization"
    ];

    return (
        <div className="min-h-screen bg-[#02040a] text-white font-sans selection:bg-blue-500/30 overflow-hidden relative">

            {/* INITIAL SCANNER OVERLAY */}
            {isScanning && (
                <div className="fixed inset-0 z-[1000] pointer-events-none">
                    <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-md" />
                    <div className="scanner-line" />
                </div>
            )}

            {/* BACKGROUND DECOR */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[150px]" />
            </div>

            {/* HEADER */}
            <header className="relative z-50 h-20 md:h-24 flex items-center justify-between px-4 md:px-20 border-b border-white/5 bg-black/20 backdrop-blur-md">


                <div className="flex-1 flex justify-start">
                    <Link to="/">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
                            <ChevronLeft size={16} className="text-blue-500" />
                            <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Back</span>
                        </button>
                    </Link>
                </div>


                <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex items-center gap-[2px] md:gap-[3px] h-4 md:h-5">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-[2px] bg-blue-600 rounded-full"
                                    style={{
                                        height: `${[40, 70, 100, 60, 30][i]}%`,
                                        animation: `wave 1.5s ease-in-out infinite ${i * 0.1}s`
                                    }}
                                />
                            ))}
                        </div>
                        <span className="font-black tracking-tighter uppercase text-lg md:text-2xl whitespace-nowrap">Loom-Link</span>
                    </div>
                </div>


                <div className="flex-1 flex justify-end">
                    <Link to="/how-it-works">
                        <button className="flex items-center gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                            <PanelLeftOpen size={18} className="text-blue-500" />
                            <span className="hidden md:inline text-[10px] font-black tracking-[0.2em] uppercase">Return to Core</span>
                        </button>
                    </Link>
                </div>

            </header>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 animate-bounce">
                    <Activity size={14} className="text-blue-400" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold">Demo License Verified</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-black text-center mb-6 tracking-tighter uppercase leading-[0.9]">
                    Authorize Your <br /> <span className="text-blue-600">Action Bridge</span>
                </h1>
                <p className="text-slate-400 text-center max-w-2xl mb-16 font-mono text-sm leading-relaxed opacity-60">
                    Deploy the Loom-Link Operational Core for small teams. Biometric sync for up to 10 nodes included.
                </p>

                {/* HOLOGRAPHIC PLAN CARD */}
                <div className="holographic-card w-full max-w-md p-10 rounded-[3rem] border border-blue-500/20 flex flex-col items-center relative group transition-all hover:border-blue-500/60 shadow-2xl">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-blue-600/40">
                        SMALL_TEAM_DEPLOY
                    </div>

                    <div className="mt-6 mb-10 flex flex-col items-center">
                        <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-5 group-hover:scale-110 transition-transform duration-700">
                            <Users size={48} className="text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-center">10 User Access</h2>
                    </div>

                    <div className="text-6xl font-black mb-10 flex items-start gap-1">
                        <span className="text-2xl text-blue-500 mt-3 font-mono">$</span>
                        <span>49</span>
                        <span className="text-xs text-slate-500 font-mono mt-auto mb-3 tracking-widest uppercase">/ Month</span>
                    </div>

                    <ul className="w-full space-y-6 mb-12">
                        {planFeatures.map((feature, i) => (
                            <li key={i} className="flex items-center gap-4 text-xs font-mono text-slate-300 group/item">
                                <CheckCircle2 size={18} className="text-blue-500 shrink-0 group-hover/item:scale-125 transition-transform" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-6 rounded-[1.5rem] bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-blue-600/30 active:scale-95 transition-all flex items-center justify-center gap-4">
                        Initialize Deployment <ArrowRight size={20} />
                    </button>

                    <div className="mt-8 flex items-center gap-2 opacity-20">
                        <Cpu size={14} />
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold">Server-Side Authentication Required</span>
                    </div>
                </div>
            </main>

            <style>{`
                .holographic-card {
                    background: rgba(59, 130, 246, 0.04);
                    backdrop-filter: blur(24px);
                    box-shadow: 0 0 100px rgba(59, 130, 246, 0.05) inset;
                }
                .scanner-line {
                    position: absolute;
                    top: -10%; left: 0; width: 100%; height: 5px;
                    background: linear-gradient(to right, transparent, #3b82f6, transparent);
                    box-shadow: 0 0 30px 4px rgba(59, 130, 246, 0.9);
                    animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes scan {
                    0% { top: -10%; opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
                @keyframes wave {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(0.6); }
                }
            `}</style>
        </div>
    );
}

export default Trydemo;