"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supportDocuments, type TagColor } from "@/data/supportDocuments";

const TAG_COLORS: Record<TagColor, { bg: string; color: string }> = {
  blue:   { bg: "rgba(184,203,227,0.5)", color: "rgb(0,46,130)"  },
  green:  { bg: "rgba(187,227,184,0.5)", color: "rgb(6,71,28)"   },
  purple: { bg: "rgba(200,184,227,0.5)", color: "rgb(70,0,130)"  },
  gray:   { bg: "rgba(190,190,190,0.5)", color: "rgb(98,98,98)"  },
};

const SparkleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M6 0L4.72533 3.87533C4.6601 4.07367 4.5492 4.25392 4.40156 4.40156C4.25392 4.5492 4.07367 4.6601 3.87533 4.72533L0 6L3.87533 7.27467C4.07367 7.3399 4.25392 7.4508 4.40156 7.59844C4.5492 7.74608 4.6601 7.92633 4.72533 8.12467L6 12L7.27467 8.12467C7.3399 7.92633 7.4508 7.74608 7.59844 7.59844C7.74608 7.4508 7.92633 7.3399 8.12467 7.27467L12 6L8.12467 4.72533C7.92633 4.6601 7.74608 4.5492 7.59844 4.40156C7.4508 4.25392 7.3399 4.07367 7.27467 3.87533L6 0Z"
      fill="currentColor"
    />
  </svg>
);

export const TagBadge = ({ tag, tagColor }: { tag: string; tagColor: TagColor }) => {
  const { bg, color } = TAG_COLORS[tagColor];
  return (
    <div
      className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
      style={{ backgroundColor: bg, color }}
    >
      <SparkleIcon />
      {tag}
    </div>
  );
};

export type DocumentScrollerProps = {
  itemHeight: number;
  itemPaddingTop: number;
  centerIndex: number;
  containerHeight: number;
  titleClassName: string;
  fadeColor: string;
  showTopFade?: boolean;
  intervalMs?: number;
};

export const DocumentScroller = ({
  itemHeight,
  itemPaddingTop,
  centerIndex,
  containerHeight,
  titleClassName,
  fadeColor,
  showTopFade = false,
  intervalMs = 2500,
}: DocumentScrollerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % supportDocuments.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <div className="relative overflow-hidden" style={{ height: containerHeight }}>
      {showTopFade && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
          style={{ background: `linear-gradient(to bottom, ${fadeColor}, transparent)` }}
        />
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[60%]"
        style={{ background: `linear-gradient(to top, ${fadeColor}, transparent)` }}
      />

      <motion.div
        animate={{ y: (centerIndex - activeIndex) * itemHeight }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-x-0 top-0"
      >
        {supportDocuments.map((doc, index) => {
          const distance = Math.abs(index - activeIndex);
          const isActive = distance === 0;
          const titleColor = isActive ? "#111827" : "#9CA3AF";
          return (
            <motion.div
              key={doc.title}
              animate={{
                scale:   isActive ? 1    : distance === 1 ? 0.95 : 0.9,
                opacity: isActive ? 1    : distance === 1 ? 0.4  : 0.15,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ height: itemHeight, paddingTop: itemPaddingTop }}
              className="flex origin-left flex-col justify-start overflow-visible"
            >
              <h3
                className={`-tracking-wide font-semibold leading-none ${titleClassName}`}
                style={{ color: titleColor }}
              >
                {doc.title}
              </h3>
              <motion.div
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="pt-2.5">
                  <TagBadge tag={doc.tag} tagColor={doc.tagColor} />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
