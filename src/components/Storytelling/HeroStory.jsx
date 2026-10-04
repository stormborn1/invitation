import React from 'react';
import { weddingData } from '../../data/weddingData';
import { getAssetUrl } from '../../config/assetRegistry';

export default function HeroStory() {
  const bismillahUrl = getAssetUrl('calligraphy', 'bismillah');
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5 px-4">
      {/* Bismillah Calligraphy */}
      <div className="story-elem w-full flex justify-center">
        {bismillahUrl ? (
          <img
            src={bismillahUrl}
            alt="Bismillah"
            className="h-11 sm:h-14 md:h-16 object-contain"
          />
        ) : (
          <h2 className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#8B7668]">
            {weddingData.hero.bismillah}
          </h2>
        )}
      </div>

      {/* Greeting Line */}
      <p className="story-elem font-editorial italic text-base sm:text-lg md:text-xl text-[#5E705B]">
        {weddingData.hero.greeting}
      </p>

      {/* Couple Names Editorial Display */}
      <div className="story-elem flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-1">
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
          {weddingData.couple.brideName}
        </h1>

        <span className="font-editorial text-xs sm:text-2xl italic text-[#C98F9D] my-0.5 sm:my-0">
          weds
        </span>

        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
          {weddingData.couple.groomName}
        </h1>
      </div>

      {/* Divider Ornament */}
      {dividerUrl && (
        <div className="story-elem w-32 sm:w-44 opacity-80 py-0.5">
          <img src={dividerUrl} alt="" className="w-full h-auto" />
        </div>
      )}

      {/* Invitation Subtext */}
      <p className="story-elem font-sans text-xs sm:text-sm md:text-base text-[#8B7668] max-w-lg leading-relaxed">
        {weddingData.hero.invitationText}
      </p>

      {/* Wedding Date Display (Flat Printed Editorial, NO Cards, NO Shadows) */}
      <div className="story-elem pt-1">
        <div className="border-y border-[#C98F9D]/30 py-2.5 px-6 inline-flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-bold text-[#C98F9D]">
            Save The Date
          </span>
          <span className="font-editorial text-lg sm:text-xl md:text-2xl font-bold text-[#4B403B] mt-0.5">
            {weddingData.hero.weddingDate}
          </span>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="story-elem pt-3">
        <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#8B7668]/70 flex items-center justify-center gap-1.5 animate-pulse">
          <span>Scroll to explore our story</span>
          <span className="text-sm">↓</span>
        </span>
      </div>
    </div>
  );
}
