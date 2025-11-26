import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BreathingOrb: React.FC = () => {
  const [state, setState] = useState<'default' | 'services' | 'ott'>('default');

  useEffect(() => {
    const handleScroll = () => {
      // Elements to track
      const servicesSection = document.getElementById('services');
      const ottSection = document.getElementById('history-media-ott'); // From Journey.tsx

      if (ottSection) {
        const rect = ottSection.getBoundingClientRect();
        // If OTT section is near the center of the viewport
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3) {
          setState('ott');
          return;
        }
      }

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // If Services section is visible
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {
          setState('services');
          return;
        }
      }

      setState('default');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    default: {
      background: 'radial-gradient(circle, rgba(1,200,83,0.12) 0%, rgba(0,0,0,0) 60%)',
      width: '800px',
      height: '800px',
      x: '-50%',
      y: '-50%',
      left: '50%',
      top: '50%',
      filter: 'blur(80px)',
    },
    services: {
      background: 'radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, rgba(0,0,0,0) 60%)', // Reddish for Subsy
      width: '1000px',
      height: '1000px',
      x: '-30%',
      y: '-30%',
      left: '20%',
      top: '40%',
      filter: 'blur(100px)',
    },
    ott: {
      background: 'radial-gradient(circle, rgba(50, 100, 255, 0.15) 0%, rgba(0,0,0,0) 60%)', // Blueish for OTT
      width: '900px',
      height: '900px',
      x: '-60%',
      y: '-40%',
      left: '80%',
      top: '60%',
      filter: 'blur(90px)',
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute rounded-full"
        initial="default"
        animate={state}
        variants={variants as any}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};