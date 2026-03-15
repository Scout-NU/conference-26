"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const MOBILE_FRAME_STEP = 2;
const DESKTOP_FRAME_STEP = 1;
const PRELOAD_CONCURRENCY = 8;
const BASE_SCROLL_DISTANCE = 5500;

export type FrameVariant = "original" | "optimized" | "maxOptimized";

const FRAME_SETS: Record<
  FrameVariant,
  { basePath: string; totalFrames: number; trimEndFrames: number }
> = {
  original: {
    basePath: "/entangleanimation",
    totalFrames: 336,
    trimEndFrames: 50,
  },
  optimized: {
    basePath: "/entangleanimation_q70_step2",
    totalFrames: 168,
    trimEndFrames: 25,
  },
  maxOptimized: {
    basePath: "/entangleanimation_q70_720p_step2",
    totalFrames: 168,
    trimEndFrames: 25,
  },
};

const getFrameSrc = (basePath: string, index: number) =>
  `${basePath}/entangleanimation_${(index + 1).toString().padStart(4, "0")}.webp`;

function loadFrame(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load frame: ${src}`));
  });
}

const ScrollFrameAnimation = ({ variant = "original", startFrame = 0 }: { variant?: FrameVariant; startFrame?: number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const selectedFrameSet = FRAME_SETS[variant];
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const isMobile = window.matchMedia("(max-width: 48rem)").matches;
    const usableFrameCount = Math.max(
      1,
      selectedFrameSet.totalFrames - selectedFrameSet.trimEndFrames
    );
    const frameStep = isMobile ? MOBILE_FRAME_STEP : DESKTOP_FRAME_STEP;
    const frameIndices = Array.from(
      { length: Math.ceil(usableFrameCount / frameStep) },
      (_, index) => startFrame + index * frameStep
    );
    const frames: Array<HTMLImageElement | null> = Array(frameIndices.length).fill(
      null
    );

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const animation = { frame: 0 };
    let destroyed = false;
    let gsapContext: { revert: () => void } | null = null;
    let tween: gsap.core.Tween | null = null;

    const getClosestLoadedFrameIndex = (targetIndex: number) => {
      if (frames[targetIndex]) return targetIndex;

      for (let i = targetIndex; i >= 0; i -= 1) {
        if (frames[i]) return i;
      }
      for (let i = targetIndex + 1; i < frames.length; i += 1) {
        if (frames[i]) return i;
      }
      return -1;
    };

    const drawFrame = (image: HTMLImageElement) => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      const scaleFactor = isMobile
        ? (displayWidth * 1.2) / image.width
        : displayHeight / image.height;
      const scaledWidth = image.width * scaleFactor;
      const scaledHeight = image.height * scaleFactor;
      const x = (displayWidth - scaledWidth) / 2;
      const y = (displayHeight - scaledHeight) / 2;

      context.clearRect(0, 0, displayWidth, displayHeight);
      context.drawImage(image, x, y, scaledWidth, scaledHeight);
    };

    const render = () => {
      if (destroyed) return;

      const targetIndex = Math.min(
        Math.max(Math.round(animation.frame), 0),
        frameIndices.length - 1
      );
      const loadedIndex = getClosestLoadedFrameIndex(targetIndex);
      if (loadedIndex === -1) return;

      const frameImage = frames[loadedIndex];
      if (!frameImage) return;
      drawFrame(frameImage);
    };

    const resizeCanvas = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();

    const initGsap = () => {
      gsapContext = gsap.context(() => {
        tween = gsap.to(animation, {
          frame: frameIndices.length - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${Math.max(BASE_SCROLL_DISTANCE, frameIndices.length * 18)}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          onUpdate: render,
        });
      });

      ScrollTrigger.refresh();
    };

    const preloadFrames = async () => {
      try {
        frames[0] = await loadFrame(
          getFrameSrc(selectedFrameSet.basePath, frameIndices[0])
        );
        if (destroyed) return;
        render();
        initGsap();
      } catch {
        return;
      }

      let nextIndex = 1;
      const worker = async () => {
        while (!destroyed) {
          const index = nextIndex;
          nextIndex += 1;
          if (index >= frameIndices.length) return;
          try {
            const frame = await loadFrame(
              getFrameSrc(selectedFrameSet.basePath, frameIndices[index])
            );
            if (destroyed) return;
            frames[index] = frame;
          } catch {
            // Skip missing or failed frames to keep animation responsive.
          }
        }
      };

      await Promise.all(
        Array.from(
          { length: Math.min(PRELOAD_CONCURRENCY, frameIndices.length - 1) },
          () => worker()
        )
      );
    };

    void preloadFrames();

    return () => {
      destroyed = true;
      resizeObserver.disconnect();
      tween?.scrollTrigger?.kill();
      tween?.kill();
      gsapContext?.revert();
    };
  }, [variant, startFrame]);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-svh items-center justify-center bg-charcoal"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default ScrollFrameAnimation;
