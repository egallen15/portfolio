"use client";

import { useEffect, type CSSProperties } from "react";

type HeroDoodleBackgroundProps = {
  className?: string;
};

const doodleRules = String.raw`
  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.1;
      transform: translate3d(0, 0, 0) scale(0.96);
      filter: brightness(0.92);
    }

    24% {
      opacity: 0.32;
      transform: translate3d(0, -1px, 0) scale(1);
      filter: brightness(1);
    }

    42% {
      opacity: 0.68;
      transform: translate3d(1px, -1px, 0) scale(1.08);
      filter: brightness(1.18);
    }

    63% {
      opacity: 0.24;
      transform: translate3d(-1px, 1px, 0) scale(0.99);
      filter: brightness(0.98);
    }

    82% {
      opacity: 0.56;
      transform: translate3d(0, -1px, 0) scale(1.04);
      filter: brightness(1.08);
    }
  }

  :doodle {
    @grid: 14 / 100% 100%;
    overflow: hidden;
  }

  :container {
    gap: 1px;
    transform: rotate(-8deg) scale(1.02);
  }

  background: transparent;
  opacity: @rand(0.18, 0.48);
  transition: opacity 0.6s ease;
  transform-origin: center;

  @random {
    border-left: 1px solid rgba(93, 129, 188, 0.28);
  }

  @random {
    border-top: 1px solid rgba(93, 129, 188, 0.28);
  }

  @random(.22) {
    background:
      linear-gradient(@p(#ffffff, tan, #5d81bc), @lp)
      50% / @r(40%, 72%) @lr no-repeat;
  }

  @random(.26) {
    animation: twinkle @rand(5.5s, 9.5s) ease-in-out infinite;
    animation-delay: @rand(-10s, 0s);
  }

  @random(.1) {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.45));
  }
`;

const edgeFadeStyle: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

export default function HeroDoodleBackground({
  className = "",
}: HeroDoodleBackgroundProps) {
  useEffect(() => {
    void import("css-doodle");
  }, []);

  return (
    <div
      aria-hidden="true"
      style={edgeFadeStyle}
      className={`pointer-events-none absolute -z-20 overflow-hidden opacity-60 dark:opacity-45 ${className}`}
    >
      <css-doodle
        grid="14"
        seed="eric-allen-hero"
        suppressHydrationWarning
        className="block h-full w-full"
      >
        {doodleRules}
      </css-doodle>
    </div>
  );
}