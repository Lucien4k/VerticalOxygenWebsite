import { useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";

const CHECKPOINTS = [
  { id: "top", label: "Start" },
  { id: "work", label: "Work" },
  { id: "locations", label: "Locations" },
  { id: "motion", label: "In Motion" },
  { id: "about", label: "About" },
  { id: "wall-types", label: "Systems" },
  { id: "quote", label: "Quote" },
];

export function ScrollProgress() {
  const lenis = useLenis();
  // fractional index into CHECKPOINTS (0..CHECKPOINTS.length-1)
  const [fIdx, setFIdx] = useState(0);

  useEffect(() => {
    let raf = 0;
    const getTop = (id: string) => {
      if (id === "top") return -window.scrollY; // effectively 0 when at page top
      const el = document.getElementById(id);
      if (!el) return Number.POSITIVE_INFINITY;
      return el.getBoundingClientRect().top;
    };
    const update = () => {
      raf = 0;
      const tops = CHECKPOINTS.map((c) => getTop(c.id));
      // active = last checkpoint whose top <= 1px
      let active = 0;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i] <= 1) active = i;
      }
      let frac = 0;
      if (active < tops.length - 1) {
        const cur = tops[active];
        const nxt = tops[active + 1];
        const dist = nxt - cur;
        if (dist > 0) frac = Math.min(1, Math.max(0, (0 - cur) / dist));
      }
      setFIdx(active + frac);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const t = window.setTimeout(update, 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (id: string) => {
    if (id === "top") {
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    lenis?.scrollTo(el, { offset: 0, duration: 1.2 });
  };

  const steps = CHECKPOINTS.length - 1;
  const fillPct = (fIdx / steps) * 100;

  return (
    <div
      className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 md:block"
    >
      {/* Organic tapered stem */}
      <div className="relative flex h-[52vh] w-6 flex-col items-center">
        {/* Stem track — thin hairline */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 rounded-full bg-cream/25 mix-blend-difference" />

        {/* Growth fill — forest green with soft glow */}
        <div
          className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-forest"
          style={{
            height: `${fillPct}%`,
            boxShadow: "0 0 10px color-mix(in oklab, var(--forest) 45%, transparent)",
            transition: "height 260ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Checkpoint nodes */}
        {CHECKPOINTS.map((cp, i) => {
          const pos = (i / steps) * 100;
          const reached = fIdx >= i - 0.001;
          return (
            <button
              key={cp.id}
              type="button"
              onClick={() => goTo(cp.id)}
              className="group absolute left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
              style={{ top: `${pos}%` }}
              aria-label={`Jump to ${cp.label}`}
            >
              <span
                className={`block rounded-full ring-4 ring-charcoal transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-150 ${
                  reached
                    ? "h-2.5 w-2.5 bg-forest shadow-[0_0_8px_rgba(74,110,74,0.55)]"
                    : "h-2 w-2 bg-cream/40 group-hover:bg-forest"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}