import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsersGear,
  faCubes,
  faShieldHalved,
  faChartLine,
  faLock, faArrowRight, faDatabase, faVrCardboard, faMicrochip
} from "@fortawesome/free-solid-svg-icons";

/* ===============================
   FEATURE CARD COMPONENT
================================ */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <FontAwesomeIcon icon={icon} className="text-indigo-400 text-3xl mb-4" />
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
            <th className="p-6">Capability</th>
            <th className="p-6">Standard "Island" AI</th>
            <th className="p-6 text-white">Loom-Link "Manager"</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          <tr>
            <td className="p-6 font-medium">Visibility</td>
            <td className="p-6 text-slate-400">Limited to one app at a time.</td>
            <td className="p-6 text-slate-200">Total Cross-Platform Visibility.</td>
          </tr>
          <tr>
            <td className="p-6 font-medium">Deep Logic</td>
            <td className="p-6 text-slate-400">Surface-level tasks (emails).</td>
            <td className="p-6 text-slate-200">Complex SQL & Margin Analytics.</td>
          </tr>
          <tr>
            <td className="p-6 font-medium">Ownership</td>
            <td className="p-6 text-slate-400">Subscription-based/Locked.</td>
            <td className="p-6 text-slate-200">You own the code and the model.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function FlowStep({ icon, title, label }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 
                      group-hover:border-indigo-500/50 transition-colors duration-500">
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
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100 font-sans">

      {/* ===== AI BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
      <div className="absolute inset-0 opacity-60 blur-3xl animate-spin-slow
        bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))]" />
      <div className="absolute -top-1/3 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[150px] animate-float" />
      <div className="absolute -bottom-1/3 right-1/4 w-[40rem] h-[40rem] bg-fuchsia-500/20 rounded-full blur-[170px] animate-float-slow" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-36">

        {/* HERO */}
        <section className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm">
            Our Aim
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why Businesses Choose Loom-Link
          </h1>
          <p className="text-lg text-slate-300">
            Secure, role-aware AI designed to simplify operations, protect data,
            and help teams focus on growth.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <FontAwesomeIcon icon={faBrain} className="text-indigo-400 text-4xl mb-6" />
            <h2 className="text-3xl font-semibold mb-6">
              Intelligent Client Chat Interface
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Enterprise-grade secure login ensures safe access.
              <br /><br />
              The AI chat adapts automatically to user roles — warehouse teams see
              logistics, sales teams see revenue insights.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <p className="text-sm text-slate-400 mb-2">Example</p>
            <p className="text-indigo-300">
              “Show today’s pending deliveries.”
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <p className="text-sm text-slate-400 mb-2">Admin Control</p>
            <p className="text-indigo-300">
              Finance role → Invoice access only
            </p>
          </div>

          <div className="order-1 md:order-2">
            <FontAwesomeIcon icon={faUsersGear} className="text-indigo-400 text-4xl mb-6" />
            <h2 className="text-3xl font-semibold mb-6">
              Centralized Admin Command Center
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Business owners manage users, permissions, and AI behavior from one
              powerful dashboard.
            </p>
          </div>
        </section>
        
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">The Bridge vs. The Island</h2>
            <p className="text-slate-400">
              Most AI is trapped inside a single tool. Loom-Link lives above your stack, 
              connecting your sales, inventory, and accounting into one brain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20">
              <h4 className="text-indigo-300 font-bold mb-4 uppercase tracking-widest text-xs">Cross-Platform Blind Spot</h4>
              <p className="text-slate-300">
                Standard assistants can tell you an order is "unfulfilled." 
                Loom-Link tells you <strong>why</strong>—by checking raw material lead times 
                against warehouse stock in real-time.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-fuchsia-500/10 to-transparent border border-fuchsia-500/20">
              <h4 className="text-fuchsia-300 font-bold mb-4 uppercase tracking-widest text-xs">Hard Business Rules</h4>
              <p className="text-slate-300">
                Program your specific logic: "Never approve a re-order if the client has 
                unpaid invoices over 90 days." Loom-Link enforces your rules, not just generic AI guesses.
              </p>
            </div>
          </div>
        </section>

        {/* VISUAL ARCHITECTURE SECTION */}
        <section className="py-20 border-y border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold">The Unified Brain Architecture</h2>
            <p className="text-slate-400 mt-4">How Loom-Link bridges your business silos</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            
            {/* Source Islands */}
            <div className="flex gap-4">
              <FlowStep icon={faDatabase} title="Sales Data" label="Island A" />
              <FlowStep icon={faCubes} title="Inventory" label="Island B" />
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500/30 animate-pulse" />
            </div>

            {/* The Bridge (Central AI) */}
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
              <div className="relative bg-indigo-600 rounded-3xl p-8 border border-indigo-400 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                <FontAwesomeIcon icon={faMicrochip} className="text-4xl text-white mb-2" />
                <h3 className="font-bold">LOOM-LINK</h3>
                <p className="text-[10px] text-indigo-100 uppercase">Operational Intelligence Core</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500/30 animate-pulse" />
            </div>

            {/* The Managerial Output */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-slate-300">Enforce Margin Rules</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-mono text-slate-300">Cross-Platform Sync</span>
              </div>
            </div>

          </div>
        </section>

        {/* THE "WHY IT WINS" SECTION */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-indigo-300">Managerial Logic vs. Simple Chat</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 text-indigo-400">01</div>
                <p className="text-slate-300"><strong className="text-white">The Bridge:</strong> It connects the two worlds. It checks sales against inventory in real-time, identifying why delays happen across platforms.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-indigo-400">02</div>
                <p className="text-slate-300"><strong className="text-white">Business Logic:</strong> Unlike standard AI, this agent enforces your specific rules, such as blocking orders if margins are below 15%.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-indigo-400">03</div>
                <p className="text-slate-300"><strong className="text-white">Audit-Proof:</strong> Every decision allows you to see the exact data and SQL used, removing the "Black Box" mystery of native assistants.</p>
              </li>
            </ul>
          </div>
         {/* ANIMATED QUOTE CARD WITH GIF/VIDEO BACKGROUND */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 flex items-center min-h-[300px]">
  
  {/* The Background GIF/Video Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="./brbj.gif" 
      alt="Background Animation"
      className="w-full h-full object-cover opacity-100 grayscale"
    />
    {/* Gradient Overlay to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/0 to-indigo-950/50" />
  </div>

  {/* The Content Layer */}
  <div className="relative z-10 p-10 w-full">
    <p className="text-2xl md:text-3xl  text-slate-100 leading-tight">
      "Use standard AI to write emails. <br />
      Use <span className="text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
        Loom-Link
      </span> to run the business."
    </p>
    
    <div className="mt-6 flex items-center gap-2">
      <div className="h-[1px] w-12 bg-indigo-500/50"></div>
      <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono">The Loom-Link Advantage</span>
    </div>
  </div>
</div>
        </section>

        {/* NEW SECTION: COMPARISON */}
        <section className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold mb-4">Intelligence Depth</h2>
                <p className="text-slate-400">
                  Don't just automate tasks. Automate decision-making with a tool that 
                  understands your entire database history.
                </p>
              </div>
              <span className="text-indigo-400 font-mono text-sm">/ / DATA_ANALYST_CORE</span>
           </div>
           <ComparisonTable />
        </section>

        {/* SECTION 3 */}
        <section className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={faCubes}
            title="Unified Intelligence Core"
            text="Modular intelligence that fits directly into real business workflows."
          />
          <FeatureCard
            icon={faChartLine}
            title="Commerce Ready"
            text="Instant understanding of products, orders, and customers."
          />
          <FeatureCard
            icon={faLock}
            title="Security First"
            text="Strict role-based access protects sensitive data."
          />
        </section>

        {/* SECTION 4 */}
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
        <footer className="text-center text-slate-400 text-sm">
          Simple for teams • Powerful for owners • Trusted by enterprises
        </footer>

      </div>
    </div>
  );
}
