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
        if (el && elConfig.sway) {
          gsap.to(el, {
            rotation: `+=${elConfig.sway.rotDeg || 0}`,
            x: `+=${elConfig.sway.xPx || 0}`,
            y: `+=${elConfig.sway.yPx || 0}`,
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
        if (el && elConfig.sway) {
          gsap.to(el, {
            rotation: `+=${elConfig.sway.rotDeg || 0}`,
            x: `+=${elConfig.sway.xPx || 0}`,
            y: `+=${elConfig.sway.yPx || 0}`,
            duration: elConfig.sway.duration,
            delay: elConfig.sway.delay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      });

      // 3. Sway Foreground Large Hero Flowers & Leaves
      botanicalSceneConfig.foregroundFlowers.forEach((fl) => {
        const el = document.getElementById(fl.id);
        if (el && fl.sway) {
          gsap.to(el, {
            rotation: `+=${fl.sway.rotDeg || 0}`,
            x: `+=${fl.sway.xPx || 0}`,
            y: `+=${fl.sway.yPx || 0}`,
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
      {/* DEPTH 1: BACKGROUND GARLANDS & SHADOWS (Z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {botanicalSceneConfig.backgroundElements.map((br) => {
          const url = getAssetUrl(br.assetCategory, br.assetKey);
          if (!url) return null;
          const style = {
            position: 'absolute',
            top: br.top,
            bottom: br.bottom,
            left: br.left,
            right: br.right,
            width: br.width,
            opacity: br.opacity,
            transformOrigin: br.side === 'right' ? 'top right' : 'top left',
          };
          return <img key={br.id} id={br.id} src={url} alt="" style={style} className="object-contain filter blur-[0.4px]" />;
        })}
      </div>

      {/* DEPTH 2: MIDGROUND LEAVES, FERNS, BLOOMS & BIRDS (Z-30) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {botanicalSceneConfig.midgroundElements.map((lf) => {
          const url = getAssetUrl(lf.assetCategory, lf.assetKey);
          if (!url) return null;
          const style = {
            position: 'absolute',
            top: lf.top,
            bottom: lf.bottom,
            left: lf.left,
            right: lf.right,
            width: lf.width || lf.size,
            height: lf.height || 'auto',
            transform: `rotate(${lf.rotation || 0}deg)`,
            transformOrigin: lf.side === 'right' ? 'center right' : 'center left',
            opacity: lf.opacity,
          };
          return <img key={lf.id} id={lf.id} src={url} alt="" style={style} className="object-contain filter drop-shadow-md" />;
        })}
      </div>

      {/* DEPTH 3: FOREGROUND VERY LARGE HERO BLOOMS & LEAF CLUSTERS EMERGING FROM OFF-SCREEN (Z-50) */}
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
            width: fl.width || fl.size,
            height: fl.height || 'auto',
            transform: `rotate(${fl.rotation || 0}deg)`,
            transformOrigin: fl.side === 'right' ? 'center right' : 'center left',
            opacity: fl.opacity,
          };

          return (
            <div
              key={fl.id}
              id={fl.id}
              style={style}
              className="transition-all transform-gpu pointer-events-none"
            >
              <img
                src={url}
                alt=""
                className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(139,118,104,0.36)]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
