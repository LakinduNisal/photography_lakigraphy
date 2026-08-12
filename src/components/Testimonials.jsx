import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#070A12] border-t border-[#202633]/60 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
            Client Stories & Reviews
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#808898] mt-4 font-sans">
            Hear from couples, fashion directors, and brands who trusted us with their visual legacy.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#0B0F19] border border-[#202633] hover:border-[#FF571E]/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FF571E]/30 mb-4 group-hover:text-[#FF571E]/60 transition-colors" />

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-[#E2E5EC] leading-relaxed italic font-sans">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-8 pt-6 border-t border-[#202633] flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#FF571E]/30"
                />
                <div>
                  <div className="font-display font-bold text-white text-base">{item.name}</div>
                  <div className="text-xs text-[#808898] font-sans">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
