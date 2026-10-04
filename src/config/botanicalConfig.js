// Configuration-driven Persistent Botanical Environment System
// MAIN CONTROL PANEL FOR FOUR-CORNER LUXURY WEDDING BOTANICAL COMPOSITION
//
// Rules enforced:
// 1. PNG ONLY for flowers, leaves, branches.
// 2. Strict left/right asset separation (no CSS mirroring / scaleX(-1)).
// 3. Four independent corners (topLeft, topRight, bottomLeft, bottomRight).
// 4. Center 60% remains clean for wedding content.
// 5. Visual proportion: ~20% corner clusters, leaving the center safe area completely open.
// 6. Every single element is independently configurable:
//    - position (top, bottom, left, right)
//    - size (width, height)
//    - rotation (first-class property in degrees)
//    - transparency (opacity)
//    - layering (zIndex)
//    - gentle wind sway (rotDeg, xPx, yPx, duration, delay)

export const corners = {
  // =========================================================================
  // 1. TOP-LEFT CORNER COMPOSITION
  // =========================================================================
  topLeft: {
    branches: [
      {
        id: "tl-branch-01",
        assetCategory: "branches.left",
        assetKey: "branchTopLeft",
        top: "clamp(-70px, -7vh, -35px)",
        left: "clamp(-75px, -7vw, -40px)",
        width: "clamp(170px, 32vw, 300px)",
        height: "auto",
        rotation: 18,
        opacity: 0.75,
        zIndex: 2,
        sway: { rotDeg: 2.2, xPx: 4, yPx: 3, duration: 7.2, delay: 0.1 },
      },
    ],
    leaves: [
      {
        id: "tl-leaf-01",
        assetCategory: "leaves.left",
        assetKey: "leafLeft01",
        top: "clamp(5px, 1vh, 25px)",
        left: "clamp(30px, 4vw, 70px)",
        width: "clamp(95px, 18vw, 155px)",
        height: "auto",
        rotation: 38,
        opacity: 0.85,
        zIndex: 5,
        sway: { rotDeg: -4.0, xPx: -4, yPx: 3, duration: 5.6, delay: 0.3 },
      },
      {
        id: "tl-leaf-02",
        assetCategory: "leaves.left",
        assetKey: "leafLeft02",
        top: "clamp(45px, 5vh, 90px)",
        left: "clamp(-25px, -3vw, -5px)",
        width: "clamp(85px, 16vw, 140px)",
        height: "auto",
        rotation: 68,
        opacity: 0.8,
        zIndex: 6,
        sway: { rotDeg: -4.5, xPx: -5, yPx: 4, duration: 5.2, delay: 0.6 },
      },
    ],
    flowers: [
      {
        id: "tl-hero-flower",
        assetCategory: "flowers.left",
        assetKey: "flowerLeft01",
        top: "clamp(-60px, -6vh, -30px)",
        left: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 40vw, 320px)",
        height: "auto",
        rotation: -16,
        opacity: 1,
        zIndex: 15,
        sway: { rotDeg: 4.8, xPx: 6, yPx: 5, duration: 6.0, delay: 0 },
      },
      {
        id: "tl-filler-flower",
        assetCategory: "flowers.left",
        assetKey: "flowerLeft03",
        top: "clamp(25px, 3.5vh, 60px)",
        left: "clamp(20px, 3vw, 55px)",
        width: "clamp(105px, 20vw, 170px)",
        height: "auto",
        rotation: -18,
        opacity: 0.95,
        zIndex: 12,
        sway: { rotDeg: -3.8, xPx: -4, yPx: 3, duration: 5.4, delay: 0.4 },
      },
    ],
    shadows: [
      {
        id: "tl-shadow-01",
        assetCategory: "shadows.left",
        assetKey: "shadowLeft01",
        top: "clamp(-60px, -6vh, -30px)",
        left: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 34vw, 300px)",
        height: "auto",
        rotation: 0,
        opacity: 0.35,
        zIndex: 1,
        sway: { rotDeg: 1.5, xPx: 3, yPx: 2, duration: 8.5, delay: 0 },
      },
    ],
  },

  // =========================================================================
  // 2. TOP-RIGHT CORNER COMPOSITION
  // =========================================================================
  topRight: {
    branches: [
      {
        id: "tr-branch-01",
        assetCategory: "branches.right",
        assetKey: "branchTopRight",
        top: "clamp(-70px, -7vh, -35px)",
        right: "clamp(-75px, -7vw, -40px)",
        width: "clamp(170px, 32vw, 300px)",
        height: "auto",
        rotation: -18,
        opacity: 0.75,
        zIndex: 2,
        sway: { rotDeg: -2.2, xPx: -4, yPx: 3, duration: 7.4, delay: 0.2 },
      },
    ],
    leaves: [
      {
        id: "tr-leaf-01",
        assetCategory: "leaves.right",
        assetKey: "leafRight01",
        top: "clamp(5px, 1vh, 25px)",
        right: "clamp(30px, 4vw, 70px)",
        width: "clamp(95px, 18vw, 155px)",
        height: "auto",
        rotation: -36,
        opacity: 0.85,
        zIndex: 5,
        sway: { rotDeg: 4.0, xPx: 4, yPx: 3, duration: 5.7, delay: 0.4 },
      },
      {
        id: "tr-leaf-02",
        assetCategory: "leaves.right",
        assetKey: "leafRight02",
        top: "clamp(45px, 5vh, 90px)",
        right: "clamp(-25px, -3vw, -5px)",
        width: "clamp(85px, 16vw, 140px)",
        height: "auto",
        rotation: -65,
        opacity: 0.8,
        zIndex: 6,
        sway: { rotDeg: 4.5, xPx: 5, yPx: 4, duration: 5.4, delay: 0.7 },
      },
    ],
    flowers: [
      {
        id: "tr-hero-flower",
        assetCategory: "flowers.right",
        assetKey: "flowerRight04",
        top: "clamp(-60px, -7vh, -30px)",
        right: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 34vw, 320px)",
        height: "auto",
        rotation: -18,
        opacity: 1,
        zIndex: 15,
        sway: { rotDeg: -4.8, xPx: -6, yPx: 5, duration: 6.2, delay: 0.1 },
      },
      {
        id: "tr-filler-flower",
        assetCategory: "flowers.right",
        assetKey: "flowerRight03",
        top: "clamp(25px, 3.5vh, 60px)",
        right: "clamp(20px, 3vw, 55px)",
        width: "clamp(105px, 20vw, 170px)",
        height: "auto",
        rotation: 20,
        opacity: 0.95,
        zIndex: 12,
        sway: { rotDeg: 3.8, xPx: 4, yPx: 3, duration: 5.5, delay: 0.5 },
      },
    ],
    shadows: [
      {
        id: "tr-shadow-01",
        assetCategory: "shadows.right",
        assetKey: "shadowRight01",
        top: "clamp(-60px, -6vh, -30px)",
        right: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 34vw, 300px)",
        height: "auto",
        rotation: 0,
        opacity: 0.35,
        zIndex: 1,
        sway: { rotDeg: -1.5, xPx: -3, yPx: 2, duration: 8.7, delay: 0.1 },
      },
    ],
  },

  // =========================================================================
  // 3. BOTTOM-LEFT CORNER COMPOSITION
  // =========================================================================
  bottomLeft: {
    branches: [
      {
        id: "bl-branch-01",
        assetCategory: "branches.left",
        assetKey: "branchLeft02",
        bottom: "clamp(-65px, -6.5vh, -30px)",
        left: "clamp(-65px, -6.5vw, -35px)",
        width: "clamp(155px, 29vw, 270px)",
        height: "auto",
        rotation: 22,
        opacity: 0.75,
        zIndex: 2,
        sway: { rotDeg: -2.2, xPx: -4, yPx: -3, duration: 7.1, delay: 0.3 },
      },
    ],
    leaves: [
      {
        id: "bl-leaf-01",
        assetCategory: "leaves.left",
        assetKey: "leafLeft03",
        bottom: "clamp(5px, 1vh, 25px)",
        left: "clamp(30px, 4vw, 70px)",
        width: "clamp(95px, 18vw, 155px)",
        height: "auto",
        rotation: -40,
        opacity: 0.85,
        zIndex: 5,
        sway: { rotDeg: 4.2, xPx: 4, yPx: -3, duration: 5.7, delay: 0.5 },
      },
      {
        id: "bl-leaf-02",
        assetCategory: "leaves.left",
        assetKey: "leafLeft01",
        bottom: "clamp(45px, 5vh, 90px)",
        left: "clamp(-25px, -3vw, -5px)",
        width: "clamp(85px, 16vw, 140px)",
        height: "auto",
        rotation: -70,
        opacity: 0.8,
        zIndex: 6,
        sway: { rotDeg: 4.4, xPx: 5, yPx: -4, duration: 5.4, delay: 0.7 },
      },
    ],
    flowers: [
      {
        id: "bl-hero-flower",
        assetCategory: "flowers.left",
        assetKey: "flowerLeft04",
        bottom: "clamp(-60px, -6vh, -30px)",
        left: "clamp(-60px, -6vw, -30px)",
        width: "clamp(175px, 33vw, 310px)",
        height: "auto",
        rotation: -26,
        opacity: 1,
        zIndex: 15,
        sway: { rotDeg: -5.0, xPx: -6, yPx: -5, duration: 6.4, delay: 0.2 },
      },
      {
        id: "bl-filler-flower",
        assetCategory: "flowers.left",
        assetKey: "flowerLeft02",
        bottom: "clamp(25px, 3.5vh, 60px)",
        left: "clamp(20px, 3vw, 55px)",
        width: "clamp(105px, 20vw, 170px)",
        height: "auto",
        rotation: 22,
        opacity: 0.95,
        zIndex: 12,
        sway: { rotDeg: 3.8, xPx: 4, yPx: -3, duration: 5.6, delay: 0.3 },
      },
    ],
    shadows: [
      {
        id: "bl-shadow-01",
        assetCategory: "shadows.left",
        assetKey: "shadowLeft02",
        bottom: "clamp(-60px, -6vh, -30px)",
        left: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 34vw, 300px)",
        height: "auto",
        rotation: 0,
        opacity: 0.35,
        zIndex: 1,
        sway: { rotDeg: -1.5, xPx: -3, yPx: -2, duration: 8.3, delay: 0.2 },
      },
    ],
  },

  // =========================================================================
  // 4. BOTTOM-RIGHT CORNER COMPOSITION
  // =========================================================================
  bottomRight: {
    branches: [
      {
        id: "br-branch-01",
        assetCategory: "branches.right",
        assetKey: "branchRight01",
        bottom: "clamp(-65px, -6.5vh, -30px)",
        right: "clamp(-65px, -6.5vw, -35px)",
        width: "clamp(155px, 29vw, 270px)",
        height: "auto",
        rotation: -22,
        opacity: 0.75,
        zIndex: 2,
        sway: { rotDeg: 2.2, xPx: 4, yPx: -3, duration: 7.3, delay: 0.4 },
      },
    ],
    leaves: [
      {
        id: "br-leaf-01",
        assetCategory: "leaves.right",
        assetKey: "leafRight03",
        bottom: "clamp(5px, 1vh, 25px)",
        right: "clamp(30px, 4vw, 70px)",
        width: "clamp(95px, 18vw, 155px)",
        height: "auto",
        rotation: 42,
        opacity: 0.85,
        zIndex: 5,
        sway: { rotDeg: -4.2, xPx: -4, yPx: -3, duration: 5.8, delay: 0.6 },
      },
      {
        id: "br-leaf-02",
        assetCategory: "leaves.right",
        assetKey: "leafRight02",
        bottom: "clamp(45px, 5vh, 90px)",
        right: "clamp(-25px, -3vw, -5px)",
        width: "clamp(85px, 16vw, 140px)",
        height: "auto",
        rotation: 70,
        opacity: 0.8,
        zIndex: 6,
        sway: { rotDeg: -4.4, xPx: -5, yPx: -4, duration: 5.5, delay: 0.8 },
      },
    ],
    flowers: [
      {
        id: "br-hero-flower",
        assetCategory: "flowers.right",
        assetKey: "flowerRight02",
        bottom: "clamp(-60px, -6vh, -30px)",
        right: "clamp(-60px, -6vw, -30px)",
        width: "clamp(175px, 33vw, 310px)",
        height: "auto",
        rotation: 22,
        opacity: 1,
        zIndex: 15,
        sway: { rotDeg: 5.0, xPx: 6, yPx: -5, duration: 6.5, delay: 0.3 },
      },
      {
        id: "br-filler-flower",
        assetCategory: "flowers.right",
        assetKey: "flowerRight03",
        bottom: "clamp(25px, 3.5vh, 60px)",
        right: "clamp(20px, 3vw, 55px)",
        width: "clamp(105px, 20vw, 170px)",
        height: "auto",
        rotation: -20,
        opacity: 0.95,
        zIndex: 12,
        sway: { rotDeg: -3.8, xPx: -4, yPx: -3, duration: 5.3, delay: 0.5 },
      },
    ],
    shadows: [
      {
        id: "br-shadow-01",
        assetCategory: "shadows.right",
        assetKey: "shadowRight02",
        bottom: "clamp(-60px, -6vh, -30px)",
        right: "clamp(-60px, -6vw, -30px)",
        width: "clamp(180px, 34vw, 300px)",
        height: "auto",
        rotation: 0,
        opacity: 0.35,
        zIndex: 1,
        sway: { rotDeg: 1.5, xPx: 3, yPx: -2, duration: 8.8, delay: 0.3 },
      },
    ],
  },
};

