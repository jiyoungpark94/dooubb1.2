import React, { useState } from 'react';
import { MapPin, Clock, Copy, Check, ArrowRight } from 'lucide-react';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("경기 성남시 수정구 금토로80번길 11, 판교이노베이션랩 1205호");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-black border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Global Typography System Header */}
        <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                Location
            </h2>
            <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
                오시는 길
            </p>
        </div>

        {/* Layout: Text 1 : Map 1.8 ratio on desktop (Increased map size) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Text Information */}
            <div className="flex flex-col justify-center h-full">
                {/* Wrapper to control width alignment */}
                <div className="w-full max-w-md">
                    <div className="mb-6">
                        <span className="text-[#01C853] font-bold tracking-wider uppercase text-xs mb-2 block">
                            Dooub Headquarters
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-4 tracking-tight">
                            Pangyo<br/>
                            Innovation Lab.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            기술과 혁신이 만나는 판교 테크노밸리 중심에서<br className="hidden md:block" />
                            사용자 경험의 미래를 설계하고 있습니다.
                        </p>
                    </div>

                    {/* Info Block - Width matches container */}
                    <div className="space-y-3 mb-8 py-5 border-y border-neutral-800/50 w-full">
                        <div className="flex items-start gap-4">
                            <div className="w-5 h-5 mt-0.5 rounded-full bg-neutral-900 flex items-center justify-center text-[#01C853]">
                                <MapPin size={14} />
                            </div>
                            <div>
                                <span className="block text-white font-medium mb-0.5">Address</span>
                                <span className="text-gray-500 text-sm leading-snug">
                                    경기 성남시 수정구 금토로80번길 11<br/>
                                    판교이노베이션랩 1205호 (우) 13453
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-5 h-5 mt-0.5 rounded-full bg-neutral-900 flex items-center justify-center text-[#01C853]">
                                <Clock size={14} />
                            </div>
                            <div>
                                <span className="block text-white font-medium mb-0.5">Office Hours</span>
                                <span className="text-gray-500 text-sm leading-snug">
                                    Mon - Fri / 10:00 AM - 07:00 PM
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Actions - Full width to match lines above */}
                    <div className="flex gap-3 w-full">
                        <a 
                            href="https://map.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-bold hover:bg-[#01C853] transition-all duration-300"
                        >
                            <span>Google Maps</span>
                            <ArrowRight size={18} />
                        </a>
                        
                        <button 
                            onClick={handleCopy}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white rounded-xl font-medium border border-neutral-800 hover:border-[#01C853] hover:text-[#01C853] transition-all duration-300"
                        >
                            <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Map Area */}
            <div className="w-full h-full min-h-[400px] lg:min-h-0 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                
                {/* Map Iframe */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.425983803126!2d127.0955!3d37.4085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI0JzMwLjYiTiAxMjfCsDA1JzQzLjgiRQ!5e0!3m2!1sen!2skr!4v1600000000000!5m2!1sen!2skr" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out [filter:grayscale(100%)_invert(92%)_contrast(83%)] group-hover:filter-none"
                ></iframe>

                {/* Subtle Overlay to blend edges - fades out on hover */}
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>

                {/* Minimal Location Badge on Map */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#01C853] animate-pulse"></div>
                    <span className="text-[10px] text-white font-medium tracking-wide">LIVE</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};