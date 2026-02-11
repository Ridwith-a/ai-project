import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
    Sun, Moon, Send, Mic, Plus, X, Activity, LogOut, 
    AudioLines, PanelLeftOpen, PanelLeftClose 
} from 'lucide-react';

function Seehw() {
    const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024); 
    const [messages, setMessages] = useState([
        { role: 'ai', content: "SYSTEM ONLINE: Loom-Link Operational Core. Ready for data audit." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    
    const scrollRef = useRef(null);
    const recognitionRef = useRef(null);
    const silenceTimerRef = useRef(null);

    // Sync theme
    useEffect(() => {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);

    // RESET SIDEBAR ON RESIZE: Fixes the "cannot open again" bug
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping, isListening]);

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
            const response = await fetch("http://159.203.5.70:8081/api/v1/agents/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.content }),
            });

            const contentType = response.headers.get("content-type");
            let botReply = "";
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                botReply = data.reply || data.message || JSON.stringify(data);
            } else {
                botReply = await response.text();
            }

            setMessages(prev => [...prev, { role: 'ai', content: botReply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "ERROR: Failed to reach agent." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className={`flex h-screen w-full transition-colors duration-1000 overflow-hidden ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`}>
            
            {/* MOBILE OVERLAY */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-[110] lg:hidden backdrop-blur-md transition-opacity duration-300" 
                    onClick={() => setIsSidebarOpen(false)} 
                />
            )}

            {/* SIDEBAR: DRAWER STYLE */}
            <aside 
                className={`fixed lg:relative h-full transition-all duration-500 ease-in-out border-r flex flex-col z-[130] ${
                    isSidebarOpen 
                    ? 'w-[280px] p-6 translate-x-0 opacity-100' 
                    : 'w-0 p-0 -translate-x-full lg:translate-x-0 opacity-0 border-none'
                } ${isLight ? 'bg-white border-black/5' : 'bg-[#050505] border-white/5'}`}
            >
                <div className="flex items-center justify-between mb-8 overflow-hidden">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-[3px] h-6 group">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-white"
                                style={{
                                    height: `${[40, 70, 100, 60, 30][i]}%`,
                                    animation: `wave 1.5s ease-in-out infinite ${i * 0.1}s`
                                }}
                            />
                        ))}
                        <style>{`
                            @keyframes wave {
                              0%, 100% { transform: scaleY(1); }
                              50% { transform: scaleY(0.6); }
                            }
                        `}</style>
                    </div>
                        <span className={`font-black tracking-tighter uppercase text-xl whitespace-nowrap ${isLight ? 'text-black' : 'text-white'}`}>Loom-Link</span>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 opacity-50 hover:opacity-100 transition-opacity">
                        <X size={20} className={isLight ? 'text-black' : 'text-white'} />
                    </button>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden">
                    <div className="grid grid-cols-2 gap-2">
                        <Link to="/" className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all ${isLight ? 'bg-black/5' : 'bg-white/5 text-white border-white/5 hover:bg-white/10'}`}>
                            <LogOut size={16} /><span className="text-[10px] font-bold uppercase">Exit</span>
                        </Link>
                        <button onClick={() => setIsLight(!isLight)} className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all ${isLight ? 'bg-black/5' : 'bg-white/5 text-white border-white/5 hover:bg-white/10'}`}>
                            {isLight ? <Moon size={16} /> : <Sun size={16} />}<span className="text-[10px] font-bold uppercase">Theme</span>
                        </button>
                    </div>
                </div>

                <button onClick={() => setMessages([{ role: 'ai', content: "SESSION_RESET." }])} className="w-full py-4 mt-4 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs tracking-widest active:scale-95 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap overflow-hidden">
                    + New Chat
                </button>

                <div className="flex-1 mt-8 space-y-4 overflow-y-auto custom-scrollbar">
                    <h4 className="text-[9px] font-black text-blue-500 uppercase tracking-widest px-1">History</h4>
                    {['Sales_Audit', 'Client_Tiers', 'Stock_Check'].map((chat) => (
                        <button key={chat} className={`w-full text-left py-3 px-4 rounded-xl text-xs font-mono truncate transition-all ${isLight ? 'text-black/40 hover:bg-black/5' : 'text-slate-500 hover:bg-white/5'}`}>
                            {`// ${chat}`}
                        </button>
                    ))}
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                <header className="h-16 flex items-center px-4 md:px-8 shrink-0 z-50">
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                        className={`p-2 rounded-xl transition-all hover:scale-110 ${isLight ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/5'}`}
                    >
                        {isSidebarOpen ? <PanelLeftClose size={24} /> : <PanelLeftOpen size={24} />}
                    </button>
                    <div className="ml-4 flex items-center gap-2">
                         <Activity size={14} className="text-blue-500" />
                         <span className="text-[10px] font-mono tracking-widest uppercase text-blue-500 font-bold">Loom-Link AI</span>
                    </div>
                </header>

                {/* SCROLLABLE CHAT AREA */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar px-4 md:px-8">
                    <div className="max-w-4xl mx-auto py-12 space-y-12">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <span className={`text-[9px] font-black mb-2 uppercase tracking-tighter ${isLight ? 'text-black/30' : 'text-white/20'}`}>
                                    {msg.role === 'user' ? 'USER_ID' : 'SYSTEM_REPLY'}
                                </span>
                                <div className={`p-6 rounded-[2rem] max-w-[95%] text-sm leading-relaxed border transition-all ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/10' 
                                    : isLight ? 'bg-white text-black border-black/5 shadow-sm' : 'bg-[#0d1117] border-white/10 text-blue-50'
                                }`}>
                                    <div className="markdown-container prose prose-invert max-w-none">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="px-4 text-blue-500 font-mono text-[10px] animate-pulse flex items-center gap-2">
                                <AudioLines size={12} /> AGENT_THINKING...
                            </div>
                        )}
                    </div>
                </div>

                {/* FIXED INPUT FOOTER */}
                <div className={`shrink-0 w-full px-4 pb-10 pt-4 ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#02040a]'}`}>
                    <form onSubmit={handleSend} className="max-w-4xl mx-auto">
                        <div className={`flex gap-4 items-center p-3 rounded-[2rem] border transition-all ${isLight ? 'bg-white shadow-xl shadow-black/5' : 'bg-white/5 border-white/10'}`}>
                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Audit revenue tiers or stock logs..."
                                className={`flex-1 bg-transparent py-3 px-5 text-sm focus:outline-none ${isLight ? 'text-black' : 'text-white'}`}
                            />
                            <div className="flex items-center gap-2 pr-3">
                                <button type="button" onClick={handleVoice} className={`p-3 rounded-full transition-all ${isListening ? 'text-red-500 bg-red-500/10 animate-pulse' : 'text-blue-400 hover:bg-blue-500/10'}`}>
                                    <Mic size={20} />
                                </button>
                                <button type="submit" className="bg-blue-600 text-white p-3 rounded-full shadow-lg active:scale-90 hover:bg-blue-500 transition-all">
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.3); border-radius: 10px; }
                
                /* NEAT TABLE RENDERING */
                table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 1.5rem 0; border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 1rem; overflow: hidden; font-size: 0.85rem; }
                th { background: rgba(59, 130, 246, 0.1); padding: 1rem; text-align: left; font-weight: 800; color: #3b82f6; border-bottom: 2px solid rgba(59, 130, 246, 0.2); }
                td { padding: 1rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-family: 'JetBrains Mono', monospace; }
                tr:last-child td { border-bottom: none; }
                tr:hover td { background: rgba(59, 130, 246, 0.05); }
            `}</style>
        </div>
    );
}

export default Seehw;