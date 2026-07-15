import { useEffect, useRef, useState } from "react";

/**
 * Scroll-controlled WebP image sequence.
 *
 * Fills its parent absolutely. Maps window scroll from 0 → `scrollRange` (px)
 * to frame index 0 → N-1, drawing the current frame to a canvas via
 * requestAnimationFrame. Preloads the first `preloadCount` frames before
 * revealing; remaining frames stream in the background.
 */
export function ScrollFrames({
  frames,
  scrollRange,
  preloadCount = 20,
  className = "",
  onComplete,
}: {
  frames: string[];
  /** Pixel distance over which the sequence scrubs. Defaults to viewport height. */
  scrollRange?: number;
  preloadCount?: number;
  className?: string;
  /** Called with true when progress reaches 1, false when it retreats below. */
  onComplete?: (done: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const rafRef = useRef(0);
  const lastDrawnRef = useRef(-1);
  const completeRef = useRef(false);
  const [ready, setReady] = useState(false);

  // Preload frames: first `preloadCount` block reveal, rest stream in background.
  useEffect(() => {
    imagesRef.current = new Array(frames.length).fill(null);
    let cancelled = false;
    let loadedCritical = 0;
    const critical = Math.min(preloadCount, frames.length);

    const load = (i: number, critical: boolean) =>
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

    // Preload critical frames in parallel, then reveal.
    (async () => {
      await Promise.all(
        Array.from({ length: critical }, (_, i) =>
          load(i, true).then(() => {
            loadedCritical++;
          }),
        ),
      );
      if (cancelled) return;
      setReady(true);
      // Background-load the rest, throttled to a handful in flight.
      const rest = frames.length - critical;
      let next = critical;
      const inflight = 6;
      const worker = async () => {
        while (!cancelled && next < frames.length) {
          const i = next++;
          await load(i, false);
        }
      };
      await Promise.all(Array.from({ length: Math.min(inflight, rest) }, worker));
    })();

    return () => {
      cancelled = true;
    };
  }, [frames, preloadCount]);

  // Scroll → frame index.
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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
      let dw = cw;
      let dh = ch;
      // object-fit: cover
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
      const range = scrollRange ?? window.innerHeight;
      const y = window.scrollY || window.pageYOffset || 0;
      const p = Math.max(0, Math.min(1, y / Math.max(1, range)));
      const last = frames.length - 1;
      const target = Math.round(p * last);
      // Walk backwards to the nearest loaded frame so we always paint something sensible.
      let idx = target;
      while (idx > 0 && !imagesRef.current[idx]) idx--;
      const img = imagesRef.current[idx];
      if (img && idx !== lastDrawnRef.current) {
        drawFrame(img);
        lastDrawnRef.current = idx;
      }
      const done = p >= 1;
      if (done !== completeRef.current) {
        completeRef.current = done;
        onComplete?.(done);
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
  }, [ready, frames, scrollRange, onComplete]);

  return (
    <>
      <canvas ref={canvasRef} className={`h-full w-full ${className}`} />
      {!ready ? (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-charcoal">
          <div className="flex flex-col items-center gap-4 text-cream/80">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cream/20 border-t-terra" />
            <p className="text-xs uppercase tracking-[0.3em]">Loading</p>
          </div>
        </div>
      ) : null}
    </>
  );
}