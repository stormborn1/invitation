// Configuration-driven Persistent Botanical Environment System
// "FLOWERS & BRANCHES EMERGING FROM OUTSIDE THE SCREEN EDGES"
// Strict separation between LEFT BOTANICAL SYSTEM and RIGHT BOTANICAL SYSTEM.
// Every left element uses dedicated left assets from flowers.left / leaves.left / branches.left / shadows.left.
// Every right element uses dedicated right assets from flowers.right / leaves.right / branches.right / shadows.right.
// ZERO CSS MIRRORING (scaleX(-1)) of flowers.

const leftSystem = {
  background: [
    {
      id: "bg-garland-left",
      side: "left",
      assetCategory: "branches.left",
      assetKey: "branchLeft02",
      top: "-5%",
      left: "clamp(-150px, -10vw, -80px)",
      width: "clamp(260px, 28vw, 420px)",
      opacity: 0.75,
      sway: { rotDeg: 2.2, xPx: 6, yPx: 4, duration: 7.5, delay: 0 }
    },
    {
      id: "bg-shadow-left",
      side: "left",
      assetCategory: "shadows.left",
      assetKey: "shadowLeft01",
      top: "0%",
      left: "clamp(-120px, -8vw, -60px)",
      width: "clamp(240px, 25vw, 380px)",
      opacity: 0,
      sway: { rotDeg: 1.5, xPx: 4, yPx: 2, duration: 9.0, delay: 0 }
    }
  ],
  midground: [
    {
      id: "mid-bloom-left-top",
      side: "left",
      assetCategory: "flowers.left",
      assetKey: "flowerLeft03",
      top: "40%",
      left: "clamp(-95px, -6vw, -50px)",
      width: "clamp(200px, 22vw, 320px)",
      rotation: 12,
      opacity: 1,
      sway: { rotDeg: 4.2, xPx: 6, yPx: -4, duration: 5.0, delay: 0.3 }
    },
    {
      id: "mid-leaf-left-mid",
      side: "left",
      assetCategory: "leaves.left",
      assetKey: "leafLeft01",
      top: "60%",
      left: "clamp(-85px, -5vw, -40px)",
      width: "clamp(180px, 20vw, 290px)",
      rotation: -22,
      opacity: 0.6,
      sway: { rotDeg: -4.8, xPx: -6, yPx: 5, duration: 5.5, delay: 0.5 }
    },
    {
      id: "mid-cluster-left-low",
      side: "left",
      assetCategory: "flowers.left",
      assetKey: "flowerLeft04",
      top: "65%",
      left: "clamp(-90px, -6vw, -45px)",
      width: "clamp(210px, 23vw, 330px)",
      rotation: -15,
      opacity: 1,
      sway: { rotDeg: 4.5, xPx: 7, yPx: -5, duration: 5.2, delay: 0.8 }
    }
  ],
  foreground: [
    {
      id: "fg-hero-left-top",
      side: "left",
      assetCategory: "flowers.left",
      assetKey: "flowerLeft01",
      top: "clamp(-75px, -6vh, -40px)",
      left: "clamp(-120px, -8vw, -60px)",
      width: "clamp(280px, 32vw, 480px)",
      rotation: 112,
      opacity: 0,
      sway: { rotDeg: 5.2, xPx: 8, yPx: 6, duration: 5.4, delay: 0 }
    },
    {
      id: "fg-leaf-left-top-inward",
      side: "left",
      assetCategory: "leaves.left",
      assetKey: "leafLeft02",
      top: "125px",
      left: "clamp(-45px, -2vw, -15px)",
      width: "clamp(180px, 18vw, 280px)",
      rotation: 45,
      opacity: 0.70,
      sway: { rotDeg: -5.8, xPx: -7, yPx: 5, duration: 4.8, delay: 0.2 }
    },
    {
      id: "fg-hero-left-mid",
      side: "left",
      assetCategory: "flowers.left",
      assetKey: "flowerLeft02",
      top: "10%",
      left: "clamp(-130px, -9vw, -70px)",
      width: "clamp(200px, 20vw, 400px)",
      rotation: 24,
      opacity: 1,
      sway: { rotDeg: 5.8, xPx: 9, yPx: -6, duration: 6.3, delay: 0.5 }
    },
    {
      id: "fg-leaf-left-mid-inward",
      side: "left",
      assetCategory: "leaves.left",
      assetKey: "leafLeft03",
      top: "37%",
      left: "clamp(-35px, -1.5vw, -10px)",
      width: "clamp(170px, 17vw, 260px)",
      rotation: -18,
      opacity: 0.94,
      sway: { rotDeg: -5.0, xPx: -6, yPx: 5, duration: 5.2, delay: 0.7 }
    },
    {
      id: "fg-hero-left-bot",
      side: "left",
      assetCategory: "flowers.left",
      assetKey: "flowerLeft04",
      top: "65%",
      bottom: "clamp(-75px, -6vh, -40px)",
      left: "clamp(-115px, -8vw, -55px)",
      width: "clamp(290px, 33vw, 490px)",
      rotation: -32,
      opacity: 1,
      sway: { rotDeg: -5.8, xPx: -9, yPx: 7, duration: 6.4, delay: 1.1 }
    }
  ]
};

