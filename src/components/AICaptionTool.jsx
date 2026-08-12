import React, { useState } from 'react';
import { Sparkles, Copy, Check, RefreshCw, Wand2, Globe, Lock } from 'lucide-react';


export default function AICaptionTool({ onOpenBooking }) {
  const [photoType, setPhotoType] = useState('Wedding');
  const [mood, setMood] = useState('Romantic');
  const [platform, setPlatform] = useState('Instagram');
  const [contextNote, setContextNote] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const photoTypes = ['Wedding', 'Portrait', 'Landscape', 'Street', 'Nature', 'Architecture', 'Commercial', 'Event'];
  const moods = ['Romantic', 'Dramatic', 'Minimalist', 'Energetic', 'Moody', 'Elegant', 'Nostalgic', 'Playful'];
  const platforms = ['Instagram', 'Facebook', 'Pinterest', 'LinkedIn', 'Twitter/X', 'Portfolio'];

  const sampleGenerations = {
    Wedding: {
      Romantic: {
        short: "Two souls, one sacred Poruwa. Golden hour vows in paradise. ✨💍",
        story: "Under the warm golden glow of the afternoon Poruwa ceremony, time stood still. Traditional drums echoed in the distance, every glance spoke volumes, and sacred blessings filled the air. Forever starts right here in Sri Lanka.",
        hashtags: "#SriLankaWeddings #PoruwaCeremony #GalleFortWedding #DestinationWeddingSL #CeylonRomance #FineArtWedding #WeddingPhotographyLK"
      },
      Dramatic: {
        short: "Shadows, tropical light, and timeless commitment along the Galle Fort ramparts. 🌌👰",
        story: "High above the 17th-century ramparts of Galle Fort, love braved the ocean winds. Raw emotion captured in unscripted perfection—a true masterpiece of Sri Lankan visual storytelling.",
        hashtags: "#GalleFortWedding #DramaticWedding #SriLankaWeddingPhotographer #IslandRomance #LuxuryWeddingSL #LoveStory"
      }
    },
    Portrait: {
      Elegant: {
        short: "Handloom silk meeting modern studio grace. Colombo editorial portraiture. 🕊️✨",
        story: "Stripping away the noise to highlight raw character, Sri Lankan textiles, and natural grace. High-contrast studio light meeting quiet confidence in Colombo 07.",
        hashtags: "#ColomboFashion #EditorialPortrait #SriLankaModels #StudioLight #PersonalBranding #FineArtPortraitLK"
      },
      Minimalist: {
        short: "Light, shadow, and island confidence. Less is infinitely more. 🖤",
        story: "Focusing purely on gaze, silhouette, and human essence against raw tropical concrete.",
        hashtags: "#MinimalistPortrait #BlackAndWhite #NaturalLight #ColomboStyle #PortraitJournal"
      }
    },
    Landscape: {
      Moody: {
        short: "Where mountain mist meets ancient tea hills. Solitude over Ella Gap at dawn. 🏔️🌫️",
        story: "First light piercing mountain fog over the Nine Arch Railway Bridge. Moments of extreme stillness that remind us how sacred Sri Lanka's central highlands truly are.",
        hashtags: "#SriLankaTravel #EllaGap #NineArchBridge #VisitSriLanka #EarthMood #VisualStorytelling #CeylonHighlands"
      }
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setGeneratedResult(null);

    setTimeout(() => {
      const typeData = sampleGenerations[photoType] || sampleGenerations.Wedding;
      const moodData = typeData[mood] || typeData[Object.keys(typeData)[0]] || {
        short: `Captured with passion and precision. ${photoType} moments painted with light and ${mood.toLowerCase()} energy. ✨📷`,
        story: `Every frame holds a unique narrative. This ${photoType.toLowerCase()} shot brings together the subtle harmony of ${mood.toLowerCase()} tones, creating a timeless visual experience. ${contextNote ? `Note: "${contextNote}"` : ''}`,
        hashtags: `#${photoType}Photography #${mood}Vibes #PhotoFyStudio #VisualStoryteller #CreativeContent #ProfessionalPhotography`
      };

      setGeneratedResult({
        short: moodData.short,
        story: moodData.story,
        hashtags: moodData.hashtags
      });
      setIsGenerating(false);
    }, 900);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 bg-[#030508] relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF571E]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF571E]/10 text-[#FF571E] border border-[#FF571E]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Proprietary Creator AI Assistant
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            AI Caption & Hashtag Generator
          </h2>
          <p className="text-base sm:text-lg text-[#808898] mt-4 font-sans leading-relaxed">
            Generate high-converting social captions, engaging storytelling copy, and targeted SEO hashtags for your photography in seconds.
          </p>
        </div>

        {/* AI Generator Control Panel Box */}
        <div className="max-w-4xl mx-auto bg-[#0B0F19] border border-[#202633] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Animated AI Laser Scan Line Effect */}
          {isGenerating && (
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF571E] to-transparent shadow-[0_0_15px_#FF571E] animate-scanline z-30 pointer-events-none" />
          )}
          <form onSubmit={handleGenerate} className="space-y-8">
            {/* 1. Photo Type Selection */}
            <div>
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-3">
                1. Select Photo Type
              </label>
              <div className="flex flex-wrap gap-2">
                {photoTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPhotoType(type)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      photoType === type
                        ? 'bg-[#FF571E] text-white shadow-md shadow-[#FF571E]/20'
                        : 'bg-[#181E29] text-[#808898] hover:text-white hover:bg-[#202633] border border-[#202633]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Mood & Tone Selection */}
            <div>
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-3">
                2. Select Mood & Atmosphere
              </label>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMood(m)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      mood === m
                        ? 'bg-[#C64E12] text-white shadow-md'
                        : 'bg-[#181E29] text-[#808898] hover:text-white hover:bg-[#202633] border border-[#202633]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Platform Selection */}
            <div>
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-3">
                3. Target Publishing Platform
              </label>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlatform(p)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      platform === p
                        ? 'bg-[#181E29] text-[#FF571E] border border-[#FF571E]/50 font-bold'
                        : 'bg-[#181E29]/60 text-[#808898] hover:text-white border border-[#202633]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Custom Context Input */}
            <div>
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                4. Custom Details & Story Context (Optional)
              </label>
              <textarea
                value={contextNote}
                onChange={(e) => setContextNote(e.target.value)}
                placeholder="e.g. Poruwa ceremony at Grand Hotel Nuwara Eliya, bride wore traditional Kandyan Osaria..."
                className="w-full h-28 bg-[#181E29] border border-[#202633] rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#FF571E] transition-colors resize-none placeholder:text-[#808898]/50"
              />
            </div>

            {/* Generate CTA Button */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF571E] to-[#C64E12] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#FF571E]/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-amber-300" />
                  <span>AI Generating Copy...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 text-amber-300" />
                  <span>Generate Magic Captions & Hashtags</span>
                </>
              )}
            </button>
          </form>

          {/* Generated Result Output Card */}
          {generatedResult && (
            <div className="mt-10 pt-8 border-t border-[#202633] space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FF571E] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Generated Content Suite ({platform})
                </span>
                <span className="text-[11px] text-[#808898]">3 AI Outputs Ready</span>
              </div>

              {/* 1. Short Variant */}
              <div className="bg-[#181E29] border border-[#202633] rounded-2xl p-5 relative group">
                <div className="text-[10px] uppercase font-mono font-semibold text-[#808898] mb-1">
                  1. Short & Punchy Variant
                </div>
                <p className="text-sm text-white font-medium pr-12">{generatedResult.short}</p>
                <button
                  onClick={() => handleCopy(generatedResult.short, 'short')}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#0B0F19] text-[#808898] hover:text-white hover:border-[#FF571E] border border-[#202633] transition-all"
                >
                  {copiedKey === 'short' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* 2. Story Variant */}
              <div className="bg-[#181E29] border border-[#202633] rounded-2xl p-5 relative group">
                <div className="text-[10px] uppercase font-mono font-semibold text-[#808898] mb-1">
                  2. Storytelling Narrative Variant
                </div>
                <p className="text-sm text-white leading-relaxed pr-12">{generatedResult.story}</p>
                <button
                  onClick={() => handleCopy(generatedResult.story, 'story')}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#0B0F19] text-[#808898] hover:text-white hover:border-[#FF571E] border border-[#202633] transition-all"
                >
                  {copiedKey === 'story' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* 3. Hashtag Variant */}
              <div className="bg-[#181E29] border border-[#202633] rounded-2xl p-5 relative group">
                <div className="text-[10px] uppercase font-mono font-semibold text-[#808898] mb-1">
                  3. Targeted SEO Hashtag Cluster
                </div>
                <p className="text-xs text-[#FF571E] font-mono leading-relaxed pr-12">{generatedResult.hashtags}</p>
                <button
                  onClick={() => handleCopy(generatedResult.hashtags, 'hashtags')}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#0B0F19] text-[#808898] hover:text-white hover:border-[#FF571E] border border-[#202633] transition-all"
                >
                  {copiedKey === 'hashtags' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Usage Counter Badge */}
          <div className="mt-8 pt-6 border-t border-[#202633]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808898] gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>3 / 3 Free Generations Available Today</span>
            </span>

            <button
              onClick={onOpenBooking}
              className="text-[#FF571E] font-semibold hover:underline flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Unlimited PRO Access ($9.99)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
