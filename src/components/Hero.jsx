import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExplorePortfolio, onOpenAITool }) {
  const comets = [
    { top: '12%', left: '8%', size: 6, delay: '0s', duration: '7s', color: '#FF6B2C' },
    { top: '22%', left: '48%', size: 4, delay: '1.5s', duration: '8s', color: '#FFB088' },
    { top: '38%', left: '82%', size: 8, delay: '2.8s', duration: '6.5s', color: '#FF6B2C' },
    { top: '62%', left: '12%', size: 4, delay: '4s', duration: '8.5s', color: '#FBBF24' },
    { top: '72%', left: '65%', size: 6, delay: '1s', duration: '7.5s', color: '#FF6B2C' },
    { top: '18%', left: '72%', size: 4, delay: '4.5s', duration: '6s', color: 'rgba(255,255,255,0.6)' },
    { top: '82%', left: '32%', size: 5, delay: '2.2s', duration: '7.2s', color: '#FFB088' },
    { top: '48%', left: '28%', size: 4, delay: '5.2s', duration: '8s', color: '#FF6B2C' },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 overflow-hidden min-h-[90vh] flex flex-col justify-center noise-overlay"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6B2C]/10 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E04D14]/8 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Floating Particle Comets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {comets.map((c, i) => (
          <div
            key={i}
            className="animate-comet absolute rounded-full"
            style={{
              top: c.top,
              left: c.left,
              width: `${c.size}px`,
              height: `${c.size}px`,
              backgroundColor: c.color,
              boxShadow: `0 0 10px ${c.color}`,
              animationDelay: c.delay,
              animationDuration: c.duration,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2536_1px,transparent_1px),linear-gradient(to_bottom,#1E2536_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.06] z-0 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        {/* Exact 2-Column Hero Grid from reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Headings, Subtitle & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Main Headline */}
            <h1 className="font-display text-[clamp(2.6rem,5.2vw,4.6rem)] font-normal leading-[1.08] tracking-tight text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Capturing <br />
              <span className="text-[#FF6B2C]">Moments</span> <br />
              That Tell <span className="text-[#FF6B2C]">Stories</span>
            </h1>

            {/* Category / Subtitle */}
            <div className="mt-4 text-[#FF6B2C] text-sm font-medium tracking-wide animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Portraits & Editorial
            </div>

            {/* Description */}
            <p className="text-base text-[#8B95A9] max-w-[490px] mt-4 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Professional photography portfolio designed to showcase creativity, Sri Lankan cultural heritage, and visual storytelling with AI-powered workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '280ms' }}>
              <button
                id="hero-explore-btn"
                onClick={onExplorePortfolio}
                className="bg-[#FF6B2C] hover:bg-[#E04D14] text-white px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF6B2C]/25 hover:shadow-xl hover:shadow-[#FF6B2C]/35 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                id="hero-ai-tool-btn"
                onClick={onOpenAITool}
                className="bg-[#0C1018]/80 hover:bg-[#141922] text-white border border-[#252D3F] hover:border-[#FF6B2C]/40 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <span>AI Caption Tool</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Main Portrait Image & Overlapping Floating Cards (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up py-8" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#FF6B2C]/20 via-[#E04D14]/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

              {/* Main Image Frame - 1:1 aspect ratio with rounded corners */}
              <div className="relative rounded-[2rem] overflow-hidden border border-[#252D3F] bg-[#0C1018] aspect-square shadow-2xl shadow-black/75 group">
                <img
                  src="/hero-photographer.png"
                  alt="Professional photographer with camera"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Top Right (Overlapping Outside Image Frame) */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-[#0C1018]/95 backdrop-blur-xl border border-[#252D3F] rounded-2xl px-6 py-5 shadow-2xl z-20 min-w-[140px] animate-float">
                <div className="text-3xl font-bold text-white tracking-tight leading-none font-sans">
                  10+
                </div>
                <div className="text-[12px] text-[#8B95A9] font-medium mt-1 tracking-wide font-sans">
                  Years Experience
                </div>
              </div>

              {/* Floating Card 2: Bottom Left (Overlapping Outside Image Frame) */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#0C1018]/95 backdrop-blur-xl border border-[#252D3F] rounded-2xl px-6 py-5 shadow-2xl z-20 min-w-[150px]">
                <div className="text-3xl font-bold text-[#FF6B2C] tracking-tight leading-none font-sans">
                  500+
                </div>
                <div className="text-[12px] text-[#8B95A9] font-medium mt-1 tracking-wide font-sans">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
