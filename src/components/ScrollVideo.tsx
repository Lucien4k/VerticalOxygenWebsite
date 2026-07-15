import { useEffect, useRef, useState } from "react";

/**
 * A full-viewport section that pins while the user scrolls,
 * scrubbing through a video frame-by-frame based on scroll position.
 */
export function ScrollVideo({
  src,
  poster,
  children,
  scrollLength = 2.5,
}: {
  src: string;
  poster?: string;
  children?: React.ReactNode;
  /** Multiplier of viewport height controlling how long the scrub lasts. */
  scrollLength?: number;
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
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetTime = 0;

    const tick = () => {
      raf = 0;
      // Smoothly ease currentTime toward target for buttery scrubbing
      const cur = video.currentTime;
      const diff = targetTime - cur;
      if (Math.abs(diff) < 0.02) {
        video.currentTime = targetTime;
      } else {
        video.currentTime = cur + diff * 0.2;
        raf = requestAnimationFrame(tick);
      }
    };

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const dur = video.duration || 0;
      targetTime = Math.max(0, Math.min(dur - 0.05, p * dur));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <section
      ref={wrapRef}
      className="relative bg-charcoal text-cream"
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
          // @ts-expect-error non-standard iOS attribute
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" aria-hidden />
        {children ? (
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}