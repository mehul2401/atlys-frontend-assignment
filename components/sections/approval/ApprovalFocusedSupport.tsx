"use client";

import { DocumentScroller } from "@/components/ui/DocumentScroller";
import { SupportIntro } from "@/components/sections/approval/SupportIntro";
import { SupportTimeline } from "@/components/sections/approval/SupportTimeline";

export const ApprovalFocusedSupport = () => (
  <section
    id="documents"
    className="w-full scroll-mt-14 border-b border-zinc-200 bg-white"
  >
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-start lg:gap-16">
        <SupportIntro />

        <div className="lg:col-span-2">
          <div className="mt-4 hidden lg:block">
            <DocumentScroller
              itemHeight={88}
              itemPaddingTop={16}
              centerIndex={2}
              containerHeight={440}
              titleClassName="text-2xl lg:text-[2rem]"
              fadeColor="white"
              showTopFade
            />
          </div>
          <div className="lg:hidden">
            <SupportTimeline />
          </div>
        </div>
      </div>
    </div>
  </section>
);

