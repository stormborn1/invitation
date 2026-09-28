// Comprehensive Asset Registry
// Maps all existing visual assets in src/assets/ to structured categories and provides getAssetUrl lookup helper.

import flowerLeft01Svg from '../assets/wedding/flowers/left/flower-left-01.svg';
import flowerLeft02Png from "../assets/wedding/flowers/left/flower-left-02.png";
import flowerLeft02Svg from '../assets/wedding/flowers/left/flower-left-02.svg';
import flowerLeft03Png from "../assets/wedding/flowers/left/flower-left-03.png";
import flowerLeft03Svg from '../assets/wedding/flowers/left/flower-left-03.svg';
import flowerLeft04Png from "../assets/wedding/flowers/left/flower-left-04.png";
import flowerLeft04Svg from '../assets/wedding/flowers/left/flower-left-04.svg';

import flowerRight01Jpg from '../assets/wedding/flowers/right/flower-right-01.jpg';
import flowerRight01Png from "../assets/wedding/flowers/right/flower-right-01.png";
import flowerRight01Svg from '../assets/wedding/flowers/right/flower-right-01.svg';
import flowerRight02Png from "../assets/wedding/flowers/right/flower-right-02.png";
import flowerRight02Svg from '../assets/wedding/flowers/right/flower-right-02.svg';
import flowerRight03Svg from "../assets/wedding/flowers/right/flower-right-03.png";
import flowerRight04Svg from '../assets/wedding/flowers/right/flower-right-04.svg';

import leaf01Svg from "../assets/wedding/leaves/leaf-01.png";
import leaf02Svg from "../assets/wedding/leaves/leaf-02.png";
import leaf03Svg from "../assets/wedding/leaves/leaf-03.svg";
import leaf04Svg from "../assets/wedding/leaves/leaf-04.svg";
import leafLeft01Svg from "../assets/wedding/leaves/left/leaf-left-01.svg";
import leafLeft02Svg from "../assets/wedding/leaves/left/leaf-left-02.svg";
import leafLeft03Svg from "../assets/wedding/leaves/left/leaf-left-03.svg";
import leafRight01Png from "../assets/wedding/leaves/right/leaf-right-01.png";
import leafRight01Svg from "../assets/wedding/leaves/right/leaf-right-01.svg";
import leafRight02Svg from "../assets/wedding/leaves/right/leaf-right-02.svg";
import leafRight03Svg from "../assets/wedding/leaves/right/leaf-right-03.svg";

import branchLeftSvg from "../assets/wedding/branches/branch-left.svg";
import branchRightSvg from "../assets/wedding/branches/branch-right.svg";
import branchSideLeftGarlandSvg from "../assets/wedding/branches/branch-side-left-garland.svg";
import branchSideRightGarlandSvg from "../assets/wedding/branches/branch-side-right-garland.svg";
import branchTopLeftSvg from "../assets/wedding/branches/branch-top-left.svg";
import branchTopRightSvg from "../assets/wedding/branches/branch-top-right.svg";
import branchLeft01Svg from "../assets/wedding/branches/left/branch-left-01.svg";
import branchLeft02Svg from "../assets/wedding/branches/left/branch-left-02.png";
import branchRight01Svg from "../assets/wedding/branches/right/branch-right-01.svg";
import branchRight02Svg from "../assets/wedding/branches/right/branch-right-02.svg";

import butterfly01Svg from "../assets/wedding/butterflies/butterfly-01.svg";
import butterfly02Svg from "../assets/wedding/butterflies/butterfly-02.svg";
import butterfly03Svg from "../assets/wedding/butterflies/butterfly-03.svg";
import butterfly04Svg from "../assets/wedding/butterflies/butterfly-04.svg";

import bird01Svg from "../assets/wedding/birds/bird-01.svg";
import bird02Svg from "../assets/wedding/birds/bird-02.svg";

import bismillahSvg from "../assets/wedding/islamic/bismillah.svg";

import cornerOrnamentSvg from "../assets/wedding/ornaments/corner-ornament.svg";
import dividerOrnamentSvg from "../assets/wedding/ornaments/divider-ornament.svg";

import waxSealPng from "../assets/wedding/seal/wax-seal.png";

import floralShadowLeftSvg from "../assets/wedding/shadows/floral-shadow-left.svg";
import floralShadowRightSvg from "../assets/wedding/shadows/floral-shadow-right.svg";
import shadowLeft01Svg from "../assets/wedding/shadows/left/shadow-left-01.svg";
import shadowLeft02Svg from "../assets/wedding/shadows/left/shadow-left-02.svg";
import shadowRight01Svg from "../assets/wedding/shadows/right/shadow-right-01.svg";
import shadowRight02Svg from "../assets/wedding/shadows/right/shadow-right-02.svg";

import gateFlowerLeftPng from "../assets/wedding/gate/flowers/left/flower-gate-left.png";
import gateFlowerRightPng from "../assets/wedding/gate/flowers/right/flower-gate-right.png";

export const assets = {
  flowers: {
    left: {
      flowerLeft01: flowerLeft01Svg,
      flowerLeft02: flowerLeft02Png,
      flowerLeft03: flowerLeft03Png,
      flowerLeft04: flowerLeft04Png,
      flowerLeft02Svg,
      flowerLeft03Svg,
      flowerLeft04Svg,
    },
    right: {
      flowerRight01: flowerRight01Png,
      flowerRight02: flowerRight02Png,
      flowerRight03: flowerRight03Svg,
      flowerRight04: flowerRight04Svg,
      flowerRight01Jpg,
      flowerRight01Svg,
      flowerRight02Svg,
    },
    flower01: flowerLeft01Svg,
    flower02: flowerRight01Png,
  },
  leaves: {
    left: {
      leafLeft01: leafLeft01Svg,
      leafLeft02: leafLeft02Svg,
      leafLeft03: leafLeft03Svg,
    },
    right: {
      leafRight01: leafRight01Png,
      leafRight02: leafRight02Svg,
      leafRight03: leafRight03Svg,
      leafRight01Svg,
    },
    leaf01: leaf01Svg,
    leaf02: leaf02Svg,
    leaf03: leaf03Svg,
    leaf04: leaf04Svg,
  },
  branches: {
    left: {
      branchLeft01: branchLeft01Svg,
      branchLeft02: branchLeft02Svg,
    },
    right: {
      branchRight01: branchRight01Svg,
      branchRight02: branchRight02Svg,
    },
    branchLeft: branchLeftSvg,
    branchRight: branchRightSvg,
    sideLeftGarland: branchSideLeftGarlandSvg,
    sideRightGarland: branchSideRightGarlandSvg,
    topLeft: branchTopLeftSvg,
    topRight: branchTopRightSvg,
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
