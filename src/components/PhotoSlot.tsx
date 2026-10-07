import React, { useRef } from 'react';
import { usePhotos, processImageFile } from '../context/PhotoContext';
import { Upload, Image as ImageIcon, Trash2, ZoomIn, RefreshCw, Sparkles } from 'lucide-react';

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
  const { getPhoto, setPhoto, removePhoto } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentPhoto = getPhoto(slotId);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await processImageFile(file);
        setPhoto(slotId, compressed);
      } catch (err) {
        console.error('Error processing image:', err);
      }
    }
  };

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
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {currentPhoto ? (
        // Real photo uploaded by user
        <div className="relative w-full h-full">
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

          {/* Action Bar on Hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
            {onViewPhoto && (
              <button
                type="button"
                onClick={() => onViewPhoto(currentPhoto, categoryName)}
                className="p-2.5 rounded-full bg-white/90 text-[#3B0764] hover:bg-white hover:scale-110 transition shadow-lg"
                title="View Full Size"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2.5 rounded-full bg-[#D4AF37] text-[#23043D] hover:bg-[#F6E05E] hover:scale-110 transition shadow-lg"
              title="Replace Photo"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => removePhoto(slotId)}
              className="p-2.5 rounded-full bg-rose-600/90 text-white hover:bg-rose-700 hover:scale-110 transition shadow-lg"
              title="Remove Photo"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

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
        // Clean Replaceable Slot (No AI images, no stock photos)
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
          <div className="w-12 h-12 rounded-2xl bg-[#3B0764]/5 border border-[#D4AF37]/30 flex items-center justify-center text-[#3B0764] mb-3 group-hover:scale-105 transition-transform">
            <ImageIcon className="w-6 h-6 text-[#C5A059]" />
          </div>

          <p className="font-cinzel text-xs md:text-sm font-bold text-[#3B0764] tracking-wide mb-1">
            Replaceable Real-Photo Slot
          </p>

          <p className="text-[11px] text-[#6B5A72] max-w-[210px] mb-3 leading-relaxed">
            {subLabel || 'Awaiting real business photo. Click below to upload.'}
          </p>

          {/* Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] hover:bg-[#2A0845] hover:border-[#F6E05E] transition shadow-xs cursor-pointer active:scale-95"
          >
            <Upload className="w-3.5 h-3.5 text-[#D4AF37]" />
            Upload Real Photo
          </button>
        </div>
      )}
    </div>
  );
};
