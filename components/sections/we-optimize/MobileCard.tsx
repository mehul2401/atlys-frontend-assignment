"use client";

import { motion, type MotionValue } from "framer-motion";
import type { CardContent } from "@/data/visaPage";
import { CheckIcon } from "@/components/sections/we-optimize/WeOptimizeIcons";
import { RichText } from "@/components/sections/we-optimize/RichText";

type MobileCardProps = {
  rotY: MotionValue<number>;
  othersContent: CardContent;
  atlysContent: CardContent;
};

export const MobileCard = ({ rotY, othersContent, atlysContent }: MobileCardProps) => (
  <div className="w-[320px]" style={{ perspective: "1200px" }}>
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        className="relative will-change-transform"
        style={{ rotateY: rotY, transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        <div
          className="relative flex flex-col"
          style={{ backfaceVisibility: "hidden", zIndex: -1 }}
        >
          <div className="-mb-6 rounded-t-3xl border border-b-0 border-[#DEDEDE] bg-white p-6 pb-11">
            <div className="flex items-center border-b border-b-[#E0E0E0] pb-2">
              <span className="text-base font-semibold capitalize text-[#69727B]">Others</span>
            </div>
            <div className="mt-3">
              <p className="text-xl font-semibold text-[#8D8D8D]">
                <RichText segments={othersContent.title} />
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#272727]" style={{ backfaceVisibility: "hidden" }}>
            <div className="flex flex-col overflow-hidden rounded-3xl p-6">
              <div className="flex items-center justify-between border-b border-b-[#414141] pb-2">
                <span className="text-base font-semibold capitalize text-white">atlys</span>
                <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-[#0052B4] md:flex">
                  <CheckIcon />
                </div>
              </div>

              {atlysContent.imageUrl && (
                <div className="mt-6 mb-6 flex h-[82px] justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="eager"
                    src={atlysContent.imageUrl}
                    alt=""
                    className="h-full w-auto object-contain"
                    style={atlysContent.imageStyle}
                  />
                </div>
              )}

              <p className="whitespace-pre-wrap text-xl font-semibold text-white">
                <RichText segments={atlysContent.title} />
              </p>

              {atlysContent.subtitle && (
                <p className="mt-3 text-[0.813rem] font-semibold text-[#B9B9B9]">
                  <RichText segments={atlysContent.subtitle} />
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-3xl will-change-transform"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#5057EA",
            zIndex: 1,
          }}
        />
      </motion.div>
    </div>
  </div>
);

