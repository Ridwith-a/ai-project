import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon, Sun, ChevronRight } from 'lucide-react';

const SettingsTaskbar = ({ isOpen, onClose, isLight, setIsLight }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[600]"
                    />

                    {/* COMPACT SLIDE-OUT PANEL */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className={`fixed right-0 top-0 h-full w-full max-w-[280px] z-[700] p-6 shadow-xl transition-colors duration-500 
                            ${isLight ? 'bg-white text-black' : 'bg-[#0a0a0c] text-white border-l border-white/5'}`}
                    >
                        {/* HEADER SECTION: Reduced bottom margin */}
                        <div className="flex justify-between items-center mb-10">
                            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">System_Settings</span>
                            <button onClick={onClose} className="p-1.5 hover:rotate-90 transition-transform opacity-50 hover:opacity-100">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-10">
                            {/* APPEARANCE TOGGLE: More compact button */}
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 opacity-80">Appearance</h4>
                                <button
                                    onClick={() => setIsLight(!isLight)}
                                    className={`w-full p-4 rounded-xl border flex items-center justify-between group transition-all 
                                        ${isLight ? 'bg-black/5 border-black/5 hover:bg-black/10' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {isLight ? <Moon size={16} /> : <Sun size={16} />}
                                        <span className="font-bold uppercase tracking-tight text-xs">
                                            {isLight ? 'Dark Mode' : 'Light Mode'}
                                        </span>
                                    </div>
                                    <ChevronRight size={14} className="opacity-20 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SettingsTaskbar;