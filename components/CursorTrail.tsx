'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: Array<{
      x: number;
      y: number;
      color: string;
      time: number;
    }> = [];
    const maxPoints = 60;

    function getBackgroundBrightness(x: number, y: number): number {
      const element = document.elementFromPoint(x, y);
      if (!element) return 128;
      
      const style = window.getComputedStyle(element);
      let bgColor = style.backgroundColor;
      
      let currentElement: HTMLElement | null = element as HTMLElement;
      while (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        currentElement = currentElement.parentElement;
        if (!currentElement) {
          bgColor = 'rgb(26, 26, 26)';
          break;
        }
        bgColor = window.getComputedStyle(currentElement).backgroundColor;
      }
      
      const match = bgColor.match(/\d+/g);
      if (!match) return 128;
      
      const r = parseInt(match[0]);
      const g = parseInt(match[1]);
      const b = parseInt(match[2]);
      
      return r * 0.299 + g * 0.587 + b * 0.114;
    }

    function getRainbowColor(x: number, y: number): string {
      const hue = ((x / (canvas?.width || 1)) * 360 + (y / (canvas?.height || 1)) * 360) % 360;
      const bgBrightness = getBackgroundBrightness(x, y);
      const lightness = bgBrightness < 128 
        ? 70 + (bgBrightness / 128) * 20 
        : 50 - ((bgBrightness - 128) / 128) * 20;
      
      return `hsl(${hue}, 100%, ${lightness}%)`;
    }

    function interpolatePoints(
      p1: { x: number; y: number; color: string; time: number },
      p2: { x: number; y: number; color: string; time: number },
      steps: number
    ) {
      const interpolated = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        interpolated.push({
          x: p1.x + (p2.x - p1.x) * t,
          y: p1.y + (p2.y - p1.y) * t,
          color: getRainbowColor(
            p1.x + (p2.x - p1.x) * t,
            p1.y + (p2.y - p1.y) * t
          ),
          time: Date.now(),
        });
      }
      return interpolated;
    }

    let lastX = 0;
    let lastY = 0;

    function handleMouseMove(e: MouseEvent) {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        color: getRainbowColor(e.clientX, e.clientY),
        time: Date.now(),
      };

      if (points.length > 0) {
        const dist = Math.sqrt(
          (e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2
        );
        if (dist > 5) {
          const steps = Math.floor(dist / 3);
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

      while (points.length > maxPoints) {
        points.shift();
      }
    }

    function drawDenseBlur() {
      if (points.length < 2) return;

      const now = Date.now();

      for (let i = 0; i < points.length - 1; i++) {
        const age = (now - points[i].time) / 1500;
        const alpha = Math.max(0, 1 - age);

        if (alpha <= 0) continue;

        const progress = i / points.length;
        const width = 8 * (1 - progress * 0.5);

        ctx!.save();
        ctx!.filter = 'blur(2px)';
        ctx!.globalAlpha = alpha * 0.6;
        ctx!.strokeStyle = points[i].color;
        ctx!.lineWidth = width * 1.2;
        ctx!.lineCap = 'round';

        ctx!.beginPath();
        ctx!.moveTo(points[i].x, points[i].y);
        ctx!.lineTo(points[i + 1].x, points[i + 1].y);
        ctx!.stroke();
        ctx!.restore();

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.strokeStyle = points[i].color;
        ctx!.lineWidth = width * 0.6;
        ctx!.lineCap = 'round';

        ctx!.beginPath();
        ctx!.moveTo(points[i].x, points[i].y);
        ctx!.lineTo(points[i + 1].x, points[i + 1].y);
        ctx!.stroke();
        ctx!.restore();
      }
    }

    function animate() {
     if (!ctx || !canvas) return;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas completely

    drawDenseBlur();

    const now = Date.now();
    while (points.length > 0 && now - points[0].time > 1500) {
        points.shift();
    }

    requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}