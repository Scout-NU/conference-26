"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CursorTrail = dynamic(() => import("@/components/CursorTrail"), {
  ssr: false,
});

export default function CursorTrailGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    const onFirstMove = () => {
      setEnabled(true);
      window.removeEventListener("mousemove", onFirstMove);
    };

    window.addEventListener("mousemove", onFirstMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onFirstMove);
    };
  }, []);

  return enabled ? <CursorTrail /> : null;
}
