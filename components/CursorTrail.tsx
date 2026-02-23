"use client";

import { useEffect, useRef } from "react";

const PALETTE = ["#3c44f4", "#f200a9", "#e7f27e", "#e7f27e", "#badcf2"];
const TRAIL_LIFETIME_MS = 1000;
const MAX_POINTS = 75;
const MIN_INTERPOLATE_DISTANCE = 2;
const INTERPOLATE_SPACING = 2;

type TrailPoint = {
  x: number;
  y: number;
  color: string;
  time: number;
};

function createBitmapPattern(
  context: CanvasRenderingContext2D
): CanvasPattern | null {
  const tile = document.createElement("canvas");
  tile.width = 8;
  tile.height = 8;

  const tileCtx = tile.getContext("2d");
  if (!tileCtx) return null;

  tileCtx.clearRect(0, 0, tile.width, tile.height);
  tileCtx.fillStyle = "rgba(255, 255, 255, 0.28)";
  tileCtx.fillRect(0, 0, 2, 2);
  tileCtx.fillRect(4, 2, 2, 2);
  tileCtx.fillRect(2, 4, 2, 2);
  tileCtx.fillRect(6, 6, 2, 2);

  tileCtx.fillStyle = "rgba(255, 255, 255, 0.14)";
  tileCtx.fillRect(2, 0, 1, 1);
  tileCtx.fillRect(7, 1, 1, 1);
  tileCtx.fillRect(1, 6, 1, 1);

  return context.createPattern(tile, "repeat");
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const canvasEl = canvas;
    const context = ctx;

    const points: TrailPoint[] = [];
    let activeTrailColor: string | null = null;
    let animationFrameId: number | null = null;
    let lastX = 0;
    let lastY = 0;
    const bitmapPattern = createBitmapPattern(context);

    function pickRandomPaletteColor(): string {
      return PALETTE[Math.floor(Math.random() * PALETTE.length)];
    }

    function resizeCanvas() {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    }

    function interpolatePoints(p1: TrailPoint, p2: TrailPoint, steps: number) {
      const interpolated: TrailPoint[] = [];

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        interpolated.push({
          x: p1.x + (p2.x - p1.x) * t,
          y: p1.y + (p2.y - p1.y) * t,
          color: p1.color,
          time: Date.now(),
        });
      }

      return interpolated;
    }

    function handleMouseMove(e: MouseEvent) {
      if (points.length === 0 || !activeTrailColor) {
        activeTrailColor = pickRandomPaletteColor();
      }

      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        color: activeTrailColor,
        time: Date.now(),
      };

      if (points.length > 0) {
        const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
        if (dist > MIN_INTERPOLATE_DISTANCE) {
          const steps = Math.floor(dist / INTERPOLATE_SPACING);
          const interpolated = interpolatePoints(
            points[points.length - 1],
            newPoint,
            steps
          );
          points.push(...interpolated);
        } else {
          points.push(newPoint);
        }
      } else {
        points.push(newPoint);
      }

      lastX = e.clientX;
      lastY = e.clientY;

      while (points.length > MAX_POINTS) {
        points.shift();
      }
    }

    function drawDenseBlur() {
      if (points.length < 2) return;
      const now = Date.now();

      for (let i = 0; i < points.length - 1; i++) {
        const age = (now - points[i].time) / TRAIL_LIFETIME_MS;
        const alpha = Math.max(0, 1 - age);
        if (alpha <= 0) continue;

        const progress = i / points.length;
        const width = 8 * (1 - progress * 0.5);

        context.save();
        context.filter = "blur(2px)";
        context.globalAlpha = alpha * 0.6;
        context.strokeStyle = points[i].color;
        context.lineWidth = width * 1.2;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(points[i].x, points[i].y);
        context.lineTo(points[i + 1].x, points[i + 1].y);
        context.stroke();
        context.restore();

        context.save();
        context.globalAlpha = alpha;
        context.strokeStyle = points[i].color;
        context.lineWidth = width * 0.6;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(points[i].x, points[i].y);
        context.lineTo(points[i + 1].x, points[i + 1].y);
        context.stroke();
        context.restore();

        if (bitmapPattern) {
          context.save();
          context.globalAlpha = alpha * 0.35;
          context.strokeStyle = bitmapPattern;
          context.lineWidth = width * 0.9;
          context.lineCap = "round";
          context.beginPath();
          context.moveTo(points[i].x, points[i].y);
          context.lineTo(points[i + 1].x, points[i + 1].y);
          context.stroke();
          context.restore();
        }
      }
    }

    function animate() {
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);
      drawDenseBlur();

      const now = Date.now();
      while (points.length > 0 && now - points[0].time > TRAIL_LIFETIME_MS) {
        points.shift();
      }
      if (points.length === 0) {
        activeTrailColor = null;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(animate);
    }

    function stopAnimation() {
      if (animationFrameId === null) return;
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAnimation();
        return;
      }
      startAnimation();
    }

    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
