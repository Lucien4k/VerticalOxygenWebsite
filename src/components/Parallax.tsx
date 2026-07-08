import { useParallax } from "@/hooks/use-parallax";
import type { ReactNode, CSSProperties } from "react";

export function Parallax({
  children,
  strength = 60,
  className = "",
  style,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useParallax<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`parallax ${className}`}
      style={{ ["--parallax-strength" as never]: `${strength}px`, ...style }}
    >
      {children}
    </div>
  );
}