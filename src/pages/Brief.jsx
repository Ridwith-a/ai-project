import { faBullseye, faRobot , faShieldHalved, faLayerGroup, faUsersCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Brief() {
  return (
    <>
    <div className="min-h-screen relative overflow-hidden text-slate-100 font-['Inter']">
      {/* === SAME AI BACKGROUND === */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))] blur-3xl opacity-60 animate-spin-slow" />
      <div className="absolute -top-1/3 left-1/4 w-[42rem] h-[42rem] bg-indigo-500/20 rounded-full blur-[140px] animate-float" />
      <div className="absolute -bottom-1/3 right-1/4 w-[42rem] h-[42rem] bg-fuchsia-500/20 rounded-full blur-[160px] animate-float-slow" />

      {/* === CONTENT === */}
      <div className="relative z-10 px-6 py-28 max-w-6xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur text-sm">
            <FontAwesomeIcon icon={faBullseye} /> Our Vision
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Trustworthy AI for Real Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Loom-Link is designed to become the intelligent layer between business data and human decisions — secure, permission-aware, and infrastructure-friendly.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <section className="mb-28">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Why Choose Loom-Link?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              icon: faShieldHalved,
              title: "Privacy-First AI",
              desc: "Your data never leaves your control. Loom-Link operates in isolated environments with read-only access by default."
            },{
              icon: faLayerGroup,
              title: "Modular & Scalable",
              desc: "Core AI features are reusable across industries, reducing cost and speeding up deployment."
            },{
              icon: faUsersCog,
              title: "Role-Based Intelligence",
              desc: "Every response respects permissions. Users only see what they are allowed to see — nothing more."
            }].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 transition">
                <FontAwesomeIcon icon={item.icon} className="text-indigo-400 text-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT BUILD REQUIREMENTS */}
        <section className="mb-28">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Project Architecture Overview
          </h2>
          <div className="space-y-10">
            {[{
              title: "Client Website Chatbot",
              content: "Secure login with dynamic chat capabilities based on user roles and permissions."
            },{
              title: "Admin Dashboard (Root User)",
              content: "Admins manage users, define permissions, and control how the AI responds to each role."
            },{
              title: "Backend Java Application",
              content: "Modular AI features integrated with business logic and third-party platforms like Shopify."
            },{
              title: "Ollama Infrastructure",
              content: "Dockerized local inference with persistent models and secure backup strategies."
            }].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST & SECURITY */}
        <section className="mb-28">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Client Trust & Data Security
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-3">Security by Design</h3>
              <p className="text-slate-300 text-sm">
                Loom-Link prioritizes read-only database access, local inference using Ollama, and isolated deployment environments to minimize risk.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-3">Deployment Flexibility</h3>
              <p className="text-slate-300 text-sm">
                Supports on-premise, containerized, or hybrid deployments while maintaining encrypted backups and model persistence.
              </p>
            </div>
          </div>
        </section>

        {/* STANDARD FEATURES */}
        <section className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur text-sm">
            <FontAwesomeIcon icon={faRobot} /> Standard AI Capabilities
          </span>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-300 text-lg">
              Inventory checks, automated alerts, order tracking, sales summaries, and returns <br />- All handled through a single intelligent interface.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Brief