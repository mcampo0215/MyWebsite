import { FaGithub, FaLinkedin } from "react-icons/fa";

type IntroPanelProps = {
  aboutMe: string;
  onStart: () => void;
};

export function IntroPanel({ aboutMe, onStart }: IntroPanelProps) {
  return (
    <div
      className="pixel-border"
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1b2e56 0%, #2c4a8a 100%)",
        border: "2.5px solid #5b8fd6",
        borderRadius: 24,
        boxShadow: "0 0 32px 8px #0a183699",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 3rem",
        gap: "1.5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: 24,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.16) 60%, rgba(255,255,255,0.03) 100%)",
          backgroundSize: "200% 200%",
          animation: "softGlimmerDiagonal 4.5s linear infinite",
          opacity: 0.32,
          zIndex: 1,
          mixBlendMode: "lighten",
        }}
      />

      <h1
        className="text-2xl md:text-4xl font-extrabold text-center mb-4"
        style={{
          color: "#bfc9d1",
          textShadow: "0 1px 2px #222",
          zIndex: 2,
          fontFamily:
            '"Press Start 2P", "VT323", "Pixel", "Menlo", "Monaco", monospace',
        }}
      >
        Matthew Campoverde
      </h1>

      <img
        src="/controller.png"
        alt="Retro Game Controller"
        width={140}
        height={70}
        style={{
          margin: "0 auto 2rem auto",
          display: "block",
          imageRendering: "pixelated",
          zIndex: 2,
          filter:
            "drop-shadow(0 0 0 #e3f0fc) drop-shadow(0 0 8px #e3f0fc) drop-shadow(0 0 16px #ffffff)",
          animation: "controllerGlowWhite 2.5s linear infinite",
        }}
      />

      <div
        className="max-w-2xl mx-auto mb-4 text-center text-sm"
        style={{
          color: "#bfc9d1",
          zIndex: 2,
          textShadow: "0 1px 6px #3a5ccc",
          fontSize: "0.98rem",
          lineHeight: 1.5,
        }}
      >
        {aboutMe}
      </div>

      <p style={{ color: "#bfc9d1", zIndex: 2 }}>mcampo1502@gmail.com</p>

      <div className="flex flex-row gap-4 mb-2 z-10">
        <a
          href="https://github.com/mcampo0215"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          style={{
            color: "#fff",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          <FaGithub className="w-5 h-5" /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/matthewcampoverde"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          style={{
            color: "#fff",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          <FaLinkedin className="w-5 h-5" /> LinkedIn
        </a>
      </div>

      <a
        className="text-lg md:text-xl mt-2 mb-2 cursor-pointer press-start-blink"
        style={{
          color: "#bfc9d1",
          fontWeight: 900,
          zIndex: 2,
          textDecoration: "underline",
          letterSpacing: 1,
          background: "none",
          border: "none",
          padding: 0,
          textShadow: "0 1px 2px #222",
          transition: "color 0.2s",
          animation: "pressStartBlink 1.1s steps(2, start) infinite",
          fontFamily:
            '"Press Start 2P", "VT323", "Pixel", "Menlo", "Monaco", monospace',
        }}
        onClick={onStart}
      >
        Click to Start
      </a>
    </div>
  );
}
