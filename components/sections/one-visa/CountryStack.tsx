"use client";

import type { CountryAccess } from "@/data/visaPage";
import type { CardGeometry } from "@/hooks/useCardGeometry";
import { CountryCard } from "@/components/sections/one-visa/CountryCard";

type CountryStackProps = {
  countries: CountryAccess[];
  geometry: CardGeometry;
};

export function CountryStack({ countries, geometry }: CountryStackProps) {
  const n = countries.length;
  const centerIndex = Math.floor(n / 2);
  const positionIndices = countries.map((_, i) => i - centerIndex);

  return (
    <>
      {countries.map((country, i) => (
        <CountryCard
          key={country.id}
          country={country}
          positionIndex={positionIndices[i]}
          geometry={geometry}
        />
      ))}
    </>
  );
}

