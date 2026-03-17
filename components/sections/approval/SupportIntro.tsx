"use client";

import Image from "next/image";

const GuidedChipIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <defs>
      <linearGradient
        id="guided-chip-gradient"
        x1="6"
        y1="2"
        x2="6"
        y2="10.6667"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60D3FE" />
        <stop offset="1" stopColor="#7837FF" />
      </linearGradient>
    </defs>
    <path
      d="M6 0L4.72533 3.87533C4.6601 4.07367 4.5492 4.25392 4.40156 4.40156C4.25392 4.5492 4.07367 4.6601 3.87533 4.72533L0 6L3.87533 7.27467C4.07367 7.3399 4.25392 7.4508 4.40156 7.59844C4.5492 7.74608 4.6601 7.92633 4.72533 8.12467L6 12L7.27467 8.12467C7.3399 7.92633 7.4508 7.74608 7.59844 7.59844C7.74608 7.4508 7.92633 7.3399 8.12467 7.27467L12 6L8.12467 4.72533C7.92633 4.6601 7.74608 4.5492 7.59844 4.40156C7.4508 4.25392 7.3399 4.07367 7.27467 3.87533L6 0Z"
      fill="url(#guided-chip-gradient)"
    />
  </svg>
);

export const SupportIntro = () => (
  <div className="flex flex-col lg:col-span-3">
    <div className="mb-5 flex h-8 w-max items-center gap-2 rounded-full bg-[#E8F3FF] py-2.5 pr-5 pl-4 text-sm font-semibold leading-normal -tracking-wide">
      <GuidedChipIcon />
      <span
        style={{
          background:
            "linear-gradient(100.64deg, rgb(0,158,225) 42.09%, rgb(125,31,255) 83.66%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        Atlys Guided
      </span>
    </div>

    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
      <span className="text-emerald-600">Approval focused support</span>
      <br />
      with embassy-grade precision
    </h2>

    <p className="mt-4 text-sm leading-relaxed text-zinc-600 lg:hidden">
      While others prepare documents that are &ldquo;good enough&rdquo;
    </p>

    <div className="hidden space-y-4 pt-4 lg:block">
      <div className="flex items-start gap-3">
        <p className="min-w-[50px] whitespace-nowrap text-sm font-semibold text-[#9CA6AF]">
          Others
        </p>
        <p className="text-sm text-[#9CA6AF]">:</p>
        <p className="text-sm font-semibold text-[#9CA6AF]">
          Prepare documents that are &ldquo;good enough.&rdquo;
        </p>
      </div>

      <div className="flex items-start gap-3">
        <p className="min-w-[50px] whitespace-nowrap text-sm font-semibold text-[#1A3B5C]">
          Atlys
        </p>
        <p className="text-sm text-[#1A3B5C]">:</p>
        <div className="flex-1 space-y-4 text-sm">
          <p className="font-semibold text-[#1A3B5C]">
            <span className="whitespace-nowrap">
              We build a story that makes{" "}
              <span className="text-black">approval undeniable</span> with the holy grail:
            </span>
            <br />
            <span className="text-[#5157EA]">
              travel intent, financial stability, &amp; return assurance
            </span>
          </p>
        </div>
      </div>

      <div className="relative mt-6">
        <hr className="w-full border-[#CBCBCB]" />
        <svg
          fill="none"
          height="24"
          viewBox="0 0 25 24"
          width="25"
          aria-hidden="true"
          className="absolute top-1/2 right-[20%] -translate-y-1/2 shadow-[0_0_0_10px_white]"
        >
          <path
            d="M7.59529 22.971L16.9678 13.9261H21.1244C21.7807 13.9261 22.4418 13.7856 23.0588 13.5085L23.463 13.3027C24.0062 13.0597 24.3428 12.5514 24.3428 11.9748C24.3428 11.3982 24.0062 10.8899 23.4862 10.6577L23.0364 10.4304C22.4418 10.1641 21.7818 10.0236 21.1244 10.0236H16.9682L7.59749 0.981502C7.12014 0.521042 6.48624 0.267334 5.81081 0.267334H4.6257C4.44086 0.267334 4.27108 0.364882 4.18288 0.521042C4.09395 0.677126 4.10021 0.868364 4.20126 1.0186L10.3069 10.2128C8.77747 10.3036 7.50049 10.4265 5.94642 10.5767L4.35376 10.7319L2.01513 7.31623C1.92032 7.17865 1.76268 7.0967 1.59253 7.0967H0.581596C0.429092 7.0967 0.283204 7.164 0.187292 7.27913C0.0902776 7.39523 0.053896 7.54644 0.0873366 7.68986L1.07512 11.9748L0.0873366 16.2597C0.0792521 16.2949 0.0752024 16.33 0.0752024 16.365C0.0752024 16.4754 0.113421 16.5826 0.186182 16.6704C0.283196 16.7856 0.429092 16.8528 0.581596 16.8528H1.59253C1.76268 16.8528 1.92105 16.7709 2.01439 16.6334L4.34972 13.2177L5.94715 13.3728C7.49938 13.5231 8.77527 13.646 10.3051 13.7367L4.20126 22.9309C4.10021 23.0823 4.09506 23.2723 4.18288 23.4275C4.27108 23.5845 4.44085 23.6823 4.62606 23.6823H5.81081C6.48624 23.6823 7.12014 23.4297 7.59529 22.971Z"
            fill="currentColor"
          />
        </svg>
        <div className="absolute top-1/2 right-0 h-6 w-6 -translate-y-1/2 overflow-hidden rounded-full shadow-lg">
          <Image
            src="https://media.atlys.com/image/upload/country_flags/fr.svg"
            alt="France"
            width={24}
            height={24}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
);

