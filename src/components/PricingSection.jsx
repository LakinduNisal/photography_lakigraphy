import React, { useState } from 'react';
import { PRICING_PLANS, FAQS } from '../data/portfolioData';
import { Check, ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <section id="pricing" className="py-24 sm:py-32 relative noise-overlay">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
            Transparent Pricing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Simple, Fair <span className="italic gradient-text">Investment</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#8B95A9] mt-5 leading-relaxed max-w-2xl">
            No hidden fees. Every session includes hand-crafted color grading, private gallery delivery, and complimentary AI tool access.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between relative transition-all duration-400 hover:-translate-y-1 ${plan.highlighted
                  ? 'bg-[#0C1018] border-2 border-[#FF6B2C]/60 shadow-2xl shadow-[#FF6B2C]/10'
                  : 'bg-[#0C1018] border border-[#1E2536] hover:border-[#FF6B2C]/25'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-[#FF6B2C]/25 flex items-center gap-1.5 animate-pulse-ring">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                <p className="text-xs text-[#5F6A80] mt-2 leading-relaxed">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-[3rem] text-white tracking-tight leading-none">{plan.price}</span>
                  <span className="text-[11px] font-mono text-[#5F6A80]">{plan.period}</span>
                </div>

                <div className="mt-8 space-y-3 pt-6 border-t border-[#1E2536]">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px] text-[#F0F2F7]">
                      <div className="w-5 h-5 rounded-full bg-[#FF6B2C]/15 text-[#FF6B2C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-4 rounded-2xl font-semibold text-[13px] uppercase tracking-wider transition-all duration-300 ${plan.highlighted
                      ? 'bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white hover:shadow-xl hover:shadow-[#FF6B2C]/25 hover:scale-[1.01] active:scale-[0.99]'
                      : 'glass text-white hover:bg-white/5 hover:border-[#FF6B2C]/30'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-28 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-5 h-5 text-[#FF6B2C]" />
            <h3 className="font-display text-3xl sm:text-4xl text-white text-center">
              Frequently Asked <span className="italic gradient-text">Questions</span>
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-[#0C1018] border overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#FF6B2C]/25' : 'border-[#1E2536]'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <span className="font-display text-base sm:text-lg text-white group-hover:text-[#FF6B2C] transition-colors duration-300">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF6B2C] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-[#8B95A9] leading-relaxed border-t border-[#1E2536]/50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
