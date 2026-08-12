import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Camera, Award, Users, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExplorePortfolio, onOpenBooking, onOpenAITool }) {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const bgImages = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90",
      caption: "Kandyan Poruwa Vows • Nuwara Eliya"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=90",
      caption: "Sunset Ramparts • Galle Fort"
    },
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90",
      caption: "Misty Blue Hour • Ella Gap"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const stats = [
    { label: 'Years Experience', value: '10+', icon: Camera },
    { label: 'Projects Delivered', value: '500+', icon: CheckCircle2 },
    { label: 'Industry Awards', value: '50+', icon: Award },
    { label: 'Client Satisfaction', value: '100%', icon: Users },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-[#030508]">
      {/* Animated Ken Burns Crossfade Background Slideshow (Positioned z-0 above base) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {bgImages.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeBgIndex === idx ? 'opacity-65' : 'opacity-0'
              }`}
          >
            <img
              src={bg.url}
              alt={bg.caption}
              className="w-full h-full object-cover animate-kenburns filter contrast-105 brightness-100 saturate-110"
            />
          </div>
        ))}

        {/* Gradient overlays to maintain readability while showing vibrant photo background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/70 via-[#030508]/50 to-[#030508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030508_90%)]" />
      </div>

      {/* Ambient Radial Warm Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-[#FF571E]/20 via-[#C64E12]/15 to-transparent blur-[140px] rounded-full pointer-events-none z-10 animate-pulse-glow" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202633_1px,transparent_1px),linear-gradient(to_bottom,#202633_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-20">
        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] drop-shadow-lg">
          Capturing Island Stories That <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E5EC] to-[#FF571E]">Echo Through Time</span>
        </h1>

        {/* Lead Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#E2E5EC]/90 max-w-2xl mt-6 leading-relaxed font-sans drop-shadow-md">
          Sri Lanka's leading luxury photography agency, blending fine-art Poruwa wedding photojournalism with proprietary AI tools to craft timeless tropical visual media.
        </p>

        {/* Dual CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <button
            id="hero-explore-btn"
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#FF571E]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF571E]/15 group"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-ai-tool-btn"
            onClick={onOpenAITool}
            className="w-full sm:w-auto bg-[#0B0F19]/90 text-white border border-[#202633] px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:border-[#FF571E]/50 hover:bg-[#181E29] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Try AI Caption Tool</span>
          </button>
        </div>

        {/* Slideshow Indicator Dots */}
        <div className="mt-10 flex items-center gap-3 bg-[#0B0F19]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#202633]">
          <span className="text-[11px] font-mono text-[#E2E5EC] mr-1">
            {bgImages[activeBgIndex].caption}
          </span>
          <div className="flex gap-1.5">
            {bgImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveBgIndex(i)}
                aria-label={`Jump to background slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeBgIndex === i ? 'w-6 bg-[#FF571E]' : 'w-1.5 bg-[#808898]/50 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Live Performance Stats Counter Bar */}
        <div className="w-full max-w-4xl mt-16 pt-10 border-t border-[#202633]/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0B0F19]/60 border border-[#202633]/70 backdrop-blur-md hover:border-[#FF571E]/40 transition-all group"
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#FF571E]/10 flex items-center justify-center text-[#FF571E] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[#808898] font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
