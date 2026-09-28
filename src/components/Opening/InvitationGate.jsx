import React, { useRef, useState } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import Seal from "./Seal";
import { weddingData } from "../../data/weddingData";
import { getAssetUrl } from "../../config/assetRegistry";

export default function InvitationGate({ onGateOpen }) {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const sealContainerRef = useRef(null);
  const glowLightRef = useRef(null);
  const seamRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleSealClick = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Trigger subtle golden rose confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ["#E9B8C4", "#C98F9D", "#C5A059", "#FBF7F1", "#A8B7A0"],
      disableForReducedMotion: true,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onGateOpen) onGateOpen();
        },
      });

      // 1. Seal compresses and pulses
      tl.to(sealContainerRef.current, {
        scale: 0.88,
        duration: 0.25,
        ease: "power2.in",
      })
        .to(sealContainerRef.current, {
          scale: 1.15,
          duration: 0.35,
          ease: "back.out(2)",
        })
        // 2. Seam glow line expands
        .to(
          seamRef.current,
          {
            opacity: 1,
            width: "6px",
            duration: 0.3,
          },
          "-=0.2",
        )
        .to(
          glowLightRef.current,
          {
            opacity: 1,
            scale: 3,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1",
        )
        // 3. Seal fades & scales up into split
        .to(
          sealContainerRef.current,
          {
            opacity: 0,
            scale: 1.4,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.2",
        )
        // 4. Split Left and Right Gate Panels
        .to(
          leftPanelRef.current,
          {
            xPercent: -100,
            duration: 1.4,
            ease: "power3.inOut",
          },
          "-=0.2",
        )
        .to(
          rightPanelRef.current,
          {
            xPercent: 100,
            duration: 1.4,
            ease: "power3.inOut",
          },
          "<",
        )
        // 5. Overall Container Fade Out
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.5,
            pointerEvents: "none",
          },
          "-=0.4",
        );
    }, containerRef);
  };

  const cornerOrnamentUrl = getAssetUrl("ornaments", "cornerOrnament");
  const flower01Url = getAssetUrl("invitationGate.flowers.left", "flowerLeft") || getAssetUrl("invitationGate.flowers.left");
  const flower02Url = getAssetUrl("invitationGate.flowers.right", "flowerRight") || getAssetUrl("invitationGate.flowers.right");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-90 flex items-center justify-center overflow-hidden bg-[#FBF7F1] select-none"
    >
      {/* Central Expanding Light Glow behind panels */}
      <div
        ref={glowLightRef}
        className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-radial from-[#FFF3D1] via-[#F4DCE2] to-transparent opacity-0 pointer-events-none filter blur-xl"
      />

      {/* LEFT GATE PANEL */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#FBF7F1] bg-gate-texture border-r border-[#C98F9D]/30 shadow-2xl flex flex-col justify-between p-6 md:p-12 overflow-hidden z-20"
      >
        {/* Top Left Embossed Corner Ornament */}
        <div className="w-20 h-20 md:w-32 md:h-32 opacity-70">
          {cornerOrnamentUrl && (
            <img
              src={cornerOrnamentUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Outer Left Botanical Trim */}
        <div className="absolute top-1/3 -left-6 w-32 md:w-48 opacity-80 pointer-events-none">
          {flower01Url && (
            <img
              src={flower01Url}
              alt=""
              className="w-[1000px] h-auto transform -rotate-12"
            />
          )}
        </div>

        {/* Bottom Left Corner Ornament */}
        <div className="w-20 h-20 md:w-32 md:h-32 opacity-70 transform rotate-270">
          {cornerOrnamentUrl && (
            <img
              src={cornerOrnamentUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* RIGHT GATE PANEL */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#FBF7F1] bg-gate-texture border-l border-[#C98F9D]/30 shadow-2xl flex flex-col justify-between items-end p-6 md:p-12 overflow-hidden z-20"
      >
        {/* Top Right Corner Ornament */}
        <div className="w-20 h-20 md:w-32 md:h-32 opacity-70 transform rotate-90">
          {cornerOrnamentUrl && (
            <img
              src={cornerOrnamentUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Outer Right Botanical Trim */}
        <div className="absolute top-1/3 -right-6 w-32 md:w-48 opacity-80 pointer-events-none">
          {flower02Url && (
            <img
              src={flower02Url}
              alt=""
              className="w-full h-auto transform rotate-12"
            />
          )}
        </div>

        {/* Bottom Right Corner Ornament */}
        <div className="w-20 h-20 md:w-32 md:h-32 opacity-70 transform rotate-180">
          {cornerOrnamentUrl && (
            <img
              src={cornerOrnamentUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* VERTICAL CENTER SEAM LINE */}
      <div
        ref={seamRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#C5A059] to-transparent z-30 opacity-70"
      />

      {/* CENTRAL WAX SEAL EMBLEM */}
      <div ref={sealContainerRef} className="absolute z-40">
        <Seal onClick={handleSealClick} />
      </div>
    </div>
  );
}
