import { faLifeRing, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NeedHelp() {
  return (
    <>
     <div className="min-h-screen relative overflow-hidden text-slate-100 font-['Inter']">
      {/* === AI ANIMATED BACKGROUND (SAME AS CTA) === */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />

      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))] blur-3xl opacity-60 animate-spin-slow" />

      <div className="absolute -top-1/3 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[140px] animate-float" />
      <div className="absolute -bottom-1/3 right-1/4 w-[40rem] h-[40rem] bg-fuchsia-500/20 rounded-full blur-[160px] animate-float-slow" />

      {/* === CONTENT === */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur text-sm">
            <FontAwesomeIcon icon={faLifeRing} />
            Admin AI Help
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Talk directly to Loom-Link
          </h1>

          <p className="text-lg text-slate-300">
             
            Explain the problem naturally , <br /> Loom-Link will guide you.
          </p>
        </div>

        {/* === CHAT BOX === */}
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
            <span className="text-sm text-slate-300">
              Loom-Link • Admin Support AI
            </span>
            <span className="text-xs text-emerald-400">● Secure & Online</span>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-6 text-left">
            <div>
              <p className="text-xs text-indigo-400 mb-1">Loom-Link</p>
              <div className="inline-block bg-indigo-600/20 border border-indigo-500/30 rounded-2xl px-4 py-3 text-indigo-200">
                Hi 👋 I’m here to help you as the owner.  
                What issue are you facing right now?
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 mb-1">You</p>
              <div className="inline-block bg-slate-900/80 rounded-2xl px-4 py-3 text-slate-200">
                Orders are delayed and the system is not syncing properly.
              </div>
            </div>

            <div>
              <p className="text-xs text-indigo-400 mb-1">Loom-Link</p>
              <div className="inline-block bg-indigo-600/20 border border-indigo-500/30 rounded-2xl px-4 py-3 text-indigo-200">
                Understood. I’ll analyze shipment status, sync logs, and alerts
                to find the root cause.
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-6 py-4 border-t border-white/10 flex items-center gap-3">
            <input
              placeholder="Describe your issue in simple words…"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />

            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-sm font-semibold shadow-lg hover:scale-105 transition">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-slate-400 text-center max-w-xl">
          This channel is visible only to the business owner.  
          All conversations are private and secure.
        </p>
      </div>
    </div>
    </>
  )
}

export default NeedHelp