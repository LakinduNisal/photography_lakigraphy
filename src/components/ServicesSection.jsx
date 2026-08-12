import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Heart, Camera, Building, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenBooking, onOpenAITool }) {
  const iconMap = {
    Heart,
    Camera,
    Building,
    Sparkles,
  };

  return (
    <section id="services" className="py-24 bg-[#070A12] border-y border-[#202633]/60 relative overflow-hidden">
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF571E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
            Tailored Photography Solutions
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-[#808898] mt-4 font-sans leading-relaxed">
            From intimate wedding photojournalism to high-fashion portraiture and AI-powered content workflows, we deliver excellence at every frame.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Camera;
            const isAIService = service.id === 'ai-suite';

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 sm:p-10 border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between relative group ${
                  isAIService
                    ? 'bg-gradient-to-br from-[#0B0F19] via-[#0B0F19] to-[#181E29] border-[#FF571E]/50 shadow-xl shadow-[#FF571E]/10 hover:shadow-2xl hover:shadow-[#FF571E]/20'
                    : 'bg-[#0B0F19] border-[#202633] hover:border-[#FF571E]/60 hover:shadow-2xl hover:shadow-[#FF571E]/10'
                }`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isAIService
                          ? 'bg-gradient-to-br from-[#FF571E] to-[#C64E12] text-white shadow-lg shadow-[#FF571E]/30'
                          : 'bg-[#181E29] text-[#FF571E] border border-[#202633]'
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-mono font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-[#181E29] text-[#FF571E] border border-[#202633]">
                      {service.price}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#FF571E] mb-1">
                    {service.subtitle}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#808898] mt-3 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Feature Checkmarks List */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-[#202633]/80">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#E2E5EC]">
                        <div className="w-4 h-4 rounded-full bg-[#FF571E]/20 text-[#FF571E] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="mt-10 pt-6">
                  {isAIService ? (
                    <button
                      onClick={onOpenAITool}
                      className="w-full bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#FF571E]/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Launch AI Tool</span>
                    </button>
                  ) : (
                    <button
                      onClick={onOpenBooking}
                      className="w-full bg-[#181E29] hover:bg-[#202633] text-white border border-[#202633] py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:border-[#FF571E]/50 transition-all flex items-center justify-center gap-2 group-hover:border-[#FF571E]/40"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-4 h-4 text-[#FF571E]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
