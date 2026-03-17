 "use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/sections/success/ReviewCard";
import { SuccessHeader } from "@/components/sections/success/SuccessHeader";
import { ProgressRing, RING_CIRC } from "@/components/sections/success/ProgressRing";
import {
  NextArrowIcon,
  PrevArrowIcon,
} from "@/components/sections/success/SuccessIcons";

const CARD_WIDTH = 284;
const CARD_GAP = 18;
const CARD_SLOT = CARD_WIDTH + CARD_GAP;
const INTERVAL_MS = 5000;
const TICK_MS = 50;

const CLONE_COUNT = 4;
const REAL_LEN = reviews.length;
const REAL_START = CLONE_COUNT;
const extendedReviews = [
  ...reviews.slice(-CLONE_COUNT),
  ...reviews,
  ...reviews.slice(0, CLONE_COUNT),
];

const TRANS_MS = 700;

export const SuccessStories = () => {
  const [idx, setIdx] = useState(REAL_START);
  const [animating, setAnimating] = useState(true);
  const [progress, setProgress] = useState(0);

  const idxRef = useRef(REAL_START);
  const progressRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const pendingDirRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);

  const doSlide = useCallback((newIdx: number) => {
    isAnimatingRef.current = true;
    setAnimating(true);
    idxRef.current = newIdx;
    setIdx(newIdx);
  }, []);

  const requestSlide = useCallback(
    (dir: number) => {
      if (isAnimatingRef.current) {
        pendingDirRef.current = dir;
        return;
      }
      doSlide(idxRef.current + dir);
    },
    [doSlide],
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    progressRef.current = 0;
    setProgress(0);

    timerRef.current = setInterval(() => {
      progressRef.current += TICK_MS / INTERVAL_MS;
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setProgress(0);
        requestSlide(1);
      } else {
        setProgress(progressRef.current);
      }
    }, TICK_MS);
  }, [requestSlide]);

  useEffect(() => {
    const id = setTimeout(() => {
      startTimer();
    }, 0);
    return () => {
      clearTimeout(id);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "transform") return;

      const current = idxRef.current;
      let adjusted = current;
      if (current < CLONE_COUNT) adjusted = current + REAL_LEN;
      else if (current >= CLONE_COUNT + REAL_LEN) adjusted = current - REAL_LEN;

      const needsJump = adjusted !== current;

      if (needsJump) {
        setAnimating(false);
        idxRef.current = adjusted;
        setIdx(adjusted);
      }

      const resume = () => {
        if (pendingDirRef.current !== null) {
          const dir = pendingDirRef.current;
          pendingDirRef.current = null;
          doSlide(idxRef.current + dir);
        } else {
          isAnimatingRef.current = false;
        }
      };

      if (needsJump) {
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimating(true);
            requestAnimationFrame(resume);
          }),
        );
      } else {
        resume();
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [doSlide]);

  const isMouseHoveringRef = useRef(false);

  const handlePointerEnterReset = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isMouseHoveringRef.current = true;
      if (timerRef.current) clearInterval(timerRef.current);
      progressRef.current = 0;
      setProgress(0);
    },
    [],
  );

  const handlePointerEnterPause = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isMouseHoveringRef.current = true;
      if (timerRef.current) clearInterval(timerRef.current);
    },
    [],
  );

  const handlePointerLeave = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isMouseHoveringRef.current = false;
      startTimer();
    },
    [startTimer],
  );

  const prev = () => {
    requestSlide(-1);
    if (!isMouseHoveringRef.current) startTimer();
  };
  const next = () => {
    requestSlide(1);
    if (!isMouseHoveringRef.current) startTimer();
  };

  const translateX = idx * CARD_SLOT;
  const dashOffset = RING_CIRC * (1 - progress);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current == null || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    touchDeltaXRef.current = currentX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const startX = touchStartXRef.current;
    const deltaX = touchDeltaXRef.current;
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;

    if (startX == null) return;
    const threshold = 40;
    if (Math.abs(deltaX) < threshold) return;

    if (deltaX < 0) {
      next();
    } else {
      prev();
    }
  };

  return (
    <section
      id="reviews"
      className="w-full scroll-mt-14 bg-white py-14 md:py-20"
    >
      <div className="flex w-full flex-col items-center">
        <SuccessHeader />

        <div className="relative w-full max-w-6xl">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-[18px] pl-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(-${translateX}px)`,
                transition: animating
                  ? `transform ${TRANS_MS}ms ease-in-out`
                  : "none",
              }}
            >
              {extendedReviews.map((r, i) => (
                <ReviewCard key={`${r.id}-${i}`} review={r} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              onPointerEnter={handlePointerEnterReset}
              onPointerLeave={handlePointerLeave}
              aria-label="Previous"
              className="flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-[#D2D2D2] bg-white transition-colors hover:bg-gray-50"
            >
              <PrevArrowIcon />
            </button>

            <button
              onClick={next}
              onPointerEnter={handlePointerEnterPause}
              onPointerLeave={handlePointerLeave}
              aria-label="Next"
              className="relative flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
            >
              <ProgressRing dashOffset={dashOffset} />
              <NextArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

