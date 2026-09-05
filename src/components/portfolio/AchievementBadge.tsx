import type { CSSProperties } from "react";
import type { Project } from "./types";
import styles from "./AchievementBadge.module.css";

const emblems = {
  algorithm: { color: "#8fd6ff", path: "M20 32h5v9h-5zM29 26h5v15h-5zM38 20h5v21h-5z" },
  graph: { color: "#c8a6ff", path: "M29 18h7v7h-7zM18 35h7v7h-7zM39 35h7v7h-7zM30 25h3v4h-3zM25 29h5v3h-5zM22 32h3v3h-3zM33 29h5v3h-5zM38 32h3v3h-3zM25 37h14v3H25z" },
  security: { color: "#83edbe", path: "M26 19h12v3H26zM23 22h3v9h-3zM38 22h3v9h-3zM21 30h22v14H21z" },
  goal: { color: "#ffe08a", path: "M24 19h16v4H24zM20 23h4v16h-4zM40 23h4v16h-4zM24 39h16v4H24zM29 27h6v8h-6zM26 30h12v3H26z" },
  music: { color: "#ffa8cb", path: "M28 22h15v4H28zM28 22h4v17h-4zM39 22h4v14h-4zM22 36h10v7H22zM33 33h10v7H33z" },
};

export function AchievementBadge({ badge, index }: { badge?: Project["badge"]; index: number }) {
  const kind = badge?.kind ?? "goal";
  const name = badge?.name ?? "Quest Complete";
  const emblem = emblems[kind];

  return (
    <div
      className={styles.badge}
      style={{ "--badge-color": emblem.color, "--badge-delay": `${index * -0.7}s` } as CSSProperties}
    >
      <svg className={styles.medal} viewBox="0 0 64 72" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
        <path fill="#09172e" d="M17 45h13v23l-7-5-6 5zM34 45h13v23l-6-5-7 5z" />
        <path fill={emblem.color} opacity=".65" d="M20 47h7v15l-4-3-3 3zM37 47h7v15l-3-3-4 3z" />
        <path fill="#09172e" d="M20 4h24v4h8v8h4v28h-4v8h-8v4H20v-4h-8v-8H8V16h4V8h8z" />
        <path fill={emblem.color} d="M21 7h22v4h7v7h3v24h-3v7h-7v4H21v-4h-7v-7h-3V18h3v-7h7z" />
        <path fill="#1a3455" d="M23 12h18v4h6v6h2v17h-3v7h-6v3H24v-3h-6v-7h-3V22h2v-6h6z" />
        <path fill="#ffffff" opacity=".4" d="M21 9h22v2H21zM15 13h3v7h-3z" />
        <path fill={emblem.color} d={emblem.path} />
        {kind === "security" && <path fill="#1a3455" d="M30 34h4v4h-1v3h-2v-3h-1z" />}
        <g className={styles.sparkles} fill="#fff4ca">
          <path d="M5 4h2v3h3v2H7v3H5V9H2V7h3zM56 48h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
        </g>
      </svg>
      <span className={styles.name}>{name}</span>
    </div>
  );
}