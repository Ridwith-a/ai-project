import React from 'react';
import { X, Mail, Globe, MessageSquare, Send } from 'lucide-react';

const ContactModal = ({ isOpen, onClose, isLight }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Constructing the mailto link
    const subject = encodeURIComponent(`Inquiry from LoomLink Website: ${data.country}`);
    const body = encodeURIComponent(`Country: ${data.country}\n\nDescription:\n${data.description}`);
    window.location.href = `mailto:info@loom-link.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 backdrop-blur-md bg-black/20">
      <div className={`relative w-full max-w-lg p-8 rounded-[2.5rem] border transition-all duration-500 shadow-2xl
        ${isLight ? 'bg-white/90 border-black/10 text-black' : 'bg-[#0a0a0c]/90 border-white/10 text-white'}`}>
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 opacity-50 hover:opacity-100 transition-opacity">
          <X size={24} />
        </button>

        <div className="mb-8">
          <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Contact <span className="text-blue-600">Us</span></h3>
          <p className="text-sm opacity-50 font-mono"> info@loom-link.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          

          {/* Country Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 flex items-center gap-2">
              <Globe size={12} /> Country
            </label>
            <input 
              required
              name="country"
              type="text" 
              placeholder="e.g. United Arab Emirates"
              className={`w-full p-4 rounded-xl border focus:outline-none focus:border-blue-600 transition-colors
                ${isLight ? 'bg-black/5 border-black/5' : 'bg-white/5 border-white/5'}`}
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 flex items-center gap-2">
              <MessageSquare size={12} /> Project Brief / Description
            </label>
            <textarea 
              required
              name="description"
              rows="4"
              placeholder="Describe your operational logic requirements..."
              className={`w-full p-4 rounded-xl border focus:outline-none focus:border-blue-600 transition-colors resize-none
                ${isLight ? 'bg-black/5 border-black/5' : 'bg-white/5 border-white/5'}`}
            ></textarea>
          </div>

          <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Send <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;