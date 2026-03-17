"use client";

import type React from "react";
import { motion } from "framer-motion";

export type TabButtonProps = {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  tabRef: (el: HTMLButtonElement | null) => void;
};

export const TabButton = ({
  id,
  label,
  isActive,
  onClick,
  onKeyDown,
  tabRef,
}: TabButtonProps) => (
  <button
    ref={tabRef}
    role="tab"
    aria-selected={isActive}
    aria-controls={id}
    type="button"
    onClick={onClick}
    onKeyDown={onKeyDown}
    tabIndex={isActive ? 0 : -1}
    className={`relative h-[68px] shrink-0 cursor-pointer px-3.5 py-6 text-[13px] font-semibold -tracking-wide whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:h-[84px] md:pb-4 md:pt-10 ${
      isActive ? "text-zinc-900" : "text-gray-500 hover:text-zinc-700"
    }`}
  >
    {label}
    {isActive && (
      <motion.span
        layoutId="tab-indicator"
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#5157EA]"
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    )}
  </button>
);

