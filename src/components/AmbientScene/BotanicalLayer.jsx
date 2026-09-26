import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { botanicalSceneConfig } from '../../config/botanicalConfig';
import { getAssetUrl } from '../../config/assetRegistry';

export default function BotanicalLayer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!botanicalSceneConfig.enabled) return;
    const ctx = gsap.context(() => {
      // 1. Sway Background Elements
      botanicalSceneConfig.backgroundElements.forEach((elConfig) => {
        const el = document.getElementById(elConfig.id);
        if (el) {
          gsap.to(el, {
            rotation: `+=${elConfig.sway.rotDeg}`,
            x: `+=${elConfig.sway.xPx}`,
            duration: elConfig.sway.duration,
            delay: elConfig.sway.delay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      });

      // 2. Sway Midground Elements
      botanicalSceneConfig.midgroundElements.forEach((elConfig) => {
        const el = document.getElementById(elConfig.id);
        if (el) {
          gsap.to(el, {
            rotation: `+=${elConfig.sway.rotDeg}`,
            x: `+=${elConfig.sway.xPx}`,
            duration: elConfig.sway.duration,
            delay: elConfig.sway.delay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      });

      // 3. Sway Foreground Large Flowers (Wind Sway)
      botanicalSceneConfig.foregroundFlowers.forEach((fl) => {
        const el = document.getElementById(fl.id);
        if (el) {
          gsap.to(el, {
            rotation: `+=${fl.sway.rotDeg}`,
            x: `+=${fl.sway.xPx}`,
            y: `+=${fl.sway.yPx}`,
            duration: fl.sway.duration,
            delay: fl.sway.delay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none select-none overflow-hidden z-40">
      {/* DEPTH 1: BACKGROUND (Z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {botanicalSceneConfig.backgroundElements.map((br) => {
          const url = getAssetUrl(br.assetCategory, br.assetKey);
          if (!url) return null;
          const style = {
            position: 'absolute',
            top: br.top,
            left: br.left,
            right: br.right,
            width: br.width,
            opacity: br.opacity,
          };
          return <img key={br.id} id={br.id} src={url} alt="" style={style} className="object-contain filter blur-[0.5px]" />;
        })}
      </div>

      {/* DEPTH 2: MIDGROUND LEAVES (Z-30 - IN FRONT OF CONTENT ON MOBILE) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {botanicalSceneConfig.midgroundElements.map((lf) => {
          const url = getAssetUrl(lf.assetCategory, lf.assetKey);
          if (!url) return null;
          const style = {
            position: 'absolute',
            top: lf.top,
            left: lf.left,
            right: lf.right,
            width: lf.size,
            height: lf.size,
            transform: `rotate(${lf.rotation}deg)`,
            opacity: lf.opacity,
          };
          return <img key={lf.id} id={lf.id} src={url} alt="" style={style} className="object-contain drop-shadow-md" />;
        })}
      </div>

      {/* DEPTH 3: FOREGROUND LARGE FLOWERS (Z-50 - GUARANTEED IN FRONT ON MOBILE & DESKTOP) */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {botanicalSceneConfig.foregroundFlowers.map((fl) => {
          const url = getAssetUrl(fl.assetCategory, fl.assetKey);
          if (!url) return null;

          const style = {
            position: 'absolute',
            top: fl.top,
            bottom: fl.bottom,
            left: fl.left,
            right: fl.right,
            transform: `rotate(${fl.rotation}deg)`,
            opacity: fl.opacity,
          };

          return (
            <div
              key={fl.id}
              id={fl.id}
              style={style}
              className="w-[125px] h-[125px] sm:w-[170px] sm:h-[170px] md:w-[240px] md:h-[240px] transition-all transform-gpu"
            >
              <img
                src={url}
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(139,118,104,0.35)]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
