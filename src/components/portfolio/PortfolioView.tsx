import { SectionBanner } from "./SectionBanner";
import { CoursesSection } from "./CoursesSection";
import { PlayerBuildSection } from "./PlayerBuildSection";
import { ProjectsSection } from "./ProjectsSection";
import type { Course, Project } from "./types";

type PortfolioViewProps = {
  activeTab: "achievements" | "player build" | "arenas";
  courses: Course[];
  currentLevel: number;
  onBack: () => void;
  onProjectSelect: (project: Project) => void;
  onTabChange: (tab: "achievements" | "player build" | "arenas") => void;
  projects: Project[];
};

export function PortfolioView({
  activeTab,
  courses,
  currentLevel,
  onBack,
  onProjectSelect,
  onTabChange,
  projects,
}: PortfolioViewProps) {
  return (
    <div
      className="pixel-border"
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1b2e56 0%, #2c4a8a 100%)",
        border: "2px solid #fff",
        borderRadius: 24,
        boxShadow: "0 0 32px 8px #3a5ccc99",
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2.5rem 2rem",
      }}
    >
      <button
        onClick={onBack}
        className="mb-8 self-start"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          padding: "0.8rem 1.15rem",
          borderRadius: 999,
          border: "1px solid rgba(189, 229, 255, 0.36)",
          background:
            "linear-gradient(135deg, rgba(8, 22, 49, 0.92) 0%, rgba(25, 58, 108, 0.95) 55%, rgba(77, 167, 255, 0.3) 100%)",
          boxShadow:
            "0 10px 24px rgba(3, 10, 24, 0.28), inset 0 1px 0 rgba(255,255,255,0.14)",
          color: "#f5fbff",
          fontWeight: 800,
          fontSize: "0.94rem",
          letterSpacing: 0.4,
          transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
          cursor: "pointer",
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform = "translateY(-1px)";
          event.currentTarget.style.boxShadow =
            "0 14px 28px rgba(3, 10, 24, 0.34), inset 0 1px 0 rgba(255,255,255,0.18)";
          event.currentTarget.style.borderColor = "rgba(222, 242, 255, 0.64)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform = "translateY(0)";
          event.currentTarget.style.boxShadow =
            "0 10px 24px rgba(3, 10, 24, 0.28), inset 0 1px 0 rgba(255,255,255,0.14)";
          event.currentTarget.style.borderColor = "rgba(189, 229, 255, 0.36)";
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.16)",
            fontSize: "0.95rem",
            flexShrink: 0,
          }}
        >
          ←
        </span>
        Return to Intro
      </button>

      <div className="flex gap-6 mb-8 mt-2">
        <button
          onClick={() => onTabChange("achievements")}
          style={{
            fontWeight: activeTab === "achievements" ? 700 : 400,
            color: activeTab === "achievements" ? "#fff" : "#e3f0fc",
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            textDecoration: activeTab === "achievements" ? "underline" : "none",
          }}
        >
          Achievements
        </button>

        <button
          onClick={() => onTabChange("player build")}
          style={{
            fontWeight: activeTab === "player build" ? 700 : 400,
            color: activeTab === "player build" ? "#fff" : "#e3f0fc",
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            textDecoration: activeTab === "player build" ? "underline" : "none",
          }}
        >
          Player Build
        </button>

        <button
          onClick={() => onTabChange("arenas")}
          style={{
            fontWeight: activeTab === "arenas" ? 700 : 400,
            color: activeTab === "arenas" ? "#fff" : "#e3f0fc",
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            textDecoration: activeTab === "arenas" ? "underline" : "none",
          }}
        >
          Arena
        </button>
      </div>

      {activeTab === "achievements" && (
        <ProjectsSection
          currentLevel={currentLevel}
          projects={projects}
          onProjectSelect={onProjectSelect}
        />
      )}

      {activeTab === "player build" && (
        <PlayerBuildSection />
      )}

      {activeTab === "arenas" && <CoursesSection courses={courses} />}
    </div>
  );
}
