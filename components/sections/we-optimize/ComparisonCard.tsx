"use client";

import Image from "next/image";
import type { MotionValue } from "framer-motion";
import type { CardContent } from "@/data/visaPage";
import { FlipCard } from "@/components/sections/we-optimize/FlipCard";
import { RichText } from "@/components/sections/we-optimize/RichText";
import { CheckIcon, XIcon } from "@/components/sections/we-optimize/WeOptimizeIcons";

type ComparisonCardProps = {
  variant: "others" | "atlys";
  rotY: MotionValue<number>;
  content: CardContent;
};

export const ComparisonCard = ({ variant, rotY, content }: ComparisonCardProps) => {
  const isAtlys = variant === "atlys";

  return (
    <FlipCard
      rotY={rotY}
      backColor={isAtlys ? "#5057EA" : "rgb(245,245,245)"}
      className="h-[300px] md:h-[360px]"
    >
      <div
        className={`h-full rounded-3xl ${isAtlys ? "bg-[#272727]" : "bg-[#F5F5F5]"}`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-3xl p-6">
          <div
            className={`flex shrink-0 items-center justify-between border-b pb-2 ${
              isAtlys ? "border-b-[#414141]" : "border-b-[#E0E0E0]"
            }`}
          >
            <span
              className={`text-base font-semibold capitalize ${
                isAtlys ? "text-white" : "text-[#69727B]"
              }`}
            >
              {isAtlys ? "atlys" : "others"}
            </span>
            {isAtlys ? (
              <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-[#0052B4] md:flex">
                <CheckIcon />
              </div>
            ) : (
              <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#DCDCDC] md:flex">
                <XIcon />
              </div>
            )}
          </div>

          <div className="mt-6 mb-6 flex h-[82px] shrink-0 items-center justify-end md:h-[100px]">
            {content.imageUrl && (
              <div className="relative h-full w-[258px] max-w-full">
                <Image
                  src={content.imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 200px, 258px"
                  className="h-full w-auto object-contain"
                  style={content.imageStyle}
                  loading="lazy"
                />
              </div>
            )}
          </div>

          <p
            className={`whitespace-pre-wrap font-semibold ${
              isAtlys
                ? "text-xl text-white md:text-2xl"
                : "text-xl text-black/20 md:text-[1.75rem]"
            }`}
          >
            <RichText segments={content.title} />
          </p>

          {content.subtitle && (
            <p className="mt-3 text-[0.813rem] font-semibold text-[#B9B9B9]">
              <RichText segments={content.subtitle} />
            </p>
          )}
        </div>
      </div>
    </FlipCard>
  );
};

