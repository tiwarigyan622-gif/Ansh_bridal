import React from 'react';
import { Phone, MessageCircle, Sparkles, Award, Users, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';
import { PhotoSlot } from './PhotoSlot';

export const Hero: React.FC = () => {
  const { openUploadModal } = usePhotos();

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-royal-gradient text-white">
      {/* Decorative Traditional Indian Arch & Jaali Background Pattern */}
      <div className="absolute inset-0 jaali-pattern-dark pointer-events-none opacity-40" />

      {/* Gold Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4C0E75]/40 rounded-full blur-2xl pointer-events-none" />

      {/* Ornamental Top Border Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/60 backdrop-blur-sm shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#F5E6B3] uppercase">
                Mehndi ki best service
              </span>
            </div>

            {/* Brand Title */}
            <div>
              <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white leading-[1.15]">
                ANSH BRIDAL <br className="hidden sm:inline" />
                <span className="gold-shimmer-text">MEHANDI ART</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="font-cinzel text-sm sm:text-base md:text-lg tracking-widest text-[#D4AF37] font-semibold">
                  11 Years of Beautiful Bridal Mehendi Art
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </div>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-[#FAF6F0]/90 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creating elegant, intricate and memorable mehendi designs for brides, families and special occasions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20inquire%20about%20mehendi%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+918449227407"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-[#D4AF37] backdrop-blur-sm shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now (8449227407)</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-4 border-t border-[#D4AF37]/30">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#F5E6B3] flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
                <span>11 Years Experience</span>
                <span className="text-[#D4AF37]">•</span>
                <span>Professional Team</span>
                <span className="text-[#D4AF37]">•</span>
                <span>Home Service Available</span>
              </p>
            </div>

            {/* Highlight Badges Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-center backdrop-blur-xs">
                <span className="block font-cinzel text-lg sm:text-xl font-bold text-[#F5E6B3]">11+</span>
                <span className="text-[10px] sm:text-xs text-[#FAF6F0]/80">Years Experience</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-center backdrop-blur-xs">
                <span className="block font-cinzel text-lg sm:text-xl font-bold text-[#F5E6B3]">100%</span>
                <span className="text-[10px] sm:text-xs text-[#FAF6F0]/80">Natural Organic Henna</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/30 text-center backdrop-blur-xs">
                <span className="block font-cinzel text-lg sm:text-xl font-bold text-[#F5E6B3]">5 Cities</span>
                <span className="text-[10px] sm:text-xs text-[#FAF6F0]/80">Delhi NCR Service</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card (Replaceable real-photo slot for Hero) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Ornamental Gold Halo Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#D4AF37] via-[#F6E05E] to-[#D4AF37] rounded-3xl opacity-30 blur-lg" />
              
              <div className="relative bg-[#23043D]/80 p-3 rounded-3xl border-2 border-[#D4AF37] shadow-2xl backdrop-blur-md">
                <PhotoSlot
                  slotId="hero-banner"
                  categoryName="Customized Bridal Mehndi"
                  aspectRatio="portrait"
                  subLabel="Hero Signature Bridal Mehndi Slot • Upload your signature real photo"
                />

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#3B0764] border-2 border-[#D4AF37] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#1A0427] flex items-center justify-center font-bold font-cinzel text-base">
                    11+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#F5E6B3] font-cinzel">Years of Trust</p>
                    <p className="text-[10px] text-white/80">Bridal Artistry</p>
                  </div>
                </div>

                {/* Floating Doorstep Badge */}
                <div className="absolute -top-3 -right-3 bg-[#FAF6F0] text-[#3B0764] border border-[#D4AF37] px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <HomeIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-xs font-bold">Doorstep Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
