"use client";

import { useEffect, useMemo, useState } from "react";

const MAX_CARD_WIDTH = 200;
const MIN_CARD_WIDTH = 100;
const CARD_ASPECT = 320 / 200;
const GAP_RATIO = 160 / 200;
const Z_RATIO = 40 / 200;
const ROTATE_RATIO = 22 / 200;
const RADIUS_RATIO = 23 / 200;
const SIDE_MARGIN = 24;

export type CardGeometry = {
  cardWidth: number;
  cardHeight: number;
  gap: number;
  zStep: number;
  rotateStep: number;
  borderRadius: number;
};

export function useCardGeometry(count: number): CardGeometry {
  const [cardWidth, setCardWidth] = useState(MAX_CARD_WIDTH);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const available = vw - 2 * SIDE_MARGIN;
      const w = available / (1 + (count - 1) * GAP_RATIO);
      setCardWidth(
        Math.min(MAX_CARD_WIDTH, Math.max(MIN_CARD_WIDTH, Math.round(w))),
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [count]);

  return useMemo(
    () => ({
      cardWidth,
      cardHeight: Math.round(cardWidth * CARD_ASPECT),
      gap: Math.round(cardWidth * GAP_RATIO),
      zStep: Math.round(cardWidth * Z_RATIO),
      rotateStep: cardWidth * ROTATE_RATIO,
      borderRadius: Math.round(cardWidth * RADIUS_RATIO),
    }),
    [cardWidth],
  );
}

