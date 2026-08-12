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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#070A12] border-t border-[#202633]/60 py-16 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF571E] to-[#C64E12] flex items-center justify-center text-white shadow-lg shadow-[#FF571E]/20">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Luminous Ceylon<span className="text-[#FF571E]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#808898] leading-relaxed font-sans">
              A premium, AI-powered portfolio and content assistant for professional photographers to showcase their work and scale creative presence worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#808898]">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors">Portfolio Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services & Offers</button>
              </li>
              <li>
                <button onClick={() => scrollTo('ai-tool')} className="hover:text-[#FF571E] transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>AI Caption Generator</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About & Workflow</button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">Pricing Investment</button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact Studio</button>
              </li>
            </ul>
          </div>

          {/* Column 3: AI Tools & Services */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              AI Tools & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#808898]">
              <li className="hover:text-white cursor-pointer">Multi-Platform Caption Copywriter</li>
              <li className="hover:text-white cursor-pointer">SEO Hashtag Cluster Discovery</li>
              <li className="hover:text-white cursor-pointer">Fine Art Wedding Photojournalism</li>
              <li className="hover:text-white cursor-pointer">Vogue Editorial Studio Shoot</li>
              <li className="hover:text-white cursor-pointer">Architecture & Commercial Licensing</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Editorial Insights
            </h4>
            <p className="text-xs text-[#808898] leading-relaxed mb-4">
              Subscribe to receive curated photography case studies, AI prompt guides, and exclusive booking dates.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#0B0F19] border border-[#202633] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF571E] placeholder:text-[#808898]/60"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#FF571E] text-white rounded-lg flex items-center justify-center hover:bg-[#FF571E]/90 transition-colors"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-green-400 font-medium">Subscribed successfully!</div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-12 border-t border-[#202633]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808898] gap-4 font-mono">
          <div>© 2026 Luminous Ceylon. All rights reserved. Designed for luxury photography agencies.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Commercial License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
