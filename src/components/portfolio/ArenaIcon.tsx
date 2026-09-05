import type { CSSProperties } from "react";
import styles from "./ArenaIcon.module.css";

type ArenaSprite = { color: string; shape: string; detail: string };

const sprites: Record<string, ArenaSprite> = {
  "Data Structures": {
    color: "#8fd6ff",
    shape: "M12 5h8v8h-8zM6 16h8v8H6zM18 16h8v8h-8z",
    detail: "M14 7h4v2h-4zM8 18h4v2H8zM20 18h4v2h-4zM15 13h2v3h-2zM10 14h12v2H10z",
  },
  "Design & Analysis of Algorithms": {
    color: "#c8a6ff",
    shape: "M6 7h20v4H6zM10 11h12v3H10zM13 14h6v4h-6zM10 18h12v3H10zM6 21h20v4H6z",
    detail: "M10 8h12v2H10zM14 12h4v2h-4zM15 16h2v4h-2zM12 21h8v2h-8z",
  },
  "Operating Systems": {
    color: "#83edbe",
    shape: "M6 6h20v16H6zM14 22h4v3h-4zM10 25h12v2H10z",
    detail: "M9 9h14v10H9zM11 11h2v2h-2zM13 13h2v2h-2zM11 15h2v2h-2zM17 15h4v2h-4z",
  },
  "Database Systems": {
    color: "#ffe08a",
    shape: "M7 8h18v3h3v14H4V11h3z",
    detail: "M8 10h16v2H8zM6 15h20v3H6zM14 14h4v7h-4zM7 20h2v3H7zM23 20h2v3h-2z",
  },
  "Software Engineering": {
    color: "#ffb78f",
    shape: "M9 5h14v4h3v5H9zM14 14h5v13h-5zM6 8h3v9H6z",
    detail: "M11 7h10v2H11zM21 10h3v2h-3zM16 16h2v9h-2z",
  },
  "Computer Networks": {
    color: "#82e6ed",
    shape: "M12 4h8v8h-8zM3 20h8v8H3zM21 20h8v8h-8zM15 12h2v6h-2zM6 16h20v2H6zM6 18h2v2H6zM24 18h2v2h-2z",
    detail: "M14 6h4v3h-4zM5 22h4v3H5zM23 22h4v3h-4z",
  },
  "Web Development": {
    color: "#9dabff",
    shape: "M11 4h10v3h4v4h3v10h-3v4h-4v3H11v-3H7v-4H4V11h3V7h4z",
    detail: "M12 8h8v3h3v10h-3v3h-8v-3H9V11h3zM14 12h4v3h-4zM12 15h4v6h-4zM16 19h4v3h-4z",
  },
  "Artificial Intelligence": {
    color: "#83edbe",
    shape: "M14 3h4v4h-4zM7 8h18v14H7zM4 12h3v7H4zM25 12h3v7h-3zM10 22h12v5H10z",
    detail: "M10 11h4v5h-4zM18 11h4v5h-4zM12 19h8v2h-8zM14 24h4v2h-4z",
  },
  "Discrete Mathematics": {
    color: "#ffa8cb",
    shape: "M9 5h14v3h3v17h-3v3H9v-3H6V8h3z",
    detail: "M10 9h4v4h-4zM18 9h4v4h-4zM14 14h4v4h-4zM10 19h4v4h-4zM18 19h4v4h-4z",
  },
  "Mobile App Development": {
    color: "#b7dd8b",
    shape: "M8 4h16v24H8zM6 8h2v16H6zM24 8h2v16h-2z",
    detail: "M11 7h10v10H11zM11 21h6v2h-6zM13 19h2v6h-2zM20 20h2v2h-2zM19 24h2v2h-2z",
  },
  "Programming 1": {
    color: "#8fd6ff",
    shape: "M6 6h20v16H6zM3 23h26v3H3z",
    detail: "M9 9h14v10H9zM11 12h2v2h-2zM13 14h2v2h-2zM17 16h4v2h-4z",
  },
  "Programming 2": {
    color: "#c8a6ff",
    shape: "M6 6h20v16H6zM3 23h26v3H3z",
    detail: "M10 10h3v8h-3zM19 10h3v8h-3zM14 12h4v3h-4zM14 17h4v2h-4z",
  },
  "Programming for Artificial Intelligence": {
    color: "#ffe08a",
    shape: "M12 3h8v4h4v4h4v8h-4v4h-4v5h-8v-5H8v-4H4v-8h4V7h4z",
    detail: "M13 7h6v4h3v7h-3v5h-6v-5h-3v-7h3zM14 11h3v7h-3z",
  },
  "Theory of Computation": {
    color: "#ffb78f",
    shape: "M5 6h9v2h4V6h9v20h-9v2h-4v-2H5z",
    detail: "M8 9h4v2H8zM8 14h4v2H8zM8 19h4v2H8zM20 9h4v2h-4zM20 14h4v2h-4zM20 19h4v2h-4zM15 11h2v13h-2z",
  },
};

export function ArenaIcon({ course, index }: { course: string; index: number }) {
  const sprite = sprites[course] ?? sprites["Programming for Artificial Intelligence"];

  return (
    <div className={styles.frame} style={{ "--arena-color": sprite.color, "--arena-delay": `${index * -0.45}s` } as CSSProperties}>
      <svg viewBox="0 0 32 32" width="56" height="56" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
        <path fill="#08162d" d="M7 29h18v2H7z" />
        <g className={styles.item}>
          <path fill={sprite.color} d={sprite.shape} />
          <path fill="#203859" d={sprite.detail} />
        </g>
        <g className={styles.sparkle} fill="#fff3c9">
          <path d="M3 2h1v2h2v1H4v2H3V5H1V4h2zM28 24h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
        </g>
      </svg>
    </div>
  );
}