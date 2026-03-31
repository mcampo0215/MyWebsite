"use client";
import React, { useEffect, useState } from "react";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export function TypingAnimation({
  children,
  className = "",
  duration = 100,
  delay = 0,
  as: Component = "div",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const graphemes = Array.from(children);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < graphemes.length) {
        setDisplayedText(graphemes.slice(0, i + 1).join(""));
        i++;
      } else {
      // removed stray clearInterval(typingEffect);
      }
    }, duration);
    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <Component className={`font-bold text-2xl md:text-4xl font-mono pixel-border bg-black/70 p-4 text-white ${className}`.trim()}>
      {displayedText}
    </Component>
  );
}

