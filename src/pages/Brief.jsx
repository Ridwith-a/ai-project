import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  
} from "@fortawesome/free-solid-svg-icons";

/* ===============================
   SUB-COMPONENTS
================================ */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500 group">
      <FontAwesomeIcon icon={icon} className="text-indigo-400 text-3xl mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/10 text-indigo-300">
          <tr>
            <th className="p-6 uppercase tracking-widest text-[10px]">Capability</th>
            <th className="p-6 uppercase tracking-widest text-[10px]">Standard "Island" AI</th>
            <th className="p-6 text-white uppercase tracking-widest text-[10px]">Loom-Link "Manager"</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {[
            { cap: "Visibility", std: "Limited to one app at a time.", loom: "Total Cross-Platform Visibility." },
            { cap: "Deep Logic", std: "Surface-level tasks (emails).", loom: "Complex SQL & Margin Analytics." },
            { cap: "Ownership", std: "Subscription-based/Locked.", loom: "You own the code and the model." }
          ].map((row, i) => (
            <tr key={i} className="hover:bg-white/[0.02] transition-colors font-light">
              <td className="p-6 font-medium text-slate-100">{row.cap}</td>
              <td className="p-6 text-slate-400">{row.std}</td>
              <td className="p-6 text-indigo-300">{row.loom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlowStep({ icon, title, label }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 
                      group-hover:border-indigo-500/50 transition-colors duration-500 shadow-lg">
        <FontAwesomeIcon icon={icon} className="text-2xl text-indigo-400" />
      </div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-[10px] uppercase tracking-tighter text-slate-500 mt-1">{label}</p>
    </div>
  );
}

/* ===============================
   MAIN PAGE COMPONENT
================================ */
export default function Brief() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 font-sans bg-[#02040a]">

      {/* ===== SOVEREIGN BACKGROUND ===== */}
      <div className="fixed inset-0 bg-[#02040a] z-0" />
      <div className="fixed inset-0 opacity-40 blur-[120px] z-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.15),rgba(168,85,247,0.15),rgba(236,72,153,0.15))]" />

      {/* ELITE NAVIGATION BUTTONS */}
      <div className="fixed top-8 left-8 z-[100]">
        <Link to="/" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl">
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Back</span>
        </Link>
      </div>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <FontAwesomeIcon icon={faChevronUp} className="text-white" />
      </button>

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-48">

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto">
          <span className="inline-block mb-8 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur text-[10px] font-bold tracking-[0.4em] uppercase text-indigo-400 animate-pulse">
            System Intelligence Briefing
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase italic">
            Why Businesses <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">Choose Loom-Link</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Secure, role-aware AI designed to <span className="text-white">simplify operations</span>, protect data, and help teams focus on the kingdom's growth.
          </p>
        </section>

        {/* SECTION: MANAGERIAL LOGIC VS SIMPLE CHAT (From Image 0153fe & 0bc921) */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight border-l-4 border-indigo-500 pl-8">Managerial Logic <br/><span className="text-slate-500">vs. Simple Chat</span></h2>
            <div className="space-y-8">
              <LogicDetail num="01" title="The Bridge" desc="It connects the two worlds. It checks sales against inventory in real-time, identifying why delays happen across platforms." />
              <LogicDetail num="02" title="Business Logic" desc="Unlike standard AI, this agent enforces your specific rules, such as blocking orders if margins are below 15%." />
              <LogicDetail num="03" title="Audit-Proof" desc="Every decision allows you to see the exact data and SQL used, removing the 'Black Box' mystery of native assistants." />
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
             <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-16 backdrop-blur-3xl shadow-2xl">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-indigo-500/20 mb-8" />
                <p className="text-3xl font-light leading-tight italic mb-8">
                  "Use standard AI to write emails. <br/>Use <span className="font-bold text-white tracking-tight underline decoration-indigo-500">Loom-Link</span> to run the business."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-indigo-500" />
                  <span className="text-[10px] font-black tracking-widest text-indigo-400 uppercase">The Loom-Link Advantage</span>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION: THE BRIDGE VS THE ISLAND (From Image 5b94c4) */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tighter mb-4 uppercase">The Bridge vs. The Island</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Most AI is trapped inside a single tool. Loom-Link lives above your stack, connecting your sales, inventory, and accounting into one brain.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4 block">Cross-Platform Blind Spot</span>
                <p className="text-lg text-slate-200 font-light">
                  Standard assistants can tell you an order is "unfulfilled." <strong>Loom-Link tells you why</strong>—by checking raw material lead times against warehouse stock in real-time.
                </p>
             </div>
             <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-white/10">
                <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-[0.2em] mb-4 block">Hard Business Rules</span>
                <p className="text-lg text-slate-200 font-light">
                  Program your specific logic: "Never approve a re-order if the client has unpaid invoices over 90 days." <strong>Loom-Link enforces your rules</strong>, not generic guesses.
                </p>
             </div>
          </div>
        </section>

        {/* SECTION: ADMIN COMMAND CENTER (From Image 5b9481) */}
        <section className="grid md:grid-cols-2 gap-20 items-center py-20 bg-indigo-500/[0.02] rounded-[4rem] px-12 border border-white/5">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 block font-bold">Admin Control Interface</span>
            <div className="flex items-center gap-4 text-indigo-300 text-xl font-light">
              <span className="opacity-50">Finance role</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              <span className="font-medium text-white underline decoration-fuchsia-500">Invoice access only</span>
            </div>
          </div>
          <div className="space-y-6">
            <FontAwesomeIcon icon={faUsersGear} className="text-5xl text-indigo-500" />
            <h2 className="text-4xl font-bold">Centralized Admin <br/>Command Center</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Business owners manage users, permissions, and AI behavior from one powerful dashboard. Total sovereignty over who sees what.
            </p>
          </div>
        </section>

        {/* SECTION: VISUAL ARCHITECTURE */}
        <section className="py-24 border-y border-white/10">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The Unified Architecture</h2>
            <p className="text-slate-500 mt-4 uppercase tracking-[0.5em] text-[10px]">How we bridge your business silos</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-5xl mx-auto">
            <div className="flex gap-8">
              <FlowStep icon={faDatabase} title="Sales Data" label="Island A" />
              <FlowStep icon={faCubes} title="Inventory" label="Island B" />
            </div>

            <FontAwesomeIcon icon={faArrowRight} className="hidden lg:block text-indigo-500/20 text-3xl animate-pulse" />

            <div className="relative group">
              <div className="absolute -inset-12 bg-indigo-600/20 blur-[60px] rounded-full animate-pulse group-hover:bg-indigo-600/40 transition-all duration-700" />
              <div className="relative bg-indigo-600 rounded-[3rem] px-12 py-10 border border-indigo-400 shadow-[0_0_80px_rgba(79,70,229,0.3)] text-center scale-110">
                <FontAwesomeIcon icon={faMicrochip} className="text-5xl text-white mb-4" />
                <h3 className="font-black tracking-[0.2em] text-sm uppercase">LOOM-LINK</h3>
                <p className="text-[9px] text-indigo-200 uppercase mt-2 font-bold italic">Operational Intelligence Core</p>
              </div>
            </div>

            <FontAwesomeIcon icon={faArrowRight} className="hidden lg:block text-indigo-500/20 text-3xl animate-pulse" />

            <div className="space-y-5">
              <ArchStatus color="bg-green-500" text="Enforce Margin Rules" />
              <ArchStatus color="bg-blue-500" text="Cross-Platform Sync" />
            </div>
          </div>
        </section>

        {/* COMPARISON & PILLARS */}
        <section className="space-y-20">
           <div className="max-w-xl">
              <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase italic">Intelligence Depth</h2>
              <p className="text-slate-400 text-lg">Automate decision-making with a tool that understands your entire history.</p>
           </div>
           <ComparisonTable />
           <div className="grid md:grid-cols-3 gap-8 pt-10">
            <FeatureCard icon={faCubes} title="Unified Core" text="Modular intelligence that fits directly into real business workflows." />
            <FeatureCard icon={faChartLine} title="Commerce Ready" text="Instant understanding of products, orders, and customers." />
            <FeatureCard icon={faLock} title="Security First" text="Strict role-based access protects sensitive data." />
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <FontAwesomeIcon icon={faShieldHalved} className="text-indigo-400 text-4xl mb-6" />
          <h2 className="text-3xl font-semibold mb-6">
            Sovereign Infrastructure & Security
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Deployed within your infrastructure. Data is processed locally,
            never shared, and never retained.
          </p>
        </section>

        

        {/* FOOTER */}
        <footer className="text-center pt-20 pb-10">
          <div className="w-24 h-px bg-indigo-500/20 mx-auto mb-10" />
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[1em]">
            Built for Sovereignty • Loom-Link v4.0
          </p>
        </footer>

      </div>
    </div>
  );
}

/* ===============================
   UI UTILITIES
================================ */
function LogicDetail({ num, title, desc }) {
  return (
    <div className="flex gap-6 group">
      <span className="text-indigo-500 font-black text-lg opacity-40 group-hover:opacity-100 transition-opacity">{num}</span>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ArchStatus({ color, text }) {
  return (
    <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl flex items-center gap-5 hover:border-indigo-500/30 transition-all">
      <div className={`w-2.5 h-2.5 rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
      <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase">{text}</span>
    </div>
  );
}