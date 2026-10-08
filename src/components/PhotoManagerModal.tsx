import React from 'react';
import { usePhotos, processImageFile } from '../context/PhotoContext';
import { MEHENDI_CATEGORIES } from '../data/categories';
import { X, Upload, Trash2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const PhotoManagerModal: React.FC = () => {
  const { activeUploadModalCategory, closeUploadModal, getPhoto, setPhoto, removePhoto, clearAllPhotos } = usePhotos();

  if (!activeUploadModalCategory) return null;

  const handleUploadForCategory = async (categoryId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await processImageFile(file);
        setPhoto(categoryId, compressed);
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFDF9] border border-[#D4AF37] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#23043D] via-[#3B0764] to-[#23043D] px-6 py-5 text-white flex items-center justify-between border-b border-[#D4AF37]/40">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-cinzel text-xl font-bold tracking-wide text-[#F5E6B3]">
                Real Business Photos Manager
              </h2>
            </div>
            <p className="text-xs text-white/80 mt-1">
              Upload real photographs for all 8 categories. No AI images or stock photos are ever used.
            </p>
          </div>
          <button
            onClick={closeUploadModal}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Notice Bar */}
        <div className="bg-[#FAF6F0] px-6 py-3 border-b border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#3B0764]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>
              Each category has its own dedicated slot. Photos are stored safely in your browser storage.
            </span>
          </div>
          <button
            onClick={() => {
              if (confirm('Clear all uploaded photos and revert to clean replaceable slots?')) {
                clearAllPhotos();
              }
            }}
            className="text-rose-700 hover:text-rose-900 font-medium underline ml-4 flex-shrink-0"
          >
            Reset All Slots
          </button>
        </div>

        {/* Category Slots Grid */}
        <div className="overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEHENDI_CATEGORIES.map((cat, idx) => {
              const photo = getPhoto(cat.id);
              const inputId = `modal-upload-${cat.id}`;

              return (
                <div
                  key={cat.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    photo
                      ? 'border-[#D4AF37] bg-white shadow-sm'
                      : 'border-dashed border-[#D4AF37]/50 bg-[#FAF6F0]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Thumbnail / Slot */}
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center relative">
                      {photo ? (
                        <img
                          src={photo}
                          alt={cat.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-2">
                          <span className="text-[10px] text-[#3B0764] font-medium block">
                            Slot #{idx + 1}
                          </span>
                          <span className="text-[9px] text-[#8C7A92]">Empty</span>
                        </div>
                      )}
                    </div>

                    {/* Details & Action */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-cinzel text-xs font-bold text-[#3B0764]">
                          {idx + 1}. {cat.name}
                        </span>
                        {photo && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#6B5A72] line-clamp-2 mb-2">
                        {cat.shortDesc}
                      </p>

                      <div className="flex items-center gap-2">
                        <label
                          htmlFor={inputId}
                          className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#3B0764] text-[#F5E6B3] hover:bg-[#2A0845] transition shadow-xs"
                        >
                          <Upload className="w-3 h-3 text-[#D4AF37]" />
                          {photo ? 'Replace' : 'Upload Real Photo'}
                        </label>
                        <input
                          id={inputId}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleUploadForCategory(cat.id, e)}
                        />

                        {photo && (
                          <button
                            type="button"
                            onClick={() => removePhoto(cat.id)}
                            className="p-1 rounded-full text-rose-600 hover:bg-rose-50 transition"
                            title="Remove Photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional slots: Hero Background & About Studio */}
          <div className="mt-6 pt-6 border-t border-[#D4AF37]/30">
            <h3 className="font-cinzel text-sm font-bold text-[#3B0764] mb-3">
              Special Section Photo Slots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hero Banner Slot */}
              {(() => {
                const heroPhoto = getPhoto('hero-banner');
                return (
                  <div className="p-4 rounded-2xl border border-dashed border-[#D4AF37]/50 bg-[#FAF6F0]">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-white border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center">
                        {heroPhoto ? (
                          <img src={heroPhoto} alt="Hero Banner" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[10px] text-[#3B0764] text-center p-2">Hero Photo Slot</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-cinzel text-xs font-bold text-[#3B0764]">
                          Hero Section Background/Feature
                        </h4>
                        <p className="text-[11px] text-[#6B5A72] mb-2">
                          Your main signature bridal mehendi photo shown in the hero section.
                        </p>
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="modal-upload-hero"
                            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#3B0764] text-[#F5E6B3] hover:bg-[#2A0845] transition"
                          >
                            <Upload className="w-3 h-3 text-[#D4AF37]" />
                            {heroPhoto ? 'Replace' : 'Upload Hero Photo'}
                          </label>
                          <input
                            id="modal-upload-hero"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleUploadForCategory('hero-banner', e)}
                          />
                          {heroPhoto && (
                            <button
                              type="button"
                              onClick={() => removePhoto('hero-banner')}
                              className="p-1 rounded-full text-rose-600 hover:bg-rose-50"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* About Studio Slot */}
              {(() => {
                const aboutPhoto = getPhoto('about-artist');
                return (
                  <div className="p-4 rounded-2xl border border-dashed border-[#D4AF37]/50 bg-[#FAF6F0]">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-white border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center">
                        {aboutPhoto ? (
                          <img src={aboutPhoto} alt="About Artist" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[10px] text-[#3B0764] text-center p-2">About Artist Slot</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-cinzel text-xs font-bold text-[#3B0764]">
                          About Section Artist/Studio Photo
                        </h4>
                        <p className="text-[11px] text-[#6B5A72] mb-2">
                          Photo of the lead artist creating mehendi or studio showcase.
                        </p>
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="modal-upload-about"
                            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#3B0764] text-[#F5E6B3] hover:bg-[#2A0845] transition"
                          >
                            <Upload className="w-3 h-3 text-[#D4AF37]" />
                            {aboutPhoto ? 'Replace' : 'Upload Artist Photo'}
                          </label>
                          <input
                            id="modal-upload-about"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleUploadForCategory('about-artist', e)}
                          />
                          {aboutPhoto && (
                            <button
                              type="button"
                              onClick={() => removePhoto('about-artist')}
                              className="p-1 rounded-full text-rose-600 hover:bg-rose-50"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF6F0] px-6 py-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
          <p className="text-xs text-[#6B5A72]">
            Ready to show your real work anytime.
          </p>
          <button
            onClick={closeUploadModal}
            className="px-5 py-2 rounded-full bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] font-semibold text-xs hover:bg-[#2A0845] transition shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
