"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ScrollProgress({ className, ...props }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      const documentElement = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY ?? documentElement.scrollTop ?? body.scrollTop ?? 0;
      const scrollHeight = Math.max(
        documentElement.scrollHeight,
        body.scrollHeight,
        documentElement.offsetHeight,
        body.offsetHeight,
        documentElement.clientHeight,
        body.clientHeight
      );
      const totalScrollableHeight = Math.max(scrollHeight - window.innerHeight, 0);
      const nextProgress =
        totalScrollableHeight > 0
          ? Math.min(Math.max(scrollTop / totalScrollableHeight, 0), 1)
          : 0;

      setProgress(nextProgress);
      frameId = 0;
    };

    const handleScrollOrResize = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className={cn("pointer-events-none fixed inset-x-0 top-0 z-[60] h-1", className)}
      aria-hidden="true"
      {...props}
    >
      <div
        className="h-full origin-left bg-linear-to-r from-magenta via-indigo to-cream shadow-[0_0_12px_rgba(255,0,178,0.45)] transition-transform duration-75 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
