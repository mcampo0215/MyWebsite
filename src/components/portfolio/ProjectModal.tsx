"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import type { Project } from "./types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background:
          "radial-gradient(circle at top, rgba(82, 140, 236, 0.2), rgba(0,0,0,0.78))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate__animated animate__zoomIn"
        style={{
          width: "100%",
          maxWidth: 860,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          borderRadius: 28,
          border: "1.5px solid rgba(142, 214, 255, 0.55)",
          background:
            "linear-gradient(145deg, rgba(19,41,79,0.96) 0%, rgba(32,67,122,0.96) 55%, rgba(28,56,104,0.98) 100%)",
          boxShadow:
            "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 28px rgba(76, 133, 228, 0.28)",
          padding: "2rem",
          color: "#f6fbff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 28,
            pointerEvents: "none",
            background:
              "linear-gradient(130deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.08) 100%)",
            opacity: 0.55,
          }}
        />

        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: "999px",
            border: "1px solid rgba(143, 214, 255, 0.4)",
            background: "rgba(8, 22, 44, 0.78)",
            color: "#dff3ff",
            fontSize: 22,
            fontWeight: 900,
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          ×
        </button>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div className="flex flex-col gap-3 pr-10">
            <span
              style={{
                width: "fit-content",
                padding: "0.35rem 0.75rem",
                borderRadius: 999,
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#091c3a",
                background: "linear-gradient(90deg, #8fd6ff, #d9f3ff)",
                boxShadow: "0 0 14px rgba(143, 214, 255, 0.35)",
              }}
            >
              Featured Build
            </span>

            <h3
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                color: "#f8fbff",
                textShadow: "0 0 18px rgba(103, 184, 255, 0.32)",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#d6e9ff",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: 720,
              }}
            >
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.45rem 0.8rem",
                  borderRadius: 999,
                  border: "1px solid rgba(143, 214, 255, 0.33)",
                  background: "rgba(7, 21, 44, 0.6)",
                  color: "#cfe8ff",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  letterSpacing: 0.4,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              style={{
                padding: "1.25rem",
                borderRadius: 20,
                background: "rgba(7, 20, 43, 0.46)",
                border: "1px solid rgba(143, 214, 255, 0.18)",
                boxShadow: "inset 0 0 18px rgba(255,255,255,0.03)",
              }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: "#f4fbff" }}>
                Project Overview
              </h4>
              <p
                style={{
                  color: "#d9ebff",
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>
            </div>

            <div
              style={{
                padding: "1.25rem",
                borderRadius: 20,
                background: "rgba(7, 20, 43, 0.46)",
                border: "1px solid rgba(143, 214, 255, 0.18)",
                boxShadow: "inset 0 0 18px rgba(255,255,255,0.03)",
              }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: "#f4fbff" }}>
                Build Snapshot
              </h4>
              <div className="flex flex-col gap-4">
                <ProgressBar
                  label="Project Completion"
                  value={project.metrics.completion}
                />
                <ProgressBar
                  label="Frontend Depth"
                  value={project.metrics.frontend}
                />
                <ProgressBar
                  label="Backend / Logic"
                  value={project.metrics.backend}
                />
                <ProgressBar
                  label="Technical Difficulty"
                  value={project.metrics.difficulty}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "1.25rem",
              borderRadius: 20,
              background: "rgba(7, 20, 43, 0.46)",
              border: "1px solid rgba(143, 214, 255, 0.18)",
            }}
          >
            <h4 className="text-lg font-bold mb-3" style={{ color: "#f4fbff" }}>
              Key Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    padding: "0.9rem 1rem",
                    borderRadius: 16,
                    background: "rgba(41, 87, 160, 0.22)",
                    border: "1px solid rgba(143, 214, 255, 0.14)",
                    color: "#dff2ff",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
            style={{
              width: "100%",
              minHeight: 56,
              borderRadius: 18,
              background: "linear-gradient(90deg, #4477d2 0%, #67b8ff 100%)",
              color: "#fff",
              fontWeight: 900,
              letterSpacing: 0.3,
              textDecoration: "none",
              boxShadow: "0 12px 24px rgba(72, 128, 220, 0.32)",
            }}
          >
            View on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
