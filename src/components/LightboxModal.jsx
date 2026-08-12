import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Sliders, Share2 } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        id="close-lightbox-btn"
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-[#0B0F19] border border-[#202633] flex items-center justify-center text-white hover:text-[#FF571E] hover:border-[#FF571E] transition-all shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      {hasPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous Photo"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#0B0F19]/80 border border-[#202633] flex items-center justify-center text-white hover:border-[#FF571E] hover:scale-110 transition-all shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {hasNext && (
        <button
          onClick={onNext}
          aria-label="Next Photo"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#0B0F19]/80 border border-[#202633] flex items-center justify-center text-white hover:border-[#FF571E] hover:scale-110 transition-all shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Container */}
      <div className="max-w-6xl w-full max-h-[90vh] bg-[#0B0F19] border border-[#202633] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left Photo Viewport */}
        <div className="lg:w-2/3 bg-black flex items-center justify-center relative min-h-[350px] lg:min-h-[550px] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#FF571E]" />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category Tag */}
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
              {item.category}
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {item.title}
            </h2>

            {/* Story Description */}
            <p className="text-sm text-[#808898] mt-4 leading-relaxed font-sans">
              {item.description}
            </p>

            {/* Camera EXIF Technical Metadata Specs */}
            <div className="mt-8 pt-6 border-t border-[#202633] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-2">
                <Sliders className="w-4 h-4 text-[#FF571E]" />
                <span>Camera EXIF Metadata</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#181E29] p-2.5 rounded-xl border border-[#202633]">
                  <span className="text-[#808898] block text-[10px] uppercase font-mono">Camera Body</span>
                  <span className="font-semibold text-white">{item.camera}</span>
                </div>
                <div className="bg-[#181E29] p-2.5 rounded-xl border border-[#202633]">
                  <span className="text-[#808898] block text-[10px] uppercase font-mono">Prime Lens</span>
                  <span className="font-semibold text-white">{item.lens}</span>
                </div>
                <div className="bg-[#181E29] p-2.5 rounded-xl border border-[#202633]">
                  <span className="text-[#808898] block text-[10px] uppercase font-mono">ISO Speed</span>
                  <span className="font-semibold text-white">ISO {item.iso}</span>
                </div>
                <div className="bg-[#181E29] p-2.5 rounded-xl border border-[#202633]">
                  <span className="text-[#808898] block text-[10px] uppercase font-mono">Shutter & Aperture</span>
                  <span className="font-semibold text-white">{item.shutter} @ {item.aperture}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Share & Action Buttons */}
          <div className="mt-8 pt-6 border-t border-[#202633] flex items-center gap-3">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="flex-1 bg-[#181E29] hover:bg-[#202633] text-white py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-[#202633] transition-colors"
            >
              <Share2 className="w-4 h-4 text-[#FF571E]" />
              <span>Share Image</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
