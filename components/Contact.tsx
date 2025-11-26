import React, { useState } from 'react';
import { Send, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    alert(`Thank you for reaching out! We received: "${message}"`);
    setMessage('');
  };

  const today = new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });

  return (
    // Removed bg-[#050505] for transparency
    <section id="contact" className="py-32 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Global Typography System Header */}
        <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                Let's Talk
            </h2>
            <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
                여러분의 새로운 아이디어를 들려주세요.<br/> 둡이 기술로 실현해 드립니다.
            </p>
        </div>

        {/* Messenger Window Container - Floating Animation */}
        <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#0f0f0f] rounded-[2rem] shadow-[0_0_100px_rgba(1,200,83,0.3)] border border-neutral-700 hover:border-[#01C853]/50 transition-colors duration-300 overflow-hidden flex flex-col max-w-2xl mx-auto ring-1 ring-white/5 relative"
        >
             {/* Glow behind the chat window specifically - Increased opacity for better visibility */}
            <div className="absolute inset-0 bg-[#01C853] opacity-[0.1] pointer-events-none"></div>

            {/* Window Header */}
            <div className="bg-[#1a1a1a] px-6 py-5 border-b border-neutral-800 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center border border-[#01C853] p-0.5 overflow-hidden shadow-[0_0_15px_rgba(1,200,83,0.4)]">
                             {/* SVG Symbol */}
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <rect width="40" height="40" fill="black"/>
                                <text x="50%" y="54%" dominantBaseline="central" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="24" fill="#01C853">d</text>
                            </svg>
                        </div>
                        <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#01C853] rounded-full border-2 border-[#1a1a1a] shadow-[0_0_5px_#01C853]"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-base tracking-wide">Dooub Team</h4>
                        <p className="text-xs text-[#01C853] font-bold uppercase tracking-wider animate-pulse">Online Now</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full hover:bg-neutral-800 flex items-center justify-center transition-colors cursor-pointer">
                    <MoreHorizontal className="text-neutral-400" size={24} />
                </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 md:p-8 bg-[#0f0f0f]/80 backdrop-blur-sm flex flex-col gap-6 min-h-[280px] relative z-10">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                {/* Date Divider */}
                <div className="flex justify-center my-2 relative z-10">
                    <span className="text-[11px] font-medium bg-[#1a1a1a] text-neutral-400 px-4 py-1.5 rounded-full border border-neutral-800 shadow-sm">{today}</span>
                </div>

                {/* Message Bubble (Left) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="flex items-end gap-3 z-10"
                >
                    <div className="w-9 h-9 rounded-full bg-black border border-[#01C853]/50 p-1 overflow-hidden shrink-0 shadow-lg">
                         <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" fill="black"/>
                            <text x="50%" y="54%" dominantBaseline="central" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="24" fill="#01C853">d</text>
                        </svg>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-3xl rounded-bl-none p-5 max-w-[85%] text-base text-gray-100 shadow-xl border border-neutral-800 relative">
                        <span className="text-[#01C853] font-bold text-lg">안녕하세요!</span><br/>
                        <span className="leading-relaxed block mt-1">
                            방문해 주셔서 감사합니다. <br/>
                            어떤 프로젝트를 구상 중이신가요? 편하게 말씀해 주세요.
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Input Area */}
            <div className="p-5 bg-[#141414] border-t border-neutral-800 relative z-10">
                <form onSubmit={handleSubmit} className="relative flex items-center gap-3">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="메시지를 입력하세요..."
                        className="flex-1 bg-[#0a0a0a] text-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#01C853]/50 border border-neutral-800 placeholder-gray-600 transition-all shadow-inner"
                    />
                    <button 
                        type="submit" 
                        className={`p-4 rounded-full bg-[#01C853] text-black shadow-[0_0_20px_rgba(1,200,83,0.3)] hover:shadow-[0_0_30px_rgba(1,200,83,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center ${message.trim() ? 'opacity-100' : 'opacity-80'}`}
                    >
                        <Send size={20} fill="black" />
                    </button>
                </form>
            </div>
        </motion.div>
      </div>
    </section>
  );
};