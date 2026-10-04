import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { getAssetUrl } from '../../config/assetRegistry';

export default function SignoffStory() {
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5 px-4">
      {/* Monogram Heart Emblem */}
      <div className="story-elem inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#C98F9D]/40 text-[#C98F9D] bg-[#F4DCE2]/40">
        <Heart className="w-6 h-6 fill-[#C98F9D]" />
      </div>

      {/* Couple Names Signoff */}
      <h2 className="story-elem font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
        {weddingData.couple.brideName} <span className="text-[#C98F9D] italic">&</span> {weddingData.couple.groomName}
      </h2>

      {/* Closing Text */}
      <p className="story-elem font-editorial italic text-base sm:text-lg md:text-xl text-[#8B7668] max-w-md mx-auto leading-relaxed">
        {weddingData.footer.closingText}
      </p>

      {/* Divider */}
      {dividerUrl && (
        <div className="story-elem w-28 sm:w-40 opacity-70 py-0.5">
          <img src={dividerUrl} alt="" className="w-full h-auto" />
        </div>
      )}

      {/* Islamic Signoff */}
      <p className="story-elem font-arabic text-2xl sm:text-3xl text-[#5E705B]">
        {weddingData.footer.islamicSignoff}
      </p>

      {/* Copyright notice */}
      <p className="story-elem text-[10px] sm:text-xs font-sans tracking-widest uppercase text-[#8B7668]/70 pt-2">
        {weddingData.footer.copyright}
      </p>
    </div>
  );
}
