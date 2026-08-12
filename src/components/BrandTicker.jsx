import React from 'react';

export default function BrandTicker() {
  const brands = [
    "Canon", "Sony", "Hasselblad", "Leica", "Fujifilm", "Nikon", "Phase One", "Adobe"
  ];

  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full bg-[#0C1018]/80 border-y border-[#1E2536]/40 py-5 sm:py-6 overflow-hidden z-20">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#06080D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#06080D] to-transparent z-10 pointer-events-none" />

      {/* Marquee */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20">
        {marqueeItems.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 shrink-0 cursor-default select-none group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]/40 group-hover:bg-[#FF6B2C] transition-colors duration-300" />
            <span className="font-body text-base sm:text-lg font-medium tracking-wide text-[#5F6A80] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
