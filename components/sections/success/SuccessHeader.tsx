"use client";

import {
  AppleIcon,
  DecorativeLeaf,
  GooglePlayIcon,
  TrustpilotStarIcon,
} from "@/components/sections/success/SuccessIcons";

export const SuccessHeader = () => (
  <div className="mb-12 flex w-full max-w-6xl flex-col items-center px-4">
    <div className="mb-4 flex items-center justify-center gap-3">
      <div className="text-gray-800">
        <DecorativeLeaf />
      </div>
      <div className="mb-0 text-center">
        <h2 className="text-2xl font-medium leading-[1.4] tracking-wide whitespace-pre-wrap md:text-[2.75rem]">
          4.5 Rating Across All Platforms
        </h2>
      </div>
      <div className="-scale-x-[1] text-gray-800">
        <DecorativeLeaf />
      </div>
    </div>

    <p className="mb-7 text-center text-xs font-medium text-gray-700 lg:text-base">
      Highest rating for any visa platform in India. Customers cannot recommend us enough!
    </p>

    <div className="flex scale-[0.85] items-center justify-center gap-6 whitespace-nowrap md:scale-[1] md:gap-8">
      <div className="flex items-center gap-1">
        <span className="font-bold">4.1</span>
        <TrustpilotStarIcon />
        <span className="text-sm font-semibold">Trustpilot</span>
      </div>
      <div className="h-6 w-px bg-gray-300" />
      <div className="flex items-center gap-1">
        <span className="font-semibold">4.6</span>
        <AppleIcon />
        <span className="text-sm text-gray-700">App Store</span>
      </div>
      <div className="h-6 w-px bg-gray-300" />
      <div className="flex items-center gap-1">
        <span className="font-semibold">4.7</span>
        <GooglePlayIcon />
      </div>
    </div>
  </div>
);

