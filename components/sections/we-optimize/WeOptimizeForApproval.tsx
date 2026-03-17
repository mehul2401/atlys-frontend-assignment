"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useMotionValue, animate, useScroll, useMotionValueEvent } from "framer-motion";
import { comparisonSlides } from "@/data/visaPage";
import { ComparisonCard } from "@/components/sections/we-optimize/ComparisonCard";
import { MobileCard } from "@/components/sections/we-optimize/MobileCard";
import { ChevronLeft, ChevronRight } from "@/components/sections/we-optimize/WeOptimizeIcons";

const SLIDE_COUNT = comparisonSlides.length;

export const WeOptimizeForApproval = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [slide, setSlide] = useState(0);
  const slideRef = useRef(0);

  const pendingSlideRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);

  const rotY = useMotionValue(0);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const runAnimation = useCallback(async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    while (
      pendingSlideRef.current !== null &&
      pendingSlideRef.current !== slideRef.current
    ) {
      const target = pendingSlideRef.current;
      pendingSlideRef.current = null;

      const dir: 1 | -1 = target > slideRef.current ? 1 : -1;
      const base = rotY.get();

      await animate(rotY, base + dir * 180, { duration: 0.35, ease: "easeIn" });

      slideRef.current = target;
      setSlide(target);

      await animate(rotY, base + dir * 360, { duration: 0.35, ease: "easeOut" });
    }

    isRunningRef.current = false;
  }, [rotY]);

  const goTo = useCallback(
    (newSlide: number) => {
      pendingSlideRef.current = newSlide;
      runAnimation();
    },
    [runAnimation],
  );

  useEffect(() => {
    const initial = Math.min(
      SLIDE_COUNT - 1,
      Math.max(0, Math.round(scrollYProgress.get() * (SLIDE_COUNT - 1))),
    );
    slideRef.current = initial;
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newSlide = Math.min(
      SLIDE_COUNT - 1,
      Math.max(0, Math.round(latest * (SLIDE_COUNT - 1))),
    );
    goTo(newSlide);
  });

  const current = comparisonSlides[slide];

  return (
    <div
      ref={containerRef}
      id="why-atlys"
      className="scroll-mt-14"
      style={{ height: `${SLIDE_COUNT * 100}vh` }}
    >
      <section className="sticky top-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b border-zinc-200 bg-white py-[76px] md:pb-0 md:pt-10">

        <div className="mb-6 text-center">
          <h2 className="mb-1 text-2xl font-medium leading-[1.4] tracking-wide md:text-[2.75rem]">
            We optimize for approval,
            <br />
            <span className="text-[#B4B4B4]">not submission</span>
          </h2>
          <p className="font-medium leading-[1.4] -tracking-wide text-[#69727B]">
            Here&apos;s the comparison between others and Atlys.
          </p>
        </div>

        <div className="mt-2 px-4 md:hidden">
          <MobileCard
            rotY={rotY}
            othersContent={current.others}
            atlysContent={current.atlys}
          />
        </div>

        <div className="mt-2 hidden gap-4 px-4 md:flex">
          <ComparisonCard variant="others" rotY={rotY} content={current.others} />
          <ComparisonCard variant="atlys" rotY={rotY} content={current.atlys} />
        </div>

        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-8">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => slide > 0 && goTo(slide - 1)}
            disabled={slide === 0}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052B4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-1">
            {comparisonSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={slide === i ? "true" : undefined}
                onClick={() => i !== slide && goTo(i)}
                className="h-2 w-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052B4] focus-visible:ring-offset-2"
                style={{
                  backgroundColor: slide === i ? "rgb(0,82,180)" : "rgb(235,235,235)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => slide < SLIDE_COUNT - 1 && goTo(slide + 1)}
            disabled={slide === SLIDE_COUNT - 1}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052B4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>

      </section>
    </div>
  );
};

