"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tabs } from "@/data/tabs";
import { heroCopy } from "@/data/visaInfo";
import { Button } from "@/components/ui/Button";
import { TabButton } from "@/components/sections/section-tabs/TabButton";

export const SectionTabs = () => {
  const [activeId, setActiveId] = useState<string>(tabs[0].id);
  const [showCta, setShowCta] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const suppressObserverRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sectionEls = tabs
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (suppressObserverRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sectionEls.forEach((el) => observerRef.current!.observe(el));

    const handleScroll = () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        suppressObserverRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const heroCta = document.getElementById("hero-cta");
    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowCta(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (heroCta) heroObserver.observe(heroCta);

    return () => {
      observerRef.current?.disconnect();
      heroObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  useEffect(() => {
    buttonRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [activeId]);

  const scrollToSection = (id: string) => {
    suppressObserverRef.current = true;
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const { key } = event;
    const currentIndex = index;
    if (key === "ArrowRight" || key === "ArrowLeft") {
      event.preventDefault();
      const dir = key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + dir + tabs.length) % tabs.length;
      const nextTab = tabs[nextIndex];
      if (nextTab) scrollToSection(nextTab.id);
    } else if (key === "Home") {
      event.preventDefault();
      scrollToSection(tabs[0].id);
    } else if (key === "End") {
      event.preventDefault();
      scrollToSection(tabs[tabs.length - 1].id);
    } else if (key === " " || key === "Enter") {
      event.preventDefault();
      scrollToSection(tabs[currentIndex].id);
    }
  };

  return (
    <>
      <nav
        className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur"
        style={{ transform: "translateZ(0)" }}
        aria-label="Page sections"
      >
        <div className="mx-auto flex max-w-5xl items-center px-4">
          <div
            role="tablist"
            className="flex flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab, index) => (
              <TabButton
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeId === tab.id}
                onClick={() => scrollToSection(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabRef={(el) => {
                  buttonRefs.current[tab.id] = el;
                }}
              />
            ))}
          </div>

          <AnimatePresence>
            {showCta && (
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.2 }}
                className="ml-4 hidden shrink-0 md:block"
              >
                <Button
                  variant="dark"
                  className="h-[50px]! w-auto! px-10! text-sm! md:px-10! bg-[#5157EA]! hover:bg-[#5157EA]/90!"
                >
                  {heroCopy.ctaLabel}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="fixed bottom-0 left-0 z-30 w-full px-5 pb-5 md:hidden">
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="w-full rounded-full bg-[#5157EA] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#5157EA]/90 disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 30px 40px 0px",
              backdropFilter: "blur(40px)",
            }}
          >
            {heroCopy.ctaLabel}
          </button>
        </div>
      </div>
    </>
  );
};

