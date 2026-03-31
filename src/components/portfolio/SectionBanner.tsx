type SectionBannerProps = {
  title: string;
};

export function SectionBanner({ title }: SectionBannerProps) {
  return (
    <div className="w-full flex justify-center mb-8">
      <div
        className="animate__animated animate__fadeInDown"
        style={{
          width: "100%",
          maxWidth: 460,
          padding: "0.95rem 1.2rem",
          borderRadius: 10,
          border: "1px solid rgba(173, 223, 255, 0.42)",
          background:
            "linear-gradient(135deg, rgba(18,40,79,0.96) 0%, rgba(38,73,132,0.96) 58%, rgba(28,56,104,0.98) 100%)",
          boxShadow:
            "0 16px 28px rgba(8, 18, 42, 0.3), inset 0 0 0 1px rgba(255,255,255,0.04)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(130deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.07) 100%)",
            opacity: 0.6,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.85rem",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#8fd6ff",
              boxShadow: "0 0 12px rgba(143, 214, 255, 0.7)",
              flexShrink: 0,
            }}
          />

          <h2
            className="text-2xl md:text-3xl text-center"
            style={{
              color: "#f7fbff",
              fontWeight: 900,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              textShadow: "0 0 16px rgba(103, 184, 255, 0.22)",
              fontFamily: '"Press Start 2P", "VT323", "Pixel", "Menlo", "Monaco", monospace',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {title}
          </h2>

          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#ffe066",
              boxShadow: "0 0 12px rgba(255, 224, 102, 0.65)",
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
