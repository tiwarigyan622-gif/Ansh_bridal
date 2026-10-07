import React from 'react';
import { REVIEWS_DATA, GOOGLE_REVIEW_URL, INSTAGRAM_PROFILE_URL } from '../data/reviews';
import { MessageSquareQuote, Heart, ExternalLink, Instagram } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Jaali */}
      <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Words From Our Clients</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Client Experiences
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Real feedback and genuine impressions from brides and families we have had the honor to adorn.
          </p>
        </div>

        {/* Reviews Grid (Exact 10 Reviews, no fake stars, no fake verified claims) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REVIEWS_DATA.map((review, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#D4AF37]/35 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div>
                <MessageSquareQuote className="w-7 h-7 text-[#D4AF37] mb-3" />
                <p className="text-sm sm:text-base text-[#2E1F35] font-serif italic leading-relaxed">
                  "{review.quote.replace(/^"|"$/g, '')}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center font-bold text-xs font-cinzel">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#23043D]">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-[#8C7A92]">Client Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Featured Call-To-Action Banners: Google Review & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Google Review Banner */}
          <div className="bg-gradient-to-br from-[#23043D] to-[#3B0764] rounded-3xl p-8 border-2 border-[#D4AF37] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37] flex items-center justify-center mb-4">
                <span className="font-cinzel text-xl font-bold text-[#F5E6B3]">G</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Enjoyed Our Mehendi?
              </h3>
              <p className="text-sm text-[#FAF6F0]/80 leading-relaxed mb-6">
                Your kind feedback helps other brides find their dream mehendi artist. Share your experience with us!
              </p>
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-md hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Leave a Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram Banner */}
          <div className="bg-gradient-to-br from-[#3B0764] to-[#581C87] rounded-3xl p-8 border-2 border-[#D4AF37] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37] flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-[#F5E6B3]" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Follow Our Mehendi Art
              </h3>
              <p className="text-sm text-[#FAF6F0]/80 leading-relaxed mb-6">
                Explore our latest bridal designs, bride & groom motifs, reels and client updates on Instagram.
              </p>
            </div>

            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-[#D4AF37] shadow-md hover:scale-105 active:scale-95 transition-transform"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
