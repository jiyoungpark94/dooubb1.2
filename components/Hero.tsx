import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "emotion",
  "stories",
  "people",
  "feelings",
  "experience",
  "ideas",
  "moments",
  "creativity",
  "meaning",
  "life"
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-[#050505] z-0" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#01C853] font-medium tracking-widest text-sm md:text-base uppercase mb-6"
        >
          We build the future
        </motion.p>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-white mb-4">
          Tech that<br />
          understands
        </h1>
        
        <div className="h-20 md:h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-4xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01C853] to-emerald-200"
                >
                    {words[index]}.
                </motion.span>
            </AnimatePresence>
        </div>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        >
            From games to media, and now to AI. <br className="hidden md:block"/>
            Dooub connects technology with human experience.
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#01C853] to-transparent"></div>
      </div>
    </section>
  );
};