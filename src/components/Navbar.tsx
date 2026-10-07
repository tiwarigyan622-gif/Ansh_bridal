import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, UploadCloud } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openUploadModal } = usePhotos();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#23043D]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30 py-2.5'
            : 'bg-gradient-to-b from-[#23043D]/90 via-[#23043D]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Crest */}
            <a href="#home" className="flex items-center gap-2 group text-decoration-none">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#3B0764] flex items-center justify-center text-[#F5E6B3] shadow-md group-hover:scale-105 transition-transform">
                <span className="font-cinzel text-lg font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-sm sm:text-base md:text-lg tracking-wider text-[#FAF6F0] group-hover:text-[#F5E6B3] transition-colors leading-tight">
                  ANSH BRIDAL MEHANDI ART
                </span>
                <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-widest uppercase">
                  Mehndi ki best service
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium text-[#FAF6F0]/90 hover:text-[#F5E6B3] hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Photo Upload Manager Tool Button */}
              <button
                type="button"
                onClick={() => openUploadModal('all')}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#F5E6B3] bg-white/10 border border-[#D4AF37]/40 hover:bg-white/20 transition cursor-pointer"
                title="Upload real business photos for all 8 categories"
              >
                <UploadCloud className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Upload Photos</span>
              </button>

              <a
                href="tel:+918449227407"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#3B0764] border border-[#D4AF37]/60 hover:bg-[#4C0E75] hover:border-[#D4AF37] transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden xl:inline">Call:</span> 8449227407
              </a>

              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20inquire%20about%20mehendi%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-[#1A0427] gold-gradient-btn shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="https://wa.me/918449227407"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366] text-white shadow"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#F5E6B3] hover:bg-white/10 transition"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-[#23043D]/98 border-b border-[#D4AF37]/30 px-4 pt-3 pb-5 space-y-2 animate-fade-in shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#FAF6F0] hover:text-[#F5E6B3] hover:bg-white/10 transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openUploadModal('all');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F5E6B3] bg-white/10 border border-[#D4AF37]/40"
              >
                <UploadCloud className="w-4 h-4 text-[#D4AF37]" />
                Manage Real Photos (8 Categories)
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+918449227407"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#3B0764] text-white border border-[#D4AF37]/50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20inquire%20about%20mehendi%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-[#1A0427] gold-gradient-btn"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
