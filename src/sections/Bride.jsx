import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassPanel from '../components/Common/GlassPanel';
import { weddingData } from '../data/weddingData';
import { getAssetUrl } from '../config/assetRegistry';

gsap.registerPlugin(ScrollTrigger);

export default function Bride() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const flowerUrl = getAssetUrl('flowers', 'flower01');
  const dividerUrl = getAssetUrl('ornaments', 'dividerOrnament');

  return (
    <section id="bride" ref={sectionRef} className="relative py-20 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div ref={cardRef} className="relative opacity-0">
          <GlassPanel className="relative overflow-hidden border-l-4 border-l-[#C98F9D]">
            {/* Top Right Botanical Frame Accent */}
            {flowerUrl && (
              <div className="absolute -top-10 -right-10 w-36 md:w-48 opacity-40 pointer-events-none transform rotate-12">
                <img src={flowerUrl} alt="" className="w-full h-auto" />
              </div>
            )}

            <div className="relative z-10 flex flex-col items-start space-y-4 max-w-2xl">
              <span className="text-xs font-sans tracking-[0.25em] uppercase font-bold text-[#C98F9D] bg-[#F4DCE2]/60 px-3 py-1 rounded-full">
                {weddingData.bride.role}
              </span>

              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
                {weddingData.bride.name}
              </h2>

              <p className="font-editorial italic text-lg md:text-xl text-[#8B7668]">
                Daughter of <span className="font-semibold text-[#4B403B]">{weddingData.bride.fatherName}</span>
                {weddingData.bride.motherName && ` & ${weddingData.bride.motherName}`}
              </p>

              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-sans tracking-wider text-[#5E705B] uppercase font-medium bg-[#A8B7A0]/20 px-3 py-1 rounded-md">
                <span>Profession:</span>
                <span className="font-semibold text-[#4B403B]">{weddingData.bride.profession}</span>
              </div>

              {dividerUrl && (
                <div className="w-32 my-1 opacity-70">
                  <img src={dividerUrl} alt="" className="w-full h-auto" />
                </div>
              )}

              <p className="font-sans text-sm md:text-base text-[#4B403B]/90 leading-relaxed italic border-l-2 border-[#E9B8C4] pl-4 py-1">
                "{weddingData.bride.personalLine}"
              </p>

              {weddingData.bride.quote && (
                <p className="text-xs font-sans text-[#8B7668] opacity-80 pt-2 italic">
                  "{weddingData.bride.quote}"
                </p>
              )}
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
