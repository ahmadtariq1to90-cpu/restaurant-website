import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1920&q=80" 
          alt="Signature Cocktail and Fine Dining at Spice & Savor Restaurant" 
          className="w-full h-full object-cover animate-zoom opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 sm:mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#ff6b2c] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6 block"
        >
          Premium Fine Dining & Authentic Cuisine
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight font-serif"
        >
          Where Every Bite <br className="hidden md:block" />
          <span className="text-[#ff6b2c] italic">Tells a Story</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 font-light max-w-2xl mx-auto tracking-wide"
        >
          Experience the best restaurant dining at Spice & Savor. We serve authentic, gourmet dishes crafted with farm-fresh ingredients and signature spices. Join us for an unforgettable culinary journey.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu" 
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#ff6b2c] hover:bg-[#e55a1f] text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(255,107,44,0.3)]"
          >
            Explore Our Menu
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#reservation" 
            className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent hover:bg-white/10 text-white border border-white/50 rounded-full font-medium transition-colors"
          >
            Book a Table
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-[#ff6b2c] transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
