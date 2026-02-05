import { faLifeRing, faPaperPlane, faMicrophone, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts'

function NeedHelp() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi 👋 I’m here to help you as the owner. What issue are you facing right now?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef(null);

  const salesData = [
    { day: 'Mon', amount: 2400 },
    { day: 'Tue', amount: 1398 },
    { day: 'Wed', amount: 9800 },
    { day: 'Thu', amount: 3908 },
    { day: 'Fri', amount: 4800 },
    { day: 'Sat', amount: 3800 },
    { day: 'Sun', amount: 4300 },
  ];

  const handleVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => setInputValue(event.results[0][0].transcript);
    recognition.start();
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getAdminResponse(userMsg.content);
      setMessages(prev => [...prev, { role: 'ai', ...response }]);
      setIsTyping(false);
    }, 1200);
  };

  const getAdminResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('sales') || text.includes('revenue')) {
      return { content: "Analyzing logs... Here is the revenue flow. I've noted the spike on Wednesday.", showChart: true };
    }
    return { content: "Understood. I’ll analyze shipment status, sync logs, and alerts to find the root cause." };
  };

  const resetChat = () => {
    setMessages([{ role: 'ai', content: "New support session started. What can I assist you with, Admin?" }]);
  };

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>

      <div className="min-h-screen relative flex overflow-hidden text-slate-100 font-['Inter']">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(236,72,153,0.35),rgba(99,102,241,0.35))] blur-3xl opacity-60 animate-spin-slow" />

        {/* SIDEBAR */}
        <aside className="relative z-20 w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">L</div>
             <span className="text-white font-bold tracking-tight">Loom-Link</span>
          </div>

          <nav className="flex flex-col gap-2">
            {/* HOME ACTION */}
            <Link to="/main" className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 text-slate-300 text-sm hover:bg-white/10 transition-all flex items-center gap-3">
              <FontAwesomeIcon icon={faHome} className="text-indigo-400" /> Home
            </Link>

            <button onClick={resetChat} className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 text-slate-300 text-sm hover:bg-white/10 transition-all flex items-center gap-3">
              <FontAwesomeIcon icon={faPlus} className="text-indigo-400" /> New Session
            </button>
          </nav>

          <div className="flex-1 flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-2">Support Logs</h4>
            <div className="flex flex-col gap-1">
              {['Order Sync', 'System Alerts', 'Payment Status'].map((log) => (
                <button key={log} className="text-left py-2 px-3 rounded-lg text-xs text-slate-400 hover:bg-white/5 hover:text-indigo-300 transition-colors">
                  {log}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white/10 backdrop-blur text-xs">
              <FontAwesomeIcon icon={faLifeRing} /> Admin AI Help
            </span>
            <h1 className="text-4xl font-bold mb-3">Talk directly to Loom-Link</h1>
            <p className="text-sm text-slate-400 text-center">Explain the problem naturally, Loom-Link will guide you.</p>
          </div>

          <div className="w-full max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <span className="text-xs text-slate-300">Loom-Link • Admin Support AI</span>
              <span className="text-[10px] text-emerald-400">● Online</span>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className={`text-[10px] uppercase tracking-wider mb-1 font-bold ${msg.role === 'user' ? 'text-slate-500 self-end mr-2' : 'text-indigo-400 ml-2'}`}>
                    {msg.role === 'user' ? 'ADMIN' : 'LOOM-LINK'}
                  </span>
                  <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm ${
                    msg.role === 'user' ? 'bg-indigo-600 text-white self-end shadow-lg' : 'bg-white/5 border border-white/10 text-indigo-100 self-start'
                  }`}>
                    {msg.content}
                    {msg.showChart && (
                      <div className="mt-4 h-36 w-full bg-black/30 rounded-xl p-3 border border-white/5">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salesData}>
                            <XAxis dataKey="day" hide />
                            <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                              {salesData.map((e, i) => <Cell key={i} fill={e.amount > 5000 ? '#818cf8' : '#312e81'} />)}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-1 items-center p-2 opacity-40">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="px-6 py-4 border-t border-white/10 flex items-center gap-3 bg-black/20">
              <div className="relative flex-1 flex items-center bg-white/5 border border-white/10 rounded-xl px-4">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isListening ? "Listening..." : "Describe your issue…"}
                  className="flex-1 bg-transparent py-3 text-sm text-slate-200 focus:outline-none"
                />
                <button type="button" onClick={handleVoice} className={`p-2 ${isListening ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                   <FontAwesomeIcon icon={faMicrophone} />
                </button>
              </div>
              <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NeedHelp;