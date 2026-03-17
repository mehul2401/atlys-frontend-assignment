"use client";

import { motion, type MotionValue } from "framer-motion";
import type React from "react";

type FlipCardProps = {
  rotY: MotionValue<number>;
  backColor: string;
  children: React.ReactNode;
  className?: string;
};

export const FlipCard = ({ rotY, backColor, children, className = "" }: FlipCardProps) => (
  <div style={{ perspective: "1200px" }} className={className}>
    <div className="relative h-full w-[320px]" style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        className="relative h-full w-full will-change-transform"
        style={{ rotateY: rotY, transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        <div
          className="relative flex h-full flex-col"
          style={{ backfaceVisibility: "hidden", zIndex: -1 }}
        >
          {children}
        </div>
        <div
          className="absolute inset-0 rounded-3xl will-change-transform"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: backColor,
            zIndex: 1,
          }}
        />
      </motion.div>
    </div>
  </div>
);

