import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode, CSSProperties } from "react";

type Variant = "up" | "fade" | "scale";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useReveal<HTMLElement>();
  const util = variant === "fade" ? "reveal-fade" : variant === "scale" ? "reveal-scale" : "reveal";
  const style: CSSProperties = delay ? { animationDelay: `${delay}ms` } : {};
  // @ts-expect-error dynamic tag ref
  return (
    <Tag ref={ref} className={`${util} ${className}`} style={style}>
      {children}
    </Tag>
  );
}