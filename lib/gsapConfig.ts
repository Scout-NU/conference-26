"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsapCoreWithGlobals = gsap.core as {
  globals?: () => Record<string, unknown>;
};
const hasRegisteredScrollTrigger = Boolean(
  gsapCoreWithGlobals.globals?.().ScrollTrigger
);

if (typeof window !== "undefined" && !hasRegisteredScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
