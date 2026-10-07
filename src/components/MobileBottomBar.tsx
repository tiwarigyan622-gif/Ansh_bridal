import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#23043D]/95 backdrop-blur-md border-t-2 border-[#D4AF37] px-4 py-2.5 shadow-2xl safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Call Button */}
        <a
          href="tel:+918449227407"
          className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span>Call: 8449227407</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20inquire%20about%20mehendi%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-2xl gold-gradient-btn text-[#1A0427] font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
