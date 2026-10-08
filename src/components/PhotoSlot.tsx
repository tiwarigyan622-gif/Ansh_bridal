import React from 'react';
import { usePhotos } from '../context/PhotoContext';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

interface PhotoSlotProps {
  slotId: string;
  categoryName: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'video' | 'wide';
  subLabel?: string;
  onViewPhoto?: (url: string, title: string) => void;
  compact?: boolean;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({
  slotId,
  categoryName,
  className = '',
  aspectRatio = 'portrait',
  subLabel,
  onViewPhoto,
  compact = false,
}) => {
  const { getPhoto } = usePhotos();
  const currentPhoto = getPhoto(slotId);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-[16/9]';
      case 'wide':
        return 'aspect-[21/9]';
      case 'portrait':
      default:
        return 'aspect-[4/5]';
    }
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group ${
        currentPhoto
          ? 'border-[#D4AF37]/40 shadow-lg hover:shadow-xl hover:border-[#D4AF37]'
          : 'border-dashed border-[#D4AF37]/50 bg-gradient-to-b from-[#FAF6F0] via-[#F6ECE0] to-[#EFE2D2]'
      } ${getAspectClass()} ${className}`}
    >
      {currentPhoto ? (
        // Real photo uploaded by user - View only
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={() => onViewPhoto && onViewPhoto(currentPhoto, categoryName)}
        >
          <img
            src={currentPhoto}
            alt={categoryName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#23043D]/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#3B0764]/90 text-[#F5E6B3] border border-[#D4AF37]/40 backdrop-blur-sm shadow-md">
              {categoryName}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#10B981]/90 text-white shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Real Photo
            </span>
          </div>

          {/* View Only Action on Hover */}
          {onViewPhoto && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] pointer-events-none">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-[#3B0764] shadow-lg font-semibold text-xs"
              >
                <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                <span>View Full Size</span>
              </div>
            </div>
          )}

          {/* Bottom Title Bar */}
          <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
            <p className="font-cinzel text-sm font-bold tracking-wider text-[#F5E6B3] truncate">
              {categoryName}
            </p>
            {subLabel && (
              <p className="text-[11px] text-white/80 line-clamp-1">{subLabel}</p>
            )}
          </div>
        </div>
      ) : (
        // Clean Placeholder Slot (No AI images, no stock photos, no upload controls)
        <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center relative overflow-hidden">
          {/* Ornamental Background Mandala Watermark (SVG) */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-48 h-48 text-[#3B0764]" fill="currentColor">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" stroke="currentColor" strokeWidth="1" />
              <path d="M100 30 C120 70 120 130 100 170 C80 130 80 70 100 30 Z" fill="currentColor" opacity="0.4" />
              <path d="M30 100 C70 120 130 120 170 100 C130 80 70 80 30 100 Z" fill="currentColor" opacity="0.4" />
            </svg>
          </div>

          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 text-[#D4AF37]/60 text-xs select-none">✦</div>
          <div className="absolute top-2 right-2 text-[#D4AF37]/60 text-xs select-none">✦</div>
          <div className="absolute bottom-2 left-2 text-[#D4AF37]/60 text-xs select-none">✦</div>
          <div className="absolute bottom-2 right-2 text-[#D4AF37]/60 text-xs select-none">✦</div>

          {/* Category Badge */}
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#3B0764]/10 text-[#3B0764] border border-[#D4AF37]/40 mb-3 shadow-xs">
            {categoryName}
          </span>

          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#3B0764]/5 border border-[#D4AF37]/30 flex items-center justify-center text-[#3B0764] mb-3">
            <ImageIcon className="w-6 h-6 text-[#C5A059]" />
          </div>

          <p className="font-cinzel text-xs md:text-sm font-bold text-[#3B0764] tracking-wide mb-1">
            {categoryName}
          </p>

          <p className="text-[11px] text-[#6B5A72] max-w-[210px] leading-relaxed">
            {subLabel || 'Ansh Bridal Mehandi Art'}
          </p>
        </div>
      )}
    </div>
  );
};
