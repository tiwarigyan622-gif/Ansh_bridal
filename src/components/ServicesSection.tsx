import React from 'react';
import { MEHENDI_CATEGORIES } from '../data/categories';
import { PhotoSlot } from './PhotoSlot';
import { Sparkles, MessageCircle, Check, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onViewPhoto?: (url: string, title: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onViewPhoto }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Traditional Indian Pattern */}
      <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Our Mehendi Services</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Signature Mehendi Styles
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Crafted with authentic rajasthani herbal henna, bespoke artistry, and 11 years of bridal perfection. Home service available across Delhi NCR.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {MEHENDI_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="bg-[#FFFDF9] rounded-3xl border border-[#D4AF37]/35 p-4 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Slot */}
                <PhotoSlot
                  slotId={category.id}
                  categoryName={category.name}
                  aspectRatio="portrait"
                  subLabel={`${category.name} Slot`}
                  onViewPhoto={onViewPhoto}
                />

                {/* Category Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#C5A059] tracking-widest uppercase">
                      Category 0{index + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3B0764]/10 text-[#3B0764] font-medium">
                      Doorstep Service
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#23043D] group-hover:text-[#3B0764] transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-xs text-[#6B5A72] leading-relaxed">
                    {category.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-[#D4AF37]/20 space-y-1.5">
                    {category.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#4A3B4F]">
                        <Check className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-[#D4AF37]/20">
                <a
                  href={`https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(category.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-[#3B0764] text-[#F5E6B3] hover:bg-[#23043D] transition shadow-xs group-hover:shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Inquire for {category.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
