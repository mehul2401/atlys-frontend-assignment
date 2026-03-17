import type { CardGeometry } from "@/hooks/useCardGeometry";

export function getTransformForIndex(
  positionIndex: number,
  geometry: CardGeometry,
  baseZIndex = 10,
) {
  const translateX = positionIndex * geometry.gap;
  const translateZ = -Math.abs(positionIndex) * geometry.zStep;
  const rotateY = -positionIndex * geometry.rotateStep;
  const zIndex = baseZIndex - Math.abs(positionIndex);

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
    zIndex,
  };
}