const rightSystem = {
  background: [
    {
      id: "bg-garland-right",
      side: "right",
      assetCategory: "branches.right",
      assetKey: "branchRight02",
      top: "-5%",
      right: "clamp(-150px, -10vw, -80px)",
      width: "clamp(260px, 28vw, 420px)",
      opacity: 0.75,
      sway: { rotDeg: -2.2, xPx: -6, yPx: 4, duration: 8.0, delay: 0.3 }
    },
    {
      id: "bg-shadow-right",
      side: "right",
      assetCategory: "shadows.right",
      assetKey: "shadowRight01",
      top: "0%",
      right: "clamp(-120px, -8vw, -60px)",
      width: "clamp(240px, 25vw, 380px)",
      opacity: 0,
      sway: { rotDeg: -1.5, xPx: -4, yPx: 2, duration: 9.5, delay: 0.5 }
    }
  ],
  midground: [
    {
      id: "mid-bloom-right-top",
      side: "right",
      assetCategory: "flowers.right",
      assetKey: "flowerRight03",
      top: "30%",
      right: "clamp(-100px, -6.5vw, -55px)",
      width: "clamp(210px, 23vw, 330px)",
      rotation: -18,
      opacity: 1,
      sway: { rotDeg: -4.2, xPx: -6, yPx: -4, duration: 5.1, delay: 0.4 }
    },
    {
      id: "mid-leaf-right-mid",
      side: "right",
      assetCategory: "leaves.right",
      assetKey: "leafRight01",
      top: "48%",
      right: "clamp(-90px, -5.5vw, -45px)",
      width: "clamp(190px, 21vw, 300px)",
      rotation: 28,
      opacity: 0,
      sway: { rotDeg: 4.8, xPx: 6, yPx: 5, duration: 5.7, delay: 0.7 }
    },
    {
      id: "mid-cluster-right-low",
      side: "right",
      assetCategory: "flowers.right",
      assetKey: "flowerRight02",
      top: "70%",
      right: "clamp(-95px, -6vw, -50px)",
      width: "clamp(215px, 23.5vw, 340px)",
      rotation: 16,
      opacity: 1,
      sway: { rotDeg: -4.5, xPx: -7, yPx: -5, duration: 5.3, delay: 0.9 }
    }
  ],
  foreground: [
    {
      id: "fg-hero-right-top",
      side: "right",
      assetCategory: "flowers.right",
      assetKey: "flowerRight01",
      top: "clamp(-70px, -5.5vh, -35px)",
      right: "clamp(-125px, -8.5vw, -65px)",
      width: "clamp(290px, 33vw, 490px)",
      rotation: 18,
      opacity: 1,
      sway: { rotDeg: -5.4, xPx: -8, yPx: 6, duration: 5.8, delay: 0.3 }
    },
    {
      id: "fg-leaf-right-top-inward",
      side: "right",
      assetCategory: "leaves.right",
      assetKey: "leafRight02",
      top: "45%",
      right: "clamp(-45px, -2vw, -15px)",
      width: "clamp(185px, 19vw, 290px)",
      rotation: -40,
      opacity: 1,
      sway: { rotDeg: 5.6, xPx: 7, yPx: 5, duration: 5.0, delay: 0.4 }
    },
    {
      id: "fg-hero-right-mid",
      side: "right",
      assetCategory: "flowers.right",
      assetKey: "flowerRight02",
      top: "35%",
      right: "clamp(-135px, -9.5vw, -75px)",
      width: "clamp(280px, 31vw, 460px)",
      rotation: -26,
      opacity: 0,
      sway: { rotDeg: -5.5, xPx: -9, yPx: 6, duration: 5.9, delay: 0.6 }
    },
    {
      id: "fg-leaf-right-mid-inward",
      side: "right",
      assetCategory: "leaves.right",
      assetKey: "leafRight03",
      top: "41%",
      right: "clamp(-35px, -1.5vw, -10px)",
      width: "clamp(175px, 17.5vw, 270px)",
      rotation: 22,
      opacity: 0,
      sway: { rotDeg: 4.8, xPx: 7, yPx: -5, duration: 5.5, delay: 0.8 }
    },
    {
      id: "fg-hero-right-bot",
      side: "right",
      assetCategory: "flowers.right",
      assetKey: "flowerRight04",
      bottom: "clamp(-75px, -6vh, -40px)",
      right: "clamp(-120px, -8vw, -60px)",
      width: "clamp(300px, 34vw, 500px)",
      rotation: 26,
      opacity: 0,
      sway: { rotDeg: 5.5, xPx: 9, yPx: -7, duration: 6.1, delay: 0.4 }
    }
  ]
};

