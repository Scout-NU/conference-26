"use client";

import dynamic from "next/dynamic";
import type { FrameVariant } from "@/components/test";

const ScrollFrameAnimation = dynamic<{ variant?: FrameVariant; startFrame?: number }>(
  () => import("@/components/test"),
  {
    ssr: false,
    loading: () => (
      <section className="relative flex min-h-svh items-center justify-center bg-charcoal" />
    ),
  });

export default function ScrollFrameAnimationLazy({
  variant = "original",
  startFrame,
}: {
  variant?: FrameVariant;
  startFrame?: number;
}) {
  return <ScrollFrameAnimation variant={variant} startFrame={startFrame} />;
}
