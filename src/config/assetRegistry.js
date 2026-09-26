// Asset Registry for Wedding Invitation
// Centralizes all visual asset references so that substituting an SVG/Image asset
// or changing filenames requires zero modification to React components.

import flower01 from "../assets/wedding/flowers/flower-01.SVG";
import flower02 from "../assets/wedding/flowers/flower-02.png";
import flower03 from "../assets/wedding/flowers/flower-03.png";

import leaf01 from "../assets/wedding/leaves/leaf-01.svg";
import leaf02 from "../assets/wedding/leaves/leaf-02.svg";

import branchLeft from "../assets/wedding/branches/branch-left.svg";
import branchRight from "../assets/wedding/branches/branch-right.svg";

import butterfly01 from "../assets/wedding/butterflies/butterfly-01.svg";
import butterfly02 from "../assets/wedding/butterflies/butterfly-02.svg";

import bird01 from "../assets/wedding/birds/bird-01.svg";

import bismillah from "../assets/wedding/islamic/bismillah.svg";
import waxSeal from "../assets/wedding/seal/wax-seal.png";
import dividerOrnament from "../assets/wedding/ornaments/divider-ornament.svg";
import cornerOrnament from "../assets/wedding/ornaments/corner-ornament.svg";

export const ASSET_REGISTRY = {
  flowers: {
    flower01,
    flower02,
    flower03,
  },
  leaves: {
    leaf01,
    leaf02,
  },
  branches: {
    branchLeft,
    branchRight,
  },
  butterflies: {
    butterfly01,
    butterfly02,
  },
  birds: {
    bird01,
  },
  islamic: {
    bismillah,
  },
  seal: {
    waxSeal,
  },
  ornaments: {
    dividerOrnament,
    cornerOrnament,
  },
};

/**
 * Helper to retrieve an asset URL by category and key with optional fallback.
 */
export const getAssetUrl = (category, key, fallbackKey = null) => {
  if (ASSET_REGISTRY[category] && ASSET_REGISTRY[category][key]) {
    return ASSET_REGISTRY[category][key];
  }
  if (
    fallbackKey &&
    ASSET_REGISTRY[category] &&
    ASSET_REGISTRY[category][fallbackKey]
  ) {
    return ASSET_REGISTRY[category][fallbackKey];
  }
  return null;
};
