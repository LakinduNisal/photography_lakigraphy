import React from 'react';
import { Camera, Sparkles, Sliders, Send, Award, Film } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Vision',
      desc: 'We consult on moodboards, location scouting, wardrobe, and creative intent to align with your story.',
      icon: Camera,
    },
    {
      num: '02',
      title: 'Cinematic Production',
      desc: 'Full-day or multi-day shooting using medium-format cameras and master ambient/studio lighting.',
      icon: Film,
    },
    {
      num: '03',
      title: 'AI Color & Retouching',
      desc: 'Hand-crafted color grading combined with proprietary AI detail enhancements and aesthetic tone mapping.',
      icon: Sliders,
    },
    {
      num: '04',
      title: 'Vault Delivery',
      desc: 'Instant delivery via private web gallery, 4K digital downloads, and print-ready archival assets.',
      icon: Send,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#070A12] border-y border-[#202633]/60 relative overflow-hidden">
      {/* Slow Rotating Background Camera Lens Aperture Ring Graphic */}
      <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] pointer-events-none opacity-5 text-[#FF571E] animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="100" cy="100" r="90" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="70" />
          <polygon points="100,10 130,70 70,70" />
          <polygon points="190,100 130,130 130,70" />
          <polygon points="100,190 70,130 130,130" />
          <polygon points="10,100 70,70 70,130" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Story Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Photographer Studio Image */}
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF571E] to-[#C64E12] opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden border border-[#202633] bg-[#0B0F19] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85"
                alt="Photographer behind the lens in studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Award Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030508]/85 backdrop-blur-md border border-[#202633] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF571E]/20 text-[#FF571E] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">International Photography Award 2025</div>
                  <div className="text-xs text-[#808898]">Best Editorial & Destination Portfolio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Copy */}
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
              The Story Behind the Lens
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Passionate About Telling Island Stories Through Light & Emotion
            </h2>

            <p className="text-base text-[#808898] mt-6 leading-relaxed font-sans">
              Based in Colombo and Galle Fort, PhotoFy Ceylon was born from a desire to blend traditional Sri Lankan Poruwa ceremony photojournalism with modern AI creative workflows. We bring over a decade of experience across Sri Lanka, Maldives, and global destination spots.
            </p>

            <blockquote className="mt-8 p-6 rounded-2xl bg-[#0B0F19] border-l-4 border-[#FF571E] border border-[#202633] italic text-sm text-[#E2E5EC] leading-relaxed">
              "Our philosophy is simple: every Poruwa ritual, sunset vow, and tropical horizon is unique and deserves to be preserved with authentic artistry, warmth, and emotion."
            </blockquote>

            {/* Key Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-xs font-semibold text-white">
              <div className="p-3.5 rounded-xl bg-[#181E29] border border-[#202633] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF571E]" />
                <span>Colombo & Galle Studios</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181E29] border border-[#202633] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF571E]" />
                <span>Poruwa & Destination Experts</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#FF571E]/25 transition-all"
              >
                Schedule Studio Consultation
              </button>
            </div>
          </div>
        </div>

        {/* 4-Step Creative Workflow Process */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our 4-Step Creative Workflow
            </h3>
            <p className="text-sm text-[#808898] mt-2">
              From concept to final delivery, how we ensure effortless perfection for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#0B0F19] border border-[#202633] hover:border-[#FF571E]/40 transition-all relative group"
                >
                  <div className="font-mono text-3xl font-bold text-[#FF571E]/40 group-hover:text-[#FF571E] transition-colors mb-4">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#181E29] text-[#FF571E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-[#808898] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
