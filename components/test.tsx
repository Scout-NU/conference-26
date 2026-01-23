"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFrameAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      if (!container || !canvas) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const canvasWidth = containerWidth * 0.8;
      const canvasHeight = containerHeight * 0.8;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      setCanvasDimensions({ width: canvasWidth, height: canvasHeight });
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // ============================================
    // CUSTOMIZE THESE VALUES FOR YOUR ANIMATION
    // ============================================
    const frameCount = 139; // Number of frames in your sequence

    // Update this function to match YOUR frame file naming
    const currentFrame = (index: number) =>
      `/Unnamed%20Copy/Unnamed%20Copy_${(index + 1).toString().padStart(4, "0")}.png`;
    // ============================================

    const images: HTMLImageElement[] = [];
    const animation = { frame: 0 };

    const render = () => {
      if (!context || !images[animation.frame]) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.matchMedia(
        "only screen and (max-width: 768px)"
      ).matches;

      let scaleFactor;
      if (isMobile) {
        scaleFactor = (canvas.width * 1.4) / images[animation.frame].width;
      } else {
        scaleFactor = canvas.height / images[animation.frame].height;
      }

      const scaledWidth = images[animation.frame].width * scaleFactor;
      const scaledHeight = images[animation.frame].height * scaleFactor;
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        images[animation.frame],
        x,
        y,
        scaledWidth,
        scaledHeight
      );
    };

    const loadImages = async () => {
      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      };

      for (let i = 0; i < frameCount; i++) {
        const img = await loadImage(currentFrame(i));
        images.push(img);
      }

      gsap.to(animation, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "8000", // Scroll distance - adjust for faster/slower
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
        onUpdate: render,
      });
    };

    loadImages();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default ScrollFrameAnimation;