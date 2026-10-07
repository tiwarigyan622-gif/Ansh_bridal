import React from 'react';
import { X, Download, Share2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  photoUrl: string | null;
  title: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  photoUrl,
  title,
  onClose,
}) => {
  if (!isOpen || !photoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <span className="font-cinzel text-base md:text-lg font-bold text-[#F5E6B3] tracking-wide">
            {title}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={photoUrl}
              download={`${title.toLowerCase().replace(/\s+/g, '-')}-ansh-mehendi.jpg`}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              title="Download image"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl bg-black">
          <img
            src={photoUrl}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <p className="text-xs text-[#FAF6F0]/70 mt-3 tracking-wide">
          Ansh Bridal Mehandi Art • Real Business Artwork
        </p>
      </div>
    </div>
  );
};
