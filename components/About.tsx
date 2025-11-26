import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Gamepad2, MonitorPlay } from 'lucide-react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden scroll-mt-20">
      {/* Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-[#01C853] opacity-[0.03] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#01C853] font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Evolution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            From Rhythm Games to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Global Media Tech.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Dooub began with a passion for rhythm games, understanding the beat of user interaction. Today, we apply that same engagement logic to build massive OTT infrastructures and intelligent AI services.
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We are a developer-centric company at heart. Whether it's optimizing a game engine or scaling a streaming platform to millions, we engineer solutions that perform under pressure.
          </p>

          <div className="space-y-4 mb-10">
            {[
              'Interactive Gaming Roots',
              'High-Scale OTT Architecture',
              'AI-Driven Personalization',
              'Developer-First Ecosystem'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#01C853]" size={20} />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <Button variant="outline">Learn More About Us</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-[500px]">
             <div className="absolute inset-0 bg-[#01C853]/20 mix-blend-overlay z-10"></div>
             {/* Abstract tech representation */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"></div>
             
             {/* Floating Stats Card 1 */}
             <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute top-8 right-8 bg-[#050505]/90 backdrop-blur-md p-4 rounded-xl border border-[#01C853]/30 z-20 flex items-center gap-3"
             >
                <div className="p-2 bg-[#01C853]/20 rounded-lg">
                    <MonitorPlay className="text-[#01C853]" size={24} />
                </div>
                <div>
                    <div className="text-white font-bold">OTT Ready</div>
                    <div className="text-xs text-gray-400">4K Streaming</div>
                </div>
             </motion.div>

             {/* Floating Stats Card 2 */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 left-8 bg-[#050505]/90 backdrop-blur-md p-6 rounded-xl border border-[#01C853]/30 z-20 min-w-[200px]"
             >
                <div className="flex gap-4 items-center mb-2">
                    <div className="p-2 bg-[#01C853]/20 rounded-lg">
                        <Gamepad2 className="text-[#01C853]" size={20} />
                    </div>
                    <span className="text-gray-300 font-medium">Evolution</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full mb-2 overflow-hidden">
                    <div className="bg-[#01C853] h-full rounded-full w-[85%]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Games</span>
                    <span>AI Services</span>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
