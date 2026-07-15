import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * A full-viewport section that pins while the user scrolls,
 * scrubbing through a video frame-by-frame based on scroll position.
 */
export function ScrollVideo({
  src,
  poster,
  children,
  scrollLength = 2.5,
  overlay,
  className = "",
}: {
  src: string;
  poster?: string;
  children?: ReactNode;
  /** Multiplier of viewport height controlling how long the scrub lasts. */
  scrollLength?: number;
  /** Optional overlay rendered inside the sticky viewport, above the video. */
  overlay?: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMeta = () => setReady(true);
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) setReady(true);

    // Prime the decoder: some browsers won't render frames from a seek
    // until the video has been played at least once.
    const prime = () => {
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.then(() => video.pause()).catch(() => {
          /* autoplay blocked — that's fine, seek still works */
        });
      }
    };
    if (video.readyState >= 2) prime();
    else video.addEventListener("canplay", prime, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("canplay", prime);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const compute = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      return total > 0 ? scrolled / total : 0;
    };

    const apply = () => {
      raf = 0;
      const p = compute();
      const dur = video.duration || 0;
      const t = Math.max(0, Math.min(dur - 0.05, p * dur));
      // Video is re-encoded all-intra so direct seek is frame-accurate
      if (Math.abs(video.currentTime - t) > 0.008) {
        video.currentTime = t;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <section
      ref={wrapRef}
      className={`relative bg-charcoal text-cream ${className}`}
      style={{ height: `${scrollLength * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" aria-hidden />
        {overlay}
        {children ? (
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}