// Configuration-driven Persistent Botanical Environment System
// Layered foreground & background botanical composition (3 Depths)
// Depth 1: Background accents (Z-10)
// Depth 2: Midground branches & leaves (Z-25)
// Depth 3: Foreground large overlapping flowers & leaves (Z-40, above scrolling cards)

export const botanicalSceneConfig = {
  enabled: true,

  // Depth 1 (Background - Z-10): Faint branches, soft shadows
  backgroundElements: [
    {
      id: "bg-branch-left",
      assetCategory: "branches",
      assetKey: "branchLeft",
      top: "-5%",
      left: "-50px",
      width: "280px",
      opacity: 0.6,
      sway: { rotDeg: 1.8, xPx: 4, duration: 8.5, delay: 0 }
    },
    {
      id: "bg-branch-right",
      assetCategory: "branches",
      assetKey: "branchRight",
      top: "-5%",
      right: "-50px",
      width: "280px",
      opacity: 0.6,
      sway: { rotDeg: -1.8, xPx: -4, duration: 9.0, delay: 0.3 }
    }
  ],

  // Depth 2 (Midground - Z-25): Side leaves and medium accent flowers
  midgroundElements: [
    {
      id: "mid-leaf-left-top",
      assetCategory: "leaves",
      assetKey: "leaf01",
      top: "12%",
      left: "1%",
      size: "110px",
      rotation: 30,
      opacity: 0.85,
      sway: { rotDeg: -5, xPx: -6, duration: 5.2, delay: 0.2 }
    },
    {
      id: "mid-leaf-left-bot",
      assetCategory: "leaves",
      assetKey: "leaf02",
      top: "68%",
      left: "2%",
      size: "125px",
      rotation: -35,
      opacity: 0.85,
      sway: { rotDeg: 6, xPx: 5, duration: 5.8, delay: 0.7 }
    },
    {
      id: "mid-leaf-right-top",
      assetCategory: "leaves",
      assetKey: "leaf02",
      top: "16%",
      right: "1%",
      size: "115px",
      rotation: -25,
      opacity: 0.85,
      sway: { rotDeg: 5.5, xPx: 6, duration: 5.5, delay: 0.4 }
    },
    {
      id: "mid-leaf-right-bot",
      assetCategory: "leaves",
      assetKey: "leaf01",
      top: "72%",
      right: "2%",
      size: "130px",
      rotation: 40,
      opacity: 0.85,
      sway: { rotDeg: -6, xPx: -5, duration: 6.2, delay: 0.9 }
    }
  ],

  // Depth 3 (Foreground - Z-40): Large Lush Flowers & Leaves Overlapping Content
  foregroundFlowers: [
    // Top-Left Large Entrance Flower
    {
      id: "fg-fl-top-left",
      assetCategory: "flowers",
      assetKey: "flower01",
      top: "-40px",
      left: "-30px",
      size: "240px",
      mobileSize: "160px",
      rotation: -10,
      opacity: 0.98,
      sway: { rotDeg: 4.5, xPx: 6, yPx: 4, duration: 5.4, delay: 0 }
    },
    // Top-Right Large Entrance Flower
    {
      id: "fg-fl-top-right",
      assetCategory: "flowers",
      assetKey: "flower02",
      top: "-30px",
      right: "-35px",
      size: "250px",
      mobileSize: "165px",
      rotation: 15,
      opacity: 0.98,
      sway: { rotDeg: -5.0, xPx: -6, yPx: 5, duration: 5.8, delay: 0.3 }
    },
    // Mid-Left Overlapping Rose
    {
      id: "fg-fl-mid-left",
      assetCategory: "flowers",
      assetKey: "flower02",
      top: "32%",
      left: "-25px",
      size: "190px",
      mobileSize: "130px",
      rotation: 25,
      opacity: 0.95,
      sway: { rotDeg: 5.5, xPx: 7, yPx: -4, duration: 6.3, delay: 0.6 }
    },
    // Mid-Right Overlapping Peony
    {
      id: "fg-fl-mid-right",
      assetCategory: "flowers",
      assetKey: "flower01",
      top: "38%",
      right: "-25px",
      size: "210px",
      mobileSize: "140px",
      rotation: -20,
      opacity: 0.95,
      sway: { rotDeg: -4.8, xPx: -7, yPx: 4, duration: 5.6, delay: 0.5 }
    },
    // Lower-Left Accent Flower
    {
      id: "fg-fl-low-left",
      assetCategory: "flowers",
      assetKey: "flower03",
      top: "62%",
      left: "-15px",
      size: "170px",
      mobileSize: "125px",
      rotation: 12,
      opacity: 0.92,
      sway: { rotDeg: 4.2, xPx: 5, yPx: -3, duration: 4.9, delay: 1.0 }
    },
    // Lower-Right Accent Flower
    {
      id: "fg-fl-low-right",
      assetCategory: "flowers",
      assetKey: "flower03",
      top: "66%",
      right: "-15px",
      size: "175px",
      mobileSize: "125px",
      rotation: -15,
      opacity: 0.92,
      sway: { rotDeg: -4.5, xPx: -5, yPx: 4, duration: 5.1, delay: 0.8 }
    },
    // Bottom-Left Large Corner Flower
    {
      id: "fg-fl-bot-left",
      assetCategory: "flowers",
      assetKey: "flower01",
      bottom: "-35px",
      left: "-35px",
      size: "230px",
      mobileSize: "150px",
      rotation: -30,
      opacity: 0.98,
      sway: { rotDeg: -5.2, xPx: -6, yPx: 6, duration: 6.0, delay: 1.2 }
    },
    // Bottom-Right Large Corner Flower
    {
      id: "fg-fl-bot-right",
      assetCategory: "flowers",
      assetKey: "flower02",
      bottom: "-35px",
      right: "-35px",
      size: "240px",
      mobileSize: "155px",
      rotation: 20,
      opacity: 0.98,
      sway: { rotDeg: 4.8, xPx: 7, yPx: -5, duration: 5.7, delay: 0.4 }
    }
  ],

  butterflies: [
    {
      id: "bf-1",
      assetCategory: "butterflies",
      assetKey: "butterfly01",
      scale: 0.85,
      start: { x: -10, y: 25 },
      control1: { x: 35, y: 15 },
      control2: { x: 75, y: 40 },
      end: { x: 110, y: 20 },
      duration: 18,
      delay: 2
    },
    {
      id: "bf-2",
      assetCategory: "butterflies",
      assetKey: "butterfly02",
      scale: 0.75,
      start: { x: 110, y: 60 },
      control1: { x: 70, y: 75 },
      control2: { x: 30, y: 45 },
      end: { x: -10, y: 65 },
      duration: 22,
      delay: 8
    }
  ],

  particles: {
    count: 32,
    color: "#E9B8C4",
    glowColor: "#C5A059"
  }
};
