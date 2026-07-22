import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * A pinned section that scrubs a WebP frame sequence based on the user's
 * scroll position through the section. Overlay children stay sticky while
 * the sequence plays and fade out after it completes.
 */
export function ScrollFramesSection({
  frames,
  scrollLength = 2,
  preloadCount = 20,
  overlay,
  className = "",
}: {
  frames: string[];
  /** Section height as multiplier of viewport height. */
  scrollLength?: number;
  preloadCount?: number;
  overlay?: ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const rafRef = useRef(0);
  const lastDrawnRef = useRef(-1);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const blurRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Preload
  useEffect(() => {
    imagesRef.current = new Array(frames.length).fill(null);
    let cancelled = false;
    const critical = Math.min(preloadCount, frames.length);

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = frames[i];
        img.onload = () => {
          if (!cancelled) imagesRef.current[i] = img;
          resolve();
        };
        img.onerror = () => resolve();
      });

    (async () => {
      await Promise.all(Array.from({ length: critical }, (_, i) => load(i)));
      if (cancelled) return;
      setReady(true);
      let next = critical;
      const inflight = 6;
      const worker = async () => {
        while (!cancelled && next < frames.length) {
          const i = next++;
          await load(i);
        }
      };
      await Promise.all(
        Array.from({ length: Math.min(inflight, frames.length - critical) }, worker),
      );
    })();
    return () => {
      cancelled = true;
    };
  }, [frames, preloadCount]);

  useEffect(() => {
    if (!ready) return;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawnRef.current = -1;
      draw();
    };

    const drawFrame = (img: HTMLImageElement) => {
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const ir = img.width / img.height;
      const cr = cw / ch;
      let dw: number;
      let dh: number;
      if (ir > cr) {
        dh = ch;
        dw = ch * ir;
      } else {
        dw = cw;
        dh = cw / ir;
      }
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const draw = () => {
      rafRef.current = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const last = frames.length - 1;
      const target = Math.round(p * last);
      let idx = target;
      while (idx > 0 && !imagesRef.current[idx]) idx--;
      const img = imagesRef.current[idx];
      if (img && idx !== lastDrawnRef.current) {
        drawFrame(img);
        lastDrawnRef.current = idx;
      }
      setDone(p >= 0.995);
      if (blurRef.current) {
        // Ramp blur in over the last ~40% of the section scroll.
        const t = Math.min(1, Math.max(0, (p - 0.6) / 0.4));
        blurRef.current.style.backdropFilter = `blur(${t * 14}px)`;
        blurRef.current.style.opacity = String(t);
      }
      if (overlayRef.current) {
        // Slowly rise into view over the first ~55% of the section scroll.
        const r = Math.min(1, Math.max(0, p / 0.55));
        // ease-out cubic
        const eased = 1 - Math.pow(1 - r, 3);
        const ty = (1 - eased) * 45; // vh
        overlayRef.current.style.transform = `translate3d(0, ${ty}vh, 0)`;
        overlayRef.current.style.opacity = String(done ? 0 : eased);
      }
    };

    const schedule = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, frames]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-charcoal text-cream ${className}`}
      style={{ height: `${scrollLength * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div
          ref={blurRef}
          className="pointer-events-none absolute inset-0 z-[5] will-change-[backdrop-filter,opacity]"
          style={{ opacity: 0 }}
          aria-hidden
        />
        {!ready ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-charcoal">
            <div className="flex flex-col items-center gap-4 text-cream/80">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cream/20 border-t-terra" />
              <p className="text-xs uppercase tracking-[0.3em]">Loading</p>
            </div>
          </div>
        ) : null}
        {overlay ? (
          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-700"
            style={{ opacity: 0, transform: "translate3d(0, 45vh, 0)", willChange: "transform, opacity" }}
          >
            <div className="pointer-events-auto mx-auto max-w-6xl px-6">{overlay}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}