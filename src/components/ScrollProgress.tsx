import { useEffect, useState } from "react";

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
  const [p, setP] = useState(0);
  const [marks, setMarks] = useState<number[]>([]);

  // Measure each section's position (as a fraction of total scrollable height)
  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const positions = CHECKPOINTS.map((c) => {
        if (c.id === "top") return 0;
        const el = document.getElementById(c.id);
        if (!el) return 1;
        const top = el.getBoundingClientRect().top + window.scrollY;
        return Math.min(1, Math.max(0, top / total));
      });
      setMarks(positions);
    };
    measure();
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY || doc.scrollTop;
      setP(total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 md:block"
    >
      {/* Organic tapered stem */}
      <div className="relative flex h-[52vh] w-6 flex-col items-center">
        {/* Stem track — thin hairline */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 rounded-full bg-cream/25 mix-blend-difference" />

        {/* Growth fill — terracotta with soft glow */}
        <div
          className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-terra"
          style={{
            height: `${p * 100}%`,
            boxShadow: "0 0 10px color-mix(in oklab, var(--terra) 45%, transparent)",
            transition: "height 260ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Checkpoint nodes */}
        {marks.map((m, i) => {
          const cp = CHECKPOINTS[i];
          const reached = p >= m - 0.001;
          return (
            <button
              key={cp.id}
              type="button"
              onClick={() => goTo(cp.id)}
              className="group absolute left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
              style={{ top: `${m * 100}%` }}
              aria-label={`Jump to ${cp.label}`}
            >
              <span
                className={`block rounded-full ring-4 ring-charcoal transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-150 ${
                  reached
                    ? "h-2.5 w-2.5 bg-terra shadow-[0_0_8px_rgba(201,123,90,0.55)]"
                    : "h-2 w-2 bg-cream/40 group-hover:bg-terra"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}