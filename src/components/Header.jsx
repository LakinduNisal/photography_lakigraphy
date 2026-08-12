import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Menu, X, Calendar } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'ai-tool', label: 'AI Studio', isSparkle: true },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        padding: isScrolled ? '12px 0' : '18px 0',
        backgroundColor: isScrolled ? 'rgba(6, 8, 13, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(30, 37, 54, 0.5)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          id="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #FF6B2C 0%, #E04D14 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 16px rgba(255, 107, 44, 0.3)',
          }}>
            <Camera style={{ width: '20px', height: '20px' }} strokeWidth={2.5} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              color: 'white',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
            }}>
              Luminous Ceylon<span style={{ color: '#FF6B2C', fontSize: '26px', marginLeft: '2px' }}>.</span>
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center" style={{
          gap: '4px',
          padding: '5px 6px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(14, 19, 30, 0.9)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(50, 60, 85, 0.6)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: activeTab === link.id ? '600' : '500',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                ...(activeTab === link.id
                  ? {
                      background: 'linear-gradient(135deg, #FF6B2C, #E04D14)',
                      color: 'white',
                      boxShadow: '0 4px 14px rgba(255, 107, 44, 0.35)',
                    }
                  : {
                      background: 'transparent',
                      color: '#8B95A9',
                    }
                ),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== link.id) {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== link.id) {
                  e.currentTarget.style.color = '#8B95A9';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.isSparkle && <Sparkles style={{ width: '14px', height: '14px', color: '#FBBF24' }} />}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            id="header-book-btn"
            onClick={onOpenBooking}
            className="hidden lg:flex items-center"
            style={{
              gap: '8px',
              background: 'linear-gradient(135deg, #FF6B2C 0%, #E04D14 100%)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.02em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(255, 107, 44, 0.25)',
            }}
          >
            <Calendar style={{ width: '16px', height: '16px' }} />
            <span>Book Session</span>
          </button>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(14, 19, 30, 0.9)',
              border: '1px solid rgba(50, 60, 85, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: mobileMenuOpen ? '#FF6B2C' : 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {mobileMenuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        className="lg:hidden"
      >
        {/* Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(6, 8, 13, 0.97)',
            backdropFilter: 'blur(32px)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          paddingTop: '100px',
          paddingLeft: '28px',
          paddingRight: '28px',
          paddingBottom: '36px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  textAlign: 'left',
                  fontSize: '17px',
                  fontWeight: activeTab === link.id ? '600' : '500',
                  fontFamily: 'var(--font-body)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animationDelay: `${idx * 50}ms`,
                  ...(activeTab === link.id
                    ? { background: 'linear-gradient(135deg, #FF6B2C, #E04D14)', color: 'white' }
                    : { background: 'transparent', color: '#8B95A9' }
                  ),
                }}
                className={mobileMenuOpen ? 'animate-fade-in-up' : ''}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {link.isSparkle && <Sparkles style={{ width: '18px', height: '18px', color: '#FBBF24' }} />}
                  {link.label}
                </span>
                {activeTab === link.id && (
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />
                )}
              </button>
            ))}
          </div>

          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(30, 37, 54, 0.6)' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #FF6B2C 0%, #E04D14 100%)',
                color: 'white',
                padding: '16px',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(255, 107, 44, 0.25)',
              }}
            >
              <Calendar style={{ width: '18px', height: '18px' }} />
              <span>Book Session Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
