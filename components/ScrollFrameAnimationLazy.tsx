"use client";

import dynamic from "next/dynamic";

const ScrollFrameAnimation = dynamic(() => import("@/components/test"), {
  ssr: false,
  loading: () => (
    <section className="relative flex min-h-svh items-center justify-center bg-charcoal" />
  ),
});

export default function ScrollFrameAnimationLazy() {
  return <ScrollFrameAnimation />;
}
