import React, { useState } from 'react';
import { GUEST_PRICES, GROUP_PACKAGES_20, PACKAGE_30_GUESTS } from '../data/packages';
import { Sparkles, Check, MessageCircle, Phone, Users, ShieldCheck, Tag } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'group'>('group');

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#3B0764]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Guest Mehendi Packages & Rates
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Clear, transparent pricing with 100% natural mehendi paste and dedicated artists. No hidden charges.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 shadow-xs">
            <button
              onClick={() => setActiveTab('group')}
              className={`px-5 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'group'
                  ? 'bg-[#3B0764] text-[#F5E6B3] shadow-md'
                  : 'text-[#6B5A72] hover:text-[#23043D]'
              }`}
            >
              20 & 30 Guests Packages
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-5 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'individual'
                  ? 'bg-[#3B0764] text-[#F5E6B3] shadow-md'
                  : 'text-[#6B5A72] hover:text-[#23043D]'
              }`}
            >
              Per-Person Guest Rates
            </button>
          </div>
        </div>

        {/* View 1: 20 & 30 Guests Packages */}
        {activeTab === 'group' && (
          <div className="space-y-12 animate-fade-in">
            {/* 20 People Packages */}
            <div>
              <div className="text-center mb-8">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-[#3B0764] tracking-wide">
                  20 PEOPLE GUEST MEHNDI PACKAGES
                </span>
                <p className="text-xs text-[#8C7A92] mt-1">
                  Perfect for sangeet nights, mehendi ceremonies and family gatherings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {GROUP_PACKAGES_20.map((pkg, i) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      pkg.isPopular
                        ? 'bg-gradient-to-b from-[#23043D] via-[#3B0764] to-[#23043D] text-white border-2 border-[#D4AF37] shadow-2xl scale-105 z-10'
                        : 'bg-[#FFFDF9] text-[#221526] border border-[#D4AF37]/35 shadow-lg hover:border-[#D4AF37]'
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-[#1A0427] gold-gradient-btn shadow-md uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div>
                      {/* Title & Price */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-cinzel text-lg font-bold tracking-widest ${pkg.isPopular ? 'text-[#F5E6B3]' : 'text-[#3B0764]'}`}>
                          {pkg.name}
                        </span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${pkg.isPopular ? 'bg-white/10 text-white' : 'bg-[#3B0764]/10 text-[#3B0764]'}`}>
                          {pkg.guests}
                        </span>
                      </div>

                      <div className="my-5 pb-5 border-b border-[#D4AF37]/30">
                        <span className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight">
                          {pkg.price}
                        </span>
                        <span className={`text-xs ml-2 ${pkg.isPopular ? 'text-white/80' : 'text-[#6B5A72]'}`}>
                          for {pkg.guests}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <span className={pkg.isPopular ? 'text-white/90' : 'text-[#4A3B4F]'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={`https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(pkg.price)})%20for%2020%20guests.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-md ${
                        pkg.isPopular
                          ? 'gold-gradient-btn text-[#1A0427]'
                          : 'bg-[#3B0764] text-[#F5E6B3] hover:bg-[#23043D]'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book {pkg.name} Package</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* 30 Guests Section (Strict: Do NOT invent a price. Show: 30 Guests — Custom Package. CTA: Get Custom Quote) */}
            <div className="bg-[#FAF6F0] rounded-3xl border-2 border-dashed border-[#D4AF37] p-8 md:p-10 shadow-sm text-center max-w-4xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#23043D] tracking-wide mb-2">
                {PACKAGE_30_GUESTS.title}
              </h3>

              <p className="text-sm md:text-base text-[#5A4660] max-w-xl mx-auto mb-6">
                {PACKAGE_30_GUESTS.note} We provide tailored team setups, flexible design combinations, and custom quotes without any hidden costs.
              </p>

              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20need%20a%20custom%20quote%20for%20a%2030%20guests%20mehndi%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{PACKAGE_30_GUESTS.ctaText}</span>
              </a>
            </div>
          </div>
        )}

        {/* View 2: Normal Guest Mehndi Prices */}
        {activeTab === 'individual' && (
          <div className="animate-fade-in space-y-6">
            <div className="text-center mb-8">
              <span className="font-cinzel text-lg sm:text-xl font-bold text-[#3B0764] tracking-wide">
                NORMAL GUEST MEHNDI PRICES
              </span>
              <p className="text-xs text-[#8C7A92] mt-1">
                Standard single-person guest mehndi options with fine organic henna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUEST_PRICES.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#D4AF37]/35 shadow-md hover:border-[#D4AF37] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-cinzel text-2xl font-bold text-[#23043D]">
                        {item.price}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#3B0764]/10 text-[#3B0764]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-cinzel text-base font-bold text-[#3B0764] mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#6B5A72] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[11px] text-[#8C7A92]">100% Natural Henna</span>
                    <a
                      href={`https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(item.title)}%20(${encodeURIComponent(item.price)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#3B0764] hover:text-[#C5A059] flex items-center gap-1 transition"
                    >
                      <span>Book on WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
