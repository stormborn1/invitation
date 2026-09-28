import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "../data/weddingData";
import { getAssetUrl } from "../config/assetRegistry";

gsap.registerPlugin(ScrollTrigger);

export default function Union() {
  const sectionRef = useRef(null);
  const leftBranchRef = useRef(null);
  const rightBranchRef = useRef(null);
  const heartRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        leftBranchRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 0.9, duration: 1.2, ease: "power2.out" },
      )
        .fromTo(
          rightBranchRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 0.9, duration: 1.2, ease: "power2.out" },
          "<",
        )
        .fromTo(
          heartRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(2)" },
          "-=0.4",
        )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leaf01Url = getAssetUrl("leaves", "leaf01");
  const leaf02Url = getAssetUrl("leaves", "leaf02");

  return (
    <section
      id="union"
      ref={sectionRef}
      className="relative py-24 px-4 text-center z-10 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        {/* Botanical Branches Meeting Animation Container */}
        <div className="relative w-full max-w-md h-24 flex items-center justify-center">
          {/* Left Branch extending inward */}
          <div
            ref={leftBranchRef}
            className="absolute left-4 md:left-12 w-32 md:w-44 h-auto opacity-0 transform -scale-x-100"
          >
            {leaf01Url && (
              <img
                src={leaf01Url}
                alt=""
                className="w-full h-auto object-contain"
              />
            )}
          </div>

          {/* Center Heart Emblem */}
          <div
            ref={heartRef}
            className="relative z-10 opacity-0 bg-[#F4DCE2] p-3 rounded-full shadow-md border border-[#C98F9D]/40"
          >
            <span className="text-2xl text-[#C98F9D]">♥</span>
          </div>

          {/* Right Branch extending inward */}
          <div
            ref={rightBranchRef}
            className="absolute right-4 md:right-12 w-32 md:w-44 h-auto opacity-0"
          >
            {leaf02Url && (
              <img
                src={leaf02Url}
                alt=""
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </div>

        {/* Text Content */}
        <div ref={textRef} className="space-y-3 opacity-0">
          <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold text-[#C98F9D]">
            {weddingData.union.title}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B403B] tracking-tight">
            {weddingData.union.subtitle}
          </h2>
          <p className="font-sans text-sm md:text-base text-[#8B7668] max-w-xl mx-auto leading-relaxed pt-2">
            {weddingData.union.description}
          </p>
        </div>
      </div>
    </section>
  );
}
