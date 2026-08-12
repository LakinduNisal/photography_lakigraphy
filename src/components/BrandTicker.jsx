import React from 'react';

// Custom Minimal SVG Logos matching the reference image styling
const VolcaIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M4.5 5.5L10.5 12L4.5 18.5H8L12 14.2L16 18.5H19.5L13.5 12L19.5 5.5H16L12 9.8L8 5.5H4.5Z" />
  </svg>
);

const OnceIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const RaspireIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M6 4h7a4 4 0 0 1 4 4c0 1.6-.9 3-2.2 3.6L18 19h-3.8l-2.7-6.5H9.5V19H6V4zm3.5 3.2v3.3h3.5a1.6 1.6 0 0 0 0-3.3H9.5z" />
  </svg>
);

const IndieHealthIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 6 0v-4h4v4a3 3 0 0 0 6 0V7a3 3 0 0 0-6 0v4H10V7a3 3 0 0 0-3-3z"/>
  </svg>
);

const CodeCraftersIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M12 15l-5-4h10l-5 4zm0 4l-5-4h10l-5 4zm0-15l5 4H7l5-4z"/>
  </svg>
);

const DatostIcon = () => (
  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
    <path d="M4 5h6v6H4V5zm10 0h6v6h-6V5zM4 15h6v6H4v-6zm10 0h6v6h-6v-6z"/>
  </svg>
);

const HexIcon = () => (
  <svg className="w-6 h-6 fill-current opacity-90" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor"/>
    <text x="12" y="15" fontSize="8" fontWeight="bold" fill="#030508" textAnchor="middle" fontFamily="sans-serif">HEX</text>
  </svg>
);

export default function BrandTicker() {
  const brands = [
    { name: "Taiga", icon: null },
    { name: "Volca", icon: VolcaIcon },
    { name: "Once", icon: OnceIcon },
    { name: "Raspire", icon: RaspireIcon },
    { name: "Indie Health", icon: IndieHealthIcon },
    { name: "CodeCrafters", icon: CodeCraftersIcon },
    { name: "Datost", icon: DatostIcon },
    { name: "Hex", icon: HexIcon },
  ];

  // Duplicate items array to ensure seamless infinite marquee scrolling
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full bg-[#0B0F19]/90 border-y border-[#202633]/60 py-6 overflow-hidden z-20">
      {/* Left and Right Fade Mask Gradients for Smooth Transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030508] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Marquee Container */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20">
        {marqueeItems.map((brand, idx) => {
          const Icon = brand.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-[#94A3B8] hover:text-white transition-colors duration-300 shrink-0 cursor-default select-none group"
            >
              {Icon && <Icon />}
              <span className="font-sans font-semibold text-lg sm:text-xl tracking-tight text-[#94A3B8] group-hover:text-white transition-colors">
                {brand.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
