import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { 
    Sun, Moon, Send, Mic, X, Activity, LogOut, 
    PanelLeftOpen, PanelLeftClose, Copy, Check, Database, Cpu
} from 'lucide-react';

function Seehw() {
    const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024); 
    const [messages, setMessages] = useState([
        { role: 'ai', content: "SYSTEM ONLINE: Secure bridge established via environment kernel. Ready for data audit." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
    
    const scrollRef = useRef(null);
    const recognitionRef = useRef(null);
    const silenceTimerRef = useRef(null);

    // FIXED: Added fallback to prevent crash if .env is missing
    const API_BASE_URL = import.meta.env.VITE_API_URL || '';

    useEffect(() => {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) setIsSidebarOpen(true);
            else setIsSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping, isListening]);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const parseChartData = (content) => {
        if (!content.includes('|')) return null;
        const rows = content.split('\n').filter(row => row.includes('|') && !row.includes('---'));
        if (rows.length < 2) return null;

        const data = rows.slice(1).map(row => {
            const cells = row.split('|').filter(cell => cell.trim() !== '');
            return {
                name: cells[1]?.trim().substring(0, 10) || 'Unknown',
                value: parseFloat(cells[cells.length - 1]?.replace(/[^0-9.]/g, '')) || 0
            };
        }).filter(item => item.value > 0);

        return data.length > 0 ? data : null;
    };

    const handleVoice = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        if (isListening && recognitionRef.current) { recognitionRef.current.stop(); return; }
        
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event) => {
            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
            let interimTranscript = '';
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                else interimTranscript += event.results[i][0].transcript;
            }
            setInputValue(finalTranscript + interimTranscript);
            silenceTimerRef.current = setTimeout(() => recognition.stop(), 2000);
        };
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);
        recognition.start();
    };

    const handleSend = async (e) => {
        if (e) e.preventDefault();
        if (!inputValue.trim()) return;
        if (recognitionRef.current) recognitionRef.current.stop();

        const userMsg = { role: 'user', content: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/agents/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.content }),
            });

            if (!response.ok) throw new Error('API_CONNECTION_ERROR');

            const data = await response.json();
            const botReply = data.reply || data.message || JSON.stringify(data);
            setMessages(prev => [...prev, { role: 'ai', content: botReply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "ERROR: Failed to reach secure gateway. Check environment logs." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className={`flex h-screen w-full transition-colors duration-1000 overflow-hidden ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`}>
            
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/60 z-[110] lg:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
            )}

            <aside className={`fixed lg:relative h-full transition-all duration-500 ease-in-out border-r flex flex-col z-[130] ${
                isSidebarOpen ? 'w-[300px] p-6 translate-x-0' : 'w-0 p-0 -translate-x-full lg:translate-x-0 opacity-0 border-none'
            } ${isLight ? 'bg-white border-black/5' : 'bg-[#050505] border-white/5'}`}>
                
                <div className="flex items-center justify-between mb-8 overflow-hidden">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-[3px] h-6 group">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-[3px] bg-blue-600 rounded-full wave-bar" style={{ height: `${[40, 70, 100, 60, 30][i]}%`, animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </div>
                        <span className={`font-black tracking-tighter uppercase text-xl ${isLight ? 'text-black' : 'text-white'}`}>Loom-Link</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                    <Link to="/" className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${isLight ? 'bg-black/5 hover:bg-black/10' : 'bg-white/5 border-white/5 hover:bg-white/10 text-white'}`}>
                        <LogOut size={14} /><span className="text-[10px] font-bold uppercase">Exit</span>
                    </Link>
                    <button onClick={() => setIsLight(!isLight)} className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${isLight ? 'bg-black/5' : 'bg-white/5 text-white border-white/5 hover:bg-white/10'}`}>
                        {isLight ? <Moon size={14} /> : <Sun size={14} />}<span className="text-[10px] font-bold uppercase">Mode</span>
                    </button>
                </div>

                <button onClick={() => setMessages([{ role: 'ai', content: "SESSION_RESET. ENCRYPTED BRIDGE READY." }])} 
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                    + New Secure Session
                </button>

                <div className="flex-1 mt-8 space-y-4 overflow-y-auto custom-scrollbar">
                    <div className="flex items-center gap-2 px-1 text-blue-500 mb-2">
                        <Database size={12} />
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Encrypted_Cache</h4>
                    </div>
                    {['Revenue_Logs', 'Network_Audit', 'Agent_Behavior'].map((chat) => (
                        <button key={chat} className={`history-item w-full text-left py-3 px-4 rounded-xl text-[11px] font-mono truncate transition-all ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5 text-neutral-400 hover:text-white'}`}>
                            {`// ${chat}`}
                        </button>
                    ))}
                </div>

                <div className={`mt-auto pt-4 border-t ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className={`text-[9px] font-mono uppercase tracking-widest ${isLight ? 'text-black/40' : 'text-white/30'}`}>NODE: {API_BASE_URL?.replace('https://', '') || 'LOCAL'}</span>
                    </div>
                </div>
            </aside>

            <main className="flex-1 flex flex-col h-full relative">
                <header className={`h-16 flex items-center justify-between px-4 md:px-8 border-b ${isLight ? 'bg-white/50 border-black/5' : 'bg-black/50 border-white/5'} backdrop-blur-md z-50`}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 rounded-lg transition-all ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5 text-white'}`}>
                            {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
                        </button>
                        <div className="h-4 w-[1px] bg-neutral-500/30 mx-2 hidden md:block" />
                        <div className="flex items-center gap-2">
                            <Cpu size={14} className="text-blue-500" />
                            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-500 font-bold">Loom_Kernel v2.0</span>
                        </div>
                    </div>
                </header>

                <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar px-4 md:px-8">
                    <div className="max-w-3xl mx-auto py-12 space-y-8">
                        {messages.map((msg, idx) => {
                            const chartData = msg.role === 'ai' ? parseChartData(msg.content) : null;
                            return (
                                <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                                    <div className="flex items-center gap-3 mb-2 px-2">
                                        <span className={`text-[9px] font-black uppercase tracking-tighter ${isLight ? 'text-black/40' : 'text-white/30'}`}>
                                            {msg.role === 'user' ? 'AUTH_USER' : 'SYSTEM_NODE'}
                                        </span>
                                        {msg.role === 'ai' && (
                                            <button onClick={() => copyToClipboard(msg.content, idx)} className="opacity-30 hover:opacity-100 transition-opacity">
                                                {copiedIndex === idx ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                            </button>
                                        )}
                                    </div>
                                    <div className={`relative px-6 py-5 rounded-2xl md:rounded-3xl max-w-full text-sm leading-relaxed border transition-all ${
                                        msg.role === 'user' 
                                        ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/10' 
                                        : isLight ? 'bg-white text-black border-black/5 shadow-sm' : 'bg-[#0d1117] border-white/10 text-blue-50/90'
                                    }`}>
                                        <div className="prose prose-sm prose-invert max-w-none overflow-x-auto">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                                        </div>
                                        {chartData && (
                                            <div className="mt-8 h-[240px] w-full bg-black/40 rounded-xl p-4 border border-white/5 overflow-hidden">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart data={chartData}>
                                                        <XAxis dataKey="name" stroke="#6366f1" fontSize={9} tickLine={false} axisLine={false} />
                                                        <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '8px', fontSize: '10px'}} />
                                                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                                            {chartData.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#6366f1'} />
                                                            ))}
                                                        </Bar>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        
                        {/* REFINED PULSE GRID WITH THEME SUPPORT */}
                        {isTyping && (
                            <div className="flex items-center gap-4 px-4 py-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-2 gap-1 animate-pulse">
                                    <div className="w-2 h-2 bg-blue-600 rounded-sm" />
                                    <div className="w-2 h-2 bg-blue-400/20 rounded-sm" />
                                    <div className="w-2 h-2 bg-blue-400/20 rounded-sm" />
                                    <div className="w-2 h-2 bg-blue-600 rounded-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse ${isLight ? 'text-blue-600' : 'text-white'}`}>
                                        Thinking
                                    </span>
                                    <span className={`text-[8px] font-mono uppercase ${isLight ? 'text-black/40' : 'text-white/20'}`}>
                                        Synchronizing_Nodes...
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`shrink-0 w-full px-4 pb-8 pt-4 ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`}>
                    <form onSubmit={handleSend} className="max-w-3xl mx-auto">
                        <div className={`relative flex items-center p-2 rounded-2xl border transition-all ${isLight ? 'bg-white shadow-xl shadow-black/5 border-black/10' : 'bg-[#0d1117] border-white/10 focus-within:border-blue-500/50'}`}>
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                                placeholder="Audit revenue tiers or stock logs..."
                                className={`flex-1 bg-transparent py-4 px-5 text-sm focus:outline-none ${isLight ? 'text-black placeholder-black/30' : 'text-white placeholder-white/20'}`} />
                            <div className="flex items-center gap-2 pr-2">
                                <button type="button" onClick={handleVoice} className={`p-3 rounded-xl transition-all ${isListening ? 'text-red-500 bg-red-500/10 animate-pulse' : 'text-neutral-500 hover:text-blue-400'}`}>
                                    <Mic size={20} />
                                </button>
                                <button type="submit" disabled={!inputValue.trim()} className="bg-blue-600 disabled:opacity-50 text-white p-3 rounded-xl hover:bg-blue-700 active:scale-95 transition-all">
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <style>{`
                @keyframes wave { 
                    0%, 100% { transform: scaleY(1); } 
                    50% { transform: scaleY(0.6); } 
                }
                .wave-bar {
                    animation: wave 1.5s ease-in-out infinite;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.2); border-radius: 10px; }
                .history-item { transition: all 0.2s ease; }
                .prose table { border-collapse: collapse; width: 100%; margin: 1rem 0; border: 1px solid rgba(59, 130, 246, 0.1); }
                .prose th { background: rgba(59, 130, 246, 0.05); padding: 8px; text-align: left; border: 1px solid rgba(59, 130, 246, 0.1); }
                .prose td { padding: 8px; border: 1px solid rgba(59, 130, 246, 0.1); }
            `}</style>
        </div>
    );
}

export default Seehw;