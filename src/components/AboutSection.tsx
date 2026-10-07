import React from 'react';
import { Award, Home as HomeIcon, HeartHandshake, ShieldCheck, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { PhotoSlot } from './PhotoSlot';

interface AboutSectionProps {
  onViewPhoto?: (url: string, title: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewPhoto }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B0764]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Image Layout with Replaceable Slot */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Gold Ornamental Shadow Border */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B0764]/20 rounded-3xl -rotate-1 pointer-events-none" />

              <div className="relative bg-white p-3.5 rounded-3xl border-2 border-[#D4AF37] shadow-xl">
                <PhotoSlot
                  slotId="about-artist"
                  categoryName="Traditional Mehndi"
                  aspectRatio="portrait"
                  subLabel="About Ansh Mehendi Studio & Lead Artist Slot • Upload Real Photo"
                  onViewPhoto={onViewPhoto}
                />

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#23043D] to-[#3B0764] text-white p-4 rounded-2xl border-2 border-[#D4AF37] shadow-2xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#23043D] font-cinzel font-bold text-xl flex items-center justify-center">
                    11+
                  </div>
                  <div>
                    <span className="block font-cinzel text-sm font-bold text-[#F5E6B3]">
                      11+ Years Experience
                    </span>
                    <span className="text-[11px] text-[#FAF6F0]/80">
                      Master Bridal Artistry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-[#221526]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Heritage & Artistry</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] leading-tight">
              About Ansh Bridal <br />
              <span className="text-[#3B0764]">Mehandi Art</span>
            </h2>

            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                Professional Mehendi Studio
              </span>
            </div>

            {/* Required Body Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#4A3B4F] leading-relaxed font-normal">
              <p>
                Ansh Bridal Mehandi Art specializes in beautiful mehendi designs for brides, couples, families and special occasions. With 11 years of experience and a professional team, we create detailed traditional, modern and customized mehendi designs to make every celebration memorable.
              </p>
              <p className="font-medium text-[#23043D] bg-[#FAF6F0] p-4 rounded-2xl border-l-4 border-[#D4AF37] flex items-center gap-3">
                <HomeIcon className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <span>Home mehendi service is available across our service areas.</span>
              </p>
            </div>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#23043D]">100% Pure Organic Henna</h4>
                  <p className="text-[11px] text-[#6B5A72] mt-0.5">Safe, chemical-free and formulated for deep maroon stains.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30">
                <HeartHandshake className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#23043D]">Doorstep Comfort</h4>
                  <p className="text-[11px] text-[#6B5A72] mt-0.5">Artists reach your venue or home on time across Delhi NCR.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20want%20to%20know%20more%20about%20your%20bridal%20mehendi%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918449227407"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#3B0764] bg-[#FAF6F0] hover:bg-white border border-[#D4AF37] transition shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: 8449227407</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
