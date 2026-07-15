import type { CSSProperties } from "react";

// A tiny SVG leaf that drifts down and sideways very slowly.
// Pure CSS animation, cheap to render, respects prefers-reduced-motion.
const LEAF_PATH =
  "M12 2C7 6 4 10 4 14c0 4 3 7 8 8 5-1 8-4 8-8 0-4-3-8-8-12zm0 4c2 2 4 5 4 8s-2 5-4 6c-2-1-4-3-4-6s2-6 4-8z";

type Leaf = {
  left: string;
  size: number;
  delay: string;
  duration: string;
  drift: string;
  rotate: string;
  opacity: number;
  hue: string;
};

const LEAVES: Leaf[] = [
  { left: "6%",  size: 22, delay: "0s",   duration: "22s", drift: "40px",  rotate: "180deg",  opacity: 0.35, hue: "var(--terra-light)" },
  { left: "18%", size: 14, delay: "6s",   duration: "28s", drift: "-30px", rotate: "-140deg", opacity: 0.28, hue: "var(--terra)" },
  { left: "31%", size: 28, delay: "12s",  duration: "34s", drift: "60px",  rotate: "220deg",  opacity: 0.32, hue: "var(--terra-light)" },
  { left: "44%", size: 18, delay: "3s",   duration: "26s", drift: "-45px", rotate: "-200deg", opacity: 0.3,  hue: "var(--cream)" },
  { left: "57%", size: 24, delay: "9s",   duration: "30s", drift: "35px",  rotate: "160deg",  opacity: 0.28, hue: "var(--terra-light)" },
  { left: "68%", size: 16, delay: "15s",  duration: "24s", drift: "-40px", rotate: "-180deg", opacity: 0.34, hue: "var(--terra)" },
  { left: "81%", size: 26, delay: "2s",   duration: "32s", drift: "50px",  rotate: "240deg",  opacity: 0.3,  hue: "var(--terra-light)" },
  { left: "92%", size: 20, delay: "18s",  duration: "27s", drift: "-25px", rotate: "-160deg", opacity: 0.26, hue: "var(--cream)" },
];

export function FloatingLeaves({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="leaf-drift absolute -top-10"
          style={{
            left: l.left,
            width: l.size,
            height: l.size,
            color: l.hue,
            opacity: l.opacity,
            ["--leaf-duration" as never]: l.duration,
            ["--leaf-delay" as never]: l.delay,
            ["--leaf-drift" as never]: l.drift,
            ["--leaf-rotate" as never]: l.rotate,
          } as CSSProperties}
        >
          <path d={LEAF_PATH} fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}