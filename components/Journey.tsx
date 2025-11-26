import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VISION_STEPS = [
  {
    id: "01",
    phase: "ORIGIN",
    title: "Interaction",
    subTitle: "Rhythm & Touch",
    desc: "사용자 반응을 0.01초 단위로 포착하는 리듬 인터랙션 엔진 기술. dooub의 기술력은 ‘반응(Response)’에서 시작되었습니다.",
  },
  {
    id: "02",
    phase: "EXPANSION",
    title: "Immersion",
    subTitle: "Hyper-Scale Media",
    desc: "티빙, Mnet Smart, 퐁당 등 주요 미디어/OTT 플랫폼의 핵심 기술을 담당하며 대규모 스트리밍·검색·통합통계·추천 시스템으로 몰입 경험을 확장했습니다.",
  },
  {
    id: "03",
    phase: "EVOLUTION",
    title: "Understanding",
    subTitle: "Generative AI",
    desc: "기술은 데이터를 넘어 사용자 맥락과 감정을 이해하는 단계로 진화했습니다. AI 기반 Subsy와 Selectt를 통해 콘텐츠 경험을 혁신하고 개인화 가치를 제공합니다.",
  }
];

export const Journey: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section 
      id="journey"
      className="bg-black text-white py-24 md:py-32 px-6 relative scroll-mt-20 overflow-hidden"
    >
       {/* Background Glow */}
       <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#01C853] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Global Typography System Header */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-24 flex flex-col items-center text-center"
          >
             {/* Badge */}
             <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#01C853] mr-2.5 animate-pulse"></div>
                <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">OUR JOURNEY</span>
             </div>

             <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
               Technology that<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01C853] to-emerald-400">
                 understands emotion.
               </span>
             </h2>
             
             <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
                게임의 인터랙션에서 미디어의 몰입으로,<br className="hidden md:block" />
                그리고 이제는 AI를 통한 공감의 기술로 나아갑니다.
             </p>
          </motion.div>

          {/* List Layout */}
          <div className="flex flex-col border-t border-white/10">
              {VISION_STEPS.map((step, index) => (
                  <div key={step.id} className="relative group">
                      
                      {/* Animated Border Line */}
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left group-hover:bg-[#01C853]/50 transition-colors duration-500"
                      />

                      {/* Content Grid */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 py-5 md:py-6 items-center"
                      >
                          {/* Col 1: Number */}
                          <div className="md:col-span-1 hidden md:block">
                              <span className="font-mono text-sm text-[#01C853] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                                {step.id}
                              </span>
                          </div>

                          {/* Col 2: Phase Label */}
                          <div className="md:col-span-2 hidden md:block">
                              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase group-hover:text-neutral-300 transition-colors">
                                {step.phase}
                              </span>
                          </div>

                          {/* Mobile Header */}
                          <div className="md:hidden flex items-center gap-3 mb-1">
                              <span className="font-mono text-sm text-[#01C853] font-bold">{step.id}</span>
                              <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">{step.phase}</span>
                          </div>

                          {/* Col 3-7: Main Stage Title */}
                          <div className="md:col-span-4">
                              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white group-hover:text-[#01C853] transition-colors duration-300">
                                {step.title}
                              </h3>
                          </div>

                          {/* Col 8-12: Description */}
                          <div className="md:col-span-5 flex flex-col justify-center md:border-l md:border-white/5 md:pl-8">
                              <h4 className="text-sm text-white font-semibold mb-1 opacity-90 tracking-wide">
                                {step.subTitle}
                              </h4>
                              <p className="text-neutral-500 text-sm leading-relaxed break-keep group-hover:text-neutral-400 transition-colors">
                                {step.desc}
                              </p>
                          </div>
                      </motion.div>
                  </div>
              ))}
          </div>
       </div>
    </section>
  );
};