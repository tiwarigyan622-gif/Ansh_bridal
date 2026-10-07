import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, ExternalLink, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { MEHENDI_CATEGORIES } from '../data/categories';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    category: MEHENDI_CATEGORIES[0].name,
    city: 'Greater Noida',
    guestCount: '20 Guests',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Ansh Bridal Mehandi Art, I want to book a mehendi session:%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Event Date:* ${encodeURIComponent(formData.date || 'To be decided')}%0A*Category:* ${encodeURIComponent(formData.category)}%0A*Location/City:* ${encodeURIComponent(formData.city)}%0A*Guests:* ${encodeURIComponent(formData.guestCount)}%0A*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;
    window.open(`https://wa.me/918449227407?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B0764]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0764]/10 border border-[#D4AF37]/40 text-[#3B0764] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Reservations & Inquiries</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#23043D] tracking-wide">
            Let's Create Beautiful <br />
            <span className="text-[#3B0764]">Mehendi Memories</span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦ ✦ ✦</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-base text-[#5A4660] font-light leading-relaxed">
            Reach out directly by phone, WhatsApp, or email. We are available for doorstep services across Noida, Delhi, Greater Noida, Faridabad, and Gurgaon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-md space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-[#23043D] pb-3 border-b border-[#D4AF37]/25">
                Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C7A92] uppercase tracking-wider">
                    Call Direct
                  </span>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href="tel:+918449227407"
                      className="block text-base font-bold text-[#23043D] hover:text-[#3B0764] transition"
                    >
                      +91 8449227407
                    </a>
                    <a
                      href="tel:+918449227499"
                      className="block text-base font-bold text-[#23043D] hover:text-[#3B0764] transition"
                    >
                      +91 8449227499
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C7A92] uppercase tracking-wider">
                    WhatsApp Chat
                  </span>
                  <a
                    href="https://wa.me/918449227407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-[#23043D] hover:text-[#25D366] transition mt-0.5"
                  >
                    +91 8449227407 (Instant Reply)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C7A92] uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:anshmehndiartbridal@gmail.com"
                    className="block text-sm font-semibold text-[#23043D] hover:text-[#3B0764] transition mt-0.5 break-all"
                  >
                    anshmehndiartbridal@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#3B0764] text-[#F5E6B3] border border-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C7A92] uppercase tracking-wider">
                    Studio Address
                  </span>
                  <p className="text-sm text-[#4A3B4F] mt-0.5 leading-relaxed">
                    Amritpuram, Block E, Chandila, Gamma 1, <br />
                    Greater Noida, Uttar Pradesh 201310
                  </p>
                </div>
              </div>
            </div>

            {/* Exactly the 4 Requested Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {/* 1. Call Now */}
              <a
                href="tel:+918449227407"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#3B0764] text-[#F5E6B3] font-semibold text-xs sm:text-sm hover:bg-[#23043D] border border-[#D4AF37] transition shadow-sm text-center"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              {/* 2. WhatsApp Us */}
              <a
                href="https://wa.me/918449227407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl gold-gradient-btn text-[#1A0427] font-bold text-xs sm:text-sm shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              {/* 3. Email Us */}
              <a
                href="mailto:anshmehndiartbridal@gmail.com"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#23043D] hover:bg-[#FAF6F0] border border-[#D4AF37]/50 font-semibold text-xs sm:text-sm transition shadow-xs text-center"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Email Us</span>
              </a>

              {/* 4. Get Directions */}
              <a
                href="https://maps.app.goo.gl/JoGGDmzoTWrYwL428"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#23043D] hover:bg-[#FAF6F0] border border-[#D4AF37]/50 font-semibold text-xs sm:text-sm transition shadow-xs text-center"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/45 shadow-lg">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#23043D] mb-1">
                Book / Request an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5A72] mb-6">
                Fill the details below to directly message our head artist via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                      Occasion Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                      City / Location
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                    >
                      <option value="Greater Noida">Greater Noida</option>
                      <option value="Noida">Noida</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Gurgaon">Gurgaon</option>
                      <option value="Faridabad">Faridabad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                      Expected Guests
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                    >
                      <option value="Bride Only">Bride Only</option>
                      <option value="Bride + Family (5-10)">Bride + Family (5-10)</option>
                      <option value="20 Guests (Package)">20 Guests (Package)</option>
                      <option value="30 Guests (Custom Package)">30 Guests (Custom Package)</option>
                      <option value="50+ Guests">50+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                    Preferred Mehendi Category * (Exact 8 Styles)
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition"
                  >
                    {MEHENDI_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B0764] mb-1.5 uppercase tracking-wide">
                    Additional Notes / Timing
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific design details, preferred venue time, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#23043D] focus:outline-none focus:border-[#3B0764] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl gold-gradient-btn text-[#1A0427] font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
