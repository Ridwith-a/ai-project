import React from 'react'
import { Link } from 'react-router-dom'

function Seehw() {
  return (
    <> {/* AI CHAT DEMO */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* SAME CTA BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))] blur-3xl opacity-60 animate-spin-slow" />
        <div className="absolute -top-1/3 left-1/4 w-[45rem] h-[45rem] bg-indigo-500/20 rounded-full blur-[140px] animate-float" />
        <div className="absolute -bottom-1/3 right-1/4 w-[45rem] h-[45rem] bg-fuchsia-500/15 rounded-full blur-[160px] animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-16">
            See How Loom-Link Thinks
          </h2>

          {/* Chat Box */}
          <div className="mx-auto max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 text-sm text-slate-300">
              Loom-Link • Live AI Demo
            </div>

            <div className="p-6 space-y-5 text-left">
              <div>
                <p className="text-xs text-slate-400 mb-1">You</p>
                <div className="inline-block bg-slate-900/80 rounded-2xl px-4 py-3 text-slate-200">
                  Where is the RV for Mr. Smith?
                </div>
              </div>

              <div>
                <p className="text-xs text-indigo-400 mb-1">Loom-Link</p>
                <div className="inline-block bg-indigo-600/20 border border-indigo-500/30 rounded-2xl px-4 py-3 text-indigo-200">
                  The RV is parked in <strong>Row 4</strong> and is ready for dispatch. Would you like me to notify the customer?
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">You</p>
                <div className="inline-block bg-slate-900/80 rounded-2xl px-4 py-3 text-slate-200">
                  Any delivery risks today?
                </div>
              </div>

              <div>
                <p className="text-xs text-indigo-400 mb-1">Loom-Link</p>
                <div className="inline-block bg-indigo-600/20 border border-indigo-500/30 rounded-2xl px-4 py-3 text-indigo-200">
                  ⚠️ Light storms may delay delivery by ~2 hours. I recommend informing the client in advance.
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-white/10 flex items-center gap-3">
              <input
                disabled
                placeholder="Ask Loom-Link anything…"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-400"
              />
              <button className="px-4 py-3 rounded-xl bg-indigo-600/80 text-white text-sm cursor-not-allowed">
                Send
              </button>
             
            </div>
          </div>
        </div>
        {/* ADMIN HELP ACTION */}
<div className="mt-10 flex justify-center">
  <Link to="/need-help">
    <button className="px-6 py-3 rounded-2xl border border-indigo-400/30 text-indigo-300 text-sm backdrop-blur hover:bg-indigo-500/10 hover:scale-105 transition shadow-lg">
      Need Help ?
    </button>
  </Link>
</div>
      </section>
      

    </>
  )
}

export default Seehw