import React from 'react';
import { Phone, Mail, Instagram, MapPin, Sparkles, Heart } from 'lucide-react';
import { INSTAGRAM_PROFILE_URL } from '../data/reviews';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceAreas = ['Noida', 'Delhi', 'Greater Noida', 'Faridabad', 'Gurgaon'];

  return (
    <footer className="bg-gradient-to-b from-[#23043D] to-[#160226] text-[#FAF6F0] border-t-2 border-[#D4AF37] relative overflow-hidden">
      {/* Decorative Gold Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#3B0764] flex items-center justify-center text-[#F5E6B3] font-cinzel font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#FAF6F0]">
                  ANSH BRIDAL MEHANDI ART
                </h3>
                <p className="text-xs text-[#D4AF37] italic font-serif">
                  "Beautiful Mehendi. Beautiful Memories."
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6F0]/80 leading-relaxed font-light max-w-sm">
              Creating elegant, intricate and memorable mehendi designs for brides, families and special occasions with 11 years of trusted experience.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#D4AF37] block mb-2">
                Service Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-full text-[11px] bg-white/10 border border-[#D4AF37]/30 text-[#FAF6F0]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F5E6B3] tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="h-[1.5px] w-8 bg-[#D4AF37]" />
            <ul className="space-y-2 pt-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#FAF6F0]/80 hover:text-[#F5E6B3] transition flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-[10px]">✦</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F5E6B3] tracking-wider uppercase">
              Direct Contact
            </h4>
            <div className="h-[1.5px] w-8 bg-[#D4AF37]" />

            <div className="space-y-2.5 text-xs sm:text-sm text-[#FAF6F0]/80 pt-1">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <a href="tel:+918449227407" className="hover:text-white transition">8449227407</a>
                  <span className="mx-1.5 text-[#D4AF37]">/</span>
                  <a href="tel:+918449227499" className="hover:text-white transition">8449227499</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:anshmehndiartbridal@gmail.com" className="hover:text-white transition break-all">
                  anshmehndiartbridal@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5E6B3] transition"
                >
                  @ansh_bridal_mehandi_art
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#FAF6F0]/70 leading-relaxed">
                  Amritpuram, Block E, Chandila, Gamma 1, Greater Noida, UP 201310
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/60 gap-3 text-center sm:text-left">
          <p>© 2026 Ansh Bridal Mehandi Art. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            <span>for Royal Indian Brides</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
