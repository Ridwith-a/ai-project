import React from 'react';
import { Search, Database, ArrowRight, Lock, Cpu, Workflow, Microchip, Zap, Globe, LayoutDashboard, LineChart } from 'lucide-react';
import ArchNode from '../Archnode';
import DiamondGate from '../Diamondgate';

const Bridge = ({ isLight }) => {
    return (
        <section id="bridge" className={`py-12 md:py-24 px-4 md:px-6 relative z-30 overflow-hidden transition-colors duration-700 ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`}>

            {/* VOLUMETRIC ATMOSPHERE */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 w-[60%] md:w-[40%] h-[40%] blur-[80px] md:blur-[120px] rounded-full animate-pulse transition-colors ${isLight ? 'bg-blue-600/5' : 'bg-blue-600/10'}`} />
                <div className={`absolute bottom-1/4 right-1/4 w-[60%] md:w-[40%] h-[40%] blur-[80px] md:blur-[120px] rounded-full animate-pulse transition-colors ${isLight ? 'bg-teal-600/5' : 'bg-teal-600/10'}`} style={{ animationDelay: '3s' }} />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-40">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className={`text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                        Secure, On-Premise <span className="text-blue-600">Enterprise AI Platform</span>
                    </h2>
                    <p className={`text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.4em] uppercase opacity-40 italic border-y py-2 inline-block ${isLight ? 'border-black/10 text-black' : 'border-white/10 text-white'}`}>
                        SECURE ON-PREMISE / EDGE ENVIRONMENT (Air-Gapped)
                    </p>
                </div>

                {/* MAIN FLOW CONTAINER */}
                <div className="relative flex flex-col items-center gap-8 md:gap-0">

                    {/* TRACK 1: BUSINESS & IT WORKFLOW */}
                    <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 z-20">
                        <div className={`flex flex-col items-center gap-2 opacity-50 md:opacity-30 text-center w-full md:w-28 shrink-0 ${isLight ? 'text-black' : 'text-white'}`}>
                            <div className="flex gap-2 md:gap-1"><Search size={18} /><Database size={18} /></div>
                            <span className="text-[10px] md:text-[8px] font-bold uppercase tracking-widest">Business Users</span>
                            <span className="text-[8px] md:text-[7px] opacity-50">(Unstructured Inputs)</span>
                        </div>

                        <ArrowRight className={`hidden md:block ${isLight ? 'text-black/10' : 'text-white/10'}`} />
                        <ArchNode title="Secure Gateway" subtitle="(API / Connectors)" icon={<Lock size={20} />} isLight={isLight} />

                        <ArrowRight className="hidden md:block text-blue-500/40 animate-pulse" />
                        <ArchNode title="AI Reasoning Engine" subtitle="(Local LLM, Agents)" icon={<Cpu size={20} />} isLight={isLight} />

                        <ArrowRight className="hidden md:block text-blue-500/40 animate-pulse" />
                        <DiamondGate title="Deterministic Gate" subtitle="(Validation)" isLight={isLight} />

                        <div className="flex flex-col items-center md:items-start gap-4">
                            <ArchNode title="Action Execution" subtitle="ERP, CRM, DB Sync" icon={<Workflow size={20} />} isLight={isLight} />
                            <div className={`flex items-center gap-3 p-2 md:p-3 rounded-xl border opacity-80 ${isLight ? 'border-blue-600/20 bg-blue-600/5 text-black' : 'border-blue-500/20 bg-blue-500/5 text-white'}`}>
                                <Search size={14} className="text-blue-600" />
                                <span className="text-[8px] font-black uppercase tracking-widest leading-none">Human Review</span>
                            </div>
                        </div>
                    </div>

                    {/* CENTRAL HUB: THE EXPERIENCE BANK */}
                    <div className="relative flex flex-col items-center py-8 md:py-4 w-full">
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center px-4">
                            <div className={`flex-1 h-px border-t border-dashed ${isLight ? 'border-black/10' : 'border-white/20'}`} />
                            <div className="w-[400px]" />
                            <div className={`flex-1 h-px border-t border-dashed ${isLight ? 'border-black/10' : 'border-white/20'}`} />
                        </div>

                        <div className="relative z-50 flex flex-col items-center group">
                            <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all group-hover:scale-105 ${isLight ? 'border-blue-600/30 bg-white/90 shadow-lg' : 'border-blue-500/30 bg-black/40 shadow-2xl'}`}>
                                <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-ping" style={{ animationDuration: '4s' }} />
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <Database size={24} className="text-blue-600" />
                                    <span className={`text-[7px] md:text-[8px] font-black uppercase leading-tight ${isLight ? 'text-blue-800' : 'text-blue-400'}`}>The Experience <br /> Bank</span>
                                </div>
                            </div>
                            <div className={`absolute -bottom-6 w-max font-mono text-[7px] md:text-[8px] tracking-[0.4em] md:tracking-[0.6em] font-bold uppercase transition-all ${isLight ? 'text-blue-800/60' : 'text-blue-400/60'}`}>
                                IT / OT SEPARATION
                            </div>
                        </div>
                    </div>

                    {/* TRACK 2: OPERATIONAL & EDGE WORKFLOW */}
                    <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 z-20 mt-4 md:mt-12">
                        <div className={`flex flex-col items-center gap-2 opacity-50 md:opacity-30 text-center w-full md:w-28 shrink-0 ${isLight ? 'text-black' : 'text-white'}`}>
                            <div className="flex gap-2 md:gap-1"><Microchip size={18} /><Zap size={18} /></div>
                            <span className="text-[10px] md:text-[8px] font-bold uppercase tracking-widest">Edge Devices</span>
                            <span className="text-[8px] md:text-[7px] opacity-50">(Raw Telemetry)</span>
                        </div>

                        <ArrowRight className={`hidden md:block ${isLight ? 'text-black/10' : 'text-white/10'}`} />
                        <ArchNode title="Edge Ingestion" subtitle="(IoT Protocols)" icon={<Globe size={20} />} isOperational isLight={isLight} />

                        <ArrowRight className="hidden md:block text-teal-500/40 animate-pulse" />
                        <ArchNode title="Data Fusion" subtitle="Context Engine" icon={<Microchip size={20} />} isOperational isLight={isLight} />

                        <ArrowRight className="hidden md:block text-teal-500/40 animate-pulse" />
                        <DiamondGate title="Deterministic Gate" subtitle="(Validation)" isLight={isLight} />

                        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
                            <ArchNode title="Control Interface" subtitle="SCADA, Fleet Mgmt" icon={<LayoutDashboard size={20} />} isOperational isLight={isLight} />
                            <div className={`flex items-center gap-2 opacity-30 ${isLight ? 'text-black' : 'text-white'}`}>
                                <span className="text-[8px] font-black uppercase tracking-widest italic">Analytics Dashboard</span>
                                <LineChart size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bridge;