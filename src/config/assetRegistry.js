// Comprehensive Asset Registry
// Maps all existing visual assets in src/assets/ to structured categories and provides getAssetUrl lookup helper.

import flowerLeft01Png from '../assets/wedding/flowers/left/flower-left-01.png';
import flowerLeft02Png from '../assets/wedding/flowers/left/flower-left-02.png';
import flowerLeft03Png from '../assets/wedding/flowers/left/flower-left-03.png';
import flowerLeft04Png from '../assets/wedding/flowers/left/flower-left-04.png';

import flowerRight01Png from '../assets/wedding/flowers/right/flower-right-01.png';
import flowerRight02Png from '../assets/wedding/flowers/right/flower-right-02.png';
import flowerRight03Png from '../assets/wedding/flowers/right/flower-right-03.png';
import flowerRight04Png from '../assets/wedding/flowers/right/flower-right-04.png';

import leaf01Png from '../assets/wedding/leaves/leaf-01.png';
import leaf02Png from '../assets/wedding/leaves/leaf-02.png';
import leaf03Png from '../assets/wedding/leaves/leaf-03.png';
import leaf04Png from '../assets/wedding/leaves/leaf-04.png';
import leafLeft01Png from '../assets/wedding/leaves/left/leaf-left-01.png';
import leafLeft02Png from '../assets/wedding/leaves/left/leaf-left-02.png';
import leafLeft03Png from '../assets/wedding/leaves/left/leaf-left-03.png';
import leafRight01Png from '../assets/wedding/leaves/right/leaf-right-01.png';
import leafRight02Png from '../assets/wedding/leaves/right/leaf-right-02.png';
import leafRight03Png from '../assets/wedding/leaves/right/leaf-right-03.png';

import branchLeftPng from '../assets/wedding/branches/branch-left.png';
import branchRightPng from '../assets/wedding/branches/branch-right.png';
import branchSideLeftGarlandPng from '../assets/wedding/branches/branch-side-left-garland.png';
import branchSideRightGarlandPng from '../assets/wedding/branches/branch-side-right-garland.png';
import branchTopLeftPng from '../assets/wedding/branches/branch-top-left.png';
import branchTopRightPng from '../assets/wedding/branches/branch-top-right.png';
import branchLeft01Png from '../assets/wedding/branches/left/branch-left-01.png';
import branchLeft02Png from '../assets/wedding/branches/left/branch-left-02.png';
import branchRight01Png from '../assets/wedding/branches/right/branch-right-01.png';
import branchRight02Png from '../assets/wedding/branches/right/branch-right-02.png';

import butterfly01Svg from '../assets/wedding/butterflies/butterfly-01.svg';
import butterfly02Svg from '../assets/wedding/butterflies/butterfly-02.svg';
import butterfly03Svg from '../assets/wedding/butterflies/butterfly-03.svg';
import butterfly04Svg from '../assets/wedding/butterflies/butterfly-04.svg';

import bird01Svg from '../assets/wedding/birds/bird-01.svg';
import bird02Svg from '../assets/wedding/birds/bird-02.svg';

import bismillahSvg from '../assets/wedding/islamic/bismillah.svg';

import cornerOrnamentSvg from '../assets/wedding/ornaments/corner-ornament.svg';
import dividerOrnamentSvg from '../assets/wedding/ornaments/divider-ornament.svg';

import waxSealPng from '../assets/wedding/seal/wax-seal.png';

import floralShadowLeftSvg from '../assets/wedding/shadows/floral-shadow-left.svg';
import floralShadowRightSvg from '../assets/wedding/shadows/floral-shadow-right.svg';
import shadowLeft01Svg from '../assets/wedding/shadows/left/shadow-left-01.svg';
import shadowLeft02Svg from '../assets/wedding/shadows/left/shadow-left-02.svg';
import shadowRight01Svg from '../assets/wedding/shadows/right/shadow-right-01.svg';
import shadowRight02Svg from '../assets/wedding/shadows/right/shadow-right-02.svg';
// 
import gateFlowerLeftPng from '../assets/wedding/gate/flowers/left/flower-gate-left.png';
import gateFlowerRightPng from '../assets/wedding/gate/flowers/right/flower-gate-right.png';

