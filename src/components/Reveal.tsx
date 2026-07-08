import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode, CSSProperties } from "react";

type Variant = "up" | "fade" | "scale";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  const util = variant === "fade" ? "reveal-fade" : variant === "scale" ? "reveal-scale" : "reveal";
  const style: CSSProperties = delay ? { animationDelay: `${delay}ms` } : {};
  return (
    <div ref={ref} className={`${util} ${className}`} style={style}>
      {children}
    </div>
  );
}