export const botanicalSceneConfig = {
  enabled: true,

  // Separate systems for independent management
  leftSystem,
  rightSystem,

  // Flattened arrays for layer-based rendering with backward compatibility
  backgroundElements: [...leftSystem.background, ...rightSystem.background],
  midgroundElements: [
    ...leftSystem.midground,
    ...rightSystem.midground,
    {
      id: "bird-left-branch",
      side: "left",
      assetCategory: "birds",
      assetKey: "bird01",
      top: "12%",
      left: "6%",
      width: "70px",
      opacity: 0.95,
      sway: { rotDeg: -2.2, xPx: 3, yPx: -3, duration: 4.0, delay: 0 }
    },
    {
      id: "bird-right-branch",
      side: "right",
      assetCategory: "birds",
      assetKey: "bird02",
      top: "14%",
      right: "6%",
      width: "70px",
      opacity: 0.95,
      sway: { rotDeg: 2.2, xPx: -3, yPx: -3, duration: 4.4, delay: 0.5 }
    }
  ],
  foregroundFlowers: [...leftSystem.foreground, ...rightSystem.foreground],

  // Animated Butterflies
  butterflies: [
    {
      id: "bf-1",
      assetCategory: "butterflies",
      assetKey: "butterfly03",
      scale: 1.0,
      start: { x: -5, y: 18 },
      control1: { x: 30, y: 10 },
      control2: { x: 70, y: 32 },
      end: { x: 105, y: 15 },
      duration: 16,
      delay: 1.5
    },
    {
      id: "bf-2",
      assetCategory: "butterflies",
      assetKey: "butterfly04",
      scale: 0.9,
      start: { x: 105, y: 52 },
      control1: { x: 65, y: 68 },
      control2: { x: 25, y: 38 },
      end: { x: -5, y: 58 },
      duration: 20,
      delay: 6
    },
    {
      id: "bf-3",
      assetCategory: "butterflies",
      assetKey: "butterfly01",
      scale: 0.95,
      start: { x: -5, y: 72 },
      control1: { x: 40, y: 82 },
      control2: { x: 80, y: 58 },
      end: { x: 105, y: 78 },
      duration: 18,
      delay: 11
    },
    {
      id: "bf-4",
      assetCategory: "butterflies",
      assetKey: "butterfly02",
      scale: 0.85,
      start: { x: 105, y: 22 },
      control1: { x: 70, y: 38 },
      control2: { x: 30, y: 18 },
      end: { x: -5, y: 32 },
      duration: 22,
      delay: 16
    }
  ],

  particles: {
    count: 45,
    color: "#E9B8C4",
    glowColor: "#C5A059"
  }
};
