import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import LightboxModal from './LightboxModal';
import { Eye, MapPin, Sliders } from 'lucide-react';

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Wedding', 'Portrait', 'Landscape', 'Street', 'Nature', 'Architecture'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

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
    <section id="portfolio" className="py-24 bg-[#030508] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
            Curated Visual Archive
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Our Portfolio & Craft
          </h2>
          <p className="text-base sm:text-lg text-[#808898] mt-4 font-sans leading-relaxed">
            Explore a curated collection of our finest photography work across various genres, capturing deep raw emotion, light play, and cinematic elegance.
          </p>
        </div>

        {/* Filter Pills Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-pill-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white shadow-lg shadow-[#FF571E]/20 scale-105'
                  : 'bg-[#0B0F19] text-[#808898] hover:text-white hover:bg-[#181E29] border border-[#202633]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl bg-[#0B0F19] border border-[#202633] overflow-hidden hover:border-[#FF571E]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF571E]/10 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Shimmer Light Sweep Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none z-20" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#030508]/80 backdrop-blur-md text-white border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Location Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-[#808898] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FF571E]" />
                    {item.location.split(',')[0]}
                  </span>
                </div>

                {/* Gradient Hover Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[#FF571E] text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Expand</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 font-sans">
                      {item.description}
                    </p>

                    {/* Camera metadata pill */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Sliders className="w-3 h-3 text-[#FF571E]" />
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

      {/* Lightbox Modal Trigger */}
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
