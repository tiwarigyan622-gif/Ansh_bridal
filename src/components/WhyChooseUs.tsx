import React from 'react';
import { Award, Users, Palette, Sparkles, Layers, Home as HomeIcon, MapPin, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: '11 Years of Experience',
      desc: 'Over a decade of master artistry creating unforgettable bridal memories across Delhi NCR.',
      icon: Award
    },
    {
      title: 'Professional Team',
      desc: 'Trained, punctual, and courteous artists dedicated to flawless execution for brides and guests.',
      icon: Users
    },
    {
      title: 'Beautiful Detailed Designs',
      desc: 'Micro-fine cone precision ensuring intricate peacocks, kalash, and clean jaali strokes.',
      icon: Sparkles
    },
    {
      title: 'Customized Designs',
      desc: 'Bespoke storytelling incorporating love milestones, couple portraits, and wedding themes.',
      icon: Palette
    },
    {
      title: 'Multiple Styles',
      desc: 'Bridal, Rajasthani, Arabic, Mandala, Indian, Traditional, and contemporary hybrid styles.',
      icon: Layers
    },
    {
      title: 'Home Mehendi Service',
      desc: 'Convenient on-time doorstep service at your home, hotel, farm, or wedding venue.',
      icon: HomeIcon
    }
  ];

  const serviceAreas = [
    { name: 'Noida', tag: 'Fast Service' },
    { name: 'Delhi', tag: 'Central & NCR' },
    { name: 'Greater Noida', tag: 'Home Studio Base' },
    { name: 'Faridabad', tag: 'Doorstep Service' },
    { name: 'Gurgaon', tag: 'Doorstep Service' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#3B0764]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Why Choose Us Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Excellence Guaranteed</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Why Choose Us
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Committed to pure natural henna, unmatched artistry, and reliable doorstep service.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF6F0] rounded-3xl p-6 border border-[#D4AF37]/35 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#23043D] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B5A72] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Areas Section */}
        <div className="bg-gradient-to-r from-[#23043D] via-[#3B0764] to-[#23043D] rounded-3xl border-2 border-[#D4AF37] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 jaali-pattern-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#F5E6B3] text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Doorstep Service Available</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Our Service Areas
            </h3>

            <p className="text-sm md:text-base text-[#FAF6F0]/80 font-light mb-8 max-w-2xl mx-auto">
              Our professional team travels to your doorstep across major Delhi NCR locations for weddings, engagements, sangeet, and festivals.
            </p>

            {/* City Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-8">
              {serviceAreas.map((city, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/50 rounded-2xl p-4 text-center hover:bg-white/15 transition group"
                >
                  <MapPin className="w-5 h-5 text-[#D4AF37] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-cinzel text-sm sm:text-base font-bold text-[#F5E6B3] block">
                    {city.name}
                  </span>
                  <span className="text-[10px] text-white/70 block mt-0.5">
                    {city.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Home Service CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918449227407?text=Hello%20Ansh%20Bridal%20Mehandi%20Art%2C%20I%20want%20to%20check%20home%20service%20availability%20for%20my%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1A0427] gold-gradient-btn shadow-md"
              >
                Check Home Service Availability
              </a>
              <a
                href="tel:+918449227407"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-[#D4AF37] transition"
              >
                Call: 8449227407
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
