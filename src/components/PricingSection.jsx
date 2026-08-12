import React, { useState } from 'react';
import { PRICING_PLANS, FAQS } from '../data/portfolioData';
import { Check, ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="py-24 bg-[#030508] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
            Transparent Pricing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Simple, Fair Investment Tiers
          </h2>
          <p className="text-base sm:text-lg text-[#808898] mt-4 font-sans leading-relaxed">
            No hidden fees. Every session includes hand-crafted color grading, private gallery delivery, and complimentary AI tool access.
          </p>
        </div>

        {/* 2-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#0B0F19] border-2 border-[#FF571E] shadow-2xl shadow-[#FF571E]/15 scale-102'
                  : 'bg-[#0B0F19] border border-[#202633] hover:border-[#FF571E]/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF571E]/30 flex items-center gap-1 animate-pulse-ring">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-[#808898] mt-2 leading-relaxed">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs font-mono text-[#808898]">{plan.period}</span>
                </div>

                <div className="mt-8 space-y-3.5 pt-6 border-t border-[#202633]">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#E2E5EC]">
                      <div className="w-4 h-4 rounded-full bg-[#FF571E]/20 text-[#FF571E] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-4 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all shadow-md ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white hover:shadow-xl hover:shadow-[#FF571E]/25'
                      : 'bg-[#181E29] hover:bg-[#202633] text-white border border-[#202633]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-28 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            <HelpCircle className="w-5 h-5 text-[#FF571E]" />
            <h3 className="font-display text-3xl font-bold text-white text-center">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0B0F19] border border-[#202633] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF571E] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#808898] leading-relaxed border-t border-[#202633]/60 pt-4 font-sans animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
