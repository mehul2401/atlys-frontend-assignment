"use client";

import Image from "next/image";
import type { CountryAccess } from "@/data/visaPage";
import type { CardGeometry } from "@/hooks/useCardGeometry";
import { getTransformForIndex } from "@/lib/stack3d";

type CountryCardProps = {
  country: CountryAccess;
  positionIndex: number;
  geometry: CardGeometry;
};

export function CountryCard({
  country,
  positionIndex,
  geometry,
}: CountryCardProps) {
  const { transform, zIndex } = getTransformForIndex(positionIndex, geometry);
  const { cardWidth, cardHeight, borderRadius } = geometry;

  return (
    <div
      className="absolute transition-all duration-300 ease-out"
      style={{
        transform,
        zIndex,
        transformOrigin: "center center",
      }}
    >
      <div
        className="pointer-events-none relative overflow-hidden shadow-xl"
        style={{
          width: cardWidth,
          height: cardHeight,
          borderRadius,
        }}
      >
        <Image
          src={country.imageUrl}
          alt={country.name}
          width={cardWidth}
          height={cardHeight}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-[14px] backdrop-brightness-50 backdrop-saturate-[1]"
          style={{
            maskImage: "linear-gradient(transparent 0%, white 110%)",
            borderRadius,
          }}
        />
        <div className="absolute bottom-0 left-0 w-full py-3 text-center">
          <span className="font-denton text-xs font-bold uppercase tracking-wider text-white md:text-sm">
            {country.name}
          </span>
        </div>
      </div>
    </div>
  );
}

