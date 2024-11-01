'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) { // Change this value to set when the div appears
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky',
        zIndex: 1000,
        
      }}
      className="bg-gray-100 shadow-xl rounded-2xl flex flex-row p-2 justify-between items-center sm:w-1/4 w-[65%] mx-auto  top-3"
    >
      <p className="text-black font-semibold text-lg mx-3">Still Searching? </p> <button className="px-4 text-white rounded-2xl bg-[#0040E6] py-2 text-lg font-bold">Sign in</button>
    </motion.div>
  );
};

export default ScrollDiv;
