import React, { useState } from 'react';
import { Camera, Sparkles, Send, Check } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ setActiveTab }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setNewsletterEmail('');
    }
  };

  const scrollTo = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0E16] border-t border-[#1E2536]/40 pt-16 pb-10 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B2C] to-[#E04D14] flex items-center justify-center text-white shadow-lg shadow-[#FF6B2C]/20">
                <Camera className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl text-white tracking-tight">
                Luminous Ceylon<span className="text-[#FF6B2C]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#5F6A80] leading-relaxed">
              A premium editorial portfolio for professional photography showcasing visual storytelling, cultural heritage, and destination elegance.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[
                { href: '#instagram', Icon: InstagramIcon, label: 'Instagram' },
                { href: '#twitter', Icon: TwitterIcon, label: 'Twitter' },
                { href: '#linkedin', Icon: LinkedinIcon, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a key={href} href={href} aria-label={label} className="w-9 h-9 rounded-xl glass flex items-center justify-center text-[#5F6A80] hover:text-[#FF6B2C] hover:border-[#FF6B2C]/50 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#5F6A80]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio Gallery' },
                { id: 'services', label: 'Services & Offers' },
                { id: 'about', label: 'About & Workflow' },
                { id: 'pricing', label: 'Pricing Investment' },
                { id: 'contact', label: 'Contact Studio' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                  >
                    {item.sparkle && <Sparkles className="w-3 h-3 text-amber-300" />}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#5F6A80]">
              {[
                'Poruwa & Destination Wedding',
                'Editorial & Personal Branding',
                'Resort & Architectural Shoots',
                'Archival Fine Art Album Design',
                'Commercial Press Licensing',
              ].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Editorial Insights
            </h4>
            <p className="text-xs text-[#5F6A80] leading-relaxed mb-4">
              Subscribe to receive curated photography case studies, behind-the-scenes stories, and exclusive studio booking slots.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#0C1018] border border-[#1E2536] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B2C]/50 transition-colors placeholder:text-[#5F6A80]/50"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#FF6B2C] text-white rounded-lg flex items-center justify-center hover:bg-[#E04D14] transition-colors"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-medium animate-fade-in">Subscribed successfully!</div>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 border-t border-[#1E2536]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5F6A80] gap-4 font-mono">
          <div>© 2026 Luminous Ceylon. All rights reserved.</div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Commercial License'].map((item) => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
