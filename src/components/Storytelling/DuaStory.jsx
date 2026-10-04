import React from 'react';
import { weddingData } from '../../data/weddingData';
import { getAssetUrl } from '../../config/assetRegistry';

export default function DuaStory() {
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-4 px-4">
      {/* Chapter Tag */}
      <div className="story-elem">
        <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase font-bold text-[#C5A059]">
          — {weddingData.dua.title} —
        </span>
      </div>

      {/* Bismillah */}
      <p className="story-elem font-arabic text-lg sm:text-2xl text-[#8B7668]">
        {weddingData.hero.bismillah}
      </p>

      {/* Main Sacred Arabic Du'a */}
      <div className="story-elem py-2 px-2 max-w-xl">
        <p className="font-arabic text-xl sm:text-3xl md:text-4xl text-[#4B403B] leading-relaxed font-bold tracking-wide">
          {weddingData.dua.arabic}
        </p>
      </div>

      {/* Transliteration */}
      <p className="story-elem font-editorial italic text-sm sm:text-lg text-[#5E705B]">
        "{weddingData.dua.transliteration}"
      </p>

      {/* Divider */}
      {dividerUrl && (
        <div className="story-elem w-28 sm:w-40 opacity-70 py-0.5">
          <img src={dividerUrl} alt="" className="w-full h-auto" />
        </div>
      )}

      {/* English Translation */}
      <p className="story-elem font-sans text-xs sm:text-sm md:text-base text-[#8B7668] max-w-lg mx-auto leading-relaxed">
        {weddingData.dua.translation}
      </p>

      {/* Reference & Ameen */}
      <div className="story-elem pt-1 flex flex-col items-center space-y-2">
        {weddingData.dua.reference && (
          <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-[#8B7668]/70">
            — {weddingData.dua.reference}
          </span>
        )}
        <span className="font-arabic text-xl sm:text-2xl text-[#C98F9D] font-bold">
          {weddingData.dua.ending}
        </span>
      </div>
    </div>
  );
}
