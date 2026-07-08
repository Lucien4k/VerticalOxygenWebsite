import { useReveal } from "@/hooks/use-reveal";
import type { CSSProperties } from "react";

export function WordsReveal({
  text,
  as: Tag = "h2",
  className = "",
  delayStep = 60,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delayStep?: number;
}) {
  const ref = useReveal<HTMLElement>();
  const words = text.split(" ");
  return (
    <Tag
      ref={ref as never}
      className={`words ${className}`}
      style={{ ["--step" as never]: `${delayStep}ms` }}
    >
      {words.map((w, i) => (
        <span key={i} className="word" style={{ ["--i" as never]: i } as CSSProperties}>
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}