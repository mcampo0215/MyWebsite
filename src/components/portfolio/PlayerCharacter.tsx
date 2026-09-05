export function PlayerCharacter() {
  return (
    <div
      style={{
        width: 88,
        height: 96,
        flexShrink: 0,
        display: "grid",
        placeItems: "center",
        borderRadius: 12,
        border: "1px solid rgba(143, 214, 255, 0.32)",
        background: "radial-gradient(ellipse at bottom, #315e97, #102344)",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        width="80"
        height="80"
        role="img"
        aria-label="Pixel-art Code Knight player character"
        focusable="false"
        shapeRendering="crispEdges"
      >
        <path fill="#070f24" opacity=".5" d="M6 29h20v2H6z" />
        <path fill="#406eac" d="M12 3h8v2h3v10h-3v3h-8v-3H9V5h3zM10 18h12v9H10z" />
        <path fill="#bcecff" d="M12 5h8v2h2v3H10V7h2zM11 17h10v8H11zM8 18h3v5H8zM21 18h3v5h-3z" />
        <path fill="#14284d" d="M11 10h10v4H11zM11 26h4v4H9v-2h2zM18 26h4v2h2v2h-6z" />
        <path fill="#83edbe" d="M12 11h2v2h-2zM18 11h2v2h-2z" />
        <path fill="#4b8be0" d="M14 17h4v8h-4zM11 20h10v3H11z" />
        <path fill="#ffe08a" d="M15 19h2v3h-2zM3 20h6v2H3zM5 22h2v4H5z" />
        <path fill="#e8f8ff" d="M5 10h2v10H5zM6 8h1v2H6z" />
        <path fill="#4b8be0" d="M23 18h6v7h-2v2h-2v-2h-2z" />
        <path fill="#ffe08a" d="M25 20h2v4h-2z" />
      </svg>
    </div>
  );
}