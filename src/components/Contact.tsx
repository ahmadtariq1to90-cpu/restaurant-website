import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-gray-900 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#ff6b2c] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif italic text-gray-900">Contact Us</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 border border-orange-100 group-hover:border-[#ff6b2c] transition-colors duration-300"
              >
                <MapPin className="w-6 h-6 text-[#ff6b2c]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-serif">Location</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  123 Culinary Lane<br/>
                  Foodie District
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-6 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 border border-orange-100 group-hover:border-[#ff6b2c] transition-colors duration-300"
              >
                <Phone className="w-6 h-6 text-[#ff6b2c]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-serif">Phone Number</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  +91 98727 86826
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-6 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 border border-orange-100 group-hover:border-[#ff6b2c] transition-colors duration-300"
              >
                <Clock className="w-6 h-6 text-[#ff6b2c]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-serif">Opening Hours</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Mon – Fri: 11 AM – 11 PM<br/>
                  Sat – Sun: 10 AM – 12 AM
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284160395!2d-122.41941558468205!3d37.77492957975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1565133649988!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Restaurant Location"
              className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
