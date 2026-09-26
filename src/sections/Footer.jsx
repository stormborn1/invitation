import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { getAssetUrl } from '../config/assetRegistry';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const flower01Url = getAssetUrl('flowers', 'flower01');
  const flower02Url = getAssetUrl('flowers', 'flower02');
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <footer ref={footerRef} className="relative py-20 px-4 z-10 border-t border-[#E9B8C4]/30 overflow-hidden bg-[#F5EEE5]/40">
      {/* Corner Floral Accent Decorations */}
      {flower01Url && (
        <div className="absolute -bottom-10 -left-10 w-36 md:w-48 opacity-40 pointer-events-none transform -rotate-45">
          <img src={flower01Url} alt="" className="w-full h-auto" />
        </div>
      )}

      {flower02Url && (
        <div className="absolute -bottom-10 -right-10 w-36 md:w-48 opacity-40 pointer-events-none transform rotate-45">
          <img src={flower02Url} alt="" className="w-full h-auto" />
        </div>
      )}

      <div ref={contentRef} className="max-w-3xl mx-auto text-center space-y-6 opacity-0 relative z-10">
        {/* Monogram Monolith */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-card border border-[#C98F9D]/40 text-[#C98F9D]">
          <Heart className="w-8 h-8 fill-[#F4DCE2]" />
        </div>

        {/* Couple Names Signoff */}
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#4B403B]">
          {weddingData.couple.brideName} <span className="text-[#C98F9D] italic">&</span> {weddingData.couple.groomName}
        </h2>

        <p className="font-editorial italic text-base md:text-lg text-[#8B7668] max-w-md mx-auto">
          {weddingData.footer.closingText}
        </p>

        {dividerUrl && (
          <div className="w-36 md:w-48 mx-auto opacity-70">
            <img src={dividerUrl} alt="" className="w-full h-auto" />
          </div>
        )}

        {/* Islamic Signoff */}
        <p className="font-arabic text-2xl text-[#5E705B]">
          {weddingData.footer.islamicSignoff}
        </p>

        {/* Copyright notice */}
        <p className="text-[11px] font-sans tracking-widest uppercase text-[#8B7668]/70 pt-4">
          {weddingData.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
