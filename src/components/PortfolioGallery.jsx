import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import LightboxModal from './LightboxModal';
import { Eye, MapPin, Aperture } from 'lucide-react';

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Wedding', 'Portrait', 'Landscape', 'Street', 'Nature', 'Architecture'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };
  const prevLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative noise-overlay">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
            Curated Visual Archive
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Our Portfolio & <span className="italic gradient-text">Craft</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#8B95A9] mt-5 leading-relaxed max-w-2xl">
            Explore a curated collection of our finest photography work across various genres, capturing deep raw emotion, light play, and cinematic elegance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-pill-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white shadow-lg shadow-[#FF6B2C]/25 scale-105'
                  : 'glass text-[#8B95A9] hover:text-white hover:bg-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl bg-[#0C1018] border border-[#1E2536] overflow-hidden hover:border-[#FF6B2C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF6B2C]/8 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />

                {/* Shimmer Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none z-20" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider glass text-white">
                    {item.category}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium glass text-[#8B95A9] flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#FF6B2C]" />
                    {item.location.split(',')[0]}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/95 via-[#06080D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5 sm:p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    <div className="text-[#FF6B2C] text-[11px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Expand</span>
                    </div>

                    <h3 className="font-display text-xl font-normal text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#8B95A9] line-clamp-2 mt-1.5">
                      {item.description}
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#5F6A80] font-mono">
                      <span className="flex items-center gap-1">
                        <Aperture className="w-3 h-3 text-[#FF6B2C]" />
                        {item.camera}
                      </span>
                      <span>{item.lens}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredItems.length - 1}
        />
      )}
    </section>
  );
}