/**
 * Returns a flattened array of all configured botanical elements across all 4 corners,
 * sorted by zIndex ascending so they naturally layer from background to foreground.
 */
export function getAllCornerElements() {
  const elements = [];
  Object.entries(corners).forEach(([cornerName, groups]) => {
    Object.entries(groups).forEach(([groupName, items]) => {
      if (Array.isArray(items)) {
        items.forEach((item) => {
          elements.push({
            ...item,
            corner: cornerName,
            group: groupName,
          });
        });
      }
    });
  });
  return elements.sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));
}

export const botanicalSceneConfig = {
  enabled: true,

  // Independent 4-corner configuration
  corners,

  // Helper accessor for all botanical elements
  get allElements() {
    return getAllCornerElements();
  },

  // Backward compatibility accessors
  get backgroundElements() {
    return getAllCornerElements().filter((el) => (el.zIndex || 0) < 5);
  },
  get midgroundElements() {
    return [
      ...getAllCornerElements().filter(
        (el) => (el.zIndex || 0) >= 5 && (el.zIndex || 0) < 14,
      ),
      {
        id: "bird-left-branch",
        side: "left",
        corner: "topLeft",
        assetCategory: "birds",
        assetKey: "bird01",
        top: "14%",
        left: "3%",
        width: "55px",
        height: "auto",
        rotation: 0,
        opacity: 0.95,
        zIndex: 13,
        sway: { rotDeg: -2.2, xPx: 3, yPx: -3, duration: 4.0, delay: 0 },
      },
      {
        id: "bird-right-branch",
        side: "right",
        corner: "topRight",
        assetCategory: "birds",
        assetKey: "bird02",
        top: "14%",
        right: "3%",
        width: "55px",
        height: "auto",
        rotation: 0,
        opacity: 0.95,
        zIndex: 13,
        sway: { rotDeg: 2.2, xPx: -3, yPx: -3, duration: 4.4, delay: 0.5 },
      },
    ];
  },
  get foregroundFlowers() {
    return getAllCornerElements().filter((el) => (el.zIndex || 0) >= 14);
  },

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
      delay: 1.5,
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
      delay: 6,
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
      delay: 11,
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
      delay: 16,
    },
  ],

  particles: {
    count: 45,
    color: "#E9B8C4",
    glowColor: "#C5A059",
  },
};

export default botanicalSceneConfig;
