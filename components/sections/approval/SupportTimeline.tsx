"use client";

import { DocumentScroller } from "@/components/ui/DocumentScroller";

export const SupportTimeline = () => (
  <div className="w-full rounded-[20px] bg-[#F6F6F6] p-6">
    <div>
      <p className="mb-1 text-sm font-bold">Atlys</p>
      <p className="text-sm font-medium">
        Builds a story with your travel intent, financial stability, &amp; return assurance
      </p>
    </div>

    <div className="mt-4 flex items-start gap-5">
      <div className="flex h-[277px] w-3 shrink-0 flex-col items-center gap-2.5 pt-8">
        <div className="h-3 w-3 rounded-full bg-[#008211]" />
        <div
          className="h-[52px] w-px"
          style={{ background: "linear-gradient(rgb(0,130,17) 0%, rgb(236,236,236) 100%)" }}
        />
        <div className="h-3 w-3 rounded-full border border-[#ECECEC]" />
        <div className="h-[52px] w-px bg-[#ECECEC]" />
        <div className="h-3 w-3 rounded-full border border-[#ECECEC]" />
        <div className="h-[52px] w-px bg-[#ECECEC]" />
      </div>

      <div className="flex-1">
        <DocumentScroller
          itemHeight={76}
          itemPaddingTop={29}
          centerIndex={0}
          containerHeight={277}
          titleClassName="text-lg"
          fadeColor="#F6F6F6"
        />
      </div>
    </div>
  </div>
);

