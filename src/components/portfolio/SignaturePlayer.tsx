"use client";

import { useState } from "react";
import styles from "./SignaturePlayer.module.css";

export function SignaturePlayer() {
  const [isWalking, setIsWalking] = useState(false);

  return (
    <div className={styles.panel}>
      <div className={styles.scene} data-walking={isWalking}>
        <span className={styles.playerTag}>MC / PLAYER 01</span>
        <span className={styles.greeting}>Ready for a new adventure</span>
        <div className={styles.skyline} aria-hidden="true">
          {[0, 1].map((tile) => (
        <svg key={tile} viewBox="0 0 160 70" preserveAspectRatio="none" focusable="false" shapeRendering="crispEdges">
          <path fill="#274774" d="M0 70V40h14v-8h12v38h5V22h7V12h2V4h2v8h2v10h7v48h7V35h17v35h7V27h7v-8h10v8h7v43h8V42h17v28h6V30h15v40z" />
          <path fill="#88c2e0" opacity=".35" d="M5 47h3v4H5zM18 40h3v4h-3zM36 30h3v4h-3zM44 40h3v4h-3zM62 42h3v4h-3zM69 52h3v4h-3zM89 34h3v4h-3zM97 44h3v4h-3zM119 48h3v4h-3zM141 37h3v4h-3zM148 48h3v4h-3z" />
        </svg>
          ))}
        </div>

        <button
          type="button"
          className={styles.characterButton}
          aria-label="Walk with Matthew"
          aria-pressed={isWalking}
          onClick={() => setIsWalking((walking) => !walking)}
        >
        <svg
          className={styles.character}
          viewBox="0 0 64 72"
          aria-hidden="true"
          focusable="false"
          shapeRendering="crispEdges"
        >
          <path fill="#070f23" opacity=".6" d="M17 65h31v3H17z" />
          {/* Sneakers and trousers. */}
          <path fill="#101c36" d="M23 48h19v6H23z" />
          <g className={styles.leftLeg}>
            <path fill="#101c36" d="M23 51h7v13h-7z" />
            <path fill="#416490" d="M25 51h3v10h-3z" />
            <path fill="#e4f6ff" d="M21 62h9v4H19v-2h2z" />
            <path fill="#7ff3cb" d="M19 65h11v1H19z" />
          </g>
          <g className={styles.rightLeg}>
            <path fill="#101c36" d="M33 51h7v13h-7z" />
            <path fill="#416490" d="M35 51h3v10h-3z" />
            <path fill="#e4f6ff" d="M33 62h9v2h3v2H33z" />
            <path fill="#7ff3cb" d="M33 65h12v1H33z" />
          </g>
          <g className={styles.body}>
          {/* Blue varsity jacket and pixel MC monogram. */}
          <path fill="#10203e" d="M23 30h17v2h4v18H20V34h3z" />
          <path fill="#4d91e4" d="M24 32h15v2h3v14H23V34h1z" />
          <path fill="#a8dfff" d="M23 34h3v12h-3zM39 34h3v12h-3z" />
          <path fill="#7ff3cb" d="M27 32h4v3h-4zM34 32h4v3h-4zM24 47h17v2H24z" />
          <path fill="#f0faff" d="M27 37h1v5h-1zM28 38h1v1h-1zM29 39h1v1h-1zM30 38h1v1h-1zM31 37h1v5h-1zM35 37h4v1h-4zM34 38h1v3h-1zM35 41h4v1h-4z" />
          {/* The waving arm pivots at the shoulder, not the hand. */}
          <g className={styles.wavingArm}>
            <path fill="#10203e" d="M40 32h5v-5h3v-7h7v10h-3v6h-4v5h-7z" />
            <path fill="#a8dfff" d="M42 33h4v-4h4v5h-4v5h-4z" />
            <path fill="#7ff3cb" d="M46 27h5v3h-5z" />
            <path fill="#e8b28d" d="M48 22h6v6h-6zM47 20h2v5h-2zM49 17h2v7h-2zM52 18h2v6h-2zM54 21h2v5h-2z" />
            <path fill="#ffcfaa" d="M49 23h4v3h-4z" />
          </g>
          {/* Face, swept hair, and mint headphones. */}
          <path fill="#e8b28d" d="M25 16h15v12h-3v4h-9v-3h-3z" />
          <path fill="#ffcfaa" d="M27 18h11v8H27z" />
          <path fill="#17213a" d="M22 15h2v-4h5V9h10v3h3v8h-4v-5h-5v2h-8v5h-3z" />
          <path fill="#3c4c68" d="M26 12h11v2H26zM25 14h5v2h-5z" />
          <path fill="#10203e" d="M28 21h2v2h-2zM35 21h2v2h-2z" />
          <path fill="#fff5e9" d="M30 26h5v1h-5z" />
          <path fill="#7ff3cb" d="M22 18h3v8h-3zM40 18h3v8h-3zM23 13h2v5h-2zM25 11h14v2H25zM39 13h2v5h-2z" />
          <path fill="#318b87" d="M22 21h2v4h-2zM41 21h2v4h-2z" />
          {/* Hand-held coding console. */}
          <path fill="#a8dfff" d="M19 35h4v9h-4z" />
          <path fill="#e8b28d" d="M19 43h5v5h-5z" />
          <path fill="#0a172e" d="M12 39h10v14H12z" />
          <path fill="#7ff3cb" d="M13 40h8v10h-8z" />
          <path fill="#183c50" d="M15 42h1v1h-1zM14 43h1v2h-1zM15 45h1v1h-1zM18 42h1v1h-1zM19 43h1v2h-1zM18 45h1v1h-1zM16 48h3v1h-3z" />
          <path fill="#e4f6ff" d="M16 51h2v1h-2z" />
          </g>
        </svg>
        </button>
        <span className={styles.ground} aria-hidden="true" />
      </div>

      <div className={styles.details}>
        <span className={styles.eyebrow}>Signature character / MC</span>
        <h3>Matthew, the Code Crafter</h3>
        <p>NYC roots. Engineer mindset. Always ready to build the next adventure.</p>
        <p className={styles.controls} aria-live="polite">
          {isWalking ? "Adventure in progress — click Matthew to stop." : "Click Matthew to explore the city."}
        </p>
      </div>
    </div>
  );
}