import {
  Binary,
  Blocks,
  BrainCircuit,
  Database,
  Globe,
  Network,
  Smartphone,
  Spline,
  SquareCode,
  Wrench,
} from "lucide-react";
import { SectionBanner } from "./SectionBanner";
import type { Course } from "./types";

type CoursesSectionProps = {
  courses: Course[];
};

const iconMap = {
  "Data Structures": Blocks,
  Algorithms: Spline,
  "Operating Systems": SquareCode,
  "Database Systems": Database,
  "Software Engineering": Wrench,
  "Computer Networks": Network,
  "Web Development": Globe,
  "Artificial Intelligence": BrainCircuit,
  "Discrete Mathematics": Binary,
  "Mobile App Development": Smartphone,
} as const;

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <SectionBanner title="Arenas Completed" />

      <div
        className="mb-8 max-w-3xl mx-auto text-center"
        style={{
          color: "#c9e7ff",
          lineHeight: 1.7,
          fontSize: "0.98rem",
        }}
      >
        Each arena represents a core computer science domain I have cleared
        through coursework, hands-on builds, and deeper technical study.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center px-2">
        {courses.map((course) => (
          <div key={course.name} className="flex">
            {(() => {
              const Icon = iconMap[course.name as keyof typeof iconMap];

              return (
                <div
                  className="w-full"
                  style={{
                    position: "relative",
                    borderRadius: 14,
                    border: "1px solid rgba(163, 212, 255, 0.36)",
                    background:
                      "linear-gradient(155deg, rgba(17,36,72,0.98) 0%, rgba(26,54,103,0.96) 58%, rgba(20,44,88,0.98) 100%)",
                    boxShadow:
                      "0 16px 28px rgba(8, 18, 42, 0.32), inset 0 0 0 1px rgba(255,255,255,0.03)",
                    padding: "1.1rem",
                    minHeight: 210,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(140deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.06) 100%)",
                      opacity: 0.55,
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <span
                        style={{
                          padding: "0.32rem 0.65rem",
                          borderRadius: 999,
                          border: "1px solid rgba(143, 214, 255, 0.24)",
                          background: "rgba(10, 25, 50, 0.5)",
                          color: "#8fd6ff",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          letterSpacing: 0.8,
                          textTransform: "uppercase",
                        }}
                      >
                        Arena Clear
                      </span>

                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 14,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, rgba(103, 184, 255, 0.22), rgba(255, 224, 102, 0.14))",
                          border: "1px solid rgba(173, 223, 255, 0.28)",
                          boxShadow:
                            "0 0 18px rgba(103, 184, 255, 0.16), inset 0 0 12px rgba(255,255,255,0.04)",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          size={25}
                          strokeWidth={2.1}
                          color="#d9f3ff"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        color: "#f7fbff",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        letterSpacing: 0.6,
                        lineHeight: 1.35,
                        marginBottom: "0.7rem",
                      }}
                    >
                      {course.name}
                    </div>

                    <div
                      style={{
                        color: "#c4dcff",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                      }}
                    >
                      Completed through NYIT coursework with a focus on
                      practical engineering fundamentals.
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span
                        style={{
                          color: "#ffe066",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                          letterSpacing: 0.8,
                          textTransform: "uppercase",
                        }}
                      >
                        Cleared
                      </span>

                      <span
                        style={{
                          color: "#8fd6ff",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                        }}
                      >
                        NYIT
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        ))}
      </div>
    </section>
  );
}
