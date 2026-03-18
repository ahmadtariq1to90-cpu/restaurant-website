import React, { useState } from 'react';
import { openWhatsApp } from '../data';
import { Plus, Minus, Check } from 'lucide-react';

export default function ReservationForm() {
  const [guests, setGuests] = useState(2);
  const [isFullRestaurant, setIsFullRestaurant] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const guestInfo = isFullRestaurant ? 'Full Restaurant (Private Event)' : `${guests} People`;
    const message = `*Table Reservation*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Guests:* ${guestInfo}\n*Date:* ${data.date}\n*Time:* ${data.time}\n*Message:* ${data.notes || 'None'}`;
    openWhatsApp(message);
  };

  return (
    <div id="reservation" className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6b2c] rounded-full filter blur-[150px] opacity-10 -ml-40 -mb-40 pointer-events-none"></div>
      
      <div className="relative z-10">
        <span className="text-[#ff6b2c] font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Dine In</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-10 font-serif italic">Book a Table</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
              <input required name="name" type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
              <input required name="phone" type="tel" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" placeholder="+1 234 567 890" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Date</label>
              <input required name="date" type="date" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Time</label>
              <input required name="time" type="time" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Guests / Event</label>
              <div className="flex items-center justify-between w-full px-2 py-2 rounded-2xl bg-gray-50 border border-gray-200 h-[58px]">
                <button 
                  type="button" 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  disabled={isFullRestaurant}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#ff6b2c] hover:bg-orange-50 transition-colors border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className={`text-lg font-bold w-16 text-center ${isFullRestaurant ? 'text-gray-400' : 'text-gray-900'}`}>
                  {isFullRestaurant ? '-' : guests}
                </span>
                <button 
                  type="button" 
                  onClick={() => setGuests(guests + 1)}
                  disabled={isFullRestaurant}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#ff6b2c] hover:bg-orange-50 transition-colors border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <label className="flex items-center gap-2 mt-3 cursor-pointer group w-fit">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isFullRestaurant ? 'bg-[#ff6b2c] border-[#ff6b2c]' : 'border-gray-300 group-hover:border-[#ff6b2c]'}`}>
                  {isFullRestaurant && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-gray-600 select-none">Book Full Restaurant</span>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={isFullRestaurant} 
                  onChange={(e) => setIsFullRestaurant(e.target.checked)} 
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Special Message</label>
            <textarea name="notes" rows={3} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#ff6b2c] focus:border-[#ff6b2c] outline-none transition-all resize-none" placeholder="Anniversary, birthday, or special requests?"></textarea>
          </div>
          
          <button type="submit" className="w-full py-5 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 mt-4">
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
