// components/magicui/shine-border.tsx
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;       // seconds
  shineColor?: string | string[];
}

export function ShineBorder({
  borderWidth = 2,
  duration = 14,
  shineColor = ["#ffffff", "#9ca3af"], // soft white/silver
  className,
  style,
  ...props
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(",") : shineColor;

  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent, ${colors}, transparent)`,
          backgroundSize: "300% 300%",
          padding: "var(--border-width)",
          // no masks here — we’re just drawing a border-y glow behind
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] will-change-[background-position] animate-shine",
        className
      )}
      {...props}
    />
  );
}
