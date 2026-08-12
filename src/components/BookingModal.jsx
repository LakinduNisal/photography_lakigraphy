import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, CheckCircle2, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: 'Signature Luxury Package (LKR 450,000)',
    date: '',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const buildWhatsappLink = () => {
    const phoneNumber = "94771234567"; // Agency WhatsApp Number
    const textMessage = `📸 *New Photography Booking Request - Luminous Ceylon*

*Client Name:* ${formData.name || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Selected Package:* ${formData.package}
*Requested Date:* ${formData.date || 'To be decided'}
*Location & Notes:* ${formData.notes || 'None'}

_Sent via Luminous Ceylon Website_`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#FF571E', '#C64E12', '#FFFFFF'],
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    // Redirect to WhatsApp automatically in a new tab after a brief 1-second delay for confetti effect
    setTimeout(() => {
      window.open(buildWhatsappLink(), '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="max-w-xl w-full bg-[#0B0F19] border border-[#202633] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#181E29] border border-[#202633] flex items-center justify-center text-[#808898] hover:text-white hover:border-[#FF571E] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FF571E]/20 text-[#FF571E] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white">Booking Details Ready!</h3>
            <p className="text-sm text-[#808898] leading-relaxed max-w-md mx-auto">
              We have generated your detailed reservation summary for <span className="text-white font-semibold">{formData.package}</span>. Redirecting you to WhatsApp to confirm directly with our studio director...
            </p>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>Chat on WhatsApp Now</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs text-[#808898] hover:text-white pt-2 transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
              <Calendar className="w-3.5 h-3.5" />
              Direct Session Booking
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Reserve Your Photography Session
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kaveen Perera"
                  className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="kaveen@perera.lk"
                  className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                  Select Package
                </label>
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E]"
                >
                  <option value="Essential Ceylon Package (LKR 145,000)">Essential Ceylon Package (LKR 145,000)</option>
                  <option value="Signature Luxury Package (LKR 450,000)">Signature Luxury Package (LKR 450,000 - RECOMMENDED)</option>
                  <option value="Poruwa & Destination Wedding">Kandyan & Destination Poruwa Wedding Story</option>
                  <option value="Resort & Commercial Campaign">Luxury Resort Architecture & Brand Shoot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                  Requested Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#181E29] border border-[#202633] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF571E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                  Special Notes / Location Request
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Poruwa ceremony at Grand Hotel Nuwara Eliya, sunset slot..."
                  className="w-full bg-[#181E29] border border-[#202633] rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF571E] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#FF571E]/25 transition-all mt-4"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
