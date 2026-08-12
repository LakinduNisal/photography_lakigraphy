import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Heart, Camera, Building, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const iconMap = { Heart, Camera, Building, Sparkles };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A0E16] border-y border-[#1E2536]/40 relative overflow-hidden noise-overlay">
      {/* Background Ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FF6B2C]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
            Tailored Photography Solutions
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            What We <span className="italic gradient-text">Offer</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#8B95A9] mt-5 leading-relaxed max-w-2xl">
            From intimate wedding photojournalism to high-fashion portraiture and premium boutique resort photography, we deliver excellence at every frame.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="rounded-[1.5rem] p-7 sm:p-9 border bg-[#0C1018] border-[#1E2536] hover:border-[#FF6B2C]/30 hover:shadow-2xl hover:shadow-[#FF6B2C]/8 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Icon & Price */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-[#141922] text-[#FF6B2C] border border-[#1E2536]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold tracking-wider px-3.5 py-1.5 rounded-full bg-[#141922] text-[#FF6B2C] border border-[#1E2536]">
                      {service.price}
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B2C] mb-1.5">
                    {service.subtitle}
                  </div>

                  <h3 className="font-display text-2xl sm:text-[1.7rem] text-white tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#8B95A9] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-[#1E2536]/60">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[13px] text-[#F0F2F7]">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B2C]/15 text-[#FF6B2C] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-6">
                  <button
                    onClick={onOpenBooking}
                    className="w-full glass hover:bg-white/5 text-white py-4 rounded-xl font-semibold text-[13px] uppercase tracking-wider hover:border-[#FF6B2C]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4 text-[#FF6B2C] group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
