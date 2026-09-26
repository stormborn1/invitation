import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassPanel from '../components/Common/GlassPanel';
import { weddingData } from '../data/weddingData';
import { getAssetUrl } from '../config/assetRegistry';

gsap.registerPlugin(ScrollTrigger);

export default function Dua() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <section id="dua" ref={sectionRef} className="relative py-24 px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <div ref={cardRef} className="opacity-0">
          <GlassPanel className="text-center space-y-6 p-8 md:p-12 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
            {/* Soft Metallic Gold Accent Corner Lines */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A059]/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C5A059]/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C5A059]/50" />

            <span className="text-xs font-sans tracking-[0.25em] uppercase font-bold text-[#C5A059]">
              {weddingData.dua.title}
            </span>

            {/* Bismillah Header */}
            <h3 className="font-arabic text-xl md:text-2xl text-[#8B7668]">
              {weddingData.hero.bismillah}
            </h3>

            {/* Main Sacred Arabic Du'a */}
            <div className="py-4 px-2">
              <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#4B403B] leading-relaxed font-bold tracking-wide">
                {weddingData.dua.arabic}
              </p>
            </div>

            {/* Transliteration */}
            <p className="font-editorial italic text-base md:text-lg text-[#5E705B]">
              "{weddingData.dua.transliteration}"
            </p>

            {dividerUrl && (
              <div className="w-36 md:w-52 mx-auto opacity-70">
                <img src={dividerUrl} alt="" className="w-full h-auto" />
              </div>
            )}

            {/* English Translation */}
            <p className="font-sans text-sm md:text-base text-[#8B7668] max-w-xl mx-auto leading-relaxed">
              {weddingData.dua.translation}
            </p>

            {/* Reference */}
            {weddingData.dua.reference && (
              <span className="inline-block text-[11px] font-sans tracking-widest uppercase text-[#8B7668]/70">
                — {weddingData.dua.reference}
              </span>
            )}

            {/* Ameen Closing */}
            <div className="pt-2">
              <span className="font-arabic text-2xl text-[#C98F9D] font-bold">
                {weddingData.dua.ending}
              </span>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
