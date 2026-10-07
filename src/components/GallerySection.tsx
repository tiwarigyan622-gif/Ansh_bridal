import React, { useState } from 'react';
import { MEHENDI_CATEGORIES } from '../data/categories';
import { PhotoSlot } from './PhotoSlot';
import { Sparkles, Filter, Camera } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface GallerySectionProps {
  onViewPhoto?: (url: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewPhoto }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { openUploadModal } = usePhotos();

  // Filter categories strictly according to the user's rule
  const filteredCategories = selectedFilter === 'all'
    ? MEHENDI_CATEGORIES
    : MEHENDI_CATEGORIES.filter((c) => c.name === selectedFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Traditional Jaali */}
      <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Real Portfolio Gallery</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Our Mehendi Gallery
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Authentic photo slots for all 8 signature mehendi categories. Awaiting your real photographs.
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => openUploadModal('all')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#3B0764] bg-white border border-[#D4AF37] hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Upload Real Photos to Gallery</span>
            </button>
          </div>
        </div>

        {/* Filter Buttons (Exact 8 Categories + 'All') */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] shadow-md'
                : 'bg-white text-[#4A3B4F] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
            }`}
          >
            All Categories
          </button>

          {MEHENDI_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.name)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat.name
                  ? 'bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] shadow-md'
                  : 'bg-white text-[#4A3B4F] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat, index) => (
            <div
              key={cat.id}
              className="bg-[#FFFDF9] p-3.5 rounded-3xl border border-[#D4AF37]/35 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div>
                <PhotoSlot
                  slotId={cat.id}
                  categoryName={cat.name}
                  aspectRatio="portrait"
                  subLabel={`Gallery Slot • ${cat.name}`}
                  onViewPhoto={onViewPhoto}
                />

                <div className="mt-3.5 px-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cinzel text-sm font-bold text-[#23043D]">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] text-[#C5A059] font-medium uppercase tracking-wider">
                      Authentic Slot
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6B5A72] mt-1 line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <span className="text-[#8C7A92] text-[11px]">Ready for Real Work</span>
                <a
                  href={`https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20love%20the%20${encodeURIComponent(cat.name)}%20style%20and%20want%20to%20book.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3B0764] hover:text-[#C5A059] transition"
                >
                  Book Style →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
