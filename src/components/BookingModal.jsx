import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

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
    const phoneNumber = "94771234567";
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
        colors: ['#FF6B2C', '#E04D14', '#FFFFFF'],
      });
    } catch {
      console.log('Confetti triggered');
    }
    setTimeout(() => {
      window.open(buildWhatsappLink(), '_blank');
    }, 800);
  };

  const inputClass = "w-full bg-[#141922] border border-[#1E2536] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06080D]/95 backdrop-blur-2xl animate-fade-in">
      <div className="max-w-xl w-full bg-[#0C1018] border border-[#1E2536] rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-black/50 relative animate-fade-in-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-[#5F6A80] hover:text-white hover:border-[#FF6B2C]/50 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-5 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-[#FF6B2C]/15 text-[#FF6B2C] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl text-white">Booking Details Ready!</h3>
            <p className="text-sm text-[#8B95A9] leading-relaxed max-w-md mx-auto">
              Redirecting you to WhatsApp to confirm with our studio director...
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="text-xs text-[#5F6A80] hover:text-white pt-2 transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
              <Calendar className="w-3.5 h-3.5" />
              Direct Session Booking
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-white">
              Reserve Your Photography Session
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-1.5">Your Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Kaveen Perera" className={inputClass} />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-1.5">Email Address *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="kaveen@perera.lk" className={inputClass} />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-1.5">Select Package</label>
                <select value={formData.package} onChange={(e) => setFormData({ ...formData, package: e.target.value })} className={inputClass}>
                  <option value="Essential Ceylon Package (LKR 145,000)">Essential Ceylon Package (LKR 145,000)</option>
                  <option value="Signature Luxury Package (LKR 450,000)">Signature Luxury Package (LKR 450,000 - RECOMMENDED)</option>
                  <option value="Poruwa & Destination Wedding">Kandyan & Destination Poruwa Wedding Story</option>
                  <option value="Resort & Commercial Campaign">Luxury Resort Architecture & Brand Shoot</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-1.5">Requested Date *</label>
                <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className={inputClass} />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-1.5">Special Notes</label>
                <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="e.g. Poruwa ceremony at Grand Hotel Nuwara Eliya..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:shadow-xl hover:shadow-[#FF6B2C]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-4"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
