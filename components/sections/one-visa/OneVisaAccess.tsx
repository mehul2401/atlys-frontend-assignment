"use client";

import Image from "next/image";
import {
  oneVisaAccessCopy,
  oneVisaAccessCountries,
} from "@/data/visaPage";
import { useCardGeometry } from "@/hooks/useCardGeometry";
import { CountryStack } from "@/components/sections/one-visa/CountryStack";

export const OneVisaAccess = () => {
  const geometry = useCardGeometry(oneVisaAccessCountries.length);

  return (
    <section
      id="additional"
      className="flex w-full flex-col items-center overflow-x-hidden px-0 pb-24 pt-20 scroll-mt-14 md:pt-20 md:pb-32"
    >
      <div className="mb-8 flex justify-center pt-3">
        <div
          className="relative h-min w-min rounded-full border border-[#E8E8E8] bg-[#D5D9DF] p-3 outline-2 outline-dotted outline-[#C6C6C6] outline-offset-8"
          aria-hidden
        >
          <div className="flex h-[31px] w-[31px] items-center justify-center overflow-hidden rounded-full">
            <Image
              src={oneVisaAccessCopy.flagImageUrl}
              alt={oneVisaAccessCopy.flagAlt}
              width={31}
              height={31}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-14 px-4 text-center md:px-0">
        <h2 className="mb-1 font-denton text-2xl font-medium leading-[1.4] tracking-wide whitespace-pre-wrap md:text-[2.75rem]">
          {oneVisaAccessCopy.title}
        </h2>
        <p className="whitespace-pre-wrap font-medium leading-[1.4] -tracking-wide text-[#69727B]">
          {oneVisaAccessCopy.subtitle}
        </p>
      </div>

      <div
        className="relative mb-16 w-full max-w-6xl overflow-visible"
        style={{ height: geometry.cardHeight }}
      >
        <div
          className="relative h-full w-full"
          style={{ perspective: 1200 }}
        >
          <div
            className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <CountryStack
              countries={oneVisaAccessCountries}
              geometry={geometry}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

