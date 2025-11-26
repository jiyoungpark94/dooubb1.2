import React from 'react';
import { Brand } from '../types';

interface BrandMarqueeProps {
  brands: Brand[];
  speed?: number; // Duration in seconds
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ brands, speed = 30 }) => {
  // We duplicate the list to create a seamless infinite loop
  const marqueeContent = [...brands, ...brands];

  return (
    <div className="w-full bg-black py-20 relative overflow-hidden flex flex-col items-center">
      {/* 
        Embedded Styles for Portability 
        This makes the component easy to copy-paste to other projects without modifying tailwind.config.js
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee ${speed}s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Global Typography System Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10 flex flex-col items-center">
        <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
          Selected Works
        </h2>
        <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
          업계 선두 기업들과 협업하여 미디어 환경을 혁신하고 있습니다.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Left Fade Mask */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee-infinite">
          {marqueeContent.map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`}
              className="mx-4 md:mx-6"
            >
              {/* Glassmorphism Card */}
              {/* Size reduced by ~10% from original w-[180px] h-[100px] md:w-[220px] md:h-[130px] */}
              <div className="group relative w-[160px] h-[90px] md:w-[200px] md:h-[115px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.15)] cursor-pointer">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Logo Representation */}
                {brand.logoUrl ? (
                    <div className="relative z-10 w-full h-full p-6 flex items-center justify-center">
                        <img 
                            src={brand.logoUrl} 
                            alt={brand.name} 
                            // Unified tone: Grayscale + Brightness adjustment for inactive state
                            className="max-w-full max-h-full object-contain filter grayscale brightness-[1.2] opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        {/* Fallback Text if image fails */}
                        <span className="hidden text-sm md:text-lg font-medium text-white/70 tracking-wide group-hover:text-white transition-colors duration-300">
                            {brand.logoText}
                        </span>
                    </div>
                ) : (
                    <>
                        <div className="relative z-10 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <span className="text-lg md:text-xl font-bold text-white/90">
                            {brand.name.charAt(0)}
                        </span>
                        </div>
                        <span className="relative z-10 text-sm md:text-lg font-medium text-white/70 tracking-wide group-hover:text-white transition-colors duration-300">
                        {brand.logoText}
                        </span>
                    </>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Right Fade Mask */}
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 z-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
    const baseUrl = "https://raw.githubusercontent.com/jiyoungpark94/dooubb1.2/main";
    
    const brands: Brand[] = [
        { id: '1', name: 'TVING', logoText: 'TVING', logoUrl: `${baseUrl}/logo_tving.svg` },
        { id: '2', name: 'wavve', logoText: 'wavve', logoUrl: `${baseUrl}/logo_wavve.svg` },
        { id: '3', name: 'FONDANT', logoText: 'FONDANT', logoUrl: `${baseUrl}/logo_fondant.png` },
        { id: '4', name: 'Melon', logoText: 'Melon', logoUrl: `${baseUrl}/logo_melon.png` },
        { id: '5', name: 'Mnet', logoText: 'Mnet', logoUrl: `${baseUrl}/logo_mnet.png` },
        { id: '6', name: 'CJ ENM', logoText: 'CJ ENM', logoUrl: `${baseUrl}/logo_cjenm.png` },
    ];

    return (
        <section id="projects">
            <BrandMarquee brands={brands} speed={40} />
        </section>
    );
};