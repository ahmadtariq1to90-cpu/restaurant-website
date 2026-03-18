import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OrderForm from './components/OrderForm';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="font-poppins bg-white min-h-screen text-gray-900 selection:bg-[#ff6b2c] selection:text-white">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative px-4 sm:px-0"
            >
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#ff6b2c]/40 rounded-[2rem] rounded-tr-[4rem] hidden sm:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Interior" 
                className="relative rounded-[2rem] rounded-tr-[4rem] shadow-2xl object-cover h-[500px] md:h-[600px] w-full"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-6 right-0 sm:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center min-w-[160px]"
              >
                <h3 className="text-4xl font-bold text-[#ff6b2c] mb-1 font-serif">15+</h3>
                <p className="text-sm text-gray-500 font-medium">Years of Culinary<br/>Excellence</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8 mt-12 lg:mt-0"
            >
              <span className="text-[#ff6b2c] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Crafting Memorable <br/>
                <span className="text-[#ff6b2c] italic">Dining Experiences</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Founded in 2008, Spice & Savor was born from a passion for blending traditional spices with contemporary culinary artistry. We believe that food is more than just sustenance; it's a celebration of culture, community, and craft.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                Our chefs source only the finest organic ingredients from local farmers, ensuring every plate served is as fresh as it is flavorful. From our signature slow-cooked lamb to our handmade pasta, every dish is prepared with meticulous attention to detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <motion.div whileHover={{ y: -5 }} className="p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <h4 className="text-gray-900 font-bold mb-2">Authentic Flavors</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">Real spices imported from source for that genuine taste.</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <h4 className="text-gray-900 font-bold mb-2">Modern Ambiance</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">A perfect setting for romantic dates or family gatherings.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Menu />
      <Gallery />

      {/* Forms Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <OrderForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ReservationForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <a href="#home" className="text-2xl font-bold tracking-wider text-white uppercase block">
                Spice <span className="text-[#ff6b2c]">&</span> Savor
              </a>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Experience the perfect blend of traditional spices and modern culinary artistry in an elegant, unforgettable atmosphere.
              </p>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#ff6b2c] hover:text-white transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#ff6b2c] hover:text-white transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#ff6b2c] hover:text-white transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Menu', 'Gallery', 'Order', 'Reservation', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#ff6b2c] transition-colors text-sm uppercase tracking-wider">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-serif font-bold text-lg mb-6">Opening Hours</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-light">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 12:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">10:00 AM - 12:00 AM</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ff6b2c] flex-shrink-0" />
                  <span>123 Culinary Lane, Foodie District, FD 10021</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#ff6b2c] flex-shrink-0" />
                  <span>+91 98727 86826</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#ff6b2c] flex-shrink-0" />
                  <span>hello@spicesavor.com</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              &copy; {new Date().getFullYear()} Spice & Savor. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500 font-light">
              <button onClick={() => setLegalModal('privacy')} className="hover:text-[#ff6b2c] transition-colors">Privacy Policy</button>
              <button onClick={() => setLegalModal('terms')} className="hover:text-[#ff6b2c] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <LegalModal isOpen={legalModal !== null} onClose={() => setLegalModal(null)} type={legalModal} />
    </div>
  );
}
