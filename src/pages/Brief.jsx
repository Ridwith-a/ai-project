import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faCubes,
  faShieldHalved,
  faChartLine,
  faLock,
  faArrowRight,
  faDatabase,
  faMicrochip,
  faChevronLeft,
  faChevronUp,
  faQuoteLeft,
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   SUB-COMPONENTS
================================ */
function FeatureCard({ icon, title, text, isLight }) {
  return (
    <div className={`border rounded-3xl p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500 group ${
      isLight ? 'bg-black/[0.03] border-black/5 shadow-sm' : 'bg-white/5 border-white/10'
    }`}>
      <FontAwesomeIcon icon={icon} className="text-indigo-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
      <h3 className={`text-xl font-semibold mb-3 ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isLight ? 'text-black/60' : 'text-slate-300'}`}>{text}</p>
    </div>
  );
}

function ComparisonTable({ isLight }) {
  return (
    <div className={`overflow-hidden rounded-3xl border backdrop-blur-xl ${
      isLight ? 'bg-white border-black/5 shadow-lg' : 'bg-white/5 border-white/10'
    }`}>
      <table className="w-full text-left text-sm">
        <thead className={`${isLight ? 'bg-black/[0.02] text-indigo-600' : 'bg-white/10 text-indigo-300'}`}>
          <tr>
            <th className="p-6 uppercase tracking-widest text-[10px]">Capability</th>
            <th className="p-6 uppercase tracking-widest text-[10px]">Standard "Island" AI</th>
            <th className={`p-6 uppercase tracking-widest text-[10px] ${isLight ? 'text-black' : 'text-white'}`}>Loom-Link "Manager"</th>
          </tr>
        </thead>
        <tbody className={`divide-y ${isLight ? 'divide-black/5' : 'divide-white/5'}`}>
          {[
            { cap: "Visibility", std: "Limited to one application at a time. No cross-silo context.", loom: "Total Cross-Platform Visibility. Sees the whole supply chain." },
            { cap: "Deep Logic", std: "Surface-level tasks like writing emails or summarizing notes.", loom: "Complex SQL query execution & Profit Margin Analytics." },
            { cap: "Ownership", std: "Subscription-based. Your data logic is locked in their cloud.", loom: "Sovereign Infrastructure. You own the code and the model." }
          ].map((row, i) => (
            <tr key={i} className={`transition-colors font-light ${isLight ? 'hover:bg-black/[0.01]' : 'hover:bg-white/[0.02]'}`}>
              <td className={`p-6 font-medium ${isLight ? 'text-black' : 'text-slate-100'}`}>{row.cap}</td>
              <td className={`p-6 ${isLight ? 'text-black/40' : 'text-slate-400'}`}>{row.std}</td>
              <td className="p-6 text-indigo-500 font-semibold">{row.loom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlowStep({ icon, title, label, isLight }) {
  return (
    <div className="flex flex-col items-center group">
      <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center mb-4 
                      group-hover:border-indigo-500/50 transition-colors duration-500 shadow-lg ${
                        isLight ? 'bg-white border-black/10 shadow-indigo-500/5' : 'bg-white/5 border-white/10'
                      }`}>
        <FontAwesomeIcon icon={icon} className="text-2xl text-indigo-500" />
      </div>
      <h4 className={`font-semibold text-sm ${isLight ? 'text-black' : 'text-white'}`}>{title}</h4>
      <p className="text-[10px] uppercase tracking-tighter text-slate-500 mt-1">{label}</p>
    </div>
  );
}

/* ===============================
   MAIN PAGE COMPONENT
================================ */
export default function Brief() {
 const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    // 2. Sync changes to localStorage
    useEffect(() => {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);
    
  const [showScroll, setShowScroll] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.pageYOffset > 400);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const briefHeroRef = useRef(null);
  const briefTitleRef = useRef(null);
  const briefTagRef = useRef(null);
  const briefDescRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(briefTagRef.current, 
      { opacity: 0, y: 10, letterSpacing: "1.5em" }, 
      { opacity: 1, y: 0, letterSpacing: "0.5em", duration: 1.5 }
    )
    .fromTo(briefTitleRef.current, 
      { opacity: 0, filter: "blur(20px)", scale: 0.9, y: 20 }, 
      { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 1.2 }, 
      "-=0.8"
    )
    .fromTo(briefDescRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.5"
    );

    gsap.to(".mesh-line", {
      y: "+=20",
      stagger: { each: 0.2, repeat: -1, yoyo: true },
      duration: 3,
      ease: "sine.inOut"
    });

    gsap.to(".mesh-container", {
      y: -100,
      rotateX: 15,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
      }
    });

    const showAnim = gsap.from(navRef.current, { 
      yPercent: -150,
      paused: true,
      duration: 0.4,
      ease: "power2.out"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden font-sans transition-colors duration-1000 ${
      isLight ? 'bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#02040a] text-slate-100'
    }`}>

      <div className={`fixed inset-0 z-0 transition-colors duration-1000 ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`} />
      
      <div className="fixed inset-0 z-0 pointer-events-none perspective-1000">
        <div className={`mesh-container w-full h-full origin-top transition-all duration-1000 ${isLight ? 'opacity-40' : 'opacity-30'}`}>
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor={isLight ? "#4f46e5" : "#6366f1"} stopOpacity={isLight ? "0.8" : "0.5"} />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                className="mesh-line"
                style={{ filter: isLight ? 'drop-shadow(0px 2px 2px rgba(79, 70, 229, 0.15))' : 'none' }}
                d={`M -200 ${100 + i * 80} Q 250 ${50 + i * 80} 500 ${100 + i * 80} T 1200 ${100 + i * 80}`}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth={isLight ? "1.5" : "1"}
              />
            ))}
          </svg>
        </div>
      </div>

      <div ref={navRef} className="fixed top-8 left-8 z-[100] flex gap-4 pointer-events-none">
        <div className="flex gap-3 pointer-events-auto">
          <Link to="/" className={`group flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-2xl ${
            isLight ? 'bg-white/80 border-black/10 hover:bg-white text-black' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
          }`}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-xs group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Back</span>
          </Link>
          
          <button 
            onClick={() => setIsLight(!isLight)}
            className={`flex items-center justify-center w-12 h-12 rounded-full border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
              isLight ? 'bg-black text-white border-black/10' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
            }`}
          >
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <FontAwesomeIcon icon={faChevronUp} className="text-white" />
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-48">

        {/* HERO SECTION */}
        <section ref={briefHeroRef} className="text-center max-w-4xl mx-auto">
          <span ref={briefTagRef} className="inline-block mb-8 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Intelligence Architecture
          </span>
          <h1 ref={briefTitleRef} className={`text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">BLUEPRINT</span> <br /> 
            FOR ACTION.
          </h1>
          <p ref={briefDescRef} className={`text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto ${isLight ? 'text-black/60' : 'text-slate-400'}`}>
            Loom-Link isn't just a chat box. It is a sovereign orchestration layer designed to turn fragmented data into decisive executive motion.
          </p>
        </section>

        {/* SECTION: MANAGERIAL LOGIC */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight border-l-4 border-indigo-500 pl-8 ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
                Managerial Logic <br/>
                <span className={isLight ? 'text-black/40' : 'text-slate-500'}>vs. Simple Chat</span>
            </h2>
            <div className="space-y-8">
              <LogicDetail isLight={isLight} num="01" title="The Bridge" desc="It connects the two worlds. It checks sales against inventory in real-time, identifying why delays happen." />
              <LogicDetail isLight={isLight} num="02" title="Business Logic" desc="Unlike standard AI, this agent enforces your specific rules, such as blocking orders if margins are below 15%." />
              <LogicDetail isLight={isLight} num="03" title="Audit-Proof" desc="Every decision allows you to see the exact data and SQL used, removing the 'Black Box' mystery." />
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
             <div className={`relative border rounded-[3rem] p-16 backdrop-blur-3xl shadow-2xl ${isLight ? 'bg-white/90 border-black/5' : 'bg-white/5 border-white/10'}`}>
                <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-indigo-500/20 mb-8" />
                <p className={`text-3xl font-light leading-tight italic mb-8 ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
                  "Use standard AI to write emails. <br/>Use <span className="font-bold tracking-tight underline decoration-indigo-500">Loom-Link</span> to run the business."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-indigo-500" />
                  <span className="text-[10px] font-black tracking-widest text-indigo-500 uppercase">The Loom-Link Advantage</span>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION: THE BRIDGE VS THE ISLAND */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className={`text-5xl font-bold tracking-tighter mb-4 uppercase ${isLight ? 'text-black' : 'text-white'}`}>The Bridge vs. The Island</h2>
            <p className={`${isLight ? 'text-black/50' : 'text-slate-400'} max-w-2xl mx-auto`}>Loom-Link lives above your stack, connecting your sales, inventory, and accounting into one brain.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className={`p-10 rounded-[2.5rem] border ${isLight ? 'bg-white border-black/5 shadow-md' : 'bg-gradient-to-br from-indigo-500/10 to-transparent border-white/10'}`}>
                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4 block">Cross-Platform Blind Spot</span>
                <p className={`text-lg font-light ${isLight ? 'text-black/70' : 'text-slate-200'}`}>
                  Standard assistants can tell you an order is "unfulfilled." <strong>Loom-Link tells you why</strong>—by checking raw material lead times.
                </p>
             </div>
             <div className={`p-10 rounded-[2.5rem] border ${isLight ? 'bg-white border-black/5 shadow-md' : 'bg-gradient-to-br from-fuchsia-500/10 to-transparent border-white/10'}`}>
                <span className="text-[10px] font-bold text-fuchsia-500 uppercase tracking-[0.2em] mb-4 block">Hard Business Rules</span>
                <p className={`text-lg font-light ${isLight ? 'text-black/70' : 'text-slate-200'}`}>
                  Program your specific logic: "Never approve a re-order if the client has unpaid invoices." <strong>Loom-Link enforces your rules</strong>.
                </p>
             </div>
          </div>
        </section>

        {/* SECTION: ADMIN COMMAND CENTER */}
        <section className={`grid md:grid-cols-2 gap-20 items-center py-20 rounded-[4rem] px-12 border transition-colors ${
          isLight ? 'bg-black/[0.02] border-black/5' : 'bg-indigo-500/[0.02] border-white/5'
        }`}>
          <div className={`border rounded-3xl p-12 backdrop-blur-md ${isLight ? 'bg-white border-black/10 shadow-xl' : 'bg-white/5 border-white/10'}`}>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 block font-bold">Admin Control Interface</span>
            <div className={`flex items-center gap-4 text-xl font-light ${isLight ? 'text-black' : 'text-indigo-300'}`}>
              <span className="opacity-50">Finance role</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              <span className={`font-medium underline decoration-fuchsia-500 ${isLight ? 'text-black' : 'text-white'}`}>Invoice access only</span>
            </div>
          </div>
          <div className="space-y-6">
            <FontAwesomeIcon icon={faUsersGear} className="text-5xl text-indigo-500" />
            <h2 className={`text-4xl font-bold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>Centralized Admin Command Center</h2>
            <p className={`text-lg leading-relaxed ${isLight ? 'text-black/60' : 'text-slate-400'}`}>
              Business owners manage users, permissions, and AI behavior from one powerful dashboard. Total sovereignty over who sees what.
            </p>
          </div>
        </section>

        {/* SECTION: VISUAL ARCHITECTURE */}
        <section className={`py-24 border-y ${isLight ? 'border-black/5' : 'border-white/10'}`}>
          <div className="text-center mb-24">
            <h2 className={`text-4xl font-black uppercase tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>The Unified Architecture</h2>
            <p className="text-slate-500 mt-4 uppercase tracking-[0.5em] text-[10px]">How we bridge your business silos</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-5xl mx-auto">
            <div className="flex gap-8">
              <FlowStep isLight={isLight} icon={faDatabase} title="Sales Data" label="Island A" />
              <FlowStep isLight={isLight} icon={faCubes} title="Inventory" label="Island B" />
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="hidden lg:block text-indigo-500/20 text-3xl animate-pulse" />
            <div className="relative group">
              <div className="absolute -inset-12 bg-indigo-600/20 blur-[60px] rounded-full animate-pulse group-hover:bg-indigo-600/40 transition-all duration-700" />
              <div className="relative bg-indigo-600 rounded-[3rem] px-12 py-10 border border-indigo-400 shadow-[0_0_80px_rgba(79,70,229,0.3)] text-center scale-110">
                <FontAwesomeIcon icon={faMicrochip} className="text-5xl text-white mb-4" />
                <h3 className="font-black tracking-[0.2em] text-sm uppercase text-white">LOOM-ENGINE</h3>
                <p className="text-[9px] text-indigo-100 uppercase mt-2 font-bold italic">Operational Intelligence Core</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="hidden lg:block text-indigo-500/20 text-3xl animate-pulse" />
            <div className="space-y-5">
              <ArchStatus color="bg-green-500" text="Enforce Margin Rules" isLight={isLight} />
              <ArchStatus color="bg-blue-500" text="Cross-Platform Sync" isLight={isLight} />
            </div>
          </div>
        </section>

        {/* COMPARISON & PILLARS */}
        <section className="space-y-20">
           <div className="max-w-xl">
              <h2 className={`text-5xl font-bold tracking-tight mb-6 uppercase italic ${isLight ? 'text-black' : 'text-white'}`}>Intelligence Depth</h2>
              <p className={isLight ? 'text-black/50' : 'text-slate-400'}>Automate decision-making with a tool that understands your entire history.</p>
           </div>
           <ComparisonTable isLight={isLight} />
           <div className="grid md:grid-cols-3 gap-8 pt-10">
            <FeatureCard isLight={isLight} icon={faCubes} title="Unified Core" text="Modular intelligence that fits directly into real business workflows." />
            <FeatureCard isLight={isLight} icon={faChartLine} title="Commerce Ready" text="Instant understanding of products, orders, and customers." />
            <FeatureCard isLight={isLight} icon={faLock} title="Security First" text="Strict role-based access protects sensitive data." />
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <FontAwesomeIcon icon={faShieldHalved} className="text-indigo-500 text-4xl mb-6" />
          <h2 className={`text-3xl font-semibold mb-6 ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>Sovereign Infrastructure & Security</h2>
          <p className={`leading-relaxed ${isLight ? 'text-black/60' : 'text-slate-300'}`}>
            Deployed within your infrastructure. Data is processed locally, never shared, and never retained.
          </p>
        </section>

        <footer className="text-center pt-20 pb-10">
          <div className="w-24 h-px bg-indigo-500/20 mx-auto mb-10" />
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[1em]">
            Built for Sovereignty • © 2026 LOOM-LINK
          </p>
        </footer>

      </div>
    </div>
  );
}

/* ===============================
   UI UTILITIES
================================ */
function LogicDetail({ num, title, desc, isLight }) {
  return (
    <div className="flex gap-6 group">
      <span className="text-indigo-500 font-black text-lg opacity-40 group-hover:opacity-100 transition-opacity">{num}</span>
      <div className="space-y-2">
        <h4 className={`text-xl font-bold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>{title}</h4>
        <p className={`font-light leading-relaxed ${isLight ? 'text-black/50' : 'text-slate-400'}`}>{desc}</p>
      </div>
    </div>
  );
}

function ArchStatus({ color, text, isLight }) {
  return (
    <div className={`border px-8 py-5 rounded-2xl flex items-center gap-5 hover:border-indigo-500/30 transition-all ${
      isLight ? 'bg-white border-black/10 shadow-sm' : 'bg-white/5 border-white/10'
    }`}>
      <div className={`w-2.5 h-2.5 rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
      <span className={`text-[11px] font-mono tracking-wider uppercase ${isLight ? 'text-black/70' : 'text-slate-300'}`}>{text}</span>
    </div>
  );
}