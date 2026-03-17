"use client";

type ProgressRingProps = {
  dashOffset: number;
};

const RADIUS = 20;
export const RING_CIRC = 2 * Math.PI * RADIUS;

export const ProgressRing = ({ dashOffset }: ProgressRingProps) => (
  <svg
    className="absolute inset-0 h-full w-full -rotate-90 transform"
    viewBox="0 0 40 40"
    overflow="visible"
  >
    <circle
      cx="20"
      cy="20"
      r={RADIUS}
      fill="none"
      stroke="#D2D2D2"
      strokeWidth="1"
    />
    <circle
      cx="20"
      cy="20"
      r={RADIUS}
      fill="none"
      stroke="#374151"
      strokeWidth="1.5"
      strokeDasharray={RING_CIRC}
      strokeDashoffset={dashOffset}
      strokeLinecap="round"
      style={{ transition: "stroke-dashoffset 50ms linear" }}
    />
  </svg>
);

