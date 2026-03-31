type CurrentLevelDisplayProps = {
  level: number;
};

export function CurrentLevelDisplay({ level }: CurrentLevelDisplayProps) {
  return (
    <div
      className="w-full max-w-3xl mb-6 mx-auto"
      style={{
        borderRadius: 22,
        border: "1.5px solid rgba(143, 214, 255, 0.42)",
        background:
          "linear-gradient(135deg, rgba(15,32,64,0.95) 0%, rgba(29,56,104,0.96) 52%, rgba(40,83,150,0.95) 100%)",
        boxShadow:
          "0 22px 44px rgba(7, 17, 38, 0.4), inset 0 0 20px rgba(255,255,255,0.05)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 36%, rgba(255,255,255,0.08))",
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />

      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "1.2rem 1.35rem",
          minHeight: 146,
        }}
      >
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left md:flex-1">
          <span
            style={{
              color: "#8fd6ff",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            Current Level
          </span>

          <span
            style={{
              color: "#f7fbff",
              fontSize: "2rem",
              fontWeight: 900,
              lineHeight: 1,
              textShadow: "0 0 18px rgba(103, 184, 255, 0.35)",
            }}
          >
            LVL {level}
          </span>
        </div>

        <div className="w-full max-w-[340px] flex flex-col items-center md:items-end gap-2 md:flex-1">
          <div
            style={{
              color: "#cfe8ff",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: 0.8,
              textTransform: "uppercase",
            }}
          >
            Progress Level
          </div>

          <div
            style={{
              width: "100%",
              height: 12,
              borderRadius: 6,
              background: "rgba(9, 28, 58, 0.78)",
              border: "1px solid rgba(143, 214, 255, 0.32)",
              overflow: "hidden",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                width: `${Math.min(level * 20, 100)}%`,
                height: "100%",
                borderRadius: 6,
                background:
                  "linear-gradient(90deg, #5a89ff 0%, #67b8ff 55%, #c4f0ff 100%)",
                boxShadow: "0 0 14px rgba(103, 184, 255, 0.45)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
