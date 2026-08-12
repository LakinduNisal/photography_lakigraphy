import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0E16] border-t border-[#1E2536]/40 relative noise-overlay">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
            Client Stories & Reviews
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            What Our Clients <span className="italic gradient-text">Say</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#8B95A9] mt-5 leading-relaxed max-w-2xl">
            Hear from couples, fashion directors, and brands who trusted us with their visual legacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-[1.5rem] bg-[#0C1018] border border-[#1E2536] hover:border-[#FF6B2C]/25 transition-all duration-400 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#FF6B2C]/20 mb-5 group-hover:text-[#FF6B2C]/40 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-[#F0F2F7] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-[#1E2536] flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B2C]/25 group-hover:border-[#FF6B2C]/50 transition-colors duration-300"
                />
                <div>
                  <div className="font-display text-white text-[15px]">{item.name}</div>
                  <div className="text-[11px] text-[#5F6A80] mt-0.5">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
