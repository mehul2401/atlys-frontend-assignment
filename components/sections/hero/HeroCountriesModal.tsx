"use client";

import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { POPULAR_COUNTRIES, OTHER_COUNTRIES } from "@/components/sections/hero/HeroBanner.data";

type HeroCountriesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function HeroCountriesModal({ isOpen, onClose }: HeroCountriesModalProps) {
  const isMobile = useIsMobile(640);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || isMobile) return;
    const handleClick = (event: MouseEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, isMobile, onClose]);

  const overlayClasses =
    "absolute inset-0 z-40 bg-black/45 transition-opacity duration-700";

  const panelBaseClasses = [
    "hide-scrollbars",
    "ease-inOutQuart",
    "bg-white",
    "p-6",
    "flex",
    "flex-col",
    "overflow-y-auto",
    isOpen ? "transition-transform duration-700" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const panelClasses = isMobile
    ? `fixed z-50 inset-x-0 bottom-0 max-h-[85vh] rounded-t-[1.875rem] ${
        isOpen ? "translate-y-0" : "translate-y-[100vh]"
      }`
    : `absolute z-50 top-4 right-4 bottom-4 rounded-[1.875rem] ${
        isOpen ? "translate-x-0" : "translate-x-[100vw]"
      }`;

  return (
    <>
      <div
        className={`${overlayClasses} ${
          isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className={`${panelBaseClasses} ${panelClasses}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-countries-title"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          if (!isMobile) return;
          setTouchStartY(e.touches[0].clientY);
        }}
        onTouchEnd={(e) => {
          if (!isMobile || touchStartY === null) return;
          const deltaY = e.changedTouches[0].clientY - touchStartY;
          if (deltaY > 60) onClose();
          setTouchStartY(null);
        }}
      >
        <div className="relative flex h-full w-full flex-col bg-white">
          {!isMobile && (
            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-0 cursor-pointer text-zinc-500 hover:text-zinc-800"
              aria-label="Close countries list"
            >
              <svg focusable="false" viewBox="0 0 384 512" width="16" height="16" aria-hidden="true">
                <path
                  d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}

          <div className="flex flex-col items-center pt-2">
            <div className="mb-4 h-[42px] w-[42px] rounded-full bg-[rgba(129,160,255,0.16)] p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.atlys.com/b2c/clp/version-3/euro-icon.png"
                alt="Euro Icon"
                className="h-full w-full object-contain"
              />
            </div>

            <h2
              id="hero-countries-title"
              className="font-denton text-center text-xl font-normal leading-tight text-[#1a1a1a] sm:text-2xl"
            >
              One visa gives you access to
              <br />
              29 countries
            </h2>

            <div className="mt-5 flex w-full items-center justify-center gap-2">
              <div className="h-px max-w-[80px] flex-1 rounded-full bg-[rgba(185,190,203,1)]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-black">
                Popular
              </span>
              <div className="h-px max-w-[80px] flex-1 rounded-full bg-[rgba(185,190,203,1)]" />
            </div>

            <div className="mt-6 grid w-full grid-cols-3 gap-2 whitespace-nowrap">
              {POPULAR_COUNTRIES.map((country) => (
                <div
                  key={country}
                  className="rounded-full bg-[rgba(0,81,168,0.07)] px-5 py-2.5 text-center text-xs font-semibold text-black"
                >
                  {country}
                </div>
              ))}
            </div>

            <div className="mt-5 mb-6 grid w-full grid-cols-3 gap-2 whitespace-nowrap md:mb-0">
              {OTHER_COUNTRIES.map((country) => (
                <div
                  key={country}
                  className="rounded-full bg-[#F7F7F8] px-5 py-2.5 text-center text-xs font-semibold text-[#424242]"
                >
                  {country}
                </div>
              ))}
            </div>

          </div>

          {isMobile && (
            <button
              type="button"
              onClick={onClose}
              className="sticky bottom-0 mt-2 w-full rounded-full bg-black px-5 py-3 text-center text-xs font-semibold text-white md:hidden"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </>
  );
}

