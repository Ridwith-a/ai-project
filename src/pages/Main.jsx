import { faBolt, faChartLine, faComments, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <div className="font-['Inter'] bg-slate-950 text-slate-100">
                {/* HERO */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden ">
                    {/* AI Neural Grid Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px] opacity-40 animate-pulse" />

                    {/* Flowing gradient mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/40 via-purple-700/30 to-fuchsia-700/40 animate-gradient-x blur-2xl" />

                    {/* Floating AI orbs */}
                    <div className="absolute top-20 left-20 w-56 h-56 bg-indigo-500/30 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-32 right-32 w-72 h-72 bg-fuchsia-500/25 rounded-full blur-3xl animate-float-slow" />
                    {/* Floating animated orbs */}
                    <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-32 right-32 w-56 h-56 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/30 via-purple-700/20 to-fuchsia-700/30 blur-3xl" />

                    <div className="relative z-10 max-w-5xl text-center px-6">
                        {/* Animated chat mockup */}
                        <div className="mx-auto mb-10 max-w-md bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-left animate-fade-in">
                            <p className="text-sm text-slate-300 mb-2">You</p>
                            <div className="bg-slate-900 rounded-xl p-3 mb-4 text-slate-200">
                                Where is the RV for Mr. Smith?
                            </div>
                            <p className="text-sm text-slate-300 mb-2">Loom-Link</p>
                            <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-xl p-3 text-indigo-200">
                                RV is in <strong>Row 4</strong>, ready for dispatch ✅
                            </div>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 text-sm backdrop-blur">
                            <FontAwesomeIcon icon={faBolt} /> AI for real businesses
                        </span>

                        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                            Loom-Link
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
                            An AI assistant that remembers everything, predicts problems early, and frees business owners from paperwork.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* <button className="px-8 py-4 rounded-xl bg-violet-500 hover:bg-violet-300 transition font-semibold shadow-lg">
                                Request Early Access
                            </button> */}
                            <Link to={'/brief'}>
                            <button className="px-12 py-5 mb-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-2xl hover:scale-105 transition">
                                Brief About Us
                            </button>
                        </Link>
                            
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="relative py-24 px-6 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-center bg-cover opacity-100"
                        style={{ backgroundImage: "url('/Aibg.gif')" }}
                    />

                    {/* Gradient + dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-650/80 via-slate-650/70 to-slate-650/90" />

                    <div className="relative z-10 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                            Built to Feel Like a Smart Friend
                        </h2>

                        <div className="grid gap-10 md:grid-cols-3">
                            <div className="group bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 transition">
                                <FontAwesomeIcon icon={faComments} className="text-indigo-400 text-4xl mb-6" />
                                <h3 className="text-xl font-semibold mb-3">Perfect Memory Assistant</h3>
                                <p className="text-slate-300">
                                    Ask Loom-Link questions like you’re chatting on WhatsApp. It instantly scans thousands of rows and gives you a clear answer.
                                </p>
                            </div>

                            <div className="group bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 transition">
                                <FontAwesomeIcon icon={faChartLine} className="text-indigo-400 text-4xl mb-6" />
                                <h3 className="text-xl font-semibold mb-3">Predicts Problems Early</h3>
                                <p className="text-slate-300">
                                    Delays, weather risks, supplier issues—Loom-Link warns you before they impact customers.
                                </p>
                            </div>

                            <div className="group bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 transition">
                                <FontAwesomeIcon icon={faRocket} className="text-indigo-400 text-4xl mb-6" />
                                <h3 className="text-xl font-semibold mb-3">Focus on Growth</h3>
                                <p className="text-slate-300">
                                    Loom-Link handles tracking, stock checks, and updates—so owners can focus on customers and expansion.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative py-40 px-6 text-center overflow-hidden">
                    {/* Clean AI Wave Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />

                    {/* Animated aurora layer */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))] blur-3xl opacity-60 animate-spin-slow" />

                    {/* Soft AI energy waves */}
                    <div className="absolute -top-1/3 left-1/4 w-[45rem] h-[45rem] bg-indigo-500/20 rounded-full blur-[140px] animate-float" />
                    <div className="absolute -bottom-1/3 right-1/4 w-[45rem] h-[45rem] bg-fuchsia-500/15 rounded-full blur-[160px] animate-float-slow" />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Stop Reacting.
                            <span className="block text-indigo-400">Start Predicting.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-12">
                            Loom-Link operates like a silent AI brain in the background — constantly thinking, predicting, and protecting your business.
                        </p>
                        <Link to={'/how-it-works'}>
                                <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-2xl hover:scale-105 transition">
                                    See How It Works
                                </button>
                            </Link>
                        {/* <Link to={'/brief'}>
                            <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-2xl hover:scale-105 transition">
                                Brief About Us
                            </button>
                        </Link> */}
                    </div>
                </section>

                {/* TRUST + CATCHY CONTENT */}
                <section className="relative py-24 px-6 overflow-hidden">





                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-gray-950/70 to-slate-800/90" />


                    <div className="relative z-10 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                            Why Businesses Love Loom-Link
                        </h2>


                        <div className="grid gap-8 md:grid-cols-3 mb-20">
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition">
                                <p className="text-slate-300 mb-4">“I stopped checking spreadsheets every hour. Loom-Link just tells me what matters.”</p>
                                <span className="text-sm text-indigo-400">- Operations Manager</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition">
                                <p className="text-slate-300 mb-4">“The alerts saved us from angry customer calls. That alone paid for it.”</p>
                                <span className="text-sm text-indigo-400">- Logistics Owner</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition">
                                <p className="text-slate-300 mb-4">“It feels less like software and more like a smart teammate.”</p>
                                <span className="text-sm text-indigo-400">- Business Founder</span>
                            </div>
                        </div>


                        <div className="text-center">
                            <h3 className="text-2xl md:text-4xl font-semibold mb-6">From Chaos to Clarity</h3>
                            <p className="max-w-3xl mx-auto text-slate-300 mb-10">
                                We connects your data, understands your business context, and speaks to you like a human - not a dashboard.
                            </p>
                            {/* <button className="px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold shadow-lg">
                                Experience the Calm
                            </button> */}
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="py-8 text-center text-sm text-slate-400 bg-slate-950 border-t border-white/10">
                    © {new Date().getFullYear()} Loom-Link — Designed for calm, clarity, and control.
                </footer>
            </div>
        </>
    )
}

export default Main