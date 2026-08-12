import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Aperture, Share2 } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#06080D]/95 backdrop-blur-2xl animate-fade-in">
      {/* Close */}
      <button
        onClick={onClose}
        id="close-lightbox-btn"
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:text-[#FF6B2C] hover:border-[#FF6B2C]/50 transition-all duration-300"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous Photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-[#FF6B2C]/50 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={onNext}
          aria-label="Next Photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-[#FF6B2C]/50 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Modal Container */}
      <div className="max-w-6xl w-full max-h-[92vh] bg-[#0C1018] border border-[#1E2536] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 flex flex-col lg:flex-row animate-fade-in-up">
        {/* Left Photo */}
        <div className="lg:w-2/3 bg-black/50 flex items-center justify-center relative min-h-[300px] lg:min-h-[500px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#FF6B2C]/10 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-4">
              {item.category}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {item.title}
            </h2>

            <p className="text-sm text-[#8B95A9] mt-4 leading-relaxed">
              {item.description}
            </p>

            {/* EXIF Data */}
            <div className="mt-8 pt-6 border-t border-[#1E2536] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
                <Aperture className="w-4 h-4 text-[#FF6B2C]" />
                <span>Camera EXIF Metadata</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {[
                  { label: 'Camera Body', value: item.camera },
                  { label: 'Prime Lens', value: item.lens },
                  { label: 'ISO Speed', value: `ISO ${item.iso}` },
                  { label: 'Shutter & Aperture', value: `${item.shutter} @ ${item.aperture}` },
                ].map((spec) => (
                  <div key={spec.label} className="bg-[#141922] p-3 rounded-xl border border-[#1E2536]">
                    <span className="text-[#5F6A80] block text-[10px] uppercase font-mono">{spec.label}</span>
                    <span className="font-medium text-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="mt-8 pt-6 border-t border-[#1E2536]">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="w-full glass hover:bg-white/5 text-white py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Share2 className="w-4 h-4 text-[#FF6B2C]" />
              <span>Share Image</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
