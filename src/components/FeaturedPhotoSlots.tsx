import React from 'react';
import { MEHENDI_CATEGORIES } from '../data/categories';
import { PhotoSlot } from './PhotoSlot';
import { Sparkles, Camera, ArrowRight } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface FeaturedPhotoSlotsProps {
  onViewPhoto?: (url: string, title: string) => void;
}

export const FeaturedPhotoSlots: React.FC<FeaturedPhotoSlotsProps> = ({ onViewPhoto }) => {
  const { openUploadModal } = usePhotos();

  return (
    <section className="py-16 md:py-20 bg-[#FAF6F0] relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Decorative Traditional Watermark */}
      <div className="absolute inset-0 jaali-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/50 text-[#3B0764] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Real Portfolio Showcase</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#23043D] tracking-wide">
            Featured Mehendi Showcase
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-sm md:text-base text-[#5A4660] font-light leading-relaxed">
            Every bride and family deserves authentic art. Explore our 8 signature mehendi categories below with dedicated real-work photo slots.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openUploadModal('all')}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-[#3B0764] bg-white border border-[#D4AF37] hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Upload / Manage Real Business Photos</span>
            </button>
          </div>
        </div>

        {/* 8 Category Slots Grid (Never mixed, perfectly aligned with the exact 8 categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEHENDI_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="bg-[#FFFDF9] rounded-2xl p-3 border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
            >
              <div>
                <PhotoSlot
                  slotId={category.id}
                  categoryName={category.name}
                  aspectRatio="portrait"
                  subLabel={`Category #${index + 1} Slot • Upload real photo`}
                  onViewPhoto={onViewPhoto}
                />

                <div className="mt-3 px-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#3B0764] mb-1">
                    <span className="font-cinzel text-sm">{category.name}</span>
                    <span className="text-[11px] text-[#C5A059] font-mono">0{index + 1}</span>
                  </div>
                  <p className="text-xs text-[#6B5A72] line-clamp-2 leading-relaxed">
                    {category.shortDesc}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <a
                  href={`https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20am%20interested%20in%20${encodeURIComponent(category.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#3B0764] hover:text-[#C5A059] inline-flex items-center gap-1 transition"
                >
                  <span>Book This Style</span>
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
                <span className="text-[10px] text-[#8C7A92] uppercase tracking-wider">
                  Home Service
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