export const assets = {
  flowers: {
    left: {
      flowerLeft01: flowerLeft01Png,
      flowerLeft02: flowerLeft02Png,
      flowerLeft03: flowerLeft03Png,
      flowerLeft04: flowerLeft04Png,
    },
    right: {
      flowerRight01: flowerRight01Png,
      flowerRight02: flowerRight02Png,
      flowerRight03: flowerRight03Png,
      flowerRight04: flowerRight04Png,
    },
    flower01: flowerLeft01Png,
    flower02: flowerRight01Png,
  },
  leaves: {
    left: {
      leafLeft01: leafLeft01Png,
      leafLeft02: leafLeft02Png,
      leafLeft03: leafLeft03Png,
    },
    right: {
      leafRight01: leafRight01Png,
      leafRight02: leafRight02Png,
      leafRight03: leafRight03Png,
    },
    leaf01: leaf01Png,
    leaf02: leaf02Png,
    leaf03: leaf03Png,
    leaf04: leaf04Png,
  },
  branches: {
    left: {
      branchLeft01: branchLeft01Png,
      branchLeft02: branchLeft02Png,
    },
    right: {
      branchRight01: branchRight01Png,
      branchRight02: branchRight02Png,
    },
    branchLeft: branchLeftPng,
    branchRight: branchRightPng,
    sideLeftGarland: branchSideLeftGarlandPng,
    sideRightGarland: branchSideRightGarlandPng,
    topLeft: branchTopLeftPng,
    topRight: branchTopRightPng,
  },
  butterflies: {
    butterfly01: butterfly01Svg,
    butterfly02: butterfly02Svg,
    butterfly03: butterfly03Svg,
    butterfly04: butterfly04Svg,
  },
  birds: {
    bird01: bird01Svg,
    bird02: bird02Svg,
  },
  shadows: {
    left: {
      shadowLeft01: shadowLeft01Svg,
      shadowLeft02: shadowLeft02Svg,
    },
    right: {
      shadowRight01: shadowRight01Svg,
      shadowRight02: shadowRight02Svg,
    },
    shadowLeft: floralShadowLeftSvg,
    shadowRight: floralShadowRightSvg,
  },
  islamic: {
    bismillah: bismillahSvg,
  },
  ornaments: {
    cornerOrnament: cornerOrnamentSvg,
    dividerOrnament: dividerOrnamentSvg,
  },
  seal: {
    waxSeal: waxSealPng,
  },
  invitationGate: {
    flowers: {
      left: {
        flowerLeft: gateFlowerLeftPng,
        left: gateFlowerLeftPng,
      },
      right: {
        flowerRight: gateFlowerRightPng,
        right: gateFlowerRightPng,
      },
    },
    ornaments: {
      cornerOrnament: cornerOrnamentSvg,
    },
    seal: {
      waxSeal: waxSealPng,
    },
  },
  gate: {
    flowers: {
      left: {
        flowerLeft: gateFlowerLeftPng,
        left: gateFlowerLeftPng,
      },
      right: {
        flowerRight: gateFlowerRightPng,
        right: gateFlowerRightPng,
      },
    },
  },
};

/**
 * Retrieves an asset URL given a category path (e.g. "flowers.left", "ornaments") and asset key.
 * Supports dot notation for nested categories and robust fallback matching.
 */
export function getAssetUrl(category, key) {
  if (!category) return null;

  const parts = typeof category === "string" ? category.split(".") : [category];
  let curr = assets;

  for (const part of parts) {
    if (curr && typeof curr === "object" && part in curr) {
      curr = curr[part];
    } else {
      curr = null;
      break;
    }
  }

  if (curr !== null && curr !== undefined) {
    if (typeof curr === "string") {
      return curr;
    }
    if (key && typeof curr === "object" && key in curr) {
      const val = curr[key];
      if (typeof val === "string") return val;
      if (typeof val === "object" && val !== null) {
        return Object.values(val)[0] || null;
      }
    }
    if (typeof curr === "object") {
      if (Array.isArray(curr) && curr.length > 0) {
        return curr[0];
      }
      const values = Object.values(curr);
      if (values.length > 0) {
        if (typeof key === "number" && values[key]) {
          const v = values[key];
          return typeof v === "string"
            ? v
            : typeof v === "object"
              ? Object.values(v)[0]
              : null;
        }
        const firstVal = values[0];
        if (typeof firstVal === "string") return firstVal;
        if (typeof firstVal === "object" && firstVal !== null) {
          return Object.values(firstVal)[0] || null;
        }
      }
    }
  }

  // Fallback lookup if category was not dot-notation but key exists in sub-objects
  if (key && assets[category]) {
    const cat = assets[category];
    if (typeof cat === "object") {
      if (cat.left && key in cat.left) return cat.left[key];
      if (cat.right && key in cat.right) return cat.right[key];
    }
  }

  return null;
}

export default assets;
