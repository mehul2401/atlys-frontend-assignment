"use client";

import { useEffect, useState } from "react";

export const DEFAULT_MOBILE_MAX_WIDTH = 768;

export function useIsMobile(maxWidth: number = DEFAULT_MOBILE_MAX_WIDTH): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth <= maxWidth);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [maxWidth]);

  return isMobile;
}

