import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      text: 'At Spice & Savor, we take your privacy seriously. We collect information such as your name, phone number, and email address solely for the purpose of processing your orders and reservations. We do not share your personal information with third parties. Our website uses secure protocols to ensure your data is protected. By using our services, you consent to our collection and use of your data as described.'
    },
    terms: {
      title: 'Terms of Service',
      text: 'Welcome to Spice & Savor. By accessing our website, placing an order, or making a reservation, you agree to abide by these terms. All prices are subject to change without notice. Reservations are held for 15 minutes past the booked time. We reserve the right to refuse service. Food allergy requests must be communicated clearly; while we take precautions, we cannot guarantee a completely allergen-free environment.'
    }
  };

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">{content[type].title}</h3>
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              {content[type].text}
            </p>
            <button
              onClick={onClose}
              className="mt-8 w-full py-4 bg-[#ff6b2c] hover:bg-[#e55a1f] text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
