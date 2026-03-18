import React, { useState, useRef, useEffect } from 'react';
import { MENU_ITEMS, openWhatsApp } from '../data';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OrderForm() {
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedItem) {
      alert('Please select an item to order.');
      return;
    }
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const message = `*New Order*\n\n*Customer Name:* ${data.name}\n*Phone:* ${data.phone}\n*Item:* ${selectedItem}\n*Quantity:* ${quantity}\n*Address:* ${data.address}\n*Instructions:* ${data.notes || 'None'}`;
    openWhatsApp(message);
  };

  return (
    <div id="order" className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b2c] rounded-full filter blur-[150px] opacity-10 -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="relative z-10">
        <span className="text-[#ff6b2c] font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Delivery</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-10 font-serif italic">Order Food</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
              <input required name="name" type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
              <input required name="phone" type="tel" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" placeholder="+1 234 567 890" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2" ref={dropdownRef}>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Select Item</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border ${isDropdownOpen ? 'border-[#ff6b2c] ring-1 ring-[#ff6b2c]' : 'border-gray-200'} text-left flex justify-between items-center transition-all outline-none`}
                >
                  <span className={selectedItem ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                    {selectedItem || 'Choose from menu...'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden max-h-64 overflow-y-auto custom-scrollbar"
                    >
                      {MENU_ITEMS.map(item => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSelectedItem(`${item.name} - ${item.price}`);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-5 py-4 hover:bg-orange-50 text-gray-700 hover:text-[#ff6b2c] transition-colors border-b border-gray-50 last:border-0 flex justify-between items-center group"
                        >
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-medium group-hover:text-[#ff6b2c] transition-colors">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-[#ff6b2c] bg-orange-50 px-3 py-1 rounded-full">{item.price}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Quantity</label>
              <div className="flex items-center justify-between w-full px-2 py-2 rounded-2xl bg-gray-50 border border-gray-200 h-[58px]">
                <button 
                  type="button" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#ff6b2c] hover:bg-orange-50 transition-colors border border-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-bold text-gray-900 w-12 text-center">{quantity}</span>
                <button 
                  type="button" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#ff6b2c] hover:bg-orange-50 transition-colors border border-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Delivery Address</label>
            <textarea required name="address" rows={2} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all resize-none" placeholder="123 Main St, Apt 4B"></textarea>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Special Instructions</label>
            <textarea name="notes" rows={2} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all resize-none" placeholder="Any allergies or preferences?"></textarea>
          </div>
          
          <button type="submit" className="w-full py-5 bg-[#ff6b2c] hover:bg-[#e55a1f] text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,107,44,0.2)] mt-4">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
