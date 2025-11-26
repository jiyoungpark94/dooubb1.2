import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Fix: Extend HTMLMotionProps<"button"> instead of React.ButtonHTMLAttributes to match motion.button props
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#01C853] text-black hover:bg-[#00e65f] hover:shadow-[0_0_20px_rgba(1,200,83,0.6)]",
    outline: "border-2 border-[#01C853] text-[#01C853] hover:bg-[#01C853] hover:text-black hover:shadow-[0_0_20px_rgba(1,200,83,0.4)] bg-transparent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};