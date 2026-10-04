import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { getAssetUrl } from "../config/assetRegistry";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ active = false }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bismillahRef = useRef(null);
  const greetingRef = useRef(null);
  const coupleNamesRef = useRef(null);
  const invitationRef = useRef(null);
  const dateRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Staggered Animation
      const tl = gsap.timeline();

      tl.fromTo(
        bismillahRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      )
        .fromTo(
          greetingRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          coupleNamesRef.current,
          { opacity: 0, scale: 0.94, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          invitationRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          dateRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2",
        );

      // 2. Scroll Exit Parallax Animation
      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0.25,
        scale: 0.97,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  const bismillahUrl = getAssetUrl("islamic", "bismillah");
  const dividerUrl = getAssetUrl("ornaments", "dividerOrnament");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center z-20 overflow-hidden"
    >
      {/* Soft Luminous Pink Radial Background Aura behind Hero Text */}
      <div className="absolute inset-0 m-auto w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-gradient-radial from-[#F4DCE2]/80 via-[#E9B8C4]/25 to-transparent blur-3xl pointer-events-none" />

      <div
        ref={contentRef}
        className="max-w-2xl mx-auto flex flex-col items-center space-y-4 sm:space-y-5 z-20 relative"
      >
        {/* Bismillah Calligraphy */}
        <div
          ref={bismillahRef}
          className="w-full flex justify-center opacity-0"
        >
          {bismillahUrl ? (
            <img
              src={bismillahUrl}
              alt="Bismillah"
              className="h-12 sm:h-16 md:h-18 object-contain filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]"
            />
          ) : (
            <h2 className="font-arabic text-2xl md:text-3xl text-[#8B7668] text-glow-gold">
              {weddingData.hero.bismillah}
            </h2>
          )}
        </div>

        {/* Greeting Line */}
        <p
          ref={greetingRef}
          className="font-editorial italic text-lg sm:text-xl md:text-2xl text-[#5E705B] opacity-0"
        >
          {weddingData.hero.greeting}
        </p>

        {/* TOP HIERARCHY: Couple Names Editorial Display */}
        <div
          ref={coupleNamesRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 py-1 opacity-0"
        >
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#000000] tracking-tight text-glow-pink">
            {weddingData.couple.brideName}
          </h1>

          <span className="font-editorial text-sm sm:text-5xl italic text-[#721f37] my-0.5 sm:my-0">
            weds
          </span>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#000000] tracking-tight text-glow-pink">
            {weddingData.couple.groomName}
          </h1>
        </div>

        {/* Divider Ornament */}
        {dividerUrl && (
          <div className="w-36 sm:w-48 opacity-85">
            <img src={dividerUrl} alt="" className="w-full h-auto" />
          </div>
        )}

        {/* Invitation Subtext */}
        <p
          ref={invitationRef}
          className="font-sans text-xs sm:text-sm md:text-base text-[#8B7668] max-w-lg leading-relaxed opacity-0"
        >
          {weddingData.hero.invitationText}
        </p>

        {/* Wedding Date Display Card */}
        <div ref={dateRef} className="opacity-0 pt-1">
          <div className="glass-pill px-6 py-2.5   inline-flex flex-col items-center shadow-md">
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-bold text-[#C98F9D]">
              Save The Date
            </span>
            <span className="font-editorial text-lg sm:text-xl md:text-2xl font-bold text-[#4B403B] mt-0.5">
              {weddingData.hero.weddingDate}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt Indicator */}
      {/* <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-0 z-20"
      >
        <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#8B7668] font-medium">
          {weddingData.hero.scrollPrompt}
        </span>
        <ChevronDown className="w-4 h-4 text-[#C98F9D] animate-bounce" />
      </div> */}
    </section>
  );
}
