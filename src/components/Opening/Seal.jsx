import React from 'react';
import { weddingData } from '../../data/weddingData';
import { getAssetUrl } from '../../config/assetRegistry';

export default function Seal({ onClick, sealRef }) {
  const waxSealUrl = getAssetUrl('seal', 'waxSeal');

  return (
    <button
      ref={sealRef}
      onClick={onClick}
      aria-label="Open Wedding Invitation Gate"
      className="group relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C98F9D]/50 rounded-full transition-transform transform hover:scale-105 active:scale-95 z-50"
    >
      {/* Outer Golden Aura Glow */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#E9B8C4]/40 via-[#C5A059]/30 to-[#E9B8C4]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

      {/* Wax Seal Image Container */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center shadow-2xl wax-seal-shadow overflow-hidden">
        {waxSealUrl ? (
          <img src={waxSealUrl} alt="Wax Seal" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E9B8C4] via-[#C98F9D] to-[#8B7668] rounded-full" />
        )}

        {/* Central Monogram Text */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
          <span className="font-editorial text-2xl md:text-3xl font-bold tracking-widest text-[#FBF7F1] drop-shadow-md select-none">
            {weddingData.couple.brideInitial} <span className="text-[#F4DCE2] text-xl">♥</span> {weddingData.couple.groomInitial}
          </span>
          <span className="text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium text-[#FBF7F1]/90 mt-1">
            OPEN
          </span>
        </div> */}
      </div>

      {/* Outer Ring Pulse Prompt */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-[#8B7668] font-semibold group-hover:text-[#5E705B] transition-colors flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C98F9D] animate-ping" />
          Click to Open Invitation
        </span>
      </div>
    </button>
  );
}
