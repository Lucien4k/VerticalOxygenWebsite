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
  const [hovered, setHovered] = useState<number | null>(null);

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

  const pct = Math.round(p * 100);

  const goTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="fixed right-5 top-1/2 z-[60] hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-4"
      aria-hidden
    >
      {/* Track with segmented column border */}
      <div className="relative h-[46vh] w-[10px]">
        {/* Outer column border */}
        <div className="absolute inset-0 rounded-full border border-cream/40 mix-blend-difference" />
        {/* Track background */}
        <div className="absolute inset-[3px] overflow-hidden rounded-full bg-cream/10 mix-blend-difference">
          {/* Fill */}
          <div
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-terra-light via-terra to-forest"
            style={{
              height: `${pct}%`,
              transition: "height 220ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          {/* Segment dividers — vertical column ticks across the track */}
          {marks.slice(1, -1).map((m, i) => (
            <div
              key={i}
              className="absolute inset-x-0 h-px bg-cream/40 mix-blend-difference"
              style={{ top: `${m * 100}%` }}
            />
          ))}
        </div>

        {/* Checkpoint nodes */}
        {marks.map((m, i) => {
          const cp = CHECKPOINTS[i];
          const reached = p >= m - 0.001;
          const active =
            i === marks.length - 1
              ? reached
              : reached && p < (marks[i + 1] ?? 1);
          return (
            <button
              key={cp.id}
              type="button"
              onClick={() => goTo(cp.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className="group absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${m * 100}%` }}
              aria-label={`Jump to ${cp.label}`}
            >
              {/* Pulse ring when active */}
              {active && (
                <span className="marker-pulse absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terra-light" />
              )}
              {/* Dot */}
              <span
                className={`relative block h-3 w-3 rounded-full ring-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  reached
                    ? "scale-100 bg-terra-light ring-cream/90"
                    : "scale-90 bg-cream/20 ring-cream/50"
                } ${active ? "scale-125" : ""} group-hover:scale-150 group-focus-visible:scale-150`}
              />
              {/* Label pill */}
              <span
                className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-charcoal/85 px-3 py-1 font-serif text-xs italic text-cream shadow-lg backdrop-blur-sm transition-all duration-300 ${
                  hovered === i || active
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0"
                }`}
              >
                {cp.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}