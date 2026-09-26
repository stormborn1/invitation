import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/Common/SectionHeading';
import GlassPanel from '../components/Common/GlassPanel';
import { useCountdown } from '../hooks/useCountdown';
import { weddingData } from '../data/weddingData';

gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const timeLeft = useCountdown(weddingData.countdown.targetDate);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" ref={sectionRef} className="relative py-24 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={weddingData.countdown.heading || "Countdown to the Blessed Day"}
          subtitle="Sacred Union"
        />

        <div ref={cardRef} className="opacity-0">
          <GlassPanel className="p-8 md:p-12 text-center border border-[#E9B8C4]/40 shadow-2xl">
            <p className="font-sans text-sm md:text-base text-[#8B7668] max-w-lg mx-auto mb-8">
              {weddingData.countdown.subtext}
            </p>

            {timeLeft.isExpired ? (
              <div className="py-6 space-y-2">
                <h3 className="font-editorial text-3xl md:text-4xl text-[#C98F9D] font-bold">
                  The Blessed Day Has Arrived!
                </h3>
                <p className="font-sans text-sm text-[#5E705B]">Alhamdulillah for this wonderful occasion.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
                {timeUnits.map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-[#FBF7F1]/80 rounded-2xl p-4 md:p-6 border border-[#E9B8C4]/30 flex flex-col items-center justify-center shadow-inner"
                  >
                    <span className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#4B403B] tracking-tight">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] md:text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#C98F9D] mt-2">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
