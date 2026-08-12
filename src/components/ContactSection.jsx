import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Phone, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Poruwa & Destination Wedding',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsappLink = () => {
    const phoneNumber = "94771234567";
    const textMessage = `📸 *New Project Inquiry - Luminous Ceylon*

*Client Name:* ${formData.name || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Service Requested:* ${formData.service}
*Preferred Date:* ${formData.date || 'To be discussed'}
*Project Details:* ${formData.message || 'None'}

_Sent via Luminous Ceylon Website_`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B2C', '#E04D14', '#FFFFFF'],
      });
    } catch {
      console.log('Confetti triggered');
    }
    setTimeout(() => {
      window.open(buildWhatsappLink(), '_blank');
    }, 800);
  };

  const contactCards = [
    { icon: Mail, label: 'Email Us', value: 'hello@photofy.lk' },
    { icon: MapPin, label: 'Sri Lanka Studios', value: '42 Independence Ave, Colombo 07 & Galle Fort' },
    { icon: Phone, label: 'Direct Phone & WhatsApp', value: '+94 77 123 4567 / +94 11 250 8899' },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative noise-overlay">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
              Get In Touch
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-white leading-[1.1]">
              Let's Bring Your Vision To <span className="italic gradient-text">Life</span>
            </h2>
            <p className="text-[15px] text-[#8B95A9] mt-4 leading-relaxed">
              Planning a Poruwa wedding, destination celebration, or commercial brand campaign? Send us a message and connect instantly on WhatsApp.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="p-5 rounded-2xl bg-[#0C1018] border border-[#1E2536] flex items-center gap-4 hover:border-[#FF6B2C]/20 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#141922] text-[#FF6B2C] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#5F6A80] uppercase font-mono tracking-wider">{card.label}</div>
                      <div className="font-medium text-white text-sm mt-0.5">{card.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-8 pt-6 border-t border-[#1E2536] flex items-center gap-3">
              <span className="text-[11px] text-[#5F6A80] font-mono mr-2 tracking-wider">Follow:</span>
              {[
                { href: '#instagram', Icon: InstagramIcon },
                { href: '#twitter', Icon: TwitterIcon },
                { href: '#linkedin', Icon: LinkedinIcon },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#5F6A80] hover:text-[#FF6B2C] hover:border-[#FF6B2C]/50 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0C1018] border border-[#1E2536] rounded-[2rem] p-7 sm:p-10 shadow-2xl shadow-black/30 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-[#FF6B2C]/15 text-[#FF6B2C] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl text-white">Inquiry Submitted!</h3>
                <p className="text-sm text-[#8B95A9] max-w-md mx-auto leading-relaxed">
                  Opening WhatsApp to chat with our studio team now...
                </p>
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={buildWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-[#25D366] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageSquare className="w-5 h-5 fill-black" />
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#5F6A80] hover:text-white pt-2 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dilhani Perera"
                    className="w-full bg-[#141922] border border-[#1E2536] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all placeholder:text-[#5F6A80]/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="dilhani@perera.lk"
                      className="w-full bg-[#141922] border border-[#1E2536] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all placeholder:text-[#5F6A80]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#141922] border border-[#1E2536] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">Service Type</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#141922] border border-[#1E2536] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all"
                  >
                    <option value="Poruwa & Destination Wedding">Poruwa & Destination Wedding Story</option>
                    <option value="Editorial & Personal Branding">Editorial & Personal Branding Portrait</option>
                    <option value="Resort & Architectural Shoot">Resort & Architecture Commercial Shoot</option>
                    <option value="AI Content Studio Inquiry">AI Content Studio Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding venue, shoot ideas, or scope..."
                    className="w-full bg-[#141922] border border-[#1E2536] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all resize-none placeholder:text-[#5F6A80]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:shadow-xl hover:shadow-[#FF6B2C]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
