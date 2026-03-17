"use client";

import { useState } from "react";
import Image from "next/image";
import { heroCopy, visaStats } from "@/data/visaInfo";
import { HeroStatChip } from "@/components/ui/HeroStatChip";
import { Button } from "@/components/ui/Button";
import { HeroCountriesModal } from "@/components/sections/hero/HeroCountriesModal";

const HERO_IMAGE_URL =
  "https://media.atlys.com/b2c/clp/version-3/banner-images/desktop/FR.avif?tr=w-2560,q-80,f-avif&v=8";

export const HeroBanner = () => {
  const [showCountries, setShowCountries] = useState(false);

  return (
    <section
      id="overview"
      className="relative w-full scroll-mt-14 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Image
        src={HERO_IMAGE_URL}
        alt="France visa hero background"
        fill
        sizes="100vw"
        className="z-0 object-cover object-center"
        priority
        fetchPriority="high"
      />

      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-20 flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[480px] md:py-24">
        <h1
          id="hero-title"
          className="text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
        >
          {heroCopy.title}
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {visaStats.map((stat) =>
            stat.label === "Access To" ? (
              <span
                key={stat.label}
                className="inline-flex flex-col items-center rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-sm"
              >
                <span className="font-normal opacity-80">{stat.label}</span>
                <button
                  type="button"
                  onClick={() => setShowCountries(true)}
                  aria-haspopup="dialog"
                  aria-expanded={showCountries}
                  className="mt-0.5 text-sm font-semibold underline underline-offset-2"
                  style={{ cursor: "pointer" }}
                >
                  {stat.value}
                </button>
              </span>
            ) : (
              <HeroStatChip
                key={stat.label}
                label={stat.label}
                value={stat.value}
                variant="light"
              />
            ),
          )}
        </div>

        <div id="hero-cta" className="mt-8 hidden md:block">
          <Button>{heroCopy.ctaLabel}</Button>
        </div>
      </div>

      <HeroCountriesModal
        isOpen={showCountries}
        onClose={() => setShowCountries(false)}
      />
    </section>
  );
};

