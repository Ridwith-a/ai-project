import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsersGear,
  faCubes,
  faShieldHalved,
  faChartLine,
  faLock
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
