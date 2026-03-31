import { CurrentLevelDisplay } from "./CurrentLevelDisplay";
import { SectionBanner } from "./SectionBanner";
import type { Project } from "./types";

type ProjectsSectionProps = {
  currentLevel: number;
  projects: Project[];
  onProjectSelect: (project: Project) => void;
};

export function ProjectsSection({
  currentLevel,
  projects,
  onProjectSelect,
}: ProjectsSectionProps) {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <SectionBanner title="Achievements Gained" />

      <CurrentLevelDisplay level={currentLevel} />

      <div className="flex flex-col gap-4 max-w-3xl mx-auto mt-8">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            onClick={() => onProjectSelect(project)}
            className="cursor-pointer animate__animated animate__fadeInUp flex flex-col sm:flex-row items-start sm:items-center"
            style={{
              animationDelay: `${idx * 0.12}s`,
              borderRadius: 8,
              padding: "1.1rem 1.35rem",
              minHeight: 124,
              justifyContent: "space-between",
              gap: "1rem",
              border: "1px solid rgba(164, 211, 255, 0.42)",
              background:
                "linear-gradient(145deg, rgba(22,45,88,0.95) 0%, rgba(32,61,112,0.94) 55%, rgba(25,50,96,0.98) 100%)",
              boxShadow:
                "0 14px 28px rgba(8, 18, 42, 0.34), inset 0 0 0 1px rgba(255,255,255,0.03)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(140deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 34%, rgba(255,255,255,0.06) 100%)",
                opacity: 0.55,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                flex: 1,
                minWidth: 0,
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  color: "#eff8ff",
                  textShadow: "0 0 14px rgba(103, 184, 255, 0.24)",
                  marginBottom: "0.65rem",
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  color: "#d3e8ff",
                  fontSize: "0.84rem",
                  fontWeight: 800,
                  letterSpacing: 0.6,
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                Tools Used
              </div>

              <p
                style={{
                  color: "#bfe3ff",
                  lineHeight: 1.55,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                {project.tech.join(" • ")}
              </p>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: "#8fd6ff",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  letterSpacing: 0.4,
                  textTransform: "uppercase",
                }}
              >
                Open Details
              </span>
              <span
                style={{
                  color: "#f4fbff",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                }}
              >
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
