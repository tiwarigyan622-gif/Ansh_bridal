import React from 'react';
import { Check, Sparkles, MessageCircle, Phone, Calendar, Heart } from 'lucide-react';
import { PhotoSlot } from './PhotoSlot';

interface BridalSectionProps {
  onViewPhoto?: (url: string, title: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onViewPhoto }) => {
  const highlights = [
    'Bridal Mehendi',
    'Bride & Groom Mehendi',
    'Customized Designs',
    'Traditional Designs',
    'Home Service'
  ];

  return (
    <section className="py-20 md:py-28 bg-royal-gradient text-white relative overflow-hidden">
      {/* Decorative Traditional Motif Layer */}
      <div className="absolute inset-0 jaali-pattern-dark opacity-35 pointer-events-none" />

      {/* Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#F5E6B3] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Royal Bridal Experience</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white leading-tight">
              Your Big Day Deserves <br />
              <span className="gold-shimmer-text">Beautiful Mehendi</span>
            </h2>

            <div className="h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <p className="text-base sm:text-lg text-[#FAF6F0]/90 font-light leading-relaxed">
              From intricate bridal patterns to elegant bride & groom designs, create a mehendi look that reflects your style and becomes a beautiful part of your wedding memories.
            </p>

            {/* Exact 5 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/40 backdrop-blur-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#1A0427] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-cinzel text-sm font-semibold tracking-wide text-[#FAF6F0]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20book%20my%20bridal%20mehendi%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Bridal Consultation</span>
              </a>

              <a
                href="tel:+918449227407"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-[#D4AF37] transition"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Artist: 8449227407</span>
              </a>
            </div>
          </div>

          {/* Right Dual Showcase Slots (Customized Bridal & Leg Mehndi Bridal) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#23043D]/90 p-2.5 rounded-3xl border-2 border-[#D4AF37]/60 shadow-xl">
                <PhotoSlot
                  slotId="customized-bridal-mehndi"
                  categoryName="Customized Bridal Mehndi"
                  aspectRatio="portrait"
                  subLabel="Bride & Groom Portrait Slot"
                  onViewPhoto={onViewPhoto}
                />
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-center">
                <p className="text-[11px] text-[#F5E6B3] font-cinzel font-bold">Portraits & Figures</p>
                <p className="text-[10px] text-white/70">Customized wedding art</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#23043D]/90 p-2.5 rounded-3xl border-2 border-[#D4AF37]/60 shadow-xl">
                <PhotoSlot
                  slotId="leg-mehndi-bridal"
                  categoryName="Leg Mehndi Bridal"
                  aspectRatio="portrait"
                  subLabel="Bridal Feet & Legs Slot"
                  onViewPhoto={onViewPhoto}
                />
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-center">
                <p className="text-[11px] text-[#F5E6B3] font-cinzel font-bold">Royal Feet Art</p>
                <p className="text-[10px] text-white/70">Calves & payal designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
