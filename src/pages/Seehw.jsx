import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

function Seehw() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello! I'm your E-commerce assistant. Ask me about your sales, top products, or customer data." }
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
      const response = getCommerceResponse(userMsg.content);
      setMessages(prev => [...prev, { role: 'ai', ...response }]);
      setIsTyping(false);
    }, 1200);
  };

  const getCommerceResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('sales') || text.includes('revenue')) {
      return { content: "Here is your revenue flow. Wednesday saw a peak due to the flash sale.", showChart: true };
    }
    if (text.includes('customer')) return { content: "Top customers:\n1. Sarah Jenkins ($4,200)\n2. TechFlow Ltd ($3,850)\n3. Michael Chen ($3,100)" };
    return { content: "I'm processing that. You can also ask for 'sales data' to see a chart." };
  };

  const resetChat = () => {
    setMessages([{ role: 'ai', content: "New session started. How can I help with your store today?" }]);
  };

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>

      <section className="relative min-h-screen flex overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />

        {/* LEFT SIDEBAR */}
        <aside className="relative z-20 w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">L</div>
             <span className="text-white font-bold tracking-tight">Loom-Link</span>
          </div>

          <button 
            onClick={resetChat}
            className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 text-slate-200 text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <span className="text-lg">+</span> New Chat
          </button>

          <div className="flex-1 flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-2">Recent Chats</h4>
            <div className="flex flex-col gap-1">
              {['Sales Analysis', 'Top 3 Customers', 'Inventory Check', 'Marketing ROI'].map((chat) => (
                <button key={chat} className="text-left py-2 px-3 rounded-lg text-xs text-slate-400 hover:bg-white/5 hover:text-indigo-300 transition-colors">
                  {chat}
                </button>
              ))}
            </div>
          </div>

          <Link to="/need-help" className="py-3 px-4 rounded-xl border border-indigo-500/30 text-indigo-300 text-xs text-center hover:bg-indigo-500/10 transition-all">
            Need Help?
          </Link>
        </aside>

        {/* MAIN CHAT AREA */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-50 mb-2">Meet Your AI Sales Analyst</h2>
            <p className="text-slate-400 text-sm">Real-time store intelligence at your fingertips.</p>
          </div>

          <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[550px]">
            <div className="px-6 py-4 border-b border-white/10 text-xs text-slate-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Loom-Link AI • LIVE</span>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 space-y-5 overflow-y-auto custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider mb-1 text-slate-500 font-bold">
                    {msg.role === 'user' ? 'ADMIN' : 'LOOM-LINK AI'}
                  </span>
                  <div className={`px-4 py-3 rounded-2xl max-w-[90%] text-sm ${
                    msg.role === 'user' ? 'bg-indigo-600 text-white self-end' : 'bg-white/5 border border-white/10 text-indigo-50 self-start'
                  }`}>
                    {msg.content}
                    {msg.showChart && (
                      <div className="mt-4 h-40 w-full bg-black/20 rounded-xl p-3 border border-white/5">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salesData}>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
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
                <div className="flex gap-1 items-center p-2 opacity-50">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 bg-slate-900/50 border-t border-white/10 flex gap-2 items-center">
              <div className="relative flex-1 flex items-center bg-white/5 border border-white/10 rounded-xl px-4">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isListening ? "Recording..." : "Ask your data..."}
                  className="flex-1 bg-transparent py-3 text-sm text-slate-200 focus:outline-none"
                />
                <button type="button" onClick={handleVoice} className={`p-2 ${isListening ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </button>
              </div>
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Seehw;