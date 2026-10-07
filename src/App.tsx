import React, { useState } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedPhotoSlots } from './components/FeaturedPhotoSlots';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BridalSection } from './components/BridalSection';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { Lightbox } from './components/Lightbox';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    url: string | null;
    title: string;
  }>({
    isOpen: false,
    url: null,
    title: '',
  });

  const handleViewPhoto = (url: string, title: string) => {
    setLightboxState({
      isOpen: true,
      url,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      url: null,
      title: '',
    });
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-[#221526] flex flex-col font-sans-clean pb-20 lg:pb-0">
        {/* Navigation */}
        <Navbar />

        {/* Main Content following exact requested visual flow:
            NAME/HERO → LARGE BACKGROUND PHOTO → PHOTOS → DETAILS (ABOUT) → SERVICES → PACKAGES → GALLERY → REVIEWS → CONTACT */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Featured Real-Photo Slots Section (Immediately below Hero) */}
          <FeaturedPhotoSlots onViewPhoto={handleViewPhoto} />

          {/* 3. About Section */}
          <AboutSection onViewPhoto={handleViewPhoto} />

          {/* 4. Signature Services (Exact 8 Categories) */}
          <ServicesSection onViewPhoto={handleViewPhoto} />

          {/* 5. Royal Bridal Showcase */}
          <BridalSection onViewPhoto={handleViewPhoto} />

          {/* 6. Packages & Pricing */}
          <PackagesSection />

          {/* 7. Gallery with Filter Tabs & Lightbox */}
          <GallerySection onViewPhoto={handleViewPhoto} />

          {/* 8. Why Choose Us & Service Areas */}
          <WhyChooseUs />

          {/* 9. Client Reviews & Social Media CTAs */}
          <ReviewsSection />

          {/* 10. Contact & Location & Booking Form */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Fixed Mobile Bottom Bar (Never overlaps content due to pb-20) */}
        <MobileBottomBar />

        {/* Real Business Photo Manager Modal */}
        <PhotoManagerModal />

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxState.isOpen}
          photoUrl={lightboxState.url}
          title={lightboxState.title}
          onClose={handleCloseLightbox}
        />
      </div>
    </PhotoProvider>
  );
}
