import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import PortfolioGallery from './components/PortfolioGallery';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Scroll spy to update activeTab dynamically as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'services', 'about', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplorePortfolio = () => {
    setActiveTab('portfolio');
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Main Page Content Sections */}
      <main>
        {/* 1. Hero Banner */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* Brand Recognition Marquee Bar */}
        <BrandTicker />

        {/* 2. Portfolio Gallery */}
        <PortfolioGallery />

        {/* 3. Services & Offers */}
        <ServicesSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 4. About Photographer & Workflow */}
        <AboutSection onOpenBooking={() => setBookingModalOpen(true)} />

        {/* 5. Pricing Investment & FAQs */}
        <PricingSection onOpenBooking={() => setBookingModalOpen(true)} />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Contact & Project Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
