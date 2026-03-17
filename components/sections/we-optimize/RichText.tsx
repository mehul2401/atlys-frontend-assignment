"use client";

import type { TextSegment } from "@/data/visaPage";

export const RichText = ({ segments }: { segments: TextSegment[] }) => (
  <>
    {segments.map((seg, i) =>
      seg.color ? (
        <span key={i} style={{ color: seg.color }}>
          {seg.text}
        </span>
      ) : (
        seg.text
      ),
    )}
  </>
);

