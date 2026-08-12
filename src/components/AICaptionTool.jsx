import React, { useState } from 'react';
import { Sparkles, Copy, Check, RefreshCw, Wand2, Lock } from 'lucide-react';

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

  const PillGroup = ({ label, options, value, onChange, accentStyle = false }) => (
    <div>
      <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-300 ${
              value === opt
                ? accentStyle
                  ? 'bg-[#141922] text-[#FF6B2C] border border-[#FF6B2C]/40 shadow-md shadow-[#FF6B2C]/10'
                  : 'bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white shadow-md shadow-[#FF6B2C]/20'
                : 'bg-[#141922] text-[#5F6A80] hover:text-white hover:bg-[#1A2030] border border-[#1E2536]'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="ai-tool" className="py-24 sm:py-32 relative noise-overlay">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B2C]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#FF6B2C]/8 text-[#FF6B2C] border border-[#FF6B2C]/15 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Proprietary Creator AI
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            AI Caption & <span className="italic gradient-text">Hashtag</span> Generator
          </h2>
          <p className="text-[15px] sm:text-base text-[#8B95A9] mt-5 leading-relaxed max-w-2xl">
            Generate high-converting social captions, engaging storytelling copy, and targeted SEO hashtags for your photography in seconds.
          </p>
        </div>

        {/* AI Panel */}
        <div className="max-w-4xl mx-auto bg-[#0C1018] border border-[#1E2536] rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-black/30 relative overflow-hidden">
          {/* Scan Line Effect */}
          {isGenerating && (
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B2C] to-transparent shadow-[0_0_20px_#FF6B2C] animate-scanline z-30 pointer-events-none" />
          )}

          <form onSubmit={handleGenerate} className="space-y-8">
            <PillGroup label="1. Photo Type" options={photoTypes} value={photoType} onChange={setPhotoType} />
            <PillGroup label="2. Mood & Atmosphere" options={moods} value={mood} onChange={setMood} />
            <PillGroup label="3. Target Platform" options={platforms} value={platform} onChange={setPlatform} accentStyle />

            <div>
              <label className="block text-[11px] font-semibold text-white uppercase tracking-[0.12em] mb-2">
                4. Story Context (Optional)
              </label>
              <textarea
                value={contextNote}
                onChange={(e) => setContextNote(e.target.value)}
                placeholder="e.g. Poruwa ceremony at Grand Hotel Nuwara Eliya, bride wore traditional Kandyan Osaria..."
                className="w-full h-28 bg-[#141922] border border-[#1E2536] rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#FF6B2C]/50 focus:ring-1 focus:ring-[#FF6B2C]/20 transition-all resize-none placeholder:text-[#5F6A80]/60"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B2C] to-[#E04D14] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:shadow-xl hover:shadow-[#FF6B2C]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
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

          {/* Generated Results */}
          {generatedResult && (
            <div className="mt-10 pt-8 border-t border-[#1E2536] space-y-5 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#FF6B2C] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Generated Content Suite ({platform})
                </span>
                <span className="text-[11px] text-[#5F6A80]">3 AI Outputs</span>
              </div>

              {[
                { key: 'short', label: '1. Short & Punchy', content: generatedResult.short, isMono: false },
                { key: 'story', label: '2. Storytelling Narrative', content: generatedResult.story, isMono: false },
                { key: 'hashtags', label: '3. SEO Hashtag Cluster', content: generatedResult.hashtags, isMono: true },
              ].map((block) => (
                <div key={block.key} className="bg-[#141922] border border-[#1E2536] rounded-2xl p-5 relative group hover:border-[#FF6B2C]/20 transition-all duration-300">
                  <div className="text-[10px] uppercase font-mono font-semibold text-[#5F6A80] mb-2">
                    {block.label}
                  </div>
                  <p className={`text-sm pr-12 leading-relaxed ${block.isMono ? 'text-[#FF6B2C] font-mono text-xs' : 'text-white'}`}>
                    {block.content}
                  </p>
                  <button
                    onClick={() => handleCopy(block.content, block.key)}
                    className="absolute top-4 right-4 p-2 rounded-xl glass text-[#5F6A80] hover:text-white hover:border-[#FF6B2C]/50 transition-all duration-300"
                  >
                    {copiedKey === block.key ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Usage Counter */}
          <div className="mt-8 pt-6 border-t border-[#1E2536]/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5F6A80] gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              3 / 3 Free Generations Available
            </span>
            <button
              onClick={onOpenBooking}
              className="text-[#FF6B2C] font-semibold hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              Unlock Unlimited PRO ($9.99)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
