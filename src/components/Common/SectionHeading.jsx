import React from 'react';
import { getAssetUrl } from '../../config/assetRegistry';

export default function SectionHeading({ title, subtitle, bismillah = false, className = "" }) {
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <div className={`flex flex-col items-center text-center space-y-3 mb-12 ${className}`}>
      {bismillah && (
        <span className="font-arabic text-xl md:text-2xl text-[#8B7668] mb-1">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </span>
      )}
      {subtitle && (
        <span className="text-xs md:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#C98F9D]">
          {subtitle}
        </span>
      )}
      <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#4B403B] tracking-tight">
        {title}
      </h2>
      {dividerUrl && (
        <div className="w-36 md:w-52 pt-1 opacity-80">
          <img src={dividerUrl} alt="" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
}
