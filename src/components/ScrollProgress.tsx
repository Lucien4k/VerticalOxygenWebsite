import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

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

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-[60] hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-3"
      aria-hidden
    >
      <span className="font-serif text-xs italic text-cream/70 mix-blend-difference">
        {String(pct).padStart(2, "0")}
      </span>
      <div className="relative h-[40vh] w-[2px] overflow-hidden rounded-full bg-cream/20 mix-blend-difference">
        <div
          className="absolute inset-x-0 top-0 rounded-full bg-terra-light"
          style={{ height: `${pct}%`, transition: "height 0.15s linear" }}
        />
      </div>
      <span className="font-serif text-xs italic text-cream/50 mix-blend-difference">100</span>
    </div>
  );
}