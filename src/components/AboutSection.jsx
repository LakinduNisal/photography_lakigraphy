import React from 'react';
import { Camera, Sparkles, Aperture, Send, Award, Film } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const steps = [
    { num: '01', title: 'Discovery & Vision', desc: 'We consult on moodboards, location scouting, wardrobe, and creative intent to align with your story.', icon: Camera },
    { num: '02', title: 'Cinematic Production', desc: 'Full-day or multi-day shooting using medium-format cameras and master ambient/studio lighting.', icon: Film },
    { num: '03', title: 'AI Color & Retouching', desc: 'Hand-crafted color grading combined with proprietary AI detail enhancements and aesthetic tone mapping.', icon: Aperture },
    { num: '04', title: 'Vault Delivery', desc: 'Instant delivery via private web gallery, 4K digital downloads, and print-ready archival assets.', icon: Send },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0E16] border-y border-[#1E2536]/40 relative overflow-hidden noise-overlay">
      {/* Rotating Aperture Ring Decoration */}
      <div className="absolute right-[-120px] top-[-120px] w-[500px] h-[500px] pointer-events-none opacity-[0.03] text-[#FF6B2C] animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="70" />
          <polygon points="100,10 130,70 70,70" />
          <polygon points="190,100 130,130 130,70" />
          <polygon points="100,190 70,130 130,130" />
          <polygon points="10,100 70,70 70,130" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Bio Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-[#FF6B2C]/20 to-[#E04D14]/10 opacity-40 group-hover:opacity-70 blur-2xl transition-opacity duration-500" />

            <div className="relative rounded-[2rem] overflow-hidden border border-[#1E2536] bg-[#0C1018] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85"
                alt="Photographer behind the lens in studio"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />

              {/* Award Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-strong flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B2C]/15 text-[#FF6B2C] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-white text-[15px]">International Photography Award 2025</div>
                  <div className="text-[11px] text-[#5F6A80] mt-0.5">Best Editorial & Destination Portfolio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
              The Story Behind the Lens
            </div>

            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-white leading-[1.1]">
              Passionate About Telling Island Stories Through <span className="italic gradient-text">Light & Emotion</span>
            </h2>

            <p className="text-[15px] text-[#8B95A9] mt-6 leading-relaxed">
              Based in Colombo and Galle Fort, PhotoFy Ceylon was born from a desire to blend traditional Sri Lankan Poruwa ceremony photojournalism with modern AI creative workflows. We bring over a decade of experience across Sri Lanka, Maldives, and global destination spots.
            </p>

            <blockquote className="mt-8 p-6 rounded-2xl bg-[#0C1018] border-l-4 border-[#FF6B2C] border border-[#1E2536] italic text-sm text-[#F0F2F7] leading-relaxed">
              "Our philosophy is simple: every Poruwa ritual, sunset vow, and tropical horizon is unique and deserves to be preserved with authentic artistry, warmth, and emotion."
            </blockquote>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-[13px] font-medium text-white">
              {['Colombo & Galle Studios', 'Poruwa & Destination Experts'].map((label) => (
                <div key={label} className="p-3.5 rounded-xl bg-[#141922] border border-[#1E2536] flex items-center gap-2.5 hover:border-[#FF6B2C]/20 transition-colors duration-300">
                  <Sparkles className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#FF6B2C]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Schedule Studio Consultation
              </button>
            </div>
          </div>
        </div>

        {/* 4-Step Workflow */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Our Creative <span className="italic gradient-text">Workflow</span>
            </h3>
            <p className="text-sm text-[#8B95A9] mt-3">
              From concept to final delivery — effortless perfection for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#0C1018] border border-[#1E2536] hover:border-[#FF6B2C]/25 transition-all duration-400 relative group hover:-translate-y-1"
                >
                  <div className="font-mono text-3xl font-bold text-[#FF6B2C]/25 group-hover:text-[#FF6B2C]/60 transition-colors duration-300 mb-4">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#141922] text-[#FF6B2C] flex items-center justify-center mb-4 group-hover:bg-[#FF6B2C]/10 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg text-white">{step.title}</h4>
                  <p className="text-xs text-[#8B95A9] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
