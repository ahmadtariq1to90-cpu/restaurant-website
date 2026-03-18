import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Starters', 'Main Course', 'Drinks', 'Desserts'];

  const filteredMenu = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gray-50 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff6b2c] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Culinary Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif italic text-gray-900">Our Menu</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(category => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-[#ff6b2c] text-white shadow-[0_0_15px_rgba(255,107,44,0.4)]' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#ff6b2c] hover:text-[#ff6b2c]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#ff6b2c]/10 transition-shadow duration-500 group border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-[#ff6b2c] border border-gray-100 shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
