import React from 'react';
import { weddingData } from '../../data/weddingData';
import { getAssetUrl } from '../../config/assetRegistry';

export default function UnionStory() {
  const leaf01Url = getAssetUrl('leaves', 'leaf01');
  const leaf02Url = getAssetUrl('leaves', 'leaf02');

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6 px-4">
      {/* Chapter Tag */}
      <div className="story-elem">
        <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase font-bold text-[#C5A059]">
          — OUR SACRED STORY —
        </span>
      </div>

      {/* Main Title */}
      <h2 className="story-elem font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
        {weddingData.union.title}
      </h2>

      {/* Botanical Branches Meeting Emblem Container (Flat, NO Shadows, NO Cards) */}
      <div className="story-elem relative w-full max-w-sm h-16 sm:h-20 flex items-center justify-center my-1">
        {/* Left Branch */}
        <div className="absolute left-6 sm:left-12 w-24 sm:w-32 h-auto opacity-80 transform -scale-x-100 pointer-events-none">
          {leaf01Url && (
            <img
              src={leaf01Url}
              alt=""
              className="w-full h-auto object-contain"
            />
          )}
        </div>

        {/* Center Heart Emblem (Flat, clean, zero shadow) */}
        <div className="relative z-10 bg-[#F4DCE2] w-10 h-10 rounded-full border border-[#C98F9D]/40 flex items-center justify-center">
          <span className="text-xl text-[#C98F9D] leading-none">♥</span>
        </div>

        {/* Right Branch */}
        <div className="absolute right-6 sm:right-12 w-24 sm:w-32 h-auto opacity-80 pointer-events-none">
          {leaf02Url && (
            <img
              src={leaf02Url}
              alt=""
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>

      {/* Subtitle */}
      <p className="story-elem font-editorial italic text-lg sm:text-2xl text-[#5E705B]">
        {weddingData.union.subtitle}
      </p>

      {/* Description */}
      <p className="story-elem font-sans text-xs sm:text-sm md:text-base text-[#8B7668] max-w-lg leading-relaxed">
        {weddingData.union.description}
      </p>

      {/* Couple Monogram */}
      <div className="story-elem pt-2">
        <span className="font-editorial text-xl sm:text-2xl tracking-[0.25em] text-[#C98F9D] font-bold">
          {weddingData.couple.monogram}
        </span>
      </div>
    </div>
  );
}
