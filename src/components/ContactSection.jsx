import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
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

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF571E', '#C64E12', '#FFFFFF'],
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    // Auto open WhatsApp after brief delay
    setTimeout(() => {
      window.open(buildWhatsappLink(), '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#030508] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Bring Your Vision To Life
            </h2>
            <p className="text-base text-[#808898] mt-4 font-sans leading-relaxed">
              Planning a Poruwa wedding, destination celebration, or commercial brand campaign? Send us a message and connect instantly on WhatsApp.
            </p>

            {/* Contact Cards Grid */}
            <div className="mt-10 space-y-4">
              <div className="p-5 rounded-2xl bg-[#0B0F19] border border-[#202633] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#181E29] text-[#FF571E] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#808898] uppercase font-mono">Email Us</div>
                  <div className="font-semibold text-white text-base">hello@photofy.lk</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B0F19] border border-[#202633] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#181E29] text-[#FF571E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#808898] uppercase font-mono">Sri Lanka Studios</div>
                  <div className="font-semibold text-white text-base">42 Independence Ave, Colombo 07 & Galle Fort</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B0F19] border border-[#202633] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#181E29] text-[#FF571E] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#808898] uppercase font-mono">Direct Phone & WhatsApp</div>
                  <div className="font-semibold text-white text-base">+94 77 123 4567 / +94 11 250 8899</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 pt-6 border-t border-[#202633] flex items-center gap-3">
              <span className="text-xs text-[#808898] font-mono mr-2">Follow Us:</span>
              <a href="#instagram" className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-[#FF571E] hover:border-[#FF571E] transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="bg-[#0B0F19] border border-[#202633] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FF571E]/20 text-[#FF571E] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white">Inquiry Form Submitted!</h3>
                <p className="text-sm text-[#808898] max-w-md mx-auto leading-relaxed">
                  We have prepared your message details for WhatsApp. Opening WhatsApp to chat with our studio team now...
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={buildWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-[#25D366] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageSquare className="w-5 h-5 fill-black" />
                    <span>Open WhatsApp Chat</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#808898] hover:text-white pt-2 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dilhani Perera"
                    className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors placeholder:text-[#808898]/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="dilhani@perera.lk"
                      className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors placeholder:text-[#808898]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors"
                  >
                    <option value="Poruwa & Destination Wedding">Poruwa & Destination Wedding Story</option>
                    <option value="Editorial & Personal Branding">Editorial & Personal Branding Portrait</option>
                    <option value="Resort & Architectural Shoot">Resort & Architecture Commercial Shoot</option>
                    <option value="AI Content Studio Inquiry">AI Content Studio Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Project Details & Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding venue (e.g. Galle Fort, Grand Hotel Nuwara Eliya), shoot ideas, or scope..."
                    className="w-full bg-[#181E29] border border-[#202633] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors resize-none placeholder:text-[#808898]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#FF571E]/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-green-400" />
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
