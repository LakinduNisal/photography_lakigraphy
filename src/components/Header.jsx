import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Menu, X, Calendar } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'ai-tool', label: 'AI Caption Tool', isSparkle: true },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030508]/85 backdrop-blur-md border-b border-[#202633] py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group focus:outline-none text-left"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF571E] to-[#C64E12] flex items-center justify-center text-white shadow-lg shadow-[#FF571E]/20 group-hover:scale-105 transition-transform duration-300">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-0.5">
              Luminous Ceylon<span className="text-[#FF571E] text-3xl leading-none">.</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#808898] block -mt-1 font-sans">
              Photography Agency & AI Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0B0F19]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#202633]/80 shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === link.id
                  ? 'bg-[#FF571E] text-white shadow-md shadow-[#FF571E]/20 font-bold'
                  : 'text-[#808898] hover:text-white hover:bg-[#181E29]'
              }`}
            >
              {link.isSparkle && <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="header-book-btn"
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:shadow-lg hover:shadow-[#FF571E]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Session</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-white hover:border-[#FF571E]/50 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF571E]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A12]/95 backdrop-blur-xl border-b border-[#202633] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-[#FF571E] text-white font-bold'
                    : 'text-[#808898] hover:text-white hover:bg-[#181E29]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isSparkle && <Sparkles className="w-4 h-4 text-amber-300" />}
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#202633]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#FF571E]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
