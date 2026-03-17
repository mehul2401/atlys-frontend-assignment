"use client";

import React from "react";
import type { Review } from "@/data/reviews";

export const ReviewCard = React.memo(({ review }: { review: Review }) => (
  <div className="flex h-[340px] w-[284px] shrink-0 flex-col rounded-[30px] border border-[#D5D9DF] bg-white p-6 shadow-[inset_0px_-3px_0px_0px_rgba(213,217,223,1)]">
    <div className="mb-2 flex w-full items-center justify-between">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-[#CED4DE]">
        <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-800">
          {review.initials}
        </span>
      </div>
      <div
        className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-[0.7px] border-[#C6E4D8] p-1"
        style={{
          boxShadow:
            "rgba(0,0,0,0.08) 0px 5.58px 11.16px 0px, rgba(0,0,0,0.04) 0px 0px 2.79px 0px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media.atlys.com/b2c/clp/version-3/icon-trustpilot.png"
          alt="trustpilot"
        />
      </div>
    </div>

    <p className="mb-2 text-sm font-medium text-gray-900">
      {review.name},{" "}
      <span className="font-normal text-gray-500">{review.location}</span>
    </p>

    <div className="mb-3 flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src="https://media.atlys.com/b2c/clp/version-3/trustpilot-rating.png"
          alt=""
          className="h-4"
        />
      ))}
    </div>

    <div className="flex min-h-0 flex-1 flex-col justify-between">
      <p className="line-clamp-5 text-sm leading-relaxed text-gray-700">
        {review.review}
      </p>
      <a
        href={review.link}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="mt-1 text-left text-sm font-medium hover:underline"
        style={{ color: "#6268ED" }}
      >
        read more
      </a>
    </div>
  </div>
));

ReviewCard.displayName = "ReviewCard";

