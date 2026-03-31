type ProgressBarProps = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
        <span style={{ color: "#dcecff" }}>{label}</span>
        <span style={{ color: "#8fd6ff" }}>{value}%</span>
      </div>
      <div
        style={{
          width: "100%",
          height: 12,
          borderRadius: 999,
          background: "rgba(9, 28, 58, 0.75)",
          border: "1px solid rgba(143, 214, 255, 0.35)",
          overflow: "hidden",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #4579d6 0%, #67b8ff 55%, #9de4ff 100%)",
            boxShadow: "0 0 14px rgba(103, 184, 255, 0.4)",
            transition: "width 0.35s ease",
          }}
        />
      </div>
    </div>
  );
}